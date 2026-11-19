import Heading from "@/components/Heading";

interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period?: string;
  summary: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "XpertCode",
    period: "Septiembre 2026 - Actualidad",
    summary:
      "Desarrollo de aplicaciones web modernas con JavaScript y TypeScript, de la interfaz al backend, con APIs y servicios integrados que entregan software rápido, estable y listo para escalar.",
  },
  {
    role: "CEO & Founder",
    company: "Kodaris",
    companyUrl: "https://kodaris.dev",
    period: "Abril 2026 - Actualidad",
    summary:
      "Desarrollo de software a medida: aplicaciones web y móviles, CRMs, bots y soluciones con inteligencia artificial que automatizan procesos y hacen crecer negocios.",
  },
  {
    role: "Full Stack Developer",
    company: "Instituto Técnico Salesiano (ITESA)",
    period: "Agosto 2025 - Febrero 2026",
    summary:
      "Diseñar y desarrollar sistemas institucionales que digitalizaron la orientación y psicología estudiantil, la gestión pastoral, docente y de asistencia, con una mejora estimada del 80% en procesos administrativos manuales.",
  },
];

export default function Experience() {
  return (
    <div className="relative">
      <Heading title="Experiencia" />
      <div className="px-8 py-6 md:px-16">
        <ol className="relative">
          <div className="bg-border absolute top-2 bottom-2 left-[7px] w-px" />
          {experiences.map((exp, idx) => (
            <li
              key={`${exp.company}-${idx}`}
              className={`relative pl-10 ${idx < experiences.length - 1 ? "pb-10" : ""}`}
            >
              <span className="absolute top-1 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-foreground/15 ring-4 ring-foreground/5">
                <span className="h-2 w-2 rounded-full bg-foreground" />
              </span>
              <h2 className="text-foreground text-sm font-semibold tracking-tight md:text-base">
                {exp.role}
              </h2>
              <h3 className="text-muted-foreground text-xs font-medium md:text-sm">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              {exp.period && (
                <p className="text-muted-foreground mt-0.5 text-xs">
                  {exp.period}
                </p>
              )}
              <p className="text-muted-foreground mt-2 max-w-2xl text-xs leading-relaxed">
                {exp.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
