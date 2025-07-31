import BackButton from "../../components/BackButton/BackButton";
import { Welcome } from "../../welcome/welcome";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chasse incident" },
    { name: "description", content: "Bienvenus sur Chasse incident!" },
  ];
}

export default function About() {
  return (
    <>
      <section className="px-4 py-2 bg-secondary-bg text-primary-text">
        <BackButton className="pb-2 bg-secondary-bg text-primary-text" />
        <h2>À propos</h2>
        <p>
          Ce site a pour vocation de répertorier les incidents liés à la chasse
          en France, de manière factuelle et transparente. Chaque événement est
          classé selon sa date, son lieu, sa nature (accident, agression,
          blessé, décès) ainsi que les personnes ou objets concernés
          (promeneurs, chasseurs, animaux, véhicules, habitations, etc.).
        </p>
        <p>
          L'objectif de cette démarche est de sensibiliser l'ensemble des
          citoyens — qu'ils soient chasseurs, non-chasseurs, ou responsables
          publics — à la réalité du terrain. Il ne s'agit pas de stigmatiser une
          pratique, mais de favoriser une cohabitation plus sereine et sécurisée
          entre les usagers de la nature.
        </p>
        <p>
          Nous pensons qu'une meilleure prévention passe par une information
          accessible, une prise de conscience collective et, à terme, une
          évolution des règles encadrant la pratique de la chasse. Cela peut
          inclure des mesures comme un encadrement plus strict de l'alcool, des
          visites médicales régulières, ou encore une responsabilisation
          renforcée des pratiquants.
        </p>
        <p>
          Ce projet n'est pas anti-chasse. Nous reconnaissons le droit à
          chasser, notamment dans une logique alimentaire ou de régulation. Mais
          nous pensons qu'il est essentiel que cette activité se déroule dans
          des conditions qui garantissent la sécurité de toutes et tous.
        </p>
      </section>
    </>
  );
}
