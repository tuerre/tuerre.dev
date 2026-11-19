import Heading from "@/components/Heading";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  period?: string;
  location?: string;
  summary: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "XpertCode",
    type: "Medio tiempo",
    period: "Sep 2026 - Actualidad",
    location: "Santo Domingo, República Dominicana · Presencial",
    summary:
      "Desarrollo y mantengo aplicaciones web modernas con JavaScript y TypeScript, construyendo funcionalidades de frontend y backend, e integrando APIs y servicios. Trabajo en equipo con control de versiones, resolviendo problemas y mejorando el rendimiento y la fiabilidad de las aplicaciones.",
  },
  {
    role: "CEO & Founder",
    company: "Kodaris",
    companyUrl: "https://kodaris.dev",
    type: "Agencia propia",
    summary:
      "Mi propia agencia de desarrollo de software. Diseñamos y construimos aplicaciones web y móviles, CRMs, bots y otras soluciones modernas a medida para negocios que quieren digitalizarse y automatizar sus procesos.",
  },
  {
    role: "Full Stack Developer",
    company: "Instituto Técnico Salesiano (ITESA)",
    type: "Freelance",
    period: "Ago 2025 - Feb 2026",
    location: "Distrito Nacional, República Dominicana · Híbrido",
    summary:
      "Diseñé, desarrollé e implementé software interno para modernizar la operación de mi institución académica, logrando una mejora estimada del 80% en procesos administrativos manuales. Construí sistemas de orientación y psicología estudiantil, gestión pastoral, gestión docente, control de asistencia y organización salesiana.",
  },
];

export default function Experience() {
  const total = experiences.length;
  return (
    <div className="relative">
      <Heading title="Experiencia" />
      <div className="flex w-full flex-col">
        {experiences.map((exp, idx) => (
          <div
            key={`${exp.company}-${idx}`}
            className={cn(
              "flex flex-col gap-2 px-8 py-6 md:px-16 md:py-8",
              idx < total - 1 && "border-b",
            )}
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h2 className="text-foreground text-base font-medium tracking-tight">
                {exp.role} ·{" "}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span>{exp.company}</span>
                )}
              </h2>
              {exp.period && (
                <span className="text-muted-foreground font-mono text-[11px]">
                  {exp.period}
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-xs">
              {exp.type}
              {exp.location ? ` · ${exp.location}` : ""}
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
