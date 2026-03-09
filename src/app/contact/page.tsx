"use client";
import { useState } from "react";
export default function Contact() {
  const [status,setStatus]=useState("");
  const [loading,setLoading]=useState(false);
  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true);
    const fd=new FormData(e.currentTarget);
    const data={name:fd.get("name"),email:fd.get("email"),service:fd.get("service"),message:fd.get("message"),wordCount:fd.get("wordCount")};
    try{
      const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      if(r.ok){setStatus("success");(e.target as HTMLFormElement).reset();}
      else setStatus("error");
    }catch{setStatus("error");}
    setLoading(false);
  }
  const inp={width:"100%",background:"#1a1813",border:"1px solid #2d2820",borderRadius:"6px",padding:"12px 16px",color:"#e8e4dc",fontSize:"15px",fontFamily:"Georgia,serif",outline:"none"};
  return (
    <div style={{maxWidth:"900px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>Contact</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>Get in Touch</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"48px"}}></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px"}}>
        <div>
          {status==="success"&&<div style={{background:"#1a2e1a",border:"1px solid #4a6741",borderRadius:"8px",padding:"20px",marginBottom:"24px",color:"#a0c89a"}}>Message sent! Khurram will reply within 24 hours.</div>}
          {status==="error"&&<div style={{background:"#2e1a1a",border:"1px solid #8b3a1a",borderRadius:"8px",padding:"20px",marginBottom:"24px",color:"#c89a9a"}}>Something went wrong. Please email kjbutt@quillandparchment.ca directly.</div>}
          <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <input name="name" placeholder="Full Name" required style={inp}/>
            <input name="email" type="email" placeholder="Email Address" required style={inp}/>
            <select name="service" required style={{...inp,appearance:"none"}}>
              <option value="">Select Service</option>
              <option>Standard Proofreading (3–5 days)</option>
              <option>Expedited 2-Day</option>
              <option>Rush 1-Day</option>
            </select>
            <input name="wordCount" type="number" placeholder="Approximate page count (optional)" style={inp}/>
            <textarea name="message" placeholder="Tell Khurram about your transcript — type, length, deadline..." required rows={5} style={{...inp,resize:"vertical"}}/>
            <button type="submit" disabled={loading} style={{background:"#c9973a",color:"#0f0e0b",padding:"16px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,border:"none",cursor:"pointer"}}>
              {loading?"Sending...":"Send Message"}
            </button>
          </form>
        </div>
        <div>
          <h3 style={{fontFamily:"Georgia,serif",fontSize:"20px",color:"#e8e4dc",marginBottom:"24px"}}>Contact Information</h3>
          {[["Phone","+1 647 986 5007"],["Email","kjbutt@quillandparchment.ca"],["Address","55 Yale Lane, Markham\nOntario L6B 1G7"],["Hours","Monday–Friday, 9am–6pm EST"]].map(([l,v])=>(
            <div key={l} style={{marginBottom:"24px"}}>
              <div style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"2px",marginBottom:"6px"}}>{l.toUpperCase()}</div>
              <div style={{color:"#8a7f6e",fontSize:"15px",lineHeight:1.7,whiteSpace:"pre-line"}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
