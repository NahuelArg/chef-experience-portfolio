interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-[#ed7d9] text-black py-2 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto text-center text-xs md:text-sm">
        <p className="font-body">&copy; {new Date().getFullYear()} Mi Marca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}