import { useTranslation } from "react-i18next";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className={`bg-[#ed7d9] text-black py-2 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto text-center text-xs md:text-sm">
        <p className="font-body">&copy; {new Date().getFullYear()} {t("footer_text")}</p>
      </div>
    </footer>
  );
}