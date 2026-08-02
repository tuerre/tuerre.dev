import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaChrome,
  FaCss3Alt,
  FaReact,
  FaHtml5,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiExpress,
  SiOllama,
  SiMongodb,
  SiCloudinary,
  SiC,
  SiCplusplus,
  SiVite,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiPostman,
  SiSocketdotio,
  SiReact,
  SiNodedotjs,
  SiTurborepo,
  SiExpo,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { TbWorld, TbApi } from "react-icons/tb";

const getTagIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "react.js":
      return <SiReact size={14} />;
    case "typescript":
      return <SiTypescript size={14} />;
    case "express.js":
      return <SiExpress size={14} />;
    case "node.js":
      return <SiNodedotjs size={14} />;
    case "mongodb":
      return <SiMongodb size={14} />;
    case "next.js":
      return <SiNextdotjs size={14} />;
    case "websockets":
      return <SiSocketdotio size={14} />;
    case "turborepo":
      return <SiTurborepo size={14} />;
    case "groq api":
      return <TbApi size={14} />;
    case "vercel":
      return <SiVercel size={14} />;
    case "tailwind css":
      return <SiTailwindcss />;
    case "expo":
      return <SiExpo size={14} />;
    case "react native":
      return <TbBrandReactNative size={14} />;
    case "postgresql":
      return <BiLogoPostgresql size={14} />;
    case "html5":
      return <FaHtml5 size={14} />;
    case "css3":
      return <FaCss3Alt size={14} />;
    case "javascript":
      return <SiJavascript size={14} />;
    case "shadcn/ui":
      return <SiShadcnui size={14} />;
    case "supabase":
      return <SiSupabase size={14} />;
    case "postman":
      return <SiPostman size={14} />;
    case "cloudinary":
      return <SiCloudinary size={14} />;
    case "c":
      return <SiC size={14} />;
    case "c++":
      return <SiCplusplus size={14} />;
    case "vite":
      return <SiVite size={14} />;
    case "sql":
      return <TbSql size={14} />;
    case "github":
      return <FaGithub size={14} />;
    case "figma":
      return <FaFigma size={14} />;
    case "chrome extension":
      return <FaChrome size={14} />;
    case "react":
      return <FaReact size={14} />;
    case "llama":
      return <SiOllama size={14} />;
    default:
      return (
        <span className="font-mono text-[10px] font-bold">
          {tag.substring(0, 2)}
        </span>
      );
  }
};

export default function TagIcon({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) {
  return (
    <div
      title={title}
      className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-7 cursor-default items-center justify-center rounded-md border transition-colors"
    >
      {getTagIcon(tag)}
    </div>
  );
}
