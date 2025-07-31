import { Map } from "../../components/Map";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chasse incident" },
    { name: "description", content: "Bienvenus sur Chasse incident!" },
  ];
}

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Map className="w-full h-full" />
    </main>
  );
}
