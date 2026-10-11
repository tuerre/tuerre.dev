import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import HeadingButton from "@/components/HeadingButton";

const projectsList: ProjectCardProps[] = [
  {
    title: "Amanera",
    description:
      "Plataforma completa para la gestión de incidencias en hoteles. Los huéspedes reportan problemas desde su habitación, los empleados los gestionan en tiempo real, y los administradores supervisan todo desde el panel.",
    image: "/amanera.webp",
    tags: ["React Native", "Expo", "Next.js", "Tailwind CSS", "PostgreSQL"],
    githubLink: "https://github.com/tuerre/incidents-app",
    isLive: false,
  },
  {
    title: "Taipeando",
    description:
      "Taipeando es una herramienta de refinamiento de texto con IA que mejora la gramática del texto, refina el tono, el tipo y la longitud.",
    image: "/taipeando.webp",
    tags: ["Groq", "React", "Next.js", "Llama", "TypeScript", "Tailwind CSS"],
    liveLink: "https://taipeando.vercel.app",
    githubLink: "https://github.com/tuerre/taipeando",
    isLive: true,
  },
  {
    title: "FluxoApp",
    description:
      "Aplicación web moderna para gestión de gastos personales. Permite registrar gastos, categorías, presupuestos y métodos de pago, visualizar reportes financieros interactivos, comparar periodos y exportar a Excel.",
    image: "/fluxo.webp",
    tags: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveLink: "https://fluxomanagement.vercel.app",
    githubLink: "https://github.com/tuerre/FluxoApp",
    isLive: true,
  },
  {
    title: "Focus Mode Extension",
    description:
      "Extensión para Google Chrome que permite bloquear sitios web durante un período de tiempo definido. Permite gestionar los sitios bloqueados, bloquearlos durante un tiempo específico y personalizar el modo AFK.",
    image: "/focusmode.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "Chrome Extension"],
    githubLink: "https://github.com/tuerre/focus-mode-extension",
    isLive: false,
    isBuilding: true,
  },
  {
    title: "LunarPaws",
    description:
      "Aplicación web que permite a los usuarios registrarse, iniciar sesión, tener un perfil público personalizado y gestionar animales.",
    image: "/lunarpaws.webp",
    tags: ["Node.js", "Express", "Supabase", "Astro", "React", "Tailwind CSS"],
    githubLink: "https://github.com/tuerre/gestion-animales",
    isLive: false,
  },
];

const MAX_HOME_PROJECTS = 4;

export default function Projects() {
  const displayedProjects = projectsList.slice(0, MAX_HOME_PROJECTS);
  const total = displayedProjects.length;
  return (
    <div className="relative">
      <Heading title="Proyectos" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {displayedProjects.map((project, idx) => (
          <div
            key={idx}
            className={cn(
              "px-8 py-6 md:px-16 md:py-8",
              idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
              idx === total - 1 ? "border-b-0" : "border-b",
              idx < 2 ? "md:border-b" : "md:border-b-0",
              idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
            )}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <HeadingButton title={"Ver Todos los Proyectos"} href={"/projects"} />
    </div>
  );
}
