export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="text-muted-foreground relative flex w-full flex-col items-center justify-center pt-20 pb-0 text-center text-sm">
      <div className="mb-20">
        <p className="mb-2">
          Diseñado y Desarrollado por{" "}
          <span className="text-foreground font-medium">Jendry</span>
        </p>
        <p>&copy; {currentYear} Casi todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
