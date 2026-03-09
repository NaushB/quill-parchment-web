'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({name:'',email:'',service:'',wordCount:'',message:''});
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(formData)});
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'600px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Get In Touch</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'48px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Let's Work Together</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'32px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'16px',marginBottom:'48px',lineHeight:1.7}}>Tell us about your project and we'll respond within 24 hours with a free quote.</p>
        {status==='success' ? (
          <div style={{background:'rgba(74,222,128,0.1)',border:'1px solid rgba(74,222,128,0.3)',borderRadius:'8px',padding:'48px',textAlign:'center'}}>
            <div style={{fontSize:'48px',marginBottom:'16px'}}>✓</div>
            <h2 style={{color:'#4ade80',fontFamily:'Playfair Display,serif',fontSize:'28px',marginBottom:'8px'}}>Message Received!</h2>
            <p style={{color:'#8a7f6e'}}>Khurram will be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            {[
              {label:'Full Name',key:'name',type:'text',placeholder:'Your full name'},
              {label:'Email Address',key:'email',type:'email',placeholder:'your@email.com'},
              {label:'Word Count (optional)',key:'wordCount',type:'number',placeholder:'Approximate word count'},
            ].map(({label,key,type,placeholder})=>(
              <div key={key}>
                <label style={{display:'block',color:'#8a7f6e',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>{label}</label>
                <input type={type} placeholder={placeholder} value={formData[key as keyof typeof formData]} onChange={e=>setFormData(prev=>({...prev,[key]:e.target.value}))} style={{width:'100%',background:'#1a1813',border:'1px solid #2d2820',borderRadius:'6px',padding:'14px 16px',color:'#e8e4dc',fontSize:'15px',outline:'none',boxSizing:'border-box'}}/>
              </div>
            ))}
            <div>
              <label style={{display:'block',color:'#8a7f6e',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>Service Needed</label>
              <select value={formData.service} onChange={e=>setFormData(prev=>({...prev,service:e.target.value}))} style={{width:'100%',background:'#1a1813',border:'1px solid #2d2820',borderRadius:'6px',padding:'14px 16px',color:'#e8e4dc',fontSize:'15px',outline:'none'}}>
                <option value="">Select a service...</option>
                <option value="proofreading">Proofreading</option>
                <option value="copyediting">Copyediting</option>
                <option value="transcripts">Transcript Editing</option>
                <option value="legal">Legal Documents</option>
                <option value="academic">Academic Papers</option>
                <option value="social-sector">Social Sector / NGO</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label style={{display:'block',color:'#8a7f6e',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>Message</label>
              <textarea placeholder="Tell us about your document, deadline, and any specific requirements..." value={formData.message} onChange={e=>setFormData(prev=>({...prev,message:e.target.value}))} rows={5} style={{width:'100%',background:'#1a1813',border:'1px solid #2d2820',borderRadius:'6px',padding:'14px 16px',color:'#e8e4dc',fontSize:'15px',outline:'none',resize:'vertical',boxSizing:'border-box'}}/>
            </div>
            <button type="submit" disabled={status==='loading'} style={{background:'#c9973a',color:'#0f0e0b',border:'none',borderRadius:'6px',padding:'16px 32px',fontSize:'14px',fontFamily:'monospace',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,cursor:'pointer'}}>
              {status==='loading' ? 'Sending...' : 'Send Message →'}
            </button>
            {status==='error' && <p style={{color:'#f87171',fontSize:'14px',textAlign:'center'}}>Something went wrong. Email directly: kjbutt@quillandparchment.ca</p>}
          </form>
        )}
        <div style={{marginTop:'64px',paddingTop:'40px',borderTop:'1px solid #2d2820',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px'}}>
          {[
            {label:'Email',value:'kjbutt@quillandparchment.ca',href:'mailto:kjbutt@quillandparchment.ca'},
            {label:'Phone',value:'+1 647 986 5007',href:'tel:+16479865007'},
            {label:'Location',value:'Markham, Ontario',href:null},
          ].map(({label,value,href})=>(
            <div key={label}>
              <p style={{color:'#8a7f6e',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'6px'}}>{label}</p>
              {href ? <a href={href} style={{color:'#c9973a',fontSize:'13px',textDecoration:'none'}}>{value}</a> : <p style={{color:'#e8e4dc',fontSize:'13px',margin:0}}>{value}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
