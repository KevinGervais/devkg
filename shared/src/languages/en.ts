import "dayjs/locale/fr"

import {
  EnSay
} from "."
import { html } from "../functions"

export const en = {
  today: "Today",
  ok: "Ok",
  home: "Home",
  email: "Email",
  emailPlaceholder: "example@email.com",
  password: "Password",
  login: "Login",
  loginHeader: "Login to KevinGervais",
  forgotPassword: "Forgot password?",
  userAlreadyLogged: "User already logged",
  userDoesntExists: "User doesn't exists",
  wrongPassword: "Wrong password",
  userAlreadyExists: "User already exists",
  accessDenied: "Access denied",
  logout: "Logout",
  send: "Send",
  forgotPasswordHeader: "Enter your email to receive a temporary password.",
  passwordSent: "Password sent by email!",
  en: "English",
  fr: "French",
  joinUs: "Join us",
  privacyPolicy: "Privacy policy",
  termsAndConditions: "terms & conditions",
  bugReport: "Bug report",
  mission: "Mission",
  contact: "Contact",
  emails: "Emails",
  phone: "Phone",
  copy: "Copy",
  favorites: "Favorites",
  draft: "Draft",
  public: "Public",
  private: "Private",
  edit: "Edit",
  yes: "Yes",
  no: "No",
  pressButton5Times: "Press the button 5 times",
  firstName: "First name",
  lastName: "Last name",
  download: "Download",
  writeComment: "Write a comment...",
  cancel: "Annuler",
  applyPolicies: "By navigating on kevingervais.ca, I accept the <a href='https://kevingervais.ca/terms'>Terms and Conditions</a> and the <a href='https://kevingervais.ca/privacy'>Privacy Policies</a>.",
  wrongFileSize: "Wrong file size",
  profile: "Profile",
  comment: "Comment",
  creationDate: "Creation date",
  title: "Title",
  admin: "Admin",
  users: "Users",
  createUser: "Create user",
  create: "Create",
  deleteUserSuccess: "User deleted successfully",
  all: "All",
  sendEmail: "Send a mail",
  subject: "Subject",
  content: "Content",
  header: "Header",
  editPassword: "Edit password",
  delete: "Delete",
  newPassword: "New password",
  confirmedNewPassword: "Confirm password",
  passwordSuccess: "Password edited successfully",
  passwordNotMatching: "Password does not match",
  wrongNewPassword: "The new password is supposed to be between 6 to 40 charaters",
  invalidValidator: "Requête invalide",
  sendMessage: "Send message",
  questionSentFrom: "Question sent from:",
  question: "Question:",
  pageNotFound: "Page not found",
  bugReportSubject: "Bug report: ",
  bugSentFrom: "Bug reported by: ",
  dataDoesntExists: "Data requested from server doesn't exists",
  missingField: "Missing field",
  emailSuccess: "Email sent successfully",
  userCreateSuccess: "Account created successfully",
  userUpdateSuccess: "User edited successfully",
  commerceUpdateSuccess: "Commerce edited successfully",
  firstNamePlaceholder: "John",
  lastNamePlaceholder: "Doe",
  invalidEmail: "Invalid email",
  corruptedData: "The data you requested are corrupted",
  searchCommerce: "Search for a commerce...",
  categories: "Categories",
  search: "Search",
  where: "Where",
  quickLinks: "Quick links",
  downloadApp: "Download application",
  downloadAppDescription: "For a quick and easy way to order large quantities of food for events on your mobile!",
  downloadOnThe: "Download on the",
  getItOn: "Get it on",
  appleStore: "App Store",
  googlePlay: "Google Play",
  allRightsReserved: "All rights reserved",
  downloadOurApp: "Download our application!",
  downloadAppLongDescription: "Stay up to date with the best food preparation offers and stay connected with our notification service so you don't miss anything!",
  sellYourCommerces: "Find any Halal commerce",
  andGetPaid: "Near you!",
  publishCommercesDescription: "With KevinGervais, halal shopping has never been easier!",
  getStartedNow: "Get started now!",
  address: "PostalAddress",
  addressPlaceholder: "City, PostalAddress or postal code",
  streetNumber: "Street number",
  streetName: "Street name",
  streetNamePlaceholder: "St-michel street",
  next: "Next",
  previous: "previous",
  city: "City",
  cityPlaceholder: "Montreal",
  postalCode: "Postal code",
  postalCodePlaceholder: "H1H",
  state: "State/Province",
  statePlaceholder: "Quebec",
  country: "Country",
  countryPlaceholder: "Canada",
  canada: "Canada",
  unitedStates: "United States",
  alberta: "Alberta",
  britishColumbia: "British Columbia",
  manitoba: "Manitoba",
  newBrunswick: "New Brunswick",
  newfoundlandAndLabrador: "Newfoundland and Labrador",
  northwestTerritories: "Northwest Territories",
  novaScotia: "Nova Scotia",
  nunavut: "Nunavut",
  ontario: "Ontario",
  princeEdwardIsland: "Prince Edward Island",
  quebec: "Quebec",
  saskatchewan: "Saskatchewan",
  yukonTerritory: "Yukon Territory",
  alabama: "Alabama",
  alaska: "Alaska",
  arizona: "Arizona",
  arkansas: "Arkansas",
  california: "California",
  colorado: "Colorado",
  connecticut: "Connecticut",
  delaware: "Delaware",
  districtOfColumbia: "District of Columbia",
  florida: "Florida",
  georgia: "Georgia",
  hawaii: "Hawaii",
  idaho: "Idaho",
  illinois: "Illinois",
  indiana: "Indiana",
  iowa: "Iowa",
  kansas: "Kansas",
  kentucky: "Kentucky",
  louisiana: "Louisiana",
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
  newMexico: "New Mexico",
  newYork: "New York",
  northCarolina: "North Carolina",
  northDakota: "North Dakota",
  ohio: "Ohio",
  oklahoma: "Oklahoma",
  oregon: "Oregon",
  pennsylvania: "Pennsylvania",
  rhodeIsland: "Rhode Island",
  southCarolina: "South Carolina",
  southDakota: "South Dakota",
  tennessee: "Tennessee",
  texas: "Texas",
  utah: "Utah",
  vermont: "Vermont",
  virginia: "Virginia",
  washington: "Washington",
  westVirginia: "West Virginia",
  wisconsin: "Wisconsin",
  wyoming: "Wyoming",
  locationNotSupported: "Your location is not supported",
  invalidLocation: "Your address is invalid",
  describeCommerce: "Describe your commerce",
  commerceTitle: "Commerce title",
  commerceTitlePlaceholder: "4 layer lasagne",
  category: "Category",
  other: "Other",
  description: "Description",
  uploadCommercePhotos: "Upload commerce photos",
  uploadImages: "Upload images *",
  deposit: "Deposit",
  publishCommerce: "Publish commerce",
  commerceCreateSuccess: "Commerce created successfully",
  goodMorning: "Good morning",
  goodAfternoon: "Good afternoon",
  goodEvening: "Good evening",
  recentlyFeatured: "Recently featured",
  day: "Day",
  week: "Week",
  month: "Month",
  filters: "Filters",
  clear: "Clear",
  kmRadius: "km radius",
  avatar: "Avatar",
  commerce: "Commerce",
  notRatedYet: "Not rated yet",
  reserve: "Reserve",
  dashboard: "Dashboard",
  settings: "Settings",
  price: "Price",
  location: "Location",
  ratings: "Ratings",
  conversations: "Conversations",
  you: "You",
  language: "Language",
  invalidPhone: "Invalid phone",
  approved: "Approved",
  inReview: "In review",
  changesInReview: "Changes in review",
  rejected: "Rejected",
  changesRejected: "Changes rejected",
  commerces: "Commerces",
  purchases: "Purchases",
  deleteCommerce: "Delete commerce",
  makeCommercePrivate: "Make commerce private",
  makeCommercePublic: "make commerce public",
  editCommerce: "Edit commerce",
  seeCommerceDetails: "See commerce details",
  reviewCommerce: "Review commerce",
  approve: "Approve",
  reject: "Reject",
  rejectedMessage: "Rejected message",
  days: "Days",
  payment: "Payment",
  billingAddress: "Billing address",
  deliveryAddress: "Delivery address",
  delivery: "Delivery",
  invalidPrice: "Prix invalide",
  internalServerError: "Internal server error",
  requested: "Requested",
  save: "Save",
  new: "New",
  review: "Review",
  purchase: "Purchase",
  commerceId: "Commerce ID",
  giveReview: "Give a review",
  reviewCreateSuccess: "Review created successfully",
  reviewUpdateSuccess: "Review updated successfully",
  rating: "Rating",
  editReview: "Edit review",
  withDescription: "With description",
  titlePlaceholder: "Enter a title...",
  reviewPlaceholder: "Enter a review...",
  reviews: "Reviews",
  noReviewsYet: "There are no reviews yet",
  thisOwner: "This owner",
  thisCommerce: "This commerce",
  note: "Note",
  oldPassword: "Old password",
  standard: "Standard",
  pro: "Pro",
  resetPasswordSubject: "Password changed",
  createUserSubject: "Account just created",
  createCommerceSubject: "Commerce just created",
  updateCommerceSubject: "Commerce status changed",
  changedEmailTemplateSubject: "Your email just changed",
  createUserTemplateTitle: "Your account has just been created!",
  createUserTemplateDescription: "You can access your account with your email",
  resetPasswordTemplateTitle: "Your password for <b>KevinGervais</b> has just been changed.",
  invoice: "Invoice",
  invoices: "Invoices",
  payoutEmailSubject: "KevinGervais sent you money",
  cityLocationPlaceholder: "Enter a city in canada or postal code",
  approximateLocation: "we need an approximate location to start!",
  approximateLocationAlt: "we need an approximate location",
  welcomeToKevinGervais: "Welcome to KevinGervais!",
  verifCodeFirst: "First, enter verification code from your emails",
  temporaryPassword: "Temporary password",
  updateUserEmailTemplateTitle: "Your email for <b>KevinGervais</b> has just been changed.",
  updateUserEmailTemplateDescription: "You can access your account with your new email",
  updateUserEmailTemplateOld: "Your old email was",
  confirmationCode: "Confirmation code",
  verifCodeIndications: "<p>You can enter the verification code in the app:</p> <span\n  class=\"inline-block rounded-md mt-2 mx-2 py-2 px-3 bg-grey-200\">Top nav → Avatar dropdown (needs login) →\n  Confirmation Code</span>",
  enterConfirmationCodeEmails: "Enter the confirmation code sent to your new email",
  cancelChanges: "Cancel changes",
  resendCode: "Resend code",
  enterCode: "Enter code",
  noActiveCode: "There is no active confirmation code",
  verifCode: "Confirmation code",
  createCommerceTitle: "Your commerce is now in the evaluation process.",
  createCommerceDescription: "If accepted, it will be made public.",
  emailPreferences: "Email preferences",
  notificationPreferences: "Notification preferences",
  commerceCreation: "Commerce creation",
  userCreation: "User creation",
  updateEmail: "Edit email",
  updatePassword: "Edit password",
  resetPassword: "Reset password",
  commerceStatusChange: "Commerce status change",
  chooseRecieveEmails: "Choose when you want to receive emails",
  chooseRecieveNotifications: "Choose when you want to receive notifications",
  optionalEmails: "Optional emails",
  requiredEmails: "Required emails",
  passwordProperties: "6 to 48 characters without space",
  noInternetConnexionFound: "You are offline",
  paypalLoginFirstTitle: "Link your Paypal account first",
  paypalLoginTitle: "Link your Paypal account",
  paypalLoginSuccess: "Your paypal account is successfully linked",
  paypal: "Paypal",
  paypalNotLinked: "Not linked yet",
  paypalLinked: "Account linked",
  verifyEmailSubject: "Verify your email",
  verifyEmailTemplateTitle: "There is only 1 step left to create your account!",
  verifyEmailTemplateDescription: "Enter the verification code in the application",
  wrongToken: "Wrong verification code",
  verifyEmailTemplateHeader: "Hi! Welcome to the platform <b>KevinGervais</b>!",
  enterConfirmationCode: "Enter confirmation code received in your emails",
  validate: "Validate",
  verifCodeSent: "Verification code sent",
  sendBugReport: "Send an bug report",
  operatingSystem: "Operating system",
  appVersion: "Version of KevinGervais",
  date: "Date",
  yearDateShort: "MMMM D, YYYY",
  problemDescription: "Problem description",
  createBugSuccess: "Bug report sent successfully",
  deleteBugSuccess: "Bug report deleted successfully",
  mobileApp: "Mobile app",
  userAgent: "User agent",
  askDeleteBug: "Do you really want to delete this bug report",
  more: "More",
  emailCopiedInClipboard: "Email copied in clipboard",
  liveChat: "Live chat support",
  changeLocation: "change location",
  support: "Support",
  calendar: "Calendar",
  commerceSearchPlaceholder: "Search a commerce...",
  status: "Status",
  asOwner: "As owner",
  asAdmin: "As admin",
  role: "Role",
  audience: "Audience",
  userPlaceholder: "Search a user...",
  deleteCommerceFirst: "Delete your commerce(s) first",
  finishPurchaseFirst: "Finish your purchase(s) first",
  deleteMyAccount: "Delete my account",
  askDeleteYourAccount: "Are you sure you want to delete your account permanently",
  deleted: "Deleted",
  generator: "Generator",
  loader: "Loader",
  total: "Total",
  refund: "Refund",
  taxes: "Taxes",
  maxDateLimitReached: "Max date limit reached",
  months: "month(s)",
  hours: "h",
  minutes: "min",
  seconds: "sec",
  claims: "Claims",
  owner: "Owner",
  customer: "Customer",
  tooSoonToInvoice: "Too soon to make an invoice",
  loginWithPaypalBrowser: "Link Paypal on the browser",
  paymentProcessFailed: "Payment process failed",
  paypalNotLinkedToUser: "Paypal not linked to user",
  imagesRequired: "Images required",
  history: "History",
  invalidDate: "Invalid date",
  wrap: "Wrap",
  rice: "Rice",
  salad: "Salad",
  common: "Common",
  uploadImage: "Upload image",
  optional: "Optional",
  commerceAlreadyExists: "This commerce already exists",
  profileImage: "Profile image",
  backgroundImage: "Background image",
  weight: "Weight (gram)",
  both: "Both",
  choosePortionType: "Choose your order types",
  addDiscountAndExtras: "Add discounts",
  units: "Units",
  unit: "Unit",
  gallery: "Gallery",
  internetRestored: "You are online",
  tryAgain: "Server error, try again!",
  stripe: "Stripe",
  orderId: "Order ID",
  amount: "Amount",
  success: "Success",
  streetExt: "Extension",
  streetExtPlaceholder: "Office 280",
  linkPaypal: "Link Paypal",
  fullName: "Full name",
  none: "None",
  cook: "Cook",
  confirm: "Confirm",
  or: "or",
  ymd: "yyyy-mm-dd",
  payoutEmailMessage: (commerceTitle: string, userName: string) => `You received money for the commerce location: ${commerceTitle}, with user: ${userName}`,
  createCommerceTemplateHeader: (commerceTitle: string) => html`Your commerce <b>${commerceTitle}</b> has just been created`,
  createUserTemplateHeader: (firstName: string) => html`Hi ${firstName} and welcome to the platform <b>KevinGervais</b>!`,
  updateCommerceTemplateHeader: (commerceTitle: string) => html`The status for your commerce <b>${commerceTitle}</b> has changed`,
  updateCommerceTitle: (commerceStatus: string) => `Your commerce status is now <b>${commerceStatus}</b>`,
  updateCommerceNotifTitle: (satus: string) => `Your commerce status is now ${satus}`,
  updateCommerceNotifDescription: (commerceTitle: string) => `For the commerce ${commerceTitle}`,
  askDeleteCommerce: (title: string) => `Do you really want to delete the commerce ${title}?`,
  askDeleteUser: (firstName: string, lastName: string) => `Are you sure to delete permanently user ${firstName} ${lastName}`,
  greetingWithName: (name: string) => `Hey ${name}!`,
  askApproveCommerce: (title: string) => `Do you really want to approve the commerce ${title}?`,
  askRejectCommerce: (title: string) => `Do you really want to reject the commerce ${title}?`,
  pressMe: (value: number) => `Press me ${value} times`,
  loginWith: (brand: string) => `Login with ${brand.slice(0, 1).toUpperCase()}${brand.slice(1)}`,
  afg: "Afghanistan",
  alb: "Albania",
  dza: "Algeria",
  and: "Andorra",
  ago: "Angola",
  atg: "Antigua and Barbuda",
  arg: "Argentina",
  arm: "Armenia",
  aus: "Australia",
  aut: "Austria",
  aze: "Azerbaijan",
  bhs: "Bahamas",
  bhr: "Bahrain",
  bgd: "Bangladesh",
  brb: "Barbados",
  blr: "Belarus",
  bel: "Belgium",
  blz: "Belize",
  ben: "Benin",
  btn: "Bhutan",
  bol: "Bolivia (Plurinational State of)",
  bih: "Bosnia and Herzegovina",
  bwa: "Botswana",
  bra: "Brazil",
  brn: "Brunei Darussalam",
  bgr: "Bulgaria",
  bfa: "Burkina Faso",
  bdi: "Burundi",
  cpv: "Cabo Verde",
  khm: "Cambodia",
  cmr: "Cameroon",
  can: "Canada",
  caf: "Central African Republic",
  tcd: "Chad",
  chl: "Chile",
  chn: "China",
  col: "Colombia",
  com: "Comoros",
  cog: "Congo",
  cod: "Congo, Democratic Republic of the",
  cri: "Costa Rica",
  civ: "Côte d'Ivoire",
  hrv: "Croatia",
  cub: "Cuba",
  cyp: "Cyprus",
  cze: "Czechia",
  dnk: "Denmark",
  dji: "Djibouti",
  dma: "Dominica",
  dom: "Dominican Republic",
  ecu: "Ecuador",
  egy: "Egypt",
  slv: "El Salvador",
  gnq: "Equatorial Guinea",
  eri: "Eritrea",
  est: "Estonia",
  swz: "Eswatini",
  eth: "Ethiopia",
  fji: "Fiji",
  fin: "Finland",
  fra: "France",
  gab: "Gabon",
  gmb: "Gambia",
  geo: "Georgia",
  deu: "Germany",
  gha: "Ghana",
  grc: "Greece",
  grd: "Grenada",
  gtm: "Guatemala",
  gin: "Guinea",
  gnb: "Guinea-Bissau",
  guy: "Guyana",
  hti: "Haiti",
  hnd: "Honduras",
  hun: "Hungary",
  isl: "Iceland",
  ind: "India",
  idn: "Indonesia",
  irn: "Iran (Islamic Republic of)",
  irq: "Iraq",
  irl: "Ireland",
  isr: "Israel",
  ita: "Italy",
  jam: "Jamaica",
  jpn: "Japan",
  jor: "Jordan",
  kaz: "Kazakhstan",
  ken: "Kenya",
  kir: "Kiribati",
  prk: "Korea (Democratic People's Republic of)",
  kor: "Korea, Republic of",
  kwt: "Kuwait",
  kgz: "Kyrgyzstan",
  lao: "Lao People's Democratic Republic",
  lva: "Latvia",
  lbn: "Lebanon",
  lso: "Lesotho",
  lbr: "Liberia",
  lby: "Libya",
  lie: "Liechtenstein",
  ltu: "Lithuania",
  lux: "Luxembourg",
  mdg: "Madagascar",
  mwi: "Malawi",
  mys: "Malaysia",
  mdv: "Maldives",
  mli: "Mali",
  mlt: "Malta",
  mhl: "Marshall Islands",
  mrt: "Mauritania",
  mus: "Mauritius",
  mex: "Mexico",
  fsm: "Micronesia (Federated States of)",
  mda: "Moldova, Republic of",
  mco: "Monaco",
  mng: "Mongolia",
  mne: "Montenegro",
  mar: "Morocco",
  moz: "Mozambique",
  mmr: "Myanmar",
  nam: "Namibia",
  nru: "Nauru",
  npl: "Nepal",
  nld: "Netherlands",
  nzl: "New Zealand",
  nic: "Nicaragua",
  ner: "Niger",
  nga: "Nigeria",
  mkd: "North Macedonia",
  nor: "Norway",
  omn: "Oman",
  pak: "Pakistan",
  plw: "Palau",
  pan: "Panama",
  png: "Papua New Guinea",
  pry: "Paraguay",
  per: "Peru",
  phl: "Philippines",
  pol: "Poland",
  prt: "Portugal",
  pse: "Palestine",
  qat: "Qatar",
  rou: "Romania",
  rus: "Russian Federation",
  rwa: "Rwanda",
  kna: "Saint Kitts and Nevis",
  lca: "Saint Lucia",
  vct: "Saint Vincent and the Grenadines",
  wsm: "Samoa",
  smr: "San Marino",
  stp: "Sao Tome and Principe",
  sau: "Saudi Arabia",
  sen: "Senegal",
  srb: "Serbia",
  syc: "Seychelles",
  sle: "Sierra Leone",
  sgp: "Singapore",
  svk: "Slovakia",
  svn: "Slovenia",
  slb: "Solomon Islands",
  som: "Somalia",
  zaf: "South Africa",
  ssd: "South Sudan",
  esp: "Spain",
  lka: "Sri Lanka",
  sdn: "Sudan",
  sur: "Suriname",
  swe: "Sweden",
  che: "Switzerland",
  syr: "Syrian Arab Republic",
  tjk: "Tajikistan",
  tza: "Tanzania, United Republic of",
  tha: "Thailand",
  tls: "Timor-Leste",
  tgo: "Togo",
  ton: "Tonga",
  tto: "Trinidad and Tobago",
  tun: "Tunisia",
  tur: "Türkiye",
  tkm: "Turkmenistan",
  tuv: "Tuvalu",
  uga: "Uganda",
  ukr: "Ukraine",
  are: "United Arab Emirates",
  gbr: "United Kingdom of Great Britain and Northern Ireland",
  usa: "United States of America",
  ury: "Uruguay",
  uzb: "Uzbekistan",
  vut: "Vanuatu",
  ven: "Venezuela (Bolivarian Republic of)",
  vnm: "Viet Nam",
  yem: "Yemen",
  zmb: "Zambia",
  zwe: "Zimbabwe",
  chickenWings: "Chicken wings",
  bagels: "Bagels",
  juiceSmoothieShakeBar: "Juice/smoothie/shake bar",
  bbq: "Bbq",
  organic: "Organic",
  bistro: "Bistro",
  boréale: "Boréale",
  bakery: "Bakery",
  bubbleTeaPearlTea: "Bubble tea (pearl tea)",
  burgers: "Burgers",
  sugarShack: "Sugar shack",
  hide: "Hide",
  coffee: "Coffee",
  cajun: "Cajun",
  snackBar: "Snack bar",
  delicatessen: "Delicatessen",
  chocolateShop: "Chocolate shop",
  contemporaryModern: "Contemporary/modern",
  continental: "Continental",
  couscous: "Couscous",
  creative: "Creative",
  iceCream: "Ice cream",
  creperie: "Creperie",
  lunch: "Lunch",
  deli: "Deli",
  dessertsAndSweets: "Desserts and sweets",
  eclectic: "Eclectic",
  exotic: "Exotic",
  fishChips: "Fish & chips",
  fondue: "Fondue",
  seafoodFish: "Seafood/fish",
  smokehouse: "Smokehouse",
  fusion: "Fusion",
  wildGame: "Wild game",
  grilledMeat: "Grilled meat",
  grilledCheese: "Grilled cheese",
  halal: "Halal",
  international: "International",
  teaHouse: "Tea house",
  market: "Market",
  molecular: "Molecular",
  mussels: "Mussels",
  pasta: "Pasta",
  pastryShop: "Pastry shop",
  pizza: "Pizza",
  pokeBowl: "Poke bowl",
  friedChicken: "Fried chicken",
  poutine: "Poutine",
  pubFood: "Pub food",
  raclette: "Raclette",
  ramen: "Ramen",
  comfortFood: "Comfort food",
  rotisserie: "Rotisserie",
  salads: "Salads",
  sandwichesOrSubs: "Sandwiches or subs",
  healthy: "Healthy",
  smokedMeat: "Smoked meat",
  soups: "Soups",
  steakhouse: "Steakhouse",
  sushi: "Sushi",
  tapas: "Tapas",
  tartare: "Tartare",
  groceryStore: "Grocery store",
  butcherShop: "Butcher shop",
  restaurant: "Restaurant",
  caterer: "Caterer",
  breakfast: "Breakfast",
  dessert: "Dessert",
  eatInside: "Eat inside",
  servesBreakfast: "Serves breakfast",
  servesBrunch: "Serves brunch",
  servesDinner: "Serves dinner",
  servesLunch: "Serves lunch",
  servesVegetarianFood: "Serves vegetarian food",
  reservable: "Reservable",
  takeout: "Takeout",
  curbsidePickup: "Curbside pickup",
  wheelchairAccessibleEntrance: "Wheelchair accessible entrance",
  createCommerce: "Create commerce",
  promos: "Promos",
  searchBakery: "Search a bakery",
  searchGroceryStore: "Search a grocery store",
  searchButcherShop: "Search a butcher shop",
  searchRestaurant: "Search a restaurant",
  searchCaterer: "Search a caterer",
  searchBreakfast: "Search for breakfast",
  searchDessert: "Search for a dessert",
  welcome: "Welcome",
  homeHeaderText: "Taste the rich flavours of traditional halal cuisine at our restaurants and Search Halal butchery shops or find grocery stores.",
  seeAll: "See all",
  countries: "Countries",
  seeLess: "See less",
  nearbyBakery: "Nearby bakeries",
  nearbyGroceryStore: "Nearby grocery stores",
  nearbyButcherShop: "Nearby butcher shops",
  nearbyRestaurant: "Nearby Restaurants",
  nearbyCaterer: "Nearby Caterers",
  nearbyBreakfast: "Nearby breakfasts",
  nearbyDessert: "Nearby desserts",
  newBakery: "New bakeries",
  newGroceryStore: "New grocery stores",
  newButcherShop: "New butcher shops",
  newRestaurant: "New Restaurants",
  newCaterer: "New Caterers",
  newBreakfast: "New breakfasts",
  newDessert: "New desserts",
  details: "Details",
  services: "Services",
  servedFood: "Served food",
  priceLevel: "Price level",
  openedNow: "Opened now",
  ratingCount: "Number of rating",
  deleteFilters: "Delete filters",
  sortBy: "Sort by",
  newest: "Newest",
  highestRating: "Highest rating",
  bestMatch: "Best match",
  low: "Low",
  medium: "Medium",
  high: "High",
  searchPrecision: "Search precision",
  min: "Min",
  max: "Max",
  km: "km",
  emptyCommerceList: "There is no commerce results for those filters",
  emptyFavoritList: "There is no favorites saved"
} as const

export const enSay: EnSay = en