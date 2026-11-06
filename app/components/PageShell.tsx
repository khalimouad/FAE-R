"use client";

import { useEffect, useState, type ReactNode } from "react";

export type Locale = "fr" | "en";
export function useLanguage() {
  const [locale, setLocale] = useState<Locale>("fr");
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("lang") === "en") setLocale("en");
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  return [locale, setLocale] as const;
}

export default function PageShell({ locale, setLocale, active, children }: {
  locale: Locale; setLocale: (locale: Locale) => void;
  active: "medical" | "training" | "request"; children: ReactNode;
}) {
  const links = [
    ["/", locale === "fr" ? "Accueil" : "Home", "home"],
    ["/medical-supplies/", locale === "fr" ? "Matériel" : "Supplies", "medical"],
    ["/initials-flux/", locale === "fr" ? "Formation" : "Training", "training"],
    ["/request/", locale === "fr" ? "Demande" : "Request", "request"],
  ];
  return <>
    <a className="skipLink" href="#page-content">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
    <header className="nav">
      <a className="brand" href={`/?lang=${locale}`} aria-label={locale === "fr" ? "FAE-R, accueil" : "FAE-R, home"}><img className="brandLogo" src="/brand/faer-logo.webp" alt="" width={256} height={256}/><span className="brandWordmark"><strong>FAE-R INC.</strong><small>FIRST AID EXPRESS RESPONSE</small></span></a>
      <nav className="navLinks" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
        {links.slice(1).map(([href, label, id]) => <a key={id} href={`${href}?lang=${locale}`} aria-current={active === id ? "page" : undefined}>{label}</a>)}
      </nav>
      <button type="button" className="language" onClick={() => setLocale(locale === "fr" ? "en" : "fr")} aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}>{locale === "fr" ? "EN" : "FR"}</button>
    </header>
    <main id="page-content" lang={locale} className="productPage">{children}</main>
    <nav className="mobileDock" aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}>
      {links.map(([href, label, id], index) => <a key={id} href={`${href}?lang=${locale}`} aria-current={active === id ? "page" : undefined}>
        <span className="dockIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {index === 0 ? <path d="m3 10 9-7 9 7v10h-6v-7H9v7H3V10Z"/> : index === 1 ? <><rect x="3" y="7" width="18" height="14" rx="4"/><path d="M8 7V4h8v3M7 14h3l2-3 2 6 2-3h2"/></> : index === 2 ? <><path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/></> : <><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 8h6M9 12h6M9 16h4"/></>}
        </svg></span><span>{label}</span>
      </a>)}
    </nav>
    <footer><a className="footerIdentity" href={`/?lang=${locale}`}><img src="/brand/faer-logo.webp" alt="" width={256} height={256} loading="lazy"/><span><strong>FAE-R INC.</strong><small>© {new Date().getFullYear()} · Montréal, Québec</small></span></a><a href={`/?lang=${locale}`}>{locale === "fr" ? "Retour à l'accueil" : "Back to home"} ↗</a></footer>
  </>;
}
