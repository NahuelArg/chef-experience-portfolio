interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`text-black bg-[#ede7d9] py-2 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto text-center text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} Mi Marca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}