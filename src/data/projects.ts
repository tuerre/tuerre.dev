export interface Project {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  demoURL?: string;
  languages: string[];
}

export const projects: Project[] = [
  {
    title: "Amanera - Sistema de Gestión de Incidencias para Hoteles",
    titleEn: "Amanera - Hotel Incident Management System",
    description:
      "Desarrollé una plataforma completa para la gestión de incidencias en hoteles, con una app móvil para huéspedes y empleados, y un panel web administrativo. Los huéspedes pueden reportar problemas desde su habitación, los empleados los gestionan en tiempo real, y los administradores supervisan todo desde el panel. El sistema maneja roles, notificaciones y asignación automática de tareas.",
    descriptionEn:
      "I developed a complete platform for hotel incident management, with a mobile app for guests and employees, and a web admin panel. Guests can report issues from their room, employees manage them in real time, and administrators oversee everything from the dashboard. The system handles roles, notifications, and automatic task assignment.",
    url: "https://github.com/tuerre/incidents-app",
    demoURL: "",
    languages: ["React Native", "Expo", "Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "FluxoApp – Gestión Inteligente de Finanzas Personales",
    titleEn: "FluxoApp – Smart Personal Finance Management",
    description:
      "Aplicación web moderna para gestión de gastos personales con enfoque en UX, rendimiento y escalabilidad. Permite registrar gastos, categorías, presupuestos y métodos de pago, visualizar reportes financieros interactivos, comparar periodos y exportar a Excel. Incluye autenticación segura, modo oscuro y multi-moneda.",
    descriptionEn:
      "Modern web application for personal expense management focusing on UX, performance, and scalability. Allows recording expenses, categories, budgets and payment methods, visualizing interactive financial reports, comparing periods, and exporting to Excel. Includes secure authentication, dark mode, and multi-currency support.",
    url: "https://github.com/tuerre/FluxoApp",
    demoURL: "https://fluxomanagement.vercel.app/",
    languages: [
      "Next.js",
      "React",
      "NodeJS",
      "Supabase",
      "PostgreSQL",
      "TailwindCSS",
      "Recharts",
      "TypeScript",
      "Zod",
    ],
  },
  {
    title: "LunarPaws - Gestión de Usuarios y Animales",
    titleEn: "LunarPaws - User and Animal Management",
    description:
      "Desarrollé una aplicación web que permite a los usuarios registrase, iniciar sesión, tener un perfil público personalizado y gestionar animales. La aplicación está construida con Astro y tailwind en el frontend y Node.js con Express en el backend, utilizando SupaBase como base de datos. Implementé autenticación segura y manejo de sesiones con JWT, bycrypt para el hashing de contraseñas, y validación de datos con Zod.",
    descriptionEn:
      "I developed a web application that allows users to register, log in, have a personalized public profile, and manage animals. Built with Astro and Tailwind on the frontend and Node.js with Express on the backend, using Supabase as the database. Implemented secure authentication and session management with JWT, bcrypt for password hashing, and data validation with Zod.",
    url: "https://github.com/tuerre/gestion-animales",
    demoURL: "",
    languages: ["NodeJS", "Express", "Supabase", "Astro", "React", "Tailwind"],
  },
  {
    title: "Grupo Leones Web",
    titleEn: "Grupo Leones Website",
    description:
      "Proyecto web para la empresa Grupo Leones que presenta sus distintas filiales y opciones de contacto. Incluye un panel administrativo para el envío de correos personalizados a usuarios registrados, automatización de correos y generación de reportes en PDF.",
    descriptionEn:
      "Web project for Grupo Leones showcasing its various subsidiaries and contact options. Includes an admin panel for sending personalized emails to registered users, email automation, and PDF report generation.",
    url: "https://github.com/Ronny-Abreu/GrupoLeones-web",
    demoURL: "https://grupoleones.vercel.app/",
    languages: ["NodeJS", "TypeScript", "JavaScript", "Astro", "Tailwind", "Firebase"],
  },
  {
    title: "Focus Mode Extension",
    titleEn: "Focus Mode Extension",
    description:
      "Extensión para Google Chrome que permite al usuario bloquear ciertos sitios web durante un período de tiempo definido. Permite gestionar los sitios bloqueados, bloquearlos durante un tiempo específico y personalizar el modo AFK. Disponible en modo DEV.",
    descriptionEn:
      "Google Chrome extension that allows users to block certain websites for a defined period of time. Allows managing blocked sites, blocking them for a specific duration, and customizing AFK mode. Available in DEV mode.",
    url: "https://github.com/tuerre/focus-mode-extension",
    languages: ["HTML5", "CSS3", "Vanilla JavaScript", "Chrome"],
  },
];
