import type { Route } from "./+types/home";
import { Link, Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chasse incident" },
    { name: "description", content: "Bienvenus sur Chasse incident!" },
  ];
}

export default function Layout() {
  return (
    <div className="h-full flex flex-col">
      <header>
        <Link
          to="/"
          className="flex items-center justify-between p-2 bg-header-bg"
        >
          <img src="/Rabbit.svg" alt="Rabbit" className="h-12 w-12" />
          <div className="relative flex-grow flex justify-center">
            <h1 className="text-4xl z-10 text-neutral-100 text-shadow-black text-shadow-lg h-full">
              Chasse incidents
            </h1>
            <img
              src="/Gun.svg"
              alt="Gun"
              className="h-12 w-auto absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
            />
          </div>
        </Link>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="flex items-center gap-3 px-1 py-1 justify-end bg-footer-bg text-sm">
        <Link
          to="/about"
          className="text-neutral-100 hover:text-neutral-300 transition-colors"
        >
          A propos
        </Link>

        <Link
          to="/legal"
          className="text-neutral-100 hover:text-neutral-300 transition-colors"
        >
          Mentions légales
        </Link>
      </footer>
    </div>
  );
}
