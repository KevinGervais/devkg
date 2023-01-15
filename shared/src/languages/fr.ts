/* eslint-disable no-template-curly-in-string */
import "dayjs/locale/fr"

import { html } from "../functions"
import { Say } from "./model"

export const fr: Say = {
  today: "Aujourd'hui",
  ok: "Ok",
  home: "Accueil",
  email: "Email",
  emailPlaceholder: "example@email.com",
  password: "Mot de passe",
  login: "Connexion",
  loginHeader: "Connectez-vous à KevinGervais",
  forgotPassword: "Mot de passe oublié?",
  userAlreadyLogged: "L'utilisateur est déjà connecté",
  userDoesntExists: "L'utilisateur n'existe pas",
  wrongPassword: "Mot de passe incorrect",
  userAlreadyExists: "L'utilisateur existe déjà",
  accessDenied: "Accès refusé",
  logout: "Déconnexion",
  send: "Envoyer",
  forgotPasswordHeader: "Entrez votre email pour recevoir un mot de passe temporaire.",
  passwordSent: "Mot de passe envoyé par email!",
  en: "Anglais",
  fr: "Français",
  joinUs: "Nous joindre",
  privacyPolicy: "Politique de confidentialités",
  termsAndConditions: "termes & conditions",
  bugReport: "Rapport de bug",
  mission: "Mission",
  contact: "Contact",
  emails: "Courriels",
  phone: "Téléphone",
  copy: "Copier",
  favorites: "Favoris",
  draft: "Brouillon",
  public: "Public",
  private: "Privé",
  edit: "Modifier",
  yes: "Oui",
  no: "Non",
  pressButton5Times: "Appuyer sur le bouton 5 fois",
  firstName: "Prénom",
  lastName: "Nom",
  download: "Télécharger",
  writeComment: "Écrire un commentaire...",
  cancel: "Annuler",
  applyPolicies: "\n  En navigant sur kevingervais.ca, j'accepte les\n  <a href='https://kevingervais.ca/terms'>Termes et conditions</a>\n  et les\n  <a href='https://kevingervais.ca/privacy'>Politiques de confidentialités</a>.\n  ",
  wrongFileSize: "Taille de fichier incorrecte",
  profile: "Profile",
  comment: "Commentaire",
  creationDate: "Date de création",
  title: "Titre",
  admin: "Admin",
  users: "Utilisateurs",
  createUser: "créer un utilisateur",
  create: "Créer",
  deleteUserSuccess: "L'utilisateur a été supprimé avec succès",
  all: "Tout",
  sendEmail: "Envoyer un email",
  subject: "Sujet",
  content: "Contenu",
  header: "En-tête",
  editPassword: "Modifier le mot de passe",
  delete: "Supprimer",
  newPassword: "Nouveau mot de passe",
  confirmedNewPassword: "Confirmez le mot de passe",
  passwordSuccess: "Mot de passe modifié avec succès",
  passwordNotMatching: "Le mot de passe ne correspond pas",
  wrongNewPassword: "Le nouveau mot de passe doit être entre 6 et 40 caractères",
  invalidValidator: "Requête invalide",
  sendMessage: "Envoyer un message",
  questionSentFrom: "Question envoyée par:",
  question: "Question:",
  pageNotFound: "Page non répertoriée",
  bugReportSubject: "Rapport de bug: ",
  bugSentFrom: "Bug rapporté par: ",
  dataDoesntExists: "Les données demandées au serveur n'existent pas",
  missingField: "Champ manquant",
  emailSuccess: "L'email a été envoyé avec succès",
  userCreateSuccess: "Compte créé avec succès",
  userUpdateSuccess: "L'utilisateur a été modifié avec succès",
  commerceUpdateSuccess: "Le commerce a été modifié avec succès",
  firstNamePlaceholder: "John",
  lastNamePlaceholder: "Doe",
  invalidEmail: "Email invalide",
  corruptedData: "Les données que vous avez demandées sont corrompues",
  searchCommerce: "Rechercher un commerce...",
  categories: "Catégories",
  search: "Rechercher",
  where: "Où",
  quickLinks: "Liens rapides",
  downloadApp: "Télécharger l'application",
  downloadAppDescription: "Pour un moyen rapide et facile de commander de grandes quantités de nourriture pour des événements sur votre mobile !",
  downloadOnThe: "Télécharger sur le",
  getItOn: "Télécharger sur le",
  appleStore: "App Store",
  googlePlay: "Google Play",
  allRightsReserved: "Tout droits réservés",
  downloadOurApp: "Téléchargez notre application!",
  downloadAppLongDescription: " Restez à l'affus des meilleures offres de préparation alimentaires et restez connectés avec notre service de notifications pour ne rien manquer!",
  sellYourCommerces: "Trouvez tous les commerces halal",
  andGetPaid: "Près de chez vous !",
  publishCommercesDescription: "Grâce à KevinGervais, le magasinage halal n'a jamais été aussi facile!",
  getStartedNow: "Commencez maintenant!",
  address: "Adresse",
  addressPlaceholder: "Ville, adresse ou code postal",
  streetNumber: "Numéro de rue",
  streetName: "Nom de rue",
  streetNamePlaceholder: "Rue St-michel",
  next: "Suivant",
  previous: "précédent",
  city: "Ville",
  cityPlaceholder: "Montréal",
  postalCode: "Code postal",
  postalCodePlaceholder: "H1H",
  state: "État/Province",
  statePlaceholder: "Québec",
  country: "Pays",
  countryPlaceholder: "Canada",
  canada: "Canada",
  unitedStates: "États-Unis",
  alberta: "Alberta",
  britishColumbia: "Colombie-Britannique",
  manitoba: "Manitoba",
  newBrunswick: "Nouveau-Brunswick",
  newfoundlandAndLabrador: "Terre-Neuve-et-Labrador",
  northwestTerritories: "Territoires du Nord-Ouest",
  novaScotia: "Nouvelle-Écosse",
  nunavut: "Nunavut",
  ontario: "Ontario",
  princeEdwardIsland: "Île-du-Prince-Édouard",
  quebec: "Québec",
  saskatchewan: "Saskatchewan",
  yukonTerritory: "Territoire du Yukon",
  alabama: "Alabama",
  alaska: "Alaska",
  arizona: "Arizona",
  arkansas: "Arkansas",
  california: "Californie",
  colorado: "Colorado",
  connecticut: "Connecticut",
  delaware: "Delaware",
  districtOfColumbia: "District of Columbia",
  florida: "Floride",
  georgia: "Georgie",
  hawaii: "Hawaii",
  idaho: "Idaho",
  illinois: "Illinois",
  indiana: "Indiana",
  iowa: "Iowa",
  kansas: "Kansas",
  kentucky: "Kentucky",
  louisiana: "Louisiane",
  maine: "Maine",
  maryland: "Maryland",
  massachusetts: "Massachusetts",
  michigan: "Michigan",
  minnesota: "Minnesota",
  mississippi: "Mississippi",
  missouri: "Missouri",
  montana: "Montana",
  nebraska: "Nebraska",
  nevada: "Nevada",
  newHampshire: "New Hampshire",
  newJersey: "New Jersey",
  newMexico: "Nouveau Mexique",
  newYork: "New York",
  northCarolina: "Caroline du Nord",
  northDakota: "Dakota du Nord",
  ohio: "Ohio",
  oklahoma: "Oklahoma",
  oregon: "Oregon",
  pennsylvania: "Pennsylvanie",
  rhodeIsland: "Rhode Island",
  southCarolina: "Caroline du Sud",
  southDakota: "Dakota du Sud",
  tennessee: "Tennessee",
  texas: "Texas",
  utah: "Utah",
  vermont: "Vermont",
  virginia: "Virginie",
  washington: "Washington",
  westVirginia: "Virginie de L'ouest",
  wisconsin: "Wisconsin",
  wyoming: "Wyoming",
  locationNotSupported: "Votre localisation est non supportée",
  invalidLocation: "Votre adresse est invalide",
  describeCommerce: "Décrivez votre commerce",
  commerceTitle: "Titre du commerce",
  commerceTitlePlaceholder: "Pâté chinois 4 étages",
  category: "Catégorie",
  other: "Autre",
  description: "Description",
  uploadCommercePhotos: "Téléchargez les photos du commerce",
  uploadImages: "Télécharger des images *",
  deposit: "Dépôt",
  publishCommerce: "Publier un commerce",
  commerceCreateSuccess: "Commerce créé avec succès",
  goodMorning: "Bon matin",
  goodAfternoon: "Bon après-midi",
  goodEvening: "Bon soir",
  recentlyFeatured: "Récemment partagé",
  day: "Jour",
  week: "Semaine",
  month: "Mois",
  filters: "Filtres",
  clear: "Effacer",
  kmRadius: "Rayon en km",
  avatar: "Avatar",
  commerce: "Commerce",
  notRatedYet: "Aucune note",
  reserve: "Réserver",
  dashboard: "Tableau de bord",
  settings: "Paramètres",
  price: "Prix",
  location: "Localisation",
  ratings: "Évaluations",
  conversations: "Conversations",
  you: "Vous",
  language: "Langue",
  invalidPhone: "Téléphone invalide",
  approved: "Approuvé",
  inReview: "En révision",
  changesInReview: "Modifications en révision",
  rejected: "Refusé",
  changesRejected: "Modifications refusées",
  commerces: "Commerces",
  purchases: "Achâts",
  deleteCommerce: "Supprimer le commerce",
  makeCommercePrivate: "Rendre le commerce privé",
  makeCommercePublic: "Rendre le commerce publique",
  editCommerce: "Modifier le commerce",
  seeCommerceDetails: "Voir les détails du commerce",
  reviewCommerce: "Réviser le commerce",
  approve: "Approuver",
  reject: "Rejetter",
  rejectedMessage: "Message de refus",
  days: "Jours",
  payment: "Paiement",
  billingAddress: "adresse de facturation",
  deliveryAddress: "adresse de livraison",
  delivery: "Livraison",
  invalidPrice: "Prix invalide",
  internalServerError: "Erreur de serveur interne",
  requested: "Demandé",
  save: "Sauvegarder",
  new: "Nouveau",
  review: "Évaluer",
  purchase: "Réservation",
  commerceId: "ID du commerce",
  giveReview: "Donner un avis",
  reviewCreateSuccess: "Avis créé avec succès",
  reviewUpdateSuccess: "Avis modifié avec succès",
  rating: "note",
  editReview: "Modifier votre avis",
  withDescription: "Avec description",
  titlePlaceholder: "Entrer un titre...",
  reviewPlaceholder: "Entrer un avis...",
  reviews: "Avis",
  noReviewsYet: "Il n'y a pas encore d'avis",
  thisOwner: "Ce vendeur",
  thisCommerce: "Cet commerce",
  note: "Note",
  oldPassword: "Ancien mot de passe",
  standard: "Standard",
  pro: "Pro",
  resetPasswordSubject: "Nouveau mot de passe",
  createUserSubject: "Nouveau compte créé",
  createCommerceSubject: "Nouveau commerce créé",
  updateCommerceSubject: "Nouveau status de votre commerce",
  changedEmailTemplateSubject: "Votre email vient d'être changé",
  createUserTemplateTitle: "Votre compte vient tout juste d'être créé!",
  createUserTemplateDescription: "Vous pouvez accéder à votre compte avec votre email",
  resetPasswordTemplateTitle: "Votre mot de passe pour <b>KevinGervais</b> vient d'être modifié.",
  invoice: "Facture",
  invoices: "Factures",
  payoutEmailSubject: "KevinGervais vous a envoyé de l'argent",
  cityLocationPlaceholder: "Entrer une ville au canada ou un code postal",
  approximateLocation: "Nous avons besoin d’une localisation approximative pour commencer!",
  approximateLocationAlt: "Nous avons besoin d’une localisation approximative",
  welcomeToKevinGervais: "Bienvenue sur KevinGervais!",
  verifCodeFirst: "Premièrement, entrez le code de vérification dans vos mails",
  temporaryPassword: "Mot de passe temporaire",
  updateUserEmailTemplateTitle: "Votre courriel pour <b>KevinGervais</b> vient d'être modifié.",
  updateUserEmailTemplateDescription: "Vous pouvez accéder à votre compte avec votre nouveau courriel",
  updateUserEmailTemplateOld: "Votre ancien courriel était",
  confirmationCode: "Code de confirmation",
  verifCodeIndications: "<p>Vous pouvez saisir le code de vérification dans l'appli:</p> <span\n  class=\"inline-block rounded-md mt-2 mx-2 py-2 px-3 bg-grey-200\">Navigation supérieure → liste\n  déroulante Avatar (nécessite connexion) → Code de confirmation</span>",
  enterConfirmationCodeEmails: "Entrez le code de confirmation envoyé à votre nouveau courriel",
  cancelChanges: "Annuler les changements",
  resendCode: "Renvoyer le code",
  enterCode: "Entrer le code",
  noActiveCode: "Il n'y a pas de code de confirmation actif",
  verifCode: "Code de confirmation",
  createCommerceTitle: "Votre commerce est maintenant en processus d'évaluation.",
  createCommerceDescription: "S'il est accepté, il sera rendu publique.",
  emailPreferences: "Préférences des emails",
  notificationPreferences: "Préférences des  notifications",
  commerceCreation: "Création d'commerce",
  userCreation: "Création de l'utilisateur",
  updateEmail: "Modification du courriel",
  updatePassword: "Modification du mot de passe",
  resetPassword: "Réinitialisation du mot de passe",
  commerceStatusChange: "Changement de status du commerce",
  chooseRecieveEmails: "Choisissez quand vous souhaitez recevoir des courriels",
  chooseRecieveNotifications: "Choisissez quand vous souhaitez recevoir des notifications",
  optionalEmails: "Courriels optionnels ",
  requiredEmails: "Courriels requis",
  passwordProperties: "6 à 48 caractères sans espace",
  noInternetConnexionFound: "Vous êtes hors-ligne",
  paypalLoginFirstTitle: "Liez d'abord votre compte Paypal",
  paypalLoginTitle: "Liez votre compte Paypal",
  paypalLoginSuccess: "Votre compte Paypal est lié avec succès",
  paypal: "Paypal",
  paypalNotLinked: "Pas encore lié",
  paypalLinked: "Compte lié",
  verifyEmailSubject: "Vérifiez votre email",
  verifyEmailTemplateTitle: "Il ne reste plus que une étape à la création de votre compte!",
  verifyEmailTemplateDescription: "Entrez le code de vérification dans l'application",
  wrongToken: "Code de vérification incorrect",
  verifyEmailTemplateHeader: "Bonjour et bienvenue sur la plateforme <b>KevinGervais</b>!",
  enterConfirmationCode: "Entrez le code de confirmation envoyé à votre email",
  validate: "Valider",
  verifCodeSent: "Code de confirmation envoyé",
  sendBugReport: "Envoyer un rapport de bug",
  operatingSystem: "Système d'exploitation",
  appVersion: "Version de KevinGervais",
  date: "Date",
  yearDateShort: "D MMMM YYYY",
  problemDescription: "Description du problème",
  createBugSuccess: "Rapport de bug envoyé avec succès",
  deleteBugSuccess: "Rapport de bogue supprimé avec succès",
  mobileApp: "App mobile",
  userAgent: "Agent de l'utilisateur",
  askDeleteBug: "Voulez-vous vraiment supprimer ce rapport de bug",
  more: "Plus",
  emailCopiedInClipboard: "Courriel copié dans le presse-papiers",
  liveChat: "Assistance par chat en direct",
  changeLocation: "Modifier la localisation",
  support: "Support",
  calendar: "Calendrier",
  commerceSearchPlaceholder: "Rechercher un commerce...",
  status: "Status",
  asOwner: "Comme propriétaire",
  asAdmin: "Comme admin",
  role: "Rôle",
  audience: "Audience",
  userPlaceholder: "Rechercher un utilisateur...",
  deleteCommerceFirst: "Supprimez d'abord votre ou vos commerces",
  finishPurchaseFirst: "Terminez d'abord votre/vos achât(s)",
  deleteMyAccount: "Supprimer mon compte",
  askDeleteYourAccount: "Êtes-vous sûr de vouloir supprimer votre compte de façon permanente ?",
  deleted: "Supprimé",
  generator: "Génératrice",
  loader: "chargeuse",
  total: "Total",
  refund: "Remboursement",
  taxes: "Taxes",
  maxDateLimitReached: "Limite de date maximale atteinte",
  months: "Mois+",
  hours: "h",
  minutes: "min",
  seconds: "sec",
  claims: "Réclamations",
  owner: "Vendeur",
  customer: "Client",
  tooSoonToInvoice: "Trop tôt pour faire une pacture",
  loginWithPaypalBrowser: "Liez Paypal via le navigateur",
  paymentProcessFailed: "Le processus de paiement a échoué",
  paypalNotLinkedToUser: "Paypal n'est pas lié à l'utilisateur",
  imagesRequired: "Images obligatoires",
  history: "Historique",
  invalidDate: "Date invalide",
  wrap: "Wrap",
  rice: "Riz",
  salad: "Salade",
  common: "Commun",
  uploadImage: "Télécharger une image",
  optional: "Optionnel",
  commerceAlreadyExists: "Ce commerce existe déjà",
  profileImage: "Image du profil",
  backgroundImage: "Image de fond",
  weight: "Poids (gramme)",
  both: "Les deux",
  choosePortionType: "Choisissez vos type de commandes",
  addDiscountAndExtras: "Ajouter des rabais",
  units: "Unités",
  unit: "Unité",
  gallery: "Gallerie",
  internetRestored: "Vous êtes en-ligne",
  tryAgain: "Erreur de serveur, réessayez encore!",
  stripe: "Stripe",
  orderId: "ID de commande",
  amount: "Montant",
  success: "Succès",
  streetExt: "Extension",
  streetExtPlaceholder: "Bureau 280",
  linkPaypal: "Liez Paypal",
  fullName: "Prénom et nom",
  none: "Aucun",
  cook: "Cuisinier",
  confirm: "Confirmer",
  or: "ou",
  ymd: "yyyy-mm-jj",
  payoutEmailMessage: (commerceTitle: string, userName: string) => `Vous avez reçu de l'argent pour la location du commerce: ${commerceTitle}, avec l'utilisateur: ${userName}`,
  createCommerceTemplateHeader: (commerceTitle: string) => html`Votre commerce <b>${commerceTitle}</b> vient d'être créé`,
  createUserTemplateHeader: (firstName: string) => html`Bonjour ${firstName} et bienvenue sur la plateforme <b>KevinGervais</b>!`,
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
  afg: "Afghanistan",
  zaf: "Afrique du Sud",
  alb: "Albanie",
  dza: "Algérie",
  deu: "Allemagne",
  and: "Andorre",
  ago: "Angola",
  atg: "Antigua-et-Barbuda",
  sau: "Arabie saoudite",
  arg: "Argentine",
  arm: "Arménie",
  aus: "Australie",
  aut: "Autriche",
  aze: "Azerbaïdjan",
  bhs: "Bahamas",
  bhr: "Bahreïn",
  bgd: "Bangladesh",
  brb: "Barbade",
  blr: "Biélorussie",
  bel: "Belgique",
  blz: "Belize",
  ben: "Bénin",
  btn: "Bhoutan",
  bol: "Bolivie",
  bih: "Bosnie-Herzégovine",
  bwa: "Botswana",
  bra: "Brésil",
  brn: "Brunei",
  bgr: "Bulgarie",
  bfa: "Burkina Faso",
  bdi: "Burundi",
  khm: "Cambodge",
  cmr: "Cameroun",
  can: "Canada",
  cpv: "Cap-Vert",
  caf: "République centrafricaine",
  chl: "Chili",
  chn: "Chine",
  cyp: "Chypre",
  col: "Colombie",
  com: "Comores",
  cog: "République du Congo",
  cod: "République démocratique du Congo",
  kor: "Corée du Sud",
  prk: "Corée du Nord",
  cri: "Costa Rica",
  civ: "Côte d'Ivoire",
  hrv: "Croatie",
  cub: "Cuba",
  dnk: "Danemark",
  dji: "Djibouti",
  dom: "République dominicaine",
  dma: "Dominique",
  egy: "Égypte",
  slv: "Salvador",
  are: "Émirats arabes unis",
  ecu: "Équateur",
  eri: "Érythrée",
  esp: "Espagne",
  est: "Estonie",
  usa: "États-Unis",
  eth: "Éthiopie",
  fji: "Fidji",
  fin: "Finlande",
  fra: "France",
  gab: "Gabon",
  gmb: "Gambie",
  geo: "Géorgie",
  gha: "Ghana",
  grc: "Grèce",
  grd: "Grenade",
  gtm: "Guatemala",
  gin: "Guinée",
  gnb: "Guinée-Bissau",
  gnq: "Guinée équatoriale",
  guy: "Guyana",
  hti: "Haïti",
  hnd: "Honduras",
  hun: "Hongrie",
  ind: "Inde",
  idn: "Indonésie",
  irn: "Iran",
  irq: "Irak",
  irl: "Irlande",
  isl: "Islande",
  isr: "Israël",
  ita: "Italie",
  jam: "Jamaïque",
  jpn: "Japon",
  jor: "Jordanie",
  kaz: "Kazakhstan",
  ken: "Kenya",
  kgz: "Kirghizistan",
  kir: "Kiribati",
  kwt: "Koweït",
  lao: "Laos",
  lso: "Lesotho",
  lva: "Lettonie",
  lbn: "Liban",
  lbr: "Liberia",
  lby: "Libye",
  lie: "Liechtenstein",
  ltu: "Lituanie",
  lux: "Luxembourg",
  mkd: "Macédoine du Nord",
  mdg: "Madagascar",
  mys: "Malaisie",
  mwi: "Malawi",
  mdv: "Maldives",
  mli: "Mali",
  mlt: "Malte",
  mar: "Maroc",
  mhl: "Îles Marshall",
  mus: "Maurice",
  mrt: "Mauritanie",
  mex: "Mexique",
  fsm: "États fédérés de Micronésie",
  mda: "Moldavie",
  mco: "Monaco",
  mng: "Mongolie",
  mne: "Monténégro",
  moz: "Mozambique",
  mmr: "Birmanie",
  nam: "Namibie",
  nru: "Nauru",
  npl: "Népal",
  nic: "Nicaragua",
  ner: "Niger",
  nga: "Nigeria",
  nor: "Norvège",
  nzl: "Nouvelle-Zélande",
  omn: "Oman",
  uga: "Ouganda",
  uzb: "Ouzbékistan",
  pak: "Pakistan",
  plw: "Palaos",
  pan: "Panama",
  png: "Papouasie-Nouvelle-Guinée",
  pry: "Paraguay",
  nld: "Pays-Bas",
  per: "Pérou",
  phl: "Philippines",
  pol: "Pologne",
  prt: "Portugal",
  pse: "Palestine",
  qat: "Qatar",
  rou: "Roumanie",
  gbr: "Royaume-Uni",
  rus: "Russie",
  rwa: "Rwanda",
  kna: "Saint-Christophe-et-Niévès",
  smr: "Saint-Marin",
  vct: "Saint-Vincent-et-les-Grenadines",
  lca: "Sainte-Lucie",
  slb: "Îles Salomon",
  wsm: "Samoa",
  stp: "Sao Tomé-et-Principe",
  sen: "Sénégal",
  srb: "Serbie",
  syc: "Seychelles",
  sle: "Sierra Leone",
  sgp: "Singapour",
  svk: "Slovaquie",
  svn: "Slovénie",
  som: "Somalie",
  sdn: "Soudan",
  ssd: "Soudan du Sud",
  lka: "Sri Lanka",
  swe: "Suède",
  che: "Suisse",
  sur: "Suriname",
  swz: "Eswatini",
  syr: "Syrie",
  tjk: "Tadjikistan",
  tza: "Tanzanie",
  tcd: "Tchad",
  cze: "Tchéquie",
  tha: "Thaïlande",
  tls: "Timor oriental",
  tgo: "Togo",
  ton: "Tonga",
  tto: "Trinité-et-Tobago",
  tun: "Tunisie",
  tkm: "Turkménistan",
  tur: "Turquie",
  tuv: "Tuvalu",
  ukr: "Ukraine",
  ury: "Uruguay",
  vut: "Vanuatu",
  ven: "Venezuela",
  vnm: "Viêt Nam",
  yem: "Yémen",
  zmb: "Zambie",
  zwe: "Zimbabwe",
  chickenWings: "Ailes de poulet",
  bagels: "Bagels",
  juiceSmoothieShakeBar: "Bar à jus de fruits/smoothie/shake",
  bbq: "Bbq",
  organic: "Bio",
  bistro: "Bistro",
  boréale: "Boréale",
  bakery: "Boulangerie",
  bubbleTeaPearlTea: "Bubble tea (thé aux perles)",
  burgers: "Burgers",
  sugarShack: "Cabane à sucre",
  hide: "Hide",
  coffee: "Café",
  cajun: "Cajun",
  snackBar: "Snack bar",
  delicatessen: "Épicerie fine",
  chocolateShop: "Chocolaterie",
  contemporaryModern: "Contemporain/moderne",
  continental: "Continental",
  couscous: "Couscous",
  creative: "Créatif",
  iceCream: "Crème glacée",
  creperie: "Crêperie",
  lunch: "Déjeuner",
  deli: "Deli",
  dessertsAndSweets: "Desserts et sucreries",
  eclectic: "Eclectique",
  exotic: "Exotique",
  fishChips: "Poisson et frites",
  fondue: "Fondue",
  seafoodFish: "Fruits de mer/poisson",
  smokehouse: "Fumoir",
  fusion: "Fusion",
  wildGame: "Gibier sauvage",
  grilledMeat: "Viande grillée",
  grilledCheese: "Fromage grillé",
  halal: "Halal",
  international: "International",
  teaHouse: "Salon de thé",
  market: "Marché",
  molecular: "Moléculaire",
  mussels: "Moules",
  pasta: "Pâtes",
  pastryShop: "Pâtisserie",
  pizza: "Pizza",
  pokeBowl: "Poke bowl",
  friedChicken: "Poulet frit",
  poutine: "Poutine",
  pubFood: "Cuisine de bistrot",
  raclette: "Raclette",
  ramen: "Ramen",
  comfortFood: "Plats réconfortants",
  rotisserie: "Rôtisserie",
  salads: "Salades",
  sandwichesOrSubs: "Sandwichs ou sous-marins",
  healthy: "Santé",
  smokedMeat: "Viande fumée",
  soups: "Soupes",
  steakhouse: "Steakhouse",
  sushi: "Sushi",
  tapas: "Tapas",
  tartare: "Tartare",
  groceryStore: "Épicerie",
  butcherShop: "Boucherie",
  restaurant: "Restaurant",
  caterer: "Traiteur",
  breakfast: "Déjeuner",
  dessert: "Dessert",
  eatInside: "Manger à l'intérieur",
  servesBreakfast: "Sert le déjeuner",
  servesBrunch: "Sert le Brunch",
  servesDinner: "Sert le souper",
  servesLunch: "Sert à dinner",
  servesVegetarianFood: "Sert végétarien",
  reservable: "Réservable",
  takeout: "À emporter",
  curbsidePickup: "Ramassage en bordure de route",
  wheelchairAccessibleEntrance: "Entrée accessible aux fauteuils roulants",
  createCommerce: "Créer un commerce",
  promos: "Promos",
  searchBakery: "Rechercher une boulangerie",
  searchGroceryStore: "Rechercher une épicerie",
  searchButcherShop: "Rechercher une boucherie",
  searchRestaurant: "Rechercher un restaurant",
  searchCaterer: "Rechercher un traiteur",
  searchBreakfast: "Rechercher pour un petit-déjeuner",
  searchDessert: "Rechercher pour des desserts",
  welcome: "Bienvenue",
  homeHeaderText:
    "Goûtez les riches saveurs de la cuisine halal traditionnelle dans nos restaurants et cherchez des boucheries halal ou trouvez des épiceries.",
  seeAll: "Voir tout",
  countries: "Pays",
  seeLess: "Voir moins",
  nearbyBakery: "Boulangeries à proximité",
  nearbyGroceryStore: "Épiceries à proximité",
  nearbyButcherShop: "Boucheries à proximité",
  nearbyRestaurant: "Restaurants à proximité",
  nearbyCaterer: "Traiteurs à proximité",
  nearbyBreakfast: "Petits déjeuners à proximité",
  nearbyDessert: "Desserts à proximité",
  newBakery: "Nouvelles boulangeries",
  newGroceryStore: "Nouvelles épiceries",
  newButcherShop: "Nouvelles boucheries",
  newRestaurant: "Nouveaux restaurants",
  newCaterer: "Nouveaux traiteurs",
  newBreakfast: "Nouveaux petits-déjeuners",
  newDessert: "Nouveaux desserts",
  details: "Plus d'infos",
  services: "Services",
  servedFood: "Nourriture servie",
  priceLevel: "Gamme de prix",
  openedNow: "Ouvert maintenant",
  ratingCount: "Nombre d'évaluations",
  deleteFilters: "Supprimer les filtres",
  sortBy: "Tirer par",
  newest: "Plus récent",
  highestRating: "Meilleure note",
  bestMatch: "Plus pertinent",
  low: "Faible",
  medium: "Moyen",
  high: "Élevé",
  searchPrecision: "Précision de la recherche",
  min: "Min",
  max: "Max",
  km: "km",
  emptyCommerceList: "Il n'y a pas de résultats de commerces pour ces filtres",
  emptyFavoritList: "Il n'y a pas de favoris enregistrés"
}
