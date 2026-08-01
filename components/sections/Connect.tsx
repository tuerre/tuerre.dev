import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ConnectBtn from "@/components/ConnectBtn";
import Heading from "@/components/Heading";

const connectHandle = [
  {
    icon: <FaXTwitter />,
    title: "Twitter",
    href: "https://x.com/tuerredev",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/tuerre",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    href: "mailto:tuerredev@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    href: "https://linkedin.com/in/tuerre",
  },
];

export default function Connect() {
  return (
    <>
      <Heading title="Trabaja Conmigo" />
      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl p-4 text-center md:p-8">
          <h2 className="font-heading mb-1 text-2xl font-medium tracking-wide md:text-3xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            No dudes en contactarme a través de cualquiera de estas plataformas
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-2 sm:flex-wrap sm:gap-3">
            {connectHandle.map((handle, idx) => (
              <ConnectBtn
                key={idx}
                title={handle.title}
                icon={handle.icon}
                href={handle.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
