"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Theme) ?? "system";
  } catch {
    return "system";
  }
}

function resolve(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(theme: Theme) {
  const resolved = resolve(theme);
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}

/**
 * Persist + apply a theme and notify every island's `useTheme` hook.
 * Idempotent: safe to call after another piece of code already toggled the
 * `.dark` class (e.g. the AnimatedThemeToggler's View Transition).
 */
export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore write failures (private mode, etc.)
  }
  applyTheme(theme);
  window.dispatchEvent(new CustomEvent("themechange"));
}

/**
 * Drop-in replacement for next-themes' `useTheme`, sized to what this project
 * uses: `{ theme, resolvedTheme, setTheme }`. Works across independent Astro
 * islands because it syncs off the DOM `.dark` class + a custom event rather
 * than React context.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const sync = () => {
      setThemeState(getStoredTheme());
      setResolvedTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    };

    sync();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("themechange", sync);
    window.addEventListener("storage", sync);
    mq.addEventListener("change", sync);

    return () => {
      window.removeEventListener("themechange", sync);
      window.removeEventListener("storage", sync);
      mq.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  const set = useCallback((next: Theme) => setTheme(next), []);

  return { theme, resolvedTheme, setTheme: set };
}
