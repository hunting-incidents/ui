import { Suspense } from "react";
import { ClientOnly } from "../ClientOnly";
import { LazyMap } from "./LazyMap";

interface MapProps {
  className?: string;
}

function MapFallback({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}
    >
      <div className="text-gray-500 dark:text-gray-400">
        Chargement de la carte...
      </div>
    </div>
  );
}

export function Map({ className = "" }: MapProps) {
  return (
    <ClientOnly fallback={<MapFallback className={className} />}>
      <Suspense fallback={<MapFallback className={className} />}>
        <LazyMap className={className} />
      </Suspense>
    </ClientOnly>
  );
}
