"use client";

import { useEffect, useState } from "react";

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

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
function mailto(subject: string) {
  return `mailto:${contactEmail || ""}?subject=${encodeURIComponent(subject)}`;
}


function MedicalIllustration() {
  return (
    <svg className="medicalIllustration" viewBox="0 0 440 340" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="kitSurface" x1="100" y1="90" x2="350" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#F5FFF9"/><stop offset="1" stopColor="#9DD9C7"/></linearGradient>
        <linearGradient id="kitSide" x1="300" y1="140" x2="390" y2="280" gradientUnits="userSpaceOnUse"><stop stopColor="#2E9589"/><stop offset="1" stopColor="#146257"/></linearGradient>
      </defs>
      <ellipse cx="233" cy="297" rx="155" ry="18" fill="#071F27" fillOpacity=".14"/>
      <g className="kitFloat">
        <path d="M174 105V79Q174 63 190 63H250Q266 63 266 79V105" stroke="#BAE9DC" strokeWidth="17"/>
        <path d="M323 112L375 147V266L323 292Z" fill="url(#kitSide)"/>
        <rect x="82" y="105" width="246" height="187" rx="26" fill="url(#kitSurface)" stroke="#D3F7EA" strokeWidth="2"/>
        <path d="M83 156H327" stroke="#71B7A4" strokeWidth="2"/>
        <rect x="117" y="141" width="18" height="31" rx="5" fill="#267E70"/>
        <rect x="275" y="141" width="18" height="31" rx="5" fill="#267E70"/>
        <circle cx="205" cy="222" r="45" fill="#F3FFF9"/>
        <path d="M194 194H216V211H233V233H216V250H194V233H177V211H194Z" fill="#237C6C"/>
        <path d="M111 273H144" stroke="#6BAF9B" strokeWidth="4" strokeLinecap="round"/>
      </g>
      <g className="illustrationSpark"><circle cx="353" cy="70" r="29" fill="#FFFFFF" fillOpacity=".9"/><path d="M340 70L349 79L367 60" stroke="#218675" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></g>
      <path className="pulseLine" d="M18 210H45L56 184L72 233L91 200H119" stroke="#91DDCA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="105" cy="56" r="7" fill="#91DDCA"/><circle cx="393" cy="213" r="5" fill="#91DDCA"/>
      <path d="M48 104V124M38 114H58M310 26V40M303 33H317" stroke="#91DDCA" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}


type NavIconName = "home" | "medical" | "training" | "spaces";
function NavIcon({ name }: { name: NavIconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "home" ? <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/></> :
    name === "medical" ? <><rect x="3" y="7" width="18" height="14" rx="4"/><path d="M8 7V4h8v3M7 14h3l2-3 2 6 2-3h2"/></> :
    name === "training" ? <><path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Z"/><path d="m7 10 5-3 5 3-5 3-5-3ZM9 12v4h6v-4"/></> :
    <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>}
  </svg>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const t = copy[locale];
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
    ["home", "medical", "training", "spaces"].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const animations: Animation[] = [];
    function setup() {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.length = 0;
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          if (typeof element.animate === "function") {
            animations.push(element.animate(
              [{ opacity: 0, transform: "translateY(28px)" }, { opacity: 1, transform: "translateY(0)" }],
              { duration: 700, delay: Number(element.dataset.delay || 0), easing: "cubic-bezier(.2,.7,.2,1)" }
            ));
          }
          observer?.unobserve(element);
        });
      }, { threshold: 0.12 });
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(element => observer?.observe(element));
    }
    setup();
    preference.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", setup);
    };
  }, []);

  return (
    <main id="top" lang={locale}>
      <a className="skipLink" href="#divisions">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <div className="scrollProgress" aria-hidden="true" />
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

      <section className="hero" id="home">
        <div className="heroInner"><span className="heroRule" aria-hidden="true" />
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.titleA}<br /><span>{t.titleB}</span></h1>
          <p>{t.intro}</p>
          <a className="cta" href="#divisions">{t.explore}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="heroVisual">
          <div className="photoFrame">
            <img className="heroPhoto" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
              srcSet="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=550&q=80 550w, https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85 1100w"
              sizes="(max-width: 850px) 90vw, 44vw" width={1100} height={1250} fetchPriority="high"
              alt={locale === "fr" ? "Professionnels de la santé en discussion dans un environnement médical" : "Healthcare professionals discussing care in a medical setting"} />
            <span className="photoCaption">{locale === "fr" ? "La prévention commence avec les personnes." : "Prevention starts with people."}</span>
          </div>
          <div className="illustrationTile"><MedicalIllustration /></div>
          <span className="visualLabel"><span className="statusDot" />{locale === "fr" ? "MATÉRIEL · FORMATION · PRÉVENTION" : "SUPPLIES · TRAINING · PREVENTION"}</span>
        </div>
      </section>

      <div className="quickAccess" aria-label={locale === "fr" ? "Accès aux divisions" : "Division shortcuts"}>
        <a href="#medical"><span className="shortcutIcon"><NavIcon name="medical" /></span><span>{locale === "fr" ? "Matériel médical" : "Medical supplies"}<small>{locale === "fr" ? "Trousses · DEA · Réapprovisionnement" : "Kits · AEDs · Replenishment"}</small></span><span className="shortcutArrow" aria-hidden="true">↗</span></a>
        <a href="#training"><span className="shortcutIcon fluxIcon"><NavIcon name="training" /></span><span>{locale === "fr" ? "Formation & SST" : "Training & safety"}<small>{locale === "fr" ? "Secourisme · Ateliers · Audits" : "First aid · Workshops · Audits"}</small></span><span className="shortcutArrow" aria-hidden="true">↗</span></a>
      </div>
      <section className="content divisions" id="divisions">
        <div className="sectionHead" data-reveal><div><span className="eyebrow">{t.divisionsKicker}</span><h2>{t.divisionsTitle}</h2></div></div>
        <div className="divisionGrid">
          <article className="divisionCard supplyCard" id="medical" data-reveal>
            <div className="divisionPhoto"><img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80" width={900} height={560} loading="lazy" decoding="async" alt={locale === "fr" ? "Matériel et environnement de soins médicaux" : "Medical supplies and care environment"} /><span className="imageStamp" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><rect x="5" y="10" width="22" height="17" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M11 10V6h10v4M16 15v8M12 19h8" stroke="currentColor" strokeWidth="2"/></svg></span></div>
            <div className="divisionIdentity"><img className="divisionEmblem" src="/icons/medical-supplies.svg" alt="" width={112} height={112}/><div><span className="divisionPill">{locale === "fr" ? "S'ÉQUIPER" : "GET EQUIPPED"}</span><span className="identityCaption">{locale === "fr" ? "Le matériel essentiel." : "Essential supplies."}</span></div></div>
            <h3>{t.supplies}</h3><p>{t.supplyText}</p>
            <details className="serviceDetails"><summary>{t.learn}</summary><p>{locale === "fr" ? "Décrivez votre organisation, vos besoins et votre échéancier. Les disponibilités et les modalités seront confirmées lors de la préparation de votre proposition." : "Describe your organization, requirements, and timeline. Availability and terms will be confirmed when your proposal is prepared."}</p></details>
          </article>
          <article className="divisionCard trainingCard" id="training" data-reveal data-delay="120">
            <div className="divisionPhoto"><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80" width={900} height={560} loading="lazy" decoding="async" alt={locale === "fr" ? "Échange et accompagnement dans un contexte de santé" : "Communication and guidance in a healthcare setting"} /><span className="imageStamp" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M16 3L27 8v9c0 7-11 12-11 12S5 24 5 17V8L16 3Z" stroke="currentColor" strokeWidth="2"/><path d="m10 16 4 4 8-9" stroke="currentColor" strokeWidth="2"/></svg></span></div>
            <div className="divisionIdentity"><img className="divisionEmblem" src="/icons/initials-flux.svg" alt="" width={112} height={112}/><div><span className="divisionPill">{locale === "fr" ? "SE FORMER" : "BUILD SKILLS"}</span><span className="identityCaption">{locale === "fr" ? "Les bons réflexes." : "Skills to respond."}</span></div></div>
            <h3>{t.training}</h3><p>{t.trainingText}</p>
            <details className="serviceDetails"><summary>{t.learn}</summary><p>{locale === "fr" ? "Décrivez votre organisation, vos besoins et votre échéancier. Les disponibilités et les modalités seront confirmées lors de la préparation de votre proposition." : "Describe your organization, requirements, and timeline. Availability and terms will be confirmed when your proposal is prepared."}</p></details>
          </article>
        </div>
      </section>

      <section className="spacesSection" id="spaces">
        <div className="content">
          <div className="sectionHead" data-reveal><div><span className="eyebrow">{t.spacesKicker}</span><h2>{t.spacesTitle}</h2><p className="sectionIntro">{t.spacesIntro}</p></div></div>
          <div className="spacesGrid">
            {t.spaces.map(([name, description], i) => <article className="spaceCard" key={name} data-reveal data-delay={(i % 4) * 70}>
              <span className="spaceNumber">0{i + 1}</span><h3><span className={`spaceDot dot${i}`} aria-hidden="true" />{name}</h3><p>{description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="content approach">
        <span className="eyebrow">{t.approachKicker}</span>
        <div className="approachGrid" data-reveal><h2>{t.approachTitle}</h2><p>{t.approachText}</p></div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactInner" data-reveal><div><span className="eyebrow">{t.eyebrow}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
          <div className="contactActions">{contactEmail ? <><a className="cta" href={mailto(t.mailSubject)}>{t.contact}<span aria-hidden="true">↗</span></a><a className="outlineCta" href={mailto(t.quoteSubject)}>{t.quote}</a></> : <p>{locale === "fr" ? "Coordonnées de contact à venir." : "Contact details coming soon."}</p>}</div>
        </div>
      </section>
      <nav className="mobileDock" aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}>
        {(["home", "medical", "training", "spaces"] as const).map((id, i) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} onClick={() => setActiveSection(id)}>
          <span className="dockIcon"><NavIcon name={id} /></span>
          <span>{(locale === "fr" ? ["Accueil", "Matériel", "Formation", "Espaces"] : ["Home", "Supplies", "Training", "Spaces"])[i]}</span>
        </a>)}
      </nav>
      <footer><span>© {new Date().getFullYear()} {t.footer}</span><span className="footerNote">{t.note}</span><a href="#top">{t.backTop} ↑</a></footer>
    </main>
  );
}
