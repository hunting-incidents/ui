import { useState } from "react";
import type { IncidentFilter } from "../../api/dto/incidents";
import { Map } from "../../components/Map";
import type { Route } from "./+types/route";
import SearchBar from "./components/SearchBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chasse incident" },
    { name: "description", content: "Bienvenus sur Chasse incident!" },
  ];
}

export default function Home() {
  const [filters, setFilters] = useState<IncidentFilter>({});

  return (
    <main className="h-full w-full relative">
      <Map className="w-full h-full" />
      <SearchBar
        className="absolute z-[400] bottom-5 left-5 right-5"
        filters={filters}
      />
    </main>
  );
}
