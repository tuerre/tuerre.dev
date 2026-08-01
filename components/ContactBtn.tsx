import { cn } from "@/lib/utils";

export default function ContactBtn({
  icon,
  text,
  url,
  className,
}: {
  icon?: React.ReactNode;
  text: string;
  url: string;
  className?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group bg-background hover:bg-accent/50 flex h-full w-full min-w-0 items-center justify-center p-2 transition-all sm:p-3",
        className,
      )}
    >
      <div className="flex w-fit min-w-0 items-center justify-center gap-2 md:w-full md:justify-start">
        <div className="flex w-8 shrink-0 items-center justify-center transition-transform group-hover:scale-110 sm:w-10">
          {icon}
        </div>
        <span className="text-muted-foreground group-hover:text-foreground hidden min-w-0 truncate text-left text-xs font-medium transition-colors sm:text-sm md:inline-block">
          {text}
        </span>
      </div>
    </a>
  );
}
