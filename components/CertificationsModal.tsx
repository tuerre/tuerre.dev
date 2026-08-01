"use client";

import { useEffect, useState } from "react";
import { Award, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Icon from "@/components/icons/Icon";
import {
  Dialog,
  DialogClose,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

const certifications: Certification[] = [
  {
    title: "Ganador competencia Code4Change",
    issuer: "TheCodingSpace",
    date: "Marzo 2026",
    url: "https://drive.google.com/file/d/1jojNpEYz_FbhPJqD4F0j7uIO7fioIcbV/view?usp=sharing",
  },
  {
    title: "Desarrollo Web Full Stack Avanzado",
    issuer: "Banco Interamericano de Desarrollo e INDOTEL",
    date: "Junio 2026",
    url: "https://drive.google.com/file/d/1DKZcTydTvVR02YWeutF_wHr2yirSMRz3/view?usp=sharing",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Marzo 2026",
    url: "https://verify.skilljar.com/c/xw4xm7p6ubjd",
  },
];

export default function CertificationsModal({
  className,
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCopyShortcut =
        (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c";
      if (!isCopyShortcut) return;

      const hasSelection = (window.getSelection()?.toString().length ?? 0) > 0;
      if (hasSelection) return;

      e.preventDefault();
      setOpen((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          "group bg-background hover:bg-accent/50 flex h-full w-full min-w-0 cursor-pointer items-center justify-center p-2 transition-all sm:p-3",
          className,
        )}
      >
        <div className="flex w-fit min-w-0 items-center justify-center gap-2 md:w-full md:justify-start">
          <div className="flex w-8 shrink-0 items-center justify-center transition-transform group-hover:scale-110 sm:w-10">
            <Icon icon={<Award size={16} />} />
          </div>
          <span className="text-muted-foreground group-hover:text-foreground hidden min-w-0 truncate text-left text-xs font-medium transition-colors sm:text-sm md:inline-block">
            Certificaciones
          </span>
        </div>
      </DialogTrigger>

      {open && (
        <DialogPopup>
          <div className="flex items-center justify-between border-b px-5 py-4">
            <DialogTitle>Certificaciones</DialogTitle>
            <DialogClose className="hover:bg-muted flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-colors">
              <X size={16} />
            </DialogClose>
          </div>

          <div className="flex flex-col gap-3 p-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-background flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {cert.title}
                  </p>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-muted-foreground rounded-md border px-2 py-1 font-mono text-[11px]">
                    {cert.date}
                  </span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-semibold whitespace-nowrap hover:underline"
                  >
                    Ver el certificado
                  </a>
                </div>
              </div>
            ))}
          </div>
        </DialogPopup>
      )}
    </Dialog>
  );
}
