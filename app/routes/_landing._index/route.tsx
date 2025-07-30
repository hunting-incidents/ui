import { Welcome } from "../../welcome/welcome";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chasse incident" },
    { name: "description", content: "Bienvenus sur Chasse incident!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
