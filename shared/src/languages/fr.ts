/* eslint-disable no-template-curly-in-string */
import "dayjs/locale/fr"

import {
  html
} from "../functions"
import {
  Say
} from "./model"

export const fr: Say = {
  "today": "Aujourd'hui",
  "ok": "Ok",
  "home": "Accueil",
  "email": "Email",
  "emailPlaceholder": "example@email.com",
  "password": "Mot de passe",
  "login": "Connexion",
  "loginHeader": "Connectez-vous à HalalSearch",
  "forgotPassword": "Mot de passe oublié?",
  "userAlreadyLogged": "L'utilisateur est déjà connecté",
  "userDoesntExists": "L'utilisateur n'existe pas",
  "wrongPassword": "Mot de passe incorrect",
  "userAlreadyExists": "L'utilisateur existe déjà",
  "accessDenied": "Accès refusé",
  "send": "Envoyer",
  "forgotPasswordHeader": "Entrez votre email pour recevoir un mot de passe temporaire.",
  "passwordSent": "Mot de passe envoyé par email!",
  "en": "Anglais",
  "fr": "Français",
  "privacyPolicy": "Politique de confidentialités",
  "termsAndConditions": "termes & conditions",
  "bugReport": "Rapport de bug",
  "mission": "Mission",
  "contact": "Contact",
  "emails": "Courriels",
  "phone": "Téléphone",
  "copy": "Copier",
  "draft": "Brouillon",
  "public": "Public",
  "private": "Privé",
  "edit": "Modifier",
  "yes": "Oui",
  "no": "Non",
  "pressButton5Times": "Appuyer sur le bouton 5 fois",
  "firstName": "Prénom",
  "lastName": "Nom",
  "download": "Télécharger",
  "cancel": "Annuler",
  "applyPolicies": "\n  En navigant sur halalsearch.ca, j'accepte les\n  <a href='https://halalsearch.ca/terms'>Termes et conditions</a>\n  et les\n  <a href='https://halalsearch.ca/privacy'>Politiques de confidentialités</a>.\n  ",
  "wrongFileSize": "Taille de fichier incorrecte",
  "profile": "Profile",
  "comment": "Commentaire",
  "creationDate": "Date de création",
  "title": "Titre",
  "admin": "Admin",
  "users": "Utilisateurs",
  "createUser": "créer un utilisateur",
  "create": "Créer",
  "all": "Tout",
  "sendEmail": "Envoyer un email",
  "subject": "Sujet",
  "content": "Contenu",
  "header": "En-tête",
  "editPassword": "Modifier le mot de passe",
  "delete": "Supprimer",
  "newPassword": "Nouveau mot de passe",
  "confirmedNewPassword": "Confirmez le mot de passe",
  "passwordSuccess": "Mot de passe modifié avec succès",
  "passwordNotMatching": "Le mot de passe ne correspond pas",
  "wrongNewPassword": "Le nouveau mot de passe doit être entre 6 et 40 caractères",
  "invalidValidator": "Requête invalide",
  "question": "Question:",
  "pageNotFound": "Page non répertoriée",
  "dataDoesntExists": "Les données demandées au serveur n'existent pas",
  "missingField": "Champ manquant",
  "emailSuccess": "L'email a été envoyé avec succès",
  "userCreateSuccess": "Compte créé avec succès",
  "userUpdateSuccess": "L'utilisateur a été modifié avec succès",
  "firstNamePlaceholder": "John",
  "lastNamePlaceholder": "Doe",
  "invalidEmail": "Email invalide",
  "corruptedData": "Les données que vous avez demandées sont corrompues",
  "categories": "Catégories",
  "search": "Rechercher",
  "where": "Où",
  "quickLinks": "Liens rapides",
  "downloadOnThe": "Télécharger sur le",
  "getItOn": "Télécharger sur le",
  "appleStore": "App Store",
  "googlePlay": "Google Play",
  "allRightsReserved": "Tout droits réservés",
  "address": "Adresse",
  "addressPlaceholder": "Ville, adresse ou code postal",
  "streetNumber": "Numéro de rue",
  "streetName": "Nom de rue",
  "streetNamePlaceholder": "Rue St-michel",
  "next": "Suivant",
  "previous": "précédent",
  "city": "Ville",
  "cityPlaceholder": "Montréal",
  "postalCode": "Code postal",
  "postalCodePlaceholder": "H1H",
  "state": "État/Province",
  "statePlaceholder": "Québec",
  "country": "Pays",
  "countryPlaceholder": "Canada",
  "canada": "Canada",
  "unitedStates": "États-Unis",
  "alberta": "Alberta",
  "britishColumbia": "Colombie-Britannique",
  "manitoba": "Manitoba",
  "newBrunswick": "Nouveau-Brunswick",
  "newfoundlandAndLabrador": "Terre-Neuve-et-Labrador",
  "northwestTerritories": "Territoires du Nord-Ouest",
  "novaScotia": "Nouvelle-Écosse",
  "nunavut": "Nunavut",
  "ontario": "Ontario",
  "princeEdwardIsland": "Île-du-Prince-Édouard",
  "quebec": "Québec",
  "saskatchewan": "Saskatchewan",
  "yukonTerritory": "Territoire du Yukon",
  "alabama": "Alabama",
  "alaska": "Alaska",
  "arizona": "Arizona",
  "arkansas": "Arkansas",
  "california": "Californie",
  "colorado": "Colorado",
  "connecticut": "Connecticut",
  "delaware": "Delaware",
  "districtOfColumbia": "District of Columbia",
  "florida": "Floride",
  "georgia": "Georgie",
  "hawaii": "Hawaii",
  "idaho": "Idaho",
  "illinois": "Illinois",
  "indiana": "Indiana",
  "iowa": "Iowa",
  "kansas": "Kansas",
  "kentucky": "Kentucky",
  "louisiana": "Louisiane",
  "maine": "Maine",
  "maryland": "Maryland",
  "massachusetts": "Massachusetts",
  "michigan": "Michigan",
  "minnesota": "Minnesota",
  "mississippi": "Mississippi",
  "missouri": "Missouri",
  "montana": "Montana",
  "nebraska": "Nebraska",
  "nevada": "Nevada",
  "newHampshire": "New Hampshire",
  "newJersey": "New Jersey",
  "newMexico": "Nouveau Mexique",
  "newYork": "New York",
  "northCarolina": "Caroline du Nord",
  "northDakota": "Dakota du Nord",
  "ohio": "Ohio",
  "oklahoma": "Oklahoma",
  "oregon": "Oregon",
  "pennsylvania": "Pennsylvanie",
  "rhodeIsland": "Rhode Island",
  "southCarolina": "Caroline du Sud",
  "southDakota": "Dakota du Sud",
  "tennessee": "Tennessee",
  "texas": "Texas",
  "utah": "Utah",
  "vermont": "Vermont",
  "virginia": "Virginie",
  "washington": "Washington",
  "westVirginia": "Virginie de L'ouest",
  "wisconsin": "Wisconsin",
  "wyoming": "Wyoming",
  "locationNotSupported": "Votre localisation est non supportée",
  "invalidLocation": "Votre adresse est invalide",
  "commerceTitle": "Titre du commerce",
  "category": "Catégorie",
  "other": "Autre",
  "description": "Description",
  "uploadImages": "Télécharger des images *",
  "deposit": "Dépôt",
  "day": "Jour",
  "week": "Semaine",
  "month": "Mois",
  "clear": "Effacer",
  "avatar": "Avatar",
  "commerce": "Commerce",
  "reserve": "Réserver",
  "dashboard": "Tableau de bord",
  "settings": "Paramètres",
  "price": "Prix",
  "location": "Localisation",
  "ratings": "Évaluations",
  "conversations": "Conversations",
  "you": "Vous",
  "language": "Langue",
  "invalidPhone": "Téléphone invalide",
  "approved": "Approuvé",
  "inReview": "En révision",
  "changesInReview": "Modifications en révision",
  "rejected": "Refusé",
  "changesRejected": "Modifications refusées",
  "commerces": "Commerces",
  "purchases": "Achâts",
  "deleteCommerce": "Supprimer le commerce",
  "approve": "Approuver",
  "reject": "Rejetter",
  "days": "Jours",
  "payment": "Paiement",
  "billingAddress": "adresse de facturation",
  "deliveryAddress": "adresse de livraison",
  "delivery": "Livraison",
  "invalidPrice": "Prix invalide",
  "internalServerError": "Erreur de serveur interne",
  "requested": "Demandé",
  "save": "Sauvegarder",
  "new": "Nouveau",
  "review": "Évaluer",
  "purchase": "Réservation",
  "rating": "note",
  "reviews": "Avis",
  "note": "Note",
  "oldPassword": "Ancien mot de passe",
  "standard": "Standard",
  "pro": "Pro",
  "resetPasswordSubject": "Nouveau mot de passe",
  "createUserSubject": "Nouveau compte créé",
  "changedEmailTemplateSubject": "Votre email vient d'être changé",
  "createUserTemplateTitle": "Votre compte vient tout juste d'être créé!",
  "createUserTemplateDescription": "Vous pouvez accéder à votre compte avec votre email",
  "resetPasswordTemplateTitle": "Votre mot de passe pour <b>HalalSearch</b> vient d'être modifié.",
  "verifCodeFirst": "Premièrement, entrez le code de vérification dans vos mails",
  "temporaryPassword": "Mot de passe temporaire",
  "updateUserEmailTemplateTitle": "Votre courriel pour <b>HalalSearch</b> vient d'être modifié.",
  "updateUserEmailTemplateDescription": "Vous pouvez accéder à votre compte avec votre nouveau courriel",
  "updateUserEmailTemplateOld": "Votre ancien courriel était",
  "confirmationCode": "Code de confirmation",
  "verifCodeIndications": "<p>Vous pouvez saisir le code de vérification dans l'appli:</p> <span\n  class=\"inline-block rounded-md mt-2 mx-2 py-2 px-3 bg-grey-200\">Navigation supérieure → liste\n  déroulante Avatar (nécessite connexion) → Code de confirmation</span>",
  "enterConfirmationCodeEmails": "Entrez le code de confirmation envoyé à votre nouveau courriel",
  "cancelChanges": "Annuler les changements",
  "resendCode": "Renvoyer le code",
  "enterCode": "Entrer le code",
  "verifCode": "Code de confirmation",
  "updatePassword": "Modification du mot de passe",
  "resetPassword": "Réinitialisation du mot de passe",
  "passwordProperties": "6 à 48 caractères sans espace",
  "noInternetConnexionFound": "Vous êtes hors-ligne",
  "paypal": "Paypal",
  "paypalNotLinked": "Pas encore lié",
  "verifyEmailSubject": "Vérifiez votre email",
  "verifyEmailTemplateTitle": "Il ne reste plus que une étape à la création de votre compte!",
  "verifyEmailTemplateDescription": "Entrez le code de vérification dans l'application",
  "wrongToken": "Code de vérification incorrect",
  "verifyEmailTemplateHeader": "Bonjour et bienvenue sur la plateforme <b>HalalSearch</b>!",
  "enterConfirmationCode": "Entrez le code de confirmation envoyé à votre email",
  "validate": "Valider",
  "verifCodeSent": "Code de confirmation envoyé",
  "sendBugReport": "Envoyer un rapport de bug",
  "operatingSystem": "Système d'exploitation",
  "appVersion": "Version de HalalSearch",
  "date": "Date",
  "yearDateShort": "D MMMM YYYY",
  "problemDescription": "Description du problème",
  "createBugSuccess": "Rapport de bug envoyé avec succès",
  "deleteBugSuccess": "Rapport de bogue supprimé avec succès",
  "userAgent": "Agent de l'utilisateur",
  "askDeleteBug": "Voulez-vous vraiment supprimer ce rapport de bug",
  "status": "Status",
  "asOwner": "Comme propriétaire",
  "asAdmin": "Comme admin",
  "role": "Rôle",
  "audience": "Audience",
  "deleteCommerceFirst": "Supprimez d'abord votre ou vos commerces",
  "finishPurchaseFirst": "Terminez d'abord votre/vos achât(s)",
  "deleted": "Supprimé",
  "generator": "Génératrice",
  "loader": "chargeuse",
  "total": "Total",
  "refund": "Remboursement",
  "taxes": "Taxes",
  "maxDateLimitReached": "Limite de date maximale atteinte",
  "months": "Mois+",
  "hours": "h",
  "minutes": "min",
  "seconds": "sec",
  "claims": "Réclamations",
  "owner": "Vendeur",
  "tooSoonToInvoice": "Trop tôt pour faire une pacture",
  "paymentProcessFailed": "Le processus de paiement a échoué",
  "paypalNotLinkedToUser": "Paypal n'est pas lié à l'utilisateur",
  "imagesRequired": "Images obligatoires",
  "history": "Historique",
  "invalidDate": "Date invalide",
  "wrap": "Wrap",
  "rice": "Riz",
  "salad": "Salade",
  "common": "Commun",
  "uploadImage": "Télécharger une image",
  "optional": "Optionnel",
  "commerceAlreadyExists": "Ce commerce existe déjà",
  "profileImage": "Image du profil",
  "backgroundImage": "Image de fond",
  "weight": "Poids (gramme)",
  "both": "Les deux",
  "units": "Unités",
  "unit": "Unité",
  "gallery": "Gallerie",
  "internetRestored": "Vous êtes en-ligne",
  "tryAgain": "Erreur de serveur, réessayez encore!",
  "stripe": "Stripe",
  "amount": "Montant",
  "success": "Succès",
  "streetExt": "Extension",
  "streetExtPlaceholder": "Bureau 280",
  "fullName": "Prénom et nom",
  "none": "Aucun",
  "cook": "Cuisinier",
  "confirm": "Confirmer",
  "or": "ou",
  "ymd": "yyyy-mm-jj",
  "afg": "Afghanistan",
  "zaf": "Afrique du Sud",
  "alb": "Albanie",
  "dza": "Algérie",
  "deu": "Allemagne",
  "and": "Andorre",
  "ago": "Angola",
  "atg": "Antigua-et-Barbuda",
  "sau": "Arabie saoudite",
  "arg": "Argentine",
  "arm": "Arménie",
  "aus": "Australie",
  "aut": "Autriche",
  "aze": "Azerbaïdjan",
  "bhs": "Bahamas",
  "bhr": "Bahreïn",
  "bgd": "Bangladesh",
  "brb": "Barbade",
  "blr": "Biélorussie",
  "bel": "Belgique",
  "blz": "Belize",
  "ben": "Bénin",
  "btn": "Bhoutan",
  "bol": "Bolivie",
  "bih": "Bosnie-Herzégovine",
  "bwa": "Botswana",
  "bra": "Brésil",
  "brn": "Brunei",
  "bgr": "Bulgarie",
  "bfa": "Burkina Faso",
  "bdi": "Burundi",
  "khm": "Cambodge",
  "cmr": "Cameroun",
  "can": "Canada",
  "cpv": "Cap-Vert",
  "caf": "République centrafricaine",
  "chl": "Chili",
  "chn": "Chine",
  "cyp": "Chypre",
  "col": "Colombie",
  "com": "Comores",
  "cog": "République du Congo",
  "cod": "République démocratique du Congo",
  "kor": "Corée du Sud",
  "prk": "Corée du Nord",
  "cri": "Costa Rica",
  "civ": "Côte d'Ivoire",
  "hrv": "Croatie",
  "cub": "Cuba",
  "dnk": "Danemark",
  "dji": "Djibouti",
  "dom": "République dominicaine",
  "dma": "Dominique",
  "egy": "Égypte",
  "slv": "Salvador",
  "are": "Émirats arabes unis",
  "ecu": "Équateur",
  "eri": "Érythrée",
  "esp": "Espagne",
  "est": "Estonie",
  "usa": "États-Unis",
  "eth": "Éthiopie",
  "fji": "Fidji",
  "fin": "Finlande",
  "fra": "France",
  "gab": "Gabon",
  "gmb": "Gambie",
  "geo": "Géorgie",
  "gha": "Ghana",
  "grc": "Grèce",
  "grd": "Grenade",
  "gtm": "Guatemala",
  "gin": "Guinée",
  "gnb": "Guinée-Bissau",
  "gnq": "Guinée équatoriale",
  "guy": "Guyana",
  "hti": "Haïti",
  "hnd": "Honduras",
  "hun": "Hongrie",
  "ind": "Inde",
  "idn": "Indonésie",
  "irn": "Iran",
  "irq": "Irak",
  "irl": "Irlande",
  "isl": "Islande",
  "isr": "Israël",
  "ita": "Italie",
  "jam": "Jamaïque",
  "jpn": "Japon",
  "jor": "Jordanie",
  "kaz": "Kazakhstan",
  "ken": "Kenya",
  "kgz": "Kirghizistan",
  "kir": "Kiribati",
  "kwt": "Koweït",
  "lao": "Laos",
  "lso": "Lesotho",
  "lva": "Lettonie",
  "lbn": "Liban",
  "lbr": "Liberia",
  "lby": "Libye",
  "lie": "Liechtenstein",
  "ltu": "Lituanie",
  "lux": "Luxembourg",
  "mkd": "Macédoine du Nord",
  "mdg": "Madagascar",
  "mys": "Malaisie",
  "mwi": "Malawi",
  "mdv": "Maldives",
  "mli": "Mali",
  "mlt": "Malte",
  "mar": "Maroc",
  "mhl": "Îles Marshall",
  "mus": "Maurice",
  "mrt": "Mauritanie",
  "mex": "Mexique",
  "fsm": "États fédérés de Micronésie",
  "mda": "Moldavie",
  "mco": "Monaco",
  "mng": "Mongolie",
  "mne": "Monténégro",
  "moz": "Mozambique",
  "mmr": "Birmanie",
  "nam": "Namibie",
  "nru": "Nauru",
  "npl": "Népal",
  "nic": "Nicaragua",
  "ner": "Niger",
  "nga": "Nigeria",
  "nor": "Norvège",
  "nzl": "Nouvelle-Zélande",
  "omn": "Oman",
  "uga": "Ouganda",
  "uzb": "Ouzbékistan",
  "pak": "Pakistan",
  "plw": "Palaos",
  "pan": "Panama",
  "png": "Papouasie-Nouvelle-Guinée",
  "pry": "Paraguay",
  "nld": "Pays-Bas",
  "per": "Pérou",
  "phl": "Philippines",
  "pol": "Pologne",
  "prt": "Portugal",
  "pse": "Palestine",
  "qat": "Qatar",
  "rou": "Roumanie",
  "gbr": "Royaume-Uni",
  "rus": "Russie",
  "rwa": "Rwanda",
  "kna": "Saint-Christophe-et-Niévès",
  "smr": "Saint-Marin",
  "vct": "Saint-Vincent-et-les-Grenadines",
  "lca": "Sainte-Lucie",
  "slb": "Îles Salomon",
  "wsm": "Samoa",
  "stp": "Sao Tomé-et-Principe",
  "sen": "Sénégal",
  "srb": "Serbie",
  "syc": "Seychelles",
  "sle": "Sierra Leone",
  "sgp": "Singapour",
  "svk": "Slovaquie",
  "svn": "Slovénie",
  "som": "Somalie",
  "sdn": "Soudan",
  "ssd": "Soudan du Sud",
  "lka": "Sri Lanka",
  "swe": "Suède",
  "che": "Suisse",
  "sur": "Suriname",
  "swz": "Eswatini",
  "syr": "Syrie",
  "tjk": "Tadjikistan",
  "tza": "Tanzanie",
  "tcd": "Tchad",
  "cze": "Tchéquie",
  "tha": "Thaïlande",
  "tls": "Timor oriental",
  "tgo": "Togo",
  "ton": "Tonga",
  "tto": "Trinité-et-Tobago",
  "tun": "Tunisie",
  "tkm": "Turkménistan",
  "tur": "Turquie",
  "tuv": "Tuvalu",
  "ukr": "Ukraine",
  "ury": "Uruguay",
  "vut": "Vanuatu",
  "ven": "Venezuela",
  "vnm": "Viêt Nam",
  "yem": "Yémen",
  "zmb": "Zambie",
  "zwe": "Zimbabwe",
  "chickenWings": "Ailes de poulet",
  "bagels": "Bagels",
  "juiceSmoothieShakeBar": "Bar à jus de fruits/smoothie/shake",
  "bbq": "Bbq",
  "organic": "Bio",
  "bistro": "Bistro",
  "boréale": "Boréale",
  "bakery": "Boulangerie",
  "bubbleTeaPearlTea": "Bubble tea (thé aux perles)",
  "burgers": "Burgers",
  "sugarShack": "Cabane à sucre",
  "hide": "Hide",
  "coffee": "Café",
  "cajun": "Cajun",
  "snackBar": "Snack bar",
  "delicatessen": "Épicerie fine",
  "chocolateShop": "Chocolaterie",
  "contemporaryModern": "Contemporain/moderne",
  "continental": "Continental",
  "couscous": "Couscous",
  "creative": "Créatif",
  "iceCream": "Crème glacée",
  "creperie": "Crêperie",
  "lunch": "Déjeuner",
  "deli": "Deli",
  "eclectic": "Eclectique",
  "exotic": "Exotique",
  "fishChips": "Poisson et frites",
  "fondue": "Fondue",
  "seafoodFish": "Fruits de mer/poisson",
  "smokehouse": "Fumoir",
  "fusion": "Fusion",
  "wildGame": "Gibier sauvage",
  "grilledMeat": "Viande grillée",
  "grilledCheese": "Fromage grillé",
  "halal": "Halal",
  "international": "International",
  "teaHouse": "Salon de thé",
  "molecular": "Moléculaire",
  "mussels": "Moules",
  "pasta": "Pâtes",
  "pastryShop": "Pâtisserie",
  "pizza": "Pizza",
  "pokeBowl": "Poke bowl",
  "friedChicken": "Poulet frit",
  "poutine": "Poutine",
  "pubFood": "Cuisine de bistrot",
  "raclette": "Raclette",
  "ramen": "Ramen",
  "comfortFood": "Plats réconfortants",
  "rotisserie": "Rôtisserie",
  "salads": "Salades",
  "sandwichesOrSubs": "Sandwichs ou sous-marins",
  "healthy": "Santé",
  "smokedMeat": "Viande fumée",
  "soups": "Soupes",
  "steakhouse": "Steakhouse",
  "sushi": "Sushi",
  "tapas": "Tapas",
  "tartare": "Tartare",
  "groceryStore": "Épicerie",
  "butcherShop": "Boucherie",
  "restaurant": "Restaurant",
  "caterer": "Traiteur",
  "breakfast": "Déjeuner",
  "dessert": "Dessert",
  "eatInside": "Manger à l'intérieur",
  "servesBreakfast": "Sert le déjeuner",
  "servesBrunch": "Sert le Brunch",
  "servesDinner": "Sert le souper",
  "servesLunch": "Sert à dinner",
  "servesVegetarianFood": "Sert végétarien",
  "reservable": "Réservable",
  "takeout": "À emporter",
  "curbsidePickup": "Ramassage en bordure de route",
  "wheelchairAccessibleEntrance": "Entrée accessible aux fauteuils roulants",
  "createCommerce": "Créer un commerce",
  "welcome": "Bienvenue",
  "services": "Services",
  "priceLevel": "Gamme de prix",
  "low": "Faible",
  "medium": "Moyen",
  "high": "Élevé",
  "min": "Min",
  "max": "Max",
  "km": "km",
  payoutEmailMessage: (commerceTitle: string, userName: string) => `Vous avez reçu de l'argent pour la location du commerce: ${commerceTitle}, avec l'utilisateur: ${userName}`,
  createCommerceTemplateHeader: (commerceTitle: string) => html`Votre commerce <b>${commerceTitle}</b> vient d'être créé`,
  createUserTemplateHeader: (firstName: string) => html`Bonjour ${firstName} et bienvenue sur la plateforme <b>DevKG Inc.</b>!`,
  updateCommerceTemplateHeader: (commerceTitle: string) => html`Le statut pour votre commerce <b>${commerceTitle}</b> a changé`,
  updateCommerceTitle: (commerceStatus: string) => `Le statut de votre commerce est maintenant <b>${commerceStatus}</b>.`,
  updateCommerceNotifTitle: (satus: string) => `Le statut de votre commerce est maintenant ${satus}`,
  updateCommerceNotifDescription: (commerceTitle: string) => `Pour le commerce ${commerceTitle}`,
  askDeleteCommerce: (title: string) => `Voulez-vous vraiment supprimer le commerce ${title}?`,
  askDeleteUser: (firstName: string, lastName: string) => `Etes-vous sûr de vouloir supprimer définitivement l'utilisateur ${firstName} ${lastName}`,
  greetingWithName: (name: string) => `Hey ${name}!`,
  askApproveCommerce: (title: string) => `Voulez-vous vraiment approuver le commerce ${title}?`,
  askRejectCommerce: (title: string) => `Voulez-vous vraiment rejetter le commerce ${title}?`,
  pressMe: (value: number) => `cliques-moi ${value} fois`,
  loginWith: (brand: string) => `Connexion avec ${brand.slice(0, 1).toUpperCase()}${brand.slice(1)}`,
  developer: "Développeur Fullstack",
  gitHub: "Projet sur GitHub",
  website: "Site web",
  appStore: "Mac app store",
  techUsed: "Technologies utilisées",
  webApp: "Application Web",
  mobileApp: "Application mobile",
  software: "Logiciel",
  webDesign: "Conception Web",
  showcaseWebsite: "Site web vitrine",
  ecommerce: "E-commerce",
  webAppText: "Nous construirons des applications de pointe qui répondront aux besoins de vos utilisateurs.",
  mobileAppText: "Nous créerons des applications conviviales qui s'adaptent à tous les écrans.",
  softwareText: "Nous développerons les meilleurs logiciels pour aider votre entreprise à réussir et à être plus efficace.",
  webDesignText: "Nous prendrons soin de l'apparence de votre marque afin qu'elle reflète les mérites de votre entreprise.",
  showcaseWebsiteText: "Nous développerons pour vous un site web vitrine qui augmentera les possibilités de croissance de vos ventes en ligne.",
  ecommerceText: "Nous vous permettrons de gagner de l'argent en ligne avec n'importe quelle place de marché ou site web transactionnel.",
  ourServices: "Services offerts",
  coFounderResolveMe: "Cofondateur de Resolve Me",
  ceoAvartaSolutions: "Dirigeant de Avarta solutions",
  testimonials: "Témoignages",
  YoussofIbrahimText: "Kevin a été exemplaire dans son travail, son temps de travail et sa courtoisie durant son contrat. Je le recommande vivement à tous ceux qui recherchent un développeur courtois, honnête et professionnel. 5 étoiles garanties.",
  OmarText: `
  J’ai travaillé avec Kevin en tant que cofondateur de ResolveMe. J’ai vraiment aimé travailler avec lui. Il est minutieux. Toujours à jour avec les dernières technologies et s’assure de coder en suivant les bonnes pratiques.
  Il est aussi bon en front-end qu’en back-end. Il préfère coder ses propres librairies plutôt que d’utiliser des librairies lorsque ce n’est pas nécessaire.
  Il a une très bonne maitrise de CSS également, alors il peut facilement réaliser n’importe quel design que vous lancez dans sa direction.
  En gros, Kevin est vraiment polyvalent et peut gérer un produit de sa conception à sa réalisation.
  Il est très dogmatique mais est aussi très ouvert aux critiques et discussions.
  J’ai vraiment aimé travailler avec lui.
`,
  previousProjects: "Projets réalisés",
  seniorFullstackFreelanceDeveloper: "Senior Fullstack Freelance Developer",
  healthCare: "Agence de placement en santé",
  cateringService: "Plateforme de service de traiteur",
  toolRental: "Plateforme de location d'outils",
  healthCareStartup: "Startup de placement en santé",
  fullstackFreelanceDeveloper: "Fullstack freelance developer",
  businessOwnerAndDeveloper: "Propriétaire d'entreprise et principal développeur fullstack",
  multiFunctionCalculator: "Multi function calculator",
  carBrokerage: "Service de courtage et de catalogue de voitures",
  now: "Maintenant",
  files: "Fichiers",
  linesOfCode: "Lignes de code",
}