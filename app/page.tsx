"use client";

import { useState } from "react";

type Locale = "fr" | "en";

const copy = {
  fr: {
    nav: ["Accueil", "Nos divisions", "Nos espaces"],
    language: "EN",
    eyebrow: "FAE-R INC. · MONTRÉAL, QUÉBEC",
    titleA: "La prévention",
    titleB: "en action.",
    intro: "Des solutions de premiers soins et de santé-sécurité au travail pour les entreprises et les communautés.",
    explore: "Découvrir nos divisions",
    supplies: "FAE-R Medical Supplies",
    training: "Initials Flux",
    supplyText: "Trousses de premiers soins, réapprovisionnement et équipements DEA pour les organisations.",
    trainingText: "Formations en secourisme, ateliers de santé-sécurité et audits de sécurité adaptés aux organisations.",
    learn: "En savoir plus",
    divisionsKicker: "CE QUE NOUS FAISONS",
    divisionsTitle: "Deux divisions, une mission de prévention.",
    spacesKicker: "NOTRE MODÈLE OPÉRATIONNEL",
    spacesTitle: "Huit espaces pour relier les besoins.",
    spacesIntro: "Une structure pensée pour connecter les activités, les partenaires et les personnes autour de la prévention.",
    spaces: [
      ["Blue", "Direction et gouvernance"],
      ["Black", "Sécurité, formation SST"],
      ["White", "Santé et matériel médical"],
      ["Red", "Développement commercial"],
      ["Silver", "Services directs aux entreprises"],
      ["Gold", "Offres partenaires et programmes employés"],
      ["Transparent", "Écoute et rétroaction"],
      ["Brown", "Réseau d'entraide communautaire"],
    ],
    approachKicker: "NOTRE APPROCHE",
    approachTitle: "Des services adaptés aux réalités du terrain.",
    approachText: "FAE-R INC. accompagne les PME et les institutions avec une approche intégrée de la prévention : du matériel de premiers soins aux activités de formation et de sensibilisation.",
    contactTitle: "Parlons de vos besoins.",
    contactText: "Pour une demande de renseignements, de matériel ou de formation, écrivez-nous.",
    contact: "Nous contacter",
    quote: "Demander une soumission",
    footer: "First Aid Express Response Inc. · Montréal, Québec",
    note: "Les services et disponibilités sont à confirmer selon votre demande. Les renseignements sur cette page ne constituent pas une garantie de conformité réglementaire.",
    mailSubject: "Demande de renseignements FAE-R",
    quoteSubject: "Demande de soumission FAE-R",
    backTop: "Retour en haut",
  },
  en: {
    nav: ["Home", "Our divisions", "Our spaces"],
    language: "FR",
    eyebrow: "FAE-R INC. · MONTRÉAL, QUÉBEC",
    titleA: "Prevention",
    titleB: "in action.",
    intro: "First aid and workplace health and safety solutions for businesses and communities.",
    explore: "Explore our divisions",
    supplies: "FAE-R Medical Supplies",
    training: "Initials Flux",
    supplyText: "First aid kits, replenishment, and AED equipment for organizations.",
    trainingText: "First aid training, workplace health and safety workshops, and safety audits for organizations.",
    learn: "Learn more",
    divisionsKicker: "WHAT WE DO",
    divisionsTitle: "Two divisions, one prevention mission.",
    spacesKicker: "OUR OPERATING MODEL",
    spacesTitle: "Eight spaces connecting needs.",
    spacesIntro: "A structure designed to connect activities, partners, and people around prevention.",
    spaces: [
      ["Blue", "Leadership and governance"],
      ["Black", "Safety and workplace training"],
      ["White", "Health and medical supplies"],
      ["Red", "Business development"],
      ["Silver", "Direct business services"],
      ["Gold", "Partner offers and employee programs"],
      ["Transparent", "Listening and feedback"],
      ["Brown", "Community support network"],
    ],
    approachKicker: "OUR APPROACH",
    approachTitle: "Services shaped around real-world needs.",
    approachText: "FAE-R INC. supports small and medium-sized businesses and institutions with an integrated approach to prevention, from first aid supplies to training and awareness activities.",
    contactTitle: "Let’s discuss what you need.",
    contactText: "For information, supplies, or training inquiries, send us a message.",
    contact: "Contact us",
    quote: "Request a quote",
    footer: "First Aid Express Response Inc. · Montréal, Québec",
    note: "Services and availability are confirmed based on your inquiry. Information on this page does not guarantee regulatory compliance.",
    mailSubject: "FAE-R information request",
    quoteSubject: "FAE-R quote request",
    backTop: "Back to top",
  },
};

function mailto(subject: string) {
  return `mailto:info@faer.ca?subject=${encodeURIComponent(subject)}`;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const t = copy[locale];

  return (
    <main id="top">
      <header className="nav">
        <a className="brand" href="#top" aria-label="FAE-R, home">
          <span className="mark">F</span><span>FAE-R <em>INC.</em></span>
        </a>
        <nav className="navLinks" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          <a href="#top">{t.nav[0]}</a>
          <a href="#divisions">{t.nav[1]}</a>
          <a href="#spaces">{t.nav[2]}</a>
        </nav>
        <button className="language" type="button" onClick={() => setLocale(locale === "fr" ? "en" : "fr")} aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}>
          {t.language}
        </button>
      </header>

      <section className="hero">
        <div className="heroInner">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.titleA}<br /><span>{t.titleB}</span></h1>
          <p>{t.intro}</p>
          <a className="cta" href="#divisions">{t.explore}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="heroBadge" aria-hidden="true"><span className="badgeCross">+</span><span>PRÉVENIR<br />· PROTÉGER<br />· AGIR</span></div>
      </section>

      <section className="content divisions" id="divisions">
        <div className="sectionHead"><div><span className="eyebrow">{t.divisionsKicker}</span><h2>{t.divisionsTitle}</h2></div></div>
        <div className="divisionGrid">
          <article className="divisionCard supplyCard">
            <span className="cardIndex">01 / MEDICAL SUPPLIES</span><span className="cardSymbol" aria-hidden="true">✳</span>
            <h3>{t.supplies}</h3><p>{t.supplyText}</p>
            <a className="textLink" href="#contact">{t.learn}<span aria-hidden="true"> ↗</span></a>
          </article>
          <article className="divisionCard trainingCard">
            <span className="cardIndex">02 / TRAINING &amp; SST</span><span className="cardSymbol" aria-hidden="true">✳</span>
            <h3>{t.training}</h3><p>{t.trainingText}</p>
            <a className="textLink" href="#contact">{t.learn}<span aria-hidden="true"> ↗</span></a>
          </article>
        </div>
      </section>

      <section className="spacesSection" id="spaces">
        <div className="content">
          <div className="sectionHead"><div><span className="eyebrow">{t.spacesKicker}</span><h2>{t.spacesTitle}</h2><p className="sectionIntro">{t.spacesIntro}</p></div></div>
          <div className="spacesGrid">
            {t.spaces.map(([name, description], i) => <article className="spaceCard" key={name}>
              <span className="spaceNumber">0{i + 1}</span><h3><span className={`spaceDot dot${i}`} aria-hidden="true" />{name}</h3><p>{description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="content approach">
        <span className="eyebrow">{t.approachKicker}</span>
        <div className="approachGrid"><h2>{t.approachTitle}</h2><p>{t.approachText}</p></div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactInner"><div><span className="eyebrow">{t.eyebrow}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
          <div className="contactActions"><a className="cta" href={mailto(t.mailSubject)}>{t.contact}<span aria-hidden="true">↗</span></a><a className="outlineCta" href={mailto(t.quoteSubject)}>{t.quote}</a></div>
        </div>
      </section>
      <footer><span>© {new Date().getFullYear()} {t.footer}</span><span className="footerNote">{t.note}</span><a href="#top">{t.backTop} ↑</a></footer>
    </main>
  );
}
