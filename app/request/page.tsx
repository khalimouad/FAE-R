"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import PageShell, { useLanguage } from "../components/PageShell";
import { services, type Service } from "../components/services";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export default function RequestPage() {
  const [locale, setLocale] = useLanguage();
  const [service, setService] = useState<Service>("medical");
  const [category, setCategory] = useState("");
  const [draft, setDraft] = useState("");
  const resultRef = useRef<HTMLElement>(null);
  const fr = locale === "fr";
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selected: Service = params.get("service") === "training" ? "training" : "medical";
    setService(selected);
    const categoryId = params.get("category");
    if (services[selected].categories.some(item => item.id === categoryId)) setCategory(categoryId || "");
  }, []);
  useEffect(() => { if (draft) resultRef.current?.focus(); }, [draft]);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = services[service].categories.find(item => item.id === category);
    setDraft([
      fr ? "FAE-R — Brouillon de demande" : "FAE-R — Request draft",
      "",
      `${fr ? "Division" : "Division"}: ${services[service].name}`,
      `${fr ? "Besoin" : "Requirement"}: ${name ? (fr ? name.fr : name.en) : ""}`,
      `${fr ? "Organisation" : "Organization"}: ${data.get("company")}`,
      `${fr ? "Courriel" : "Email"}: ${data.get("email")}`,
      `${fr ? "Ville / région" : "City / region"}: ${data.get("region")}`,
      `${fr ? "Échéancier souhaité" : "Preferred timeline"}: ${data.get("timeline")}`,
      "",
      fr ? "Description des besoins :" : "Requirements:",
      String(data.get("details") || ""),
      "",
      fr ? "Brouillon préparé localement. Aucun envoi, aucune réservation ni commande confirmée." : "Draft prepared locally. No message sent, booking made, or order confirmed.",
    ].join("\n"));
  }
  function download() {
    const url = URL.createObjectURL(new Blob([draft], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url; link.download = "FAE-R-request.txt"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <PageShell locale={locale} setLocale={setLocale} active="request">
    <div className="requestLanding">
      <a className="backLink" href={`/${service === "medical" ? "medical-supplies" : "initials-flux"}/?lang=${locale}`}>← {services[service].name}</a>
      <header className="requestHeading"><span className="eyebrow">{fr ? "PARLONS DE VOTRE PROJET" : "LET'S DISCUSS YOUR PROJECT"}</span>
        <h1>{fr ? "Votre demande, en quelques détails." : "Your request, in a few details."}</h1>
        <p>{fr ? "Préparez un résumé clair de vos besoins. Vos informations restent dans cette page jusqu'à ce que vous choisissiez de les télécharger ou d'ouvrir votre messagerie." : "Prepare a clear summary of your needs. Your information stays on this page until you choose to download it or open your email app."}</p>
      </header>
      <div className="requestLayout">
        <form className="requestForm" onSubmit={prepare} onChange={() => setDraft("")}>
          <fieldset><legend>01 · {fr ? "Votre besoin" : "Your needs"}</legend>
            <div className="serviceToggle" role="group" aria-label={fr ? "Division" : "Division"}>
              {(Object.keys(services) as Service[]).map(key => <button type="button" key={key} aria-pressed={service === key} onClick={() => { setService(key); setCategory(""); setDraft(""); }}>
                <img src={services[key].icon} alt="" width={44} height={44}/><span>{key === "medical" ? (fr ? "Matériel" : "Supplies") : "Initials Flux"}</span>
              </button>)}
            </div>
            <label htmlFor="category">{fr ? "Type de besoin" : "Requirement type"} *</label>
            <select id="category" name="category" required value={category} onChange={event => setCategory(event.target.value)}>
              <option value="">{fr ? "Sélectionner une catégorie" : "Select a category"}</option>
              {services[service].categories.map(item => <option key={item.id} value={item.id}>{fr ? item.fr : item.en}</option>)}
            </select>
          </fieldset>
          <fieldset><legend>02 · {fr ? "Votre organisation" : "Your organization"}</legend>
            <label htmlFor="company">{fr ? "Nom de l'organisation" : "Organization name"} *</label>
            <input id="company" name="company" autoComplete="organization" required maxLength={120}/>
            <label htmlFor="email">{fr ? "Courriel professionnel" : "Business email"} *</label>
            <input id="email" name="email" type="email" autoComplete="email" required maxLength={180}/>
            <div className="formColumns"><div><label htmlFor="region">{fr ? "Ville / région" : "City / region"}</label><input id="region" name="region" autoComplete="address-level2" maxLength={100}/></div>
              <div><label htmlFor="timeline">{fr ? "Échéancier souhaité" : "Preferred timeline"}</label><input id="timeline" name="timeline" maxLength={100} placeholder={fr ? "Ex. : le mois prochain" : "e.g. next month"}/></div></div>
          </fieldset>
          <fieldset><legend>03 · {fr ? "Les détails" : "The details"}</legend>
            <label htmlFor="details">{fr ? "Décrivez vos besoins" : "Describe your requirements"} *</label>
            <textarea id="details" name="details" rows={5} required minLength={10} maxLength={1800} aria-describedby="details-help" placeholder={fr ? "Quantités, participants, nombre de sites, objectifs…" : "Quantities, participants, locations, objectives…"}/>
            <p id="details-help" className="fieldHelp">{fr ? "N'incluez pas de renseignements médicaux ni de données sensibles. Les champs * sont obligatoires." : "Do not include medical information or sensitive data. Fields marked * are required."}</p>
          </fieldset>
          <button className="cta prepareButton" type="submit">{fr ? "Préparer mon brouillon" : "Prepare my draft"}<span aria-hidden="true">↗</span></button>
        </form>
        <aside className="requestAside"><img src={services[service].icon} alt="" width={100} height={100}/><h2>{fr ? "Un premier échange bien préparé." : "A well-prepared first conversation."}</h2>
          <p>{fr ? "Ce formulaire prépare un document. Il n'envoie pas de message à FAE-R et ne crée pas de commande." : "This form prepares a document. It does not send a message to FAE-R or create an order."}</p>
          <ul><li>{fr ? "Aucun compte nécessaire" : "No account needed"}</li><li>{fr ? "Aucun paiement" : "No payment"}</li><li>{fr ? "Aucune sauvegarde sur le serveur" : "No server storage"}</li></ul>
        </aside>
      </div>
      {draft ? <section ref={resultRef} tabIndex={-1} className="draftResult" aria-labelledby="draft-heading">
        <span className="divisionPill">{fr ? "BROUILLON PRÊT" : "DRAFT READY"}</span>
        <h2 id="draft-heading">{fr ? "Vérifiez votre demande." : "Review your request."}</h2>
        <p>{fr ? "Rien n'a été envoyé. Téléchargez ce texte pour le conserver." : "Nothing has been sent. Download this text to keep a copy."}</p>
        <pre>{draft}</pre>
        <div className="draftActions"><button className="cta" type="button" onClick={download}>{fr ? "Télécharger le brouillon" : "Download draft"} ↓</button>
          {email ? <a className="outlineCta" href={`mailto:${email}?subject=${encodeURIComponent("FAE-R — " + services[service].name)}&body=${encodeURIComponent(draft)}`}>{fr ? "Ouvrir ma messagerie" : "Open email app"} ↗</a> : <span className="fieldHelp">{fr ? "L'envoi par courriel sera disponible après confirmation des coordonnées FAE-R." : "Email will be available once FAE-R contact details are confirmed."}</span>}
        </div>
      </section> : null}
    </div>
  </PageShell>;
}
