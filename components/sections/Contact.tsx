import ContactBtn from "@/components/ContactBtn";
import CertificationsModal from "@/components/CertificationsModal";
import Icon from "@/components/icons/Icon";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

const contactItems = [
  { icon: <FaGithub />, text: "Github", url: "https://github.com/tuerre" },
  {
    icon: <FaLinkedin />,
    text: "Linkedin",
    url: "https://linkedin.com/in/tuerre",
  },
  { icon: <FaXTwitter />, text: "X", url: "https://x.com/tuerredev" },
  {
    icon: <FaEnvelope />,
    text: "Correo",
    url: "mailto:tuerredev@gmail.com",
  },
  {
    icon: <GrDocumentText />,
    text: "CV",
    url: "/CV-JendryDeLeonAbreu.pdf",
  },
];

export default function Contact() {
  return (
    <div className="relative w-full px-4 md:px-8">
      <div className="border-border pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="contact-grid grid w-full grid-cols-6">
        {contactItems.slice(0, 3).map((contact, index) => (
          <ContactBtn
            key={index}
            icon={<Icon icon={contact.icon} />}
            text={contact.text}
            url={contact.url}
            className="border-border border-r"
          />
        ))}
        <CertificationsModal className="border-border border-r" />
        {contactItems.slice(3).map((contact, index) => (
          <ContactBtn
            key={index}
            icon={<Icon icon={contact.icon} />}
            text={contact.text}
            url={contact.url}
            className={index !== 1 ? "border-border border-r" : "border-border"}
          />
        ))}
      </div>
    </div>
  );
}
