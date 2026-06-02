export interface Certification {
  title: string;
  titleEn: string;
  issuer: string;
  date: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    title: "Ganador competencia Code4Change",
    titleEn: "Winner of the Code4Change competition",
    issuer: "TheCodingSpace",
    date: "2026",
    url: "/c4c.webp",
  },
  {
    title: "Desarrollo Web Full Stack Avanzado",
    titleEn: "Advanced Full Stack Web Development",
    issuer: "Banco Interamericano de Desarrollo E INDOTEL",
    date: "2026",
    url: "/BID-CERTIFICATE.pdf",
  },
  {
    title: "Claude 101",
    titleEn: "Claude 101",
    issuer: "Anthropic",
    date: "March 2026",
    url: "https://verify.skilljar.com/c/xw4xm7p6ubjd",
  },
];
