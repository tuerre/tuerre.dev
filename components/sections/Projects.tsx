import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import HeadingButton from "@/components/HeadingButton";

const projectsList: ProjectCardProps[] = [
  {
    title: "Amanera — Gestión de Incidencias para Hoteles",
    description:
      "Plataforma completa para la gestión de incidencias en hoteles, con una app móvil para huéspedes y empleados, y un panel web administrativo. Los huéspedes reportan problemas desde su habitación, los empleados los gestionan en tiempo real, y los administradores supervisan todo desde el panel.",
    image: "/amanera.webp",
    tags: ["React Native", "Expo", "Next.js", "Tailwind CSS", "PostgreSQL"],
    githubLink: "https://github.com/tuerre/incidents-app",
    isLive: false,
  },
  {
    title: "FluxoApp",
    description:
      "Aplicación web moderna para gestión de gastos personales con enfoque en UX, rendimiento y escalabilidad. Permite registrar gastos, categorías, presupuestos y métodos de pago, visualizar reportes financieros interactivos, comparar periodos y exportar a Excel.",
    image: "/fluxo.webp",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveLink: "https://fluxomanagement.vercel.app/",
    githubLink: "https://github.com/tuerre/FluxoApp",
    isLive: true,
  },
  {
    title: "LunarPaws — Gestión de Usuarios y Animales",
    description:
      "Aplicación web que permite a los usuarios registrarse, iniciar sesión, tener un perfil público personalizado y gestionar animales. Construida con Astro y Tailwind en el frontend y Node.js con Express en el backend, utilizando Supabase como base de datos y autenticación segura con JWT.",
    image: "/lunarpaws.webp",
    tags: ["Node.js", "Express", "Supabase", "Astro", "React", "Tailwind CSS"],
    githubLink: "https://github.com/tuerre/gestion-animales",
    isLive: false,
  },
  {
    title: "Focus Mode Extension",
    description:
      "Extensión para Google Chrome que permite bloquear ciertos sitios web durante un período de tiempo definido. Permite gestionar los sitios bloqueados, bloquearlos durante un tiempo específico y personalizar el modo AFK. Disponible en modo DEV.",
    image: "/focusmode.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "Chrome Extension"],
    githubLink: "https://github.com/tuerre/focus-mode-extension",
    isLive: false,
    isBuilding: true,
  },
];

export default function Projects() {
  const total = projectsList.length;
  return (
    <div className="relative">
      <Heading title="Proyectos" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projectsList.map((project, idx) => (
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
