
import dayjs from "dayjs"

import { useReduxState } from "@/redux"

import { ProjectItem } from "./ProjectItem"

// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
export function Projects(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className="w-full pt-8 pb-8 shrink-0 h-max center col bg-primary-500">
      <Fade top={true}>
        <h2 className="mb-10 font-sans font-normal text-center text-white">{say.previousProjects}</h2>
      </Fade>
      <div className="w-full max-w-screen-md p-3 col not-last-children:mb-3">
        <ProjectItem
          businessName="Resolve Me"
          businessDescription={say.multiFunctionCalculator}
          location="Montreal, Canada"
          fromDate={dayjs("may-2019", "MMM-YYYY").toISOString()}
          jobPosition={say.businessOwnerAndDeveloper}
          fileCount={1342}
          lineOfCodeCount={113130}
          toolList={["Typescript", "React", "Redux", "React-router", "Electron", "NodeJs", "MongoDb", "Express", "Styled Components", "NightWatch", "Cucumber Tests", "MathJs"]}
          website="https://resolveme.io"
          imageList={["resolveme1", "resolveme2", "resolveme3", "resolveme4", "resolveme5",]}
          enList={[
            "Develop a performant calculator at the cutting edge of technology",
            "Maximize design to be user-friendly and responsive",
            "Make the app available on iphone, android, mac and windows",
            "Features: Elementary calculator, scientific, graphical, algebric, programmer, conversions, etc",
            "Offer a premium version with synced notes and history",
            "Ingest advertising for the free mode",
            "Encrypt all data communicated between server and client in premium mode",
          ]}
          frList={[
            "Développer une calculatrice performante à la pointe de la technologie",
            "Optimiser la conception pour qu'elle soit conviviale et réactive.",
            "Rendre l'application disponible sur iphone, android, mac et windows.",
            "Caractéristiques : Calculatrice élémentaire, scientifique, graphique, algébrique, programmeur, conversions, etc.",
            "Proposer une version premium avec notes et historique synchronisés",
            "Intégrer de la publicité pour le mode gratuit",
            "Cryptage de toutes les données communiquées entre le serveur et le client en mode premium",
          ]}
        />
        <ProjectItem
          businessName="Soins intermediaires"
          businessDescription={say.healthCare}
          location="Montreal, Canada"
          fromDate={dayjs("feb-2022", "MMM-YYYY").toISOString()}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={1178}
          lineOfCodeCount={162555}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "Cordova", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components"]}
          website="https://soinsintermediaires.herokuapp.com"
          imageList={["soins5", "soins1", "soins2", "soins3", "soins4"]}
          enList={[
            "Redo a 20 year old business management app from scratch",
            "manage complex permissions between different roles like:",
            "candidate, employee, office, non-office, rh, placement, schedule manager, accounting and admin Create a plaform alone that will be used by more than 3000 employees and candidates",
            "Design all the logistics needed to run HR, placement, scheduling and accounting",
            "Design a simple, powerful and responsive interface for all users",
            "Manage a large number of data types through the application",
            "Implement high performance file management",
            "Optimize efficient and effective server-client communication",
          ]}
          frList={[
            "Refaire une application de gestion d'entreprise vieille de 20 ans en partant de zéro",
            "gérer des permissions complexes entre différents rôles comme :",
            "candidat, employé, bureau, non-bureau, RH, placement, gestionnaire de planning, comptabilité et administration Créer un formulaire qui sera utilisé par plus de 3000 employés et candidats",
            "Concevoir toute la logistique nécessaire pour gérer les RH, les placements, les plannings et la comptabilité",
            "Concevoir une interface simple, puissante et réactive pour tous les utilisateurs",
            "Gérer un grand nombre de types de données à travers l'application",
            "Mettre en place une gestion des fichiers performante",
            "Optimiser une communication serveur-client efficace et efficiente",
          ]}
        />
        <ProjectItem
          businessName="GoCook"
          businessDescription={say.cateringService}
          location="Montreal, Canada"
          fromDate={dayjs("dec-2021", "MMM-YYYY").toISOString()}
          toDate={dayjs("mar-2022", "MMM-YYYY").toISOString()}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={1241}
          lineOfCodeCount={52591}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "Cordova", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components", "Stripe", "Paypal"]}
          website="https://gocook.ca"
          imageList={["gocook1", "gocook2", "gocook3"]}
          enList={[
            "Allow any user to become a cook and sell his own meals",
            "Filter cook selection with a detailed profile form",
            "Inform customer, admin and cook about the lifecycle of a purchase and delivery",
            "Facilitate easy communication between the cook, customer or with support team with app messaging",
            "Access a lot of filters to search exactly what kind of meal you want",
            "Make the customer and cooks feeling safe with securing payments via Stripe and Paypal",
            "Features: create/edit a cook, create/edit meal, search cooks and filters, messaging, login, user settings, create a purchase , cook details, product details etc",
          ]}
          frList={[
            "Permettez à tout utilisateur de devenir cuisinier et de vendre ses propres repas.",
            "Filtrer la sélection des cuisiniers grâce à un formulaire de profil détaillé",
            "Informer le client, l'administrateur et le cuisinier sur le cycle de vie d'un achat et d'une livraison.",
            "Facilitez la communication entre le cuisinier, le client ou l'équipe d'assistance grâce à la messagerie de l'application.",
            "Accédez à de nombreux filtres pour rechercher exactement le type de repas que vous souhaitez.",
            "Sécurisez le client et le cuisinier en sécurisant les paiements via Stripe et Paypal.",
            "Caractéristiques : créer/modifier un cuisinier, créer/modifier un repas, rechercher des cuisiniers et des filtres, messagerie, connexion, paramètres utilisateur, créer un achat, détails du cuisinier, détails du produit, etc.",
          ]}
        />
        <ProjectItem
          businessName="Avarta Solutions"
          businessDescription={say.carBrokerage}
          location="Montreal, Canada"
          fromDate={dayjs("jan-2022", "MMM-YYYY").toISOString()}
          toDate={dayjs("feb-2022", "MMM-YYYY").toISOString()}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={685}
          lineOfCodeCount={24461}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components"]}
          website="https://www.avartasolutions.com"
          imageList={["avarta5", "avarta4", "avarta3", "avarta2", "avarta1"]}
          enList={[
            "Make a stunning website designed in dark mode to atract customers",
            "Conceive forms that helps costumers to describe exaclty what kind of vehicle they want",
            "Allow customers to find the perfect car they want with many filters that are perfectly designed",
            "Release the product in only 1 month to benefit the needs of the business owner",
          ]}
          frList={[
            "Réaliser un site web attractif conçu en mode sombre pour attirer les clients.",
            "Concevoir des formulaires qui aident les clients à décrire exactement le type de véhicule qu'ils souhaitent.",
            "Permettre aux clients de trouver la voiture parfaite qu'ils souhaitent grâce à de nombreux filtres parfaitement conçus.",
            "Publier le produit en un mois seulement pour répondre aux besoins du propriétaire de l'entreprise.",
          ]}
        />

        <ProjectItem
          businessName="Clinistat"
          businessDescription={say.healthCareStartup}
          location="Montreal, Canada"
          fromDate={dayjs("feb-2021", "MMM-YYYY").toISOString()}
          toDate={dayjs("apr-2021", "MMM-YYYY").toISOString()}
          jobPosition={say.fullstackFreelanceDeveloper}
          fileCount={423}
          lineOfCodeCount={21667}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components"]}
          website="https://www.avartasolutions.com"
          imageList={["clinistat1", "clinistat2", "clinistat3", "clinistat4"]}
          enList={[
            "Design all the application",
            "Develop a user-friendly and efficient user interface",
            "Develop a server rest API with a mongodb database",
            "Automate email management",
            "Make apowerful and efficient offer search algorithm",
            "Design and develop the product in 2 months from A to Z",
          ]}
          frList={[
            "Concevoir l'ensemble de l'application",
            "Développer une interface utilisateur conviviale et efficace",
            "Développer un serveur rest API avec une base de données mongodb",
            "Automatiser la gestion des emails",
            "Créer un algorithme de recherche d'offres puissant et efficace.",
            "Concevoir et développer le produit en 2 mois de A à Z",
          ]}
        />

        <ProjectItem
          businessName="GoTool"
          businessDescription={say.toolRental}
          location="Montreal, Canada"
          fromDate={dayjs("may-2021", "MMM-YYYY").toISOString()}
          toDate={dayjs("jul-2022", "MMM-YYYY").toISOString()}
          jobPosition={say.seniorFullstackFreelanceDeveloper}
          fileCount={1158}
          lineOfCodeCount={48849}
          toolList={["Typescript", "React", "Redux", "TailwindCss", "React-router", "NodeJs", "MongoDb", "Express", "Styled Components", "Stripe", "Paypal"]}
          website="https://gotool.ca"
          imageList={["gorent1", "gorent2", "gorent3", "gorent4", "gorent5",]}
          enList={[
            "Design a web and mobile application for renting tools inspired by Airbnb",
            "Develop from scratch all the code of the application alone",
            "Manage secure payments for renters and lessees with Stripe and Paypal",
            "Automate emails for every feature cycles",
            "Features: create/edit a tool, search tools and filters, messaging, login, user settings, create a reservation, Checkin chekout, tool details etc",
          ]}
          frList={[
            "Concevoir une application web et mobile d'outils de location inspirée d'Airbnb.",
            "Développer de zéro tout le code de l'application seul",
            "Gérer les paiements sécurisés pour les loueurs et les locataires avec Stripe et Paypal",
            "Automatiser les emails pour chaque cycle de fonctionnalité",
            "Fonctionnalités : créer/modifier un outil, outils de recherche et filtres, messagerie, connexion, paramètres utilisateur, créer une réservation, Checkin chekout, détails de l'outil, etc.",
          ]}
        />
      </div>
    </div>
  )
}

