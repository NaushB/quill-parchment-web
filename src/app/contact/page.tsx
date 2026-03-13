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
          <div style={{marginBottom:"24px"}}>
            <div style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"2px",marginBottom:"12px"}}>CONNECT</div>
            <div style={{display:"flex",gap:"12px"}}>
              <a href="https://www.linkedin.com/in/kjbutt15/" target="_blank" rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:"8px",background:"#1a1813",border:"1px solid #2d2820",borderRadius:"6px",padding:"10px 16px",color:"#e8e4dc",textDecoration:"none",fontFamily:"monospace",fontSize:"12px",letterSpacing:"1px"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/k.j.butt.15/" target="_blank" rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:"8px",background:"#1a1813",border:"1px solid #2d2820",borderRadius:"6px",padding:"10px 16px",color:"#e8e4dc",textDecoration:"none",fontFamily:"monospace",fontSize:"12px",letterSpacing:"1px"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#ig)"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F58529"/><stop offset="50%" stopColor="#DD2A7B"/><stop offset="100%" stopColor="#8134AF"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
