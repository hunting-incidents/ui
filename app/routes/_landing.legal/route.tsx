import BackButton from "../../components/BackButton/BackButton";
import { Welcome } from "../../welcome/welcome";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chasse incident" },
    { name: "description", content: "Bienvenus sur Chasse incident!" },
  ];
}

export default function Home() {
  return (
    <>
      <section className="px-4 py-2 bg-secondary-bg text-primary-text">
        <BackButton className="pb-2 bg-secondary-bg text-primary-text" />
        <h2>Mentions légales</h2>
        <h3 className="mt-2">Éditeur du site</h3>
        Nom : VargTech
        <br />
        Forme juridique : EURL
        <br />
        Adresse : 13 rue de Pendille, 44720 Saint-Joachim, France
        <br />
        Responsable de la publication : Michael Derrien
        <br />
        SIRET : 953 268 174 00018
        <br />
        Email : michael.derrien@proton.me
        <br />
        <h3 className="mt-2">Hébergement</h3>
        Le site est hébergé par :<br />
        Infomaniak Network SA
        <br />
        Rue Eugène Marziano 25
        <br />
        1227 Les Acacias (GE), Suisse
        <br />
        Site web : https://www.infomaniak.com
        <br />
        <h3 className="mt-2">Propriété intellectuelle</h3>
        L'ensemble des contenus présents sur ce site (textes, données, mise en
        page, etc.) sont la propriété exclusive de leur auteur, sauf indication
        contraire. Toute reproduction totale ou partielle sans autorisation est
        interdite.
        <h3 className="mt-2">Objet du site</h3>
        Ce site a pour but de recenser de manière factuelle les incidents liés à
        la chasse en France, à des fins d'information et de sensibilisation. Il
        ne poursuit aucun but commercial.
        <h3 className="mt-2">Collecte de données personnelles</h3>
        {/* FIXME: uniquement le mail et nom d'utilisateur actuellement ? */}
        Lors de l'inscription, seules les données suivantes sont collectées :
        email, pseudo et mot de passe. Ces données sont utilisées uniquement
        pour permettre l'accès sécurisé au site et ne sont ni revendues, ni
        utilisées à des fins commerciales. Conformément au RGPD, vous pouvez
        demander l'accès, la modification ou la suppression de vos données à
        l'adresse suivante : michael.derrien@proton.me
        <h3 className="mt-2">Cookies</h3>
        Ce site utilise uniquement des cookies d'authentification nécessaires au
        bon fonctionnement du service. Aucun cookie de suivi ou d'analyse n'est
        utilisé.
      </section>
    </>
  );
}
