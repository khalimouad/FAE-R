export const services = {
  medical: {
    name: "FAE-R Medical Supplies",
    icon: "/icons/medical-supplies.svg",
    categories: [
      { id: "kits", fr: "Trousses de premiers soins", en: "First aid kits", descriptionFr: "Précisez le nombre de sites, la taille de votre équipe et les usages prévus.", descriptionEn: "Share the number of locations, team size, and intended use." },
      { id: "replenishment", fr: "Réapprovisionnement", en: "Replenishment", descriptionFr: "Indiquez les articles à renouveler et les quantités souhaitées.", descriptionEn: "List the items to replenish and the quantities required." },
      { id: "aed", fr: "Équipements DEA", en: "AED equipment", descriptionFr: "Décrivez vos lieux d'installation et vos besoins en équipements.", descriptionEn: "Describe the installation locations and equipment requirements." },
    ],
  },
  training: {
    name: "Initials Flux",
    icon: "/icons/initials-flux.svg",
    categories: [
      { id: "first-aid", fr: "Formation en secourisme", en: "First aid training", descriptionFr: "Précisez le nombre de participants et les objectifs de votre organisation.", descriptionEn: "Share the participant count and your organization's learning goals." },
      { id: "workshops", fr: "Ateliers SST", en: "Workplace safety workshops", descriptionFr: "Choisissez les thèmes à aborder et le contexte de votre équipe.", descriptionEn: "Describe the topics and the context of your team." },
      { id: "audits", fr: "Audits de sécurité", en: "Safety audits", descriptionFr: "Décrivez vos activités et les espaces que vous souhaitez faire examiner.", descriptionEn: "Describe your operations and the areas you would like reviewed." },
    ],
  },
} as const;
export type Service = keyof typeof services;
