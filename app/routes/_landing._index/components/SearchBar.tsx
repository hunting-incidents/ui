import clsx from "clsx";
import { Form } from "react-router";
import type { IncidentFilter } from "../../../api/dto/incidents";

export default function SearchBar({
  className,
  filters,
}: {
  className?: string;
  filters: IncidentFilter;
}) {
  return (
    <div
      className={clsx(
        `bg-te-papa-green-900 rounded-4xl flex flex-row px-2 py-1.5 gap-2`,
        className
      )}
    >
      {/* Filtering area */}
      <Form method="get" className="flex flex-row gap-2 w-full  ">
        <input
          name="search"
          className="bg-neutral-200 rounded-4xl text-black px-2 py-1 grow"
          type="text"
          placeholder="Rechercher un événement..."
        />
        <button className="svg-btn-secondary" type="button">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.375 2.55917C0.525 2.75958 8.985 13.8596 8.985 13.8596V23.125C8.985 23.9729 9.66 24.6667 10.5 24.6667H13.515C14.34 24.6667 15.03 23.9729 15.03 23.125V13.8442C15.03 13.8442 23.265 3.02167 23.655 2.52833C24.045 2.035 24 1.54167 24 1.54167C24 0.69375 23.325 0 22.485 0H1.515C0.6 0 0 0.74 0 1.54167C0 1.85 0.09 2.22 0.375 2.55917Z" />
          </svg>
        </button>
      </Form>

      {/* Auth area */}
      <button type="button" className="svg-btn-secondary shrink">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38">
          <circle cx="19" cy="19" r="17" stroke-width="4" fill="none" />
          <g opacity="1">
            <circle cx="19" cy="15" r="5" stroke-width="4" fill="none" />
            <path
              fill-rule="evenodd"
              d="m 6.75 27.88 c 0.723 1.185 1.283 1.779 2.498 2.735 a 6.62 6.62 90 0 1 5.332 -3.027 c 1.594 0.498 3.11 0.736 4.635 0.736 s 3.042 -0.245 4.635 -0.736 a 6.6 6.6 90 0 1 5.332 3.026 c 1.165 -1.053 1.689 -1.653 2.498 -2.735 c -1.877 -2.405 -4.765 -3.976 -8.052 -3.976 c -0.284 0 -0.624 0.097 -1.059 0.22 c -0.763 0.217 -1.816 0.516 -3.354 0.516 c -1.544 0 -2.595 -0.3 -3.357 -0.516 c -0.433 -0.123 -0.773 -0.22 -1.056 -0.22 c -3.294 0 -6.183 1.57 -8.052 3.977 Z"
              clip-rule="evenodd"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
