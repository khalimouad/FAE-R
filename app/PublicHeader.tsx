"use client";
import Link from "next/link";
import {useState} from "react";
type Props={en?:boolean;current?:string;theme?:"teal"|"blue"|"purple"|"gold"};
export default function PublicHeader({en=false,current="",theme="teal"}:Props){
 const [open,setOpen]=useState(false);
 const lang=en?"en":"fr";
 const items=[{href:"/",fr:"Accueil",en:"Home"},{href:"/medical-supplies/",fr:"Matériel médical",en:"Medical supplies"},{href:"/initials-flux/",fr:"Initials Flux",en:"Initials Flux"},{href:"/training",fr:"Formations",en:"Training"},{href:"/partners/",fr:"Partenaires",en:"Partners"},{href:"/operations/",fr:"Opérations",en:"Operations"}];
 const link=(href:string)=>href==="/training"?href:href+(href.includes("?")?"&":"?")+"lang="+lang;
 return <header className={"faer-public-header faer-theme-"+theme}>
 <div className="faer-public-header-inner"><Link className="faer-public-brand" href={link("/")}><img src="/brand/faer-logo.svg" width="46" height="46" alt=""/><span><strong>FAE-R INC.</strong><small>FIRST AID EXPRESS RESPONSE</small></span></Link>
 <nav className="faer-public-desktop" aria-label={en?"Main navigation":"Navigation principale"}>{items.map(x=><Link key={x.href} aria-current={current===x.href?"page":undefined} href={link(x.href)}>{en?x.en:x.fr}</Link>)}</nav>
 <Link className="faer-public-quote" href={link("/request/")}>{en?"Request a quote":"Demander un devis"}</Link>
 <button type="button" className="faer-public-menu-button" aria-expanded={open} aria-controls="faer-public-mobile" onClick={()=>setOpen(v=>!v)}>{open?"✕":"☰"}<span className="sr-only">{en?"Menu":"Menu"}</span></button></div>
 {open&&<nav id="faer-public-mobile" className="faer-public-mobile" aria-label={en?"Mobile navigation":"Navigation mobile"}>{items.map(x=><Link key={x.href} aria-current={current===x.href?"page":undefined} onClick={()=>setOpen(false)} href={link(x.href)}>{en?x.en:x.fr}</Link>)}<Link className="faer-public-mobile-quote" onClick={()=>setOpen(false)} href={link("/request/")}>{en?"Request a quote":"Demander un devis"}</Link></nav>}
 </header>
}