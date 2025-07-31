import { Link } from "react-router";
import icon from "./icon.svg";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 hover:bg-secondary-bg ${className}`}
    >
      <img src={icon} alt="Back" />
      <span>Accueil</span>
    </Link>
  );
}
