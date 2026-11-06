"use client";

import PageShell, { useLanguage } from "./PageShell";
import { services, type Service } from "./services";

export default function DivisionPage({ service }: { service: Service }) {
  const [locale, setLocale] = useLanguage();
  const fr = locale === "fr";
  const data = services[service];
  const medical = service === "medical";
  const request = `/request/?service=${service}&lang=${locale}`;
  return <PageShell locale={locale} setLocale={setLocale} active={service}>
    <div className={`divisionLanding ${medical ? "medicalTheme" : "fluxTheme"}`}>
      <a className="backLink" href={`/?lang=${locale}#divisions`}>← {fr ? "Nos divisions" : "Our divisions"}</a>
      <section className="divisionIntro">
        <div><span className="divisionPill">{medical ? (fr ? "S'ÉQUIPER" : "GET EQUIPPED") : (fr ? "SE FORMER" : "BUILD SKILLS")}</span>
          <h1>{data.name}</h1>
          <p>{medical ? (fr ? "Les essentiels du secourisme, adaptés aux besoins de votre organisation." : "First aid essentials, shaped around your organization's needs.") : (fr ? "Développez les connaissances et les réflexes de votre équipe." : "Build your team's knowledge and readiness to respond.")}</p>
          <a className="cta" href={request}>{fr ? "Préparer une demande" : "Prepare a request"}<span aria-hidden="true">↗</span></a>
        </div>
        <img className="landingEmblem" src={data.icon} alt="" width={240} height={240}/>
      </section>
      <section className="catalogSection" aria-labelledby="catalog-heading">
        <span className="eyebrow">{fr ? "VOS BESOINS, VOTRE PARCOURS" : "YOUR NEEDS, YOUR NEXT STEP"}</span>
        <h2 id="catalog-heading">{fr ? "Comment pouvons-nous vous accompagner ?" : "How can we support you?"}</h2>
        <div className="categoryGrid">
          {data.categories.map((category, index) => <article className="categoryCard" key={category.id}>
            <span className="categoryNumber">0{index + 1}</span>
            <h3>{fr ? category.fr : category.en}</h3>
            <p>{fr ? category.descriptionFr : category.descriptionEn}</p>
            <a href={`${request}&category=${category.id}`}>{fr ? "Choisir ce besoin" : "Select this need"} <span aria-hidden="true">↗</span></a>
          </article>)}
        </div>
      </section>
      <section className="journeyPanel" aria-labelledby="journey-heading">
        <h2 id="journey-heading">{fr ? "Une demande en trois étapes." : "A request in three steps."}</h2>
        <ol className="journeySteps">
          <li><strong>{fr ? "Choisir" : "Choose"}</strong><span>{fr ? "Sélectionnez le type de matériel ou de service." : "Select a supply or service category."}</span></li>
          <li><strong>{fr ? "Décrire" : "Describe"}</strong><span>{fr ? "Précisez votre contexte et votre échéancier." : "Share your context and timeline."}</span></li>
          <li><strong>{fr ? "Préparer" : "Prepare"}</strong><span>{fr ? "Téléchargez votre demande ou ouvrez votre messagerie si le contact est disponible." : "Download your request or open your email app when contact details are available."}</span></li>
        </ol>
        <p className="availabilityNote">{fr ? "Les disponibilités, modalités et tarifs sont confirmés lors de l'échange avec FAE-R. Cette page ne confirme aucune réservation." : "Availability, terms, and pricing are confirmed during your discussion with FAE-R. This page does not confirm a booking."}</p>
      </section>
    </div>
  </PageShell>;
}
