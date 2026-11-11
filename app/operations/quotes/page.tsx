"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
type Line={description:string;quantity:number;unitPrice:string};
const currency=(n:number)=>new Intl.NumberFormat("fr-CA",{style:"currency",currency:"CAD"}).format(n);
export default function QuoteBuilder(){
 const [en,setEn]=useState(false),[organization,setOrganization]=useState(""),[reference,setReference]=useState(""),[division,setDivision]=useState("medical"),[taxes,setTaxes]=useState(false),[lines,setLines]=useState<Line[]>([{description:"",quantity:1,unitPrice:""}]),[notes,setNotes]=useState("");
 useEffect(()=>{setEn(new URLSearchParams(window.location.search).get("lang")==="en")},[]);
 const subtotal=useMemo(()=>lines.reduce((sum,line)=>sum+Math.max(0,Number(line.unitPrice)||0)*Math.max(0,Number(line.quantity)||0),0),[lines]);
 const gst=taxes?Math.round(subtotal*.05*100)/100:0;
 const qst=taxes?Math.round(subtotal*.09975*100)/100:0;
 const total=subtotal+gst+qst;
 const update=(i:number,patch:Partial<Line>)=>setLines(old=>old.map((l,j)=>j===i?{...l,...patch}:l));
 const safeCsv=(value:string)=> /^[\\s\\u0000-\\u001f]*[=+@-]/.test(value) ? "\u0027"+value : value;
 const exportCsv=()=>{const rows=[["Description","Quantité","Prix unitaire (CAD)","Total (CAD)"],...lines.map(l=>[l.description,String(l.quantity),l.unitPrice,((Number(l.unitPrice)||0)*l.quantity).toFixed(2)]),["Sous-total","","",subtotal.toFixed(2)],["TPS (simulation)","","",gst.toFixed(2)],["TVQ (simulation)","","",qst.toFixed(2)],["TOTAL","","",total.toFixed(2)]];const csv="\ufeff"+rows.map(r=>r.map(v=>'"'+safeCsv(String(v)).replaceAll('"','""')+'"').join(";")).join("\r\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download="faer-estimation.csv";a.click();URL.revokeObjectURL(url)};
 return <main style={{maxWidth:950,margin:"auto",padding:"32px 20px 90px",fontFamily:"Arial,sans-serif",color:"#15373c"}}>
 <div className="no-print" style={{display:"flex",justifyContent:"space-between"}}><Link href={`/?lang=${en?"en":"fr"}`}>← {en?"Home":"Accueil"}</Link><button onClick={()=>setEn(!en)}>{en?"FR":"EN"}</button></div>
 <p style={{marginTop:55,color:"#127b71",letterSpacing:2,fontWeight:700}}>FAE-R INC. · {en?"INTERNAL WORKSPACE":"ESPACE DE TRAVAIL"}</p>
 <h1 style={{fontSize:"clamp(32px,5vw,52px)"}}>{en?"Quotation worksheet":"Feuille de préparation de soumission"}</h1>
 <p>{en?"Create a draft estimate for review. This is not a final quote, invoice, contract or tax advice. No data is sent to a server.":"Préparez une estimation à réviser. Ce document n'est ni une soumission définitive, ni une facture, ni un contrat ou un avis fiscal. Aucune donnée n'est transmise à un serveur."}</p>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,margin:"28px 0"}}>
 <label>{en?"Organization":"Organisation"}<input value={organization} maxLength={120} onChange={e=>setOrganization(e.target.value)} style={field}/></label>
 <label>{en?"Internal reference":"Référence interne"}<input value={reference} maxLength={60} onChange={e=>setReference(e.target.value)} style={field}/></label>
 <label>{en?"Division":"Division"}<select value={division} onChange={e=>setDivision(e.target.value)} style={field}><option value="medical">FAE-R Medical Supplies</option><option value="training">Initials Flux</option></select></label>
 </div>
 <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",minWidth:600}}><thead><tr>{(en?["Item / service","Quantity","Unit price (CAD)","Amount",""]:["Article / service","Quantité","Prix unitaire (CAD)","Montant",""]).map((x,i)=><th key={i} style={{textAlign:"left",padding:"12px 6px",borderBottom:"2px solid #b6d4ce"}}>{x}</th>)}</tr></thead><tbody>{lines.map((l,i)=><tr key={i}><td><input aria-label={en?"Description":"Description"} style={field} value={l.description} onChange={e=>update(i,{description:e.target.value})} maxLength={200}/></td><td><input aria-label={en?"Quantity":"Quantité"} style={{...field,width:85}} type="number" min="0" max="100000" step="1" value={l.quantity} onChange={e=>update(i,{quantity:Math.max(0,Math.floor(Number(e.target.value)||0))})}/></td><td><input aria-label={en?"Unit price":"Prix unitaire"} style={{...field,width:120}} type="number" min="0" step=".01" value={l.unitPrice} onChange={e=>update(i,{unitPrice:e.target.value})}/></td><td style={{whiteSpace:"nowrap",padding:8}}>{currency((Number(l.unitPrice)||0)*l.quantity)}</td><td><button className="no-print" type="button" disabled={lines.length===1} onClick={()=>setLines(old=>old.filter((_,j)=>j!==i))} aria-label={en?"Remove line":"Supprimer la ligne"}>×</button></td></tr>)}</tbody></table></div>
 <button className="no-print" type="button" onClick={()=>setLines(old=>[...old,{description:"",quantity:1,unitPrice:""}])} style={{marginTop:15,padding:12}}>{en?"+ Add line":"+ Ajouter une ligne"}</button>
 <div style={{margin:"28px 0 0 auto",maxWidth:380,padding:22,background:"#f0f7f5",borderRadius:16}}>
 <label className="no-print"><input type="checkbox" checked={taxes} onChange={e=>setTaxes(e.target.checked)}/> {en?"Show illustrative Quebec GST/QST calculation":"Afficher une simulation TPS/TVQ (Québec)"}</label>
 <p>{en?"Subtotal":"Sous-total"}: <strong>{currency(subtotal)}</strong></p>{taxes&&<><p>TPS 5 % : {currency(gst)}</p><p>TVQ 9,975 % : {currency(qst)}</p></>}<h2>{en?"Estimated total":"Total estimé"} : {currency(total)}</h2>
 </div>
 <label style={{display:"block",marginTop:20}}>{en?"Notes / assumptions":"Notes / hypothèses"}<textarea style={{...field,minHeight:90}} value={notes} maxLength={2000} onChange={e=>setNotes(e.target.value)}/></label>
 <p style={{fontSize:13}}>{en?"Tax simulation is optional and not a determination of registration, taxability or actual amounts. Validate pricing, taxes and conditions before sending anything to a customer.":"La simulation fiscale est facultative et ne détermine ni l'inscription aux taxes, ni l'assujettissement, ni les montants réels. Vérifiez les prix, taxes et conditions avant toute transmission à un client."}</p>
 <div className="no-print" style={{display:"flex",flexWrap:"wrap",gap:12,marginTop:25}}><button onClick={()=>window.print()} style={button}>{en?"Print / save PDF":"Imprimer / enregistrer en PDF"}</button><button onClick={exportCsv} style={button}>{en?"Export CSV":"Exporter CSV"}</button></div>
 <style>{`@media print {.no-print{display:none!important} body{background:white!important} input,textarea,select{border:0!important;appearance:none!important} main{max-width:none!important;padding:0!important}}`}</style>
 </main>
}
const field={display:"block",width:"100%",boxSizing:"border-box" as const,padding:"10px",marginTop:7,border:"1px solid #a9c8c3",borderRadius:8,font:"inherit",background:"white"};
const button={background:"#126b63",color:"white",border:0,borderRadius:10,padding:"13px 18px",cursor:"pointer"};
