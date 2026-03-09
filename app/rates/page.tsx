'use client';
import { useState } from 'react';

export default function RatesPage() {
  const [wordCount, setWordCount] = useState('');
  const rates = [
    {service:'Proofreading',rate:0.02,min:30,turnaround:'24–48 hrs'},
    {service:'Copyediting',rate:0.035,min:50,turnaround:'48–72 hrs'},
    {service:'Academic Papers',rate:0.04,min:60,turnaround:'3–5 days'},
    {service:'Legal Documents',rate:0.045,min:75,turnaround:'48–72 hrs'},
    {service:'Social Sector',rate:0.035,min:50,turnaround:'3–5 days'},
  ];
  const calc = (rate: number, min: number) => {
    const words = parseInt(wordCount);
    if (!words || isNaN(words)) return null;
    return Math.max(words * rate, min).toFixed(2);
  };
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'800px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Pricing</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Clear, Transparent Rates</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'48px'}}>No surprises. No hidden fees. Just honest pricing for expert work.</p>
        <div style={{background:'#1a1813',border:'1px solid #c9973a',borderRadius:'8px',padding:'32px',marginBottom:'48px'}}>
          <h2 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'22px',marginBottom:'8px'}}>Instant Quote Calculator</h2>
          <p style={{color:'#8a7f6e',fontSize:'14px',marginBottom:'24px'}}>Enter your word count to see estimated prices.</p>
          <input
            type="number"
            placeholder="Enter word count e.g. 5000"
            value={wordCount}
            onChange={e=>setWordCount(e.target.value)}
            style={{width:'100%',background:'#0f0e0b',border:'1px solid #2d2820',borderRadius:'6px',padding:'14px 16px',color:'#e8e4dc',fontSize:'16px',outline:'none',boxSizing:'border-box',marginBottom:'24px'}}
          />
          {rates.map(({service,rate,min})=>{
            const price = calc(rate,min);
            return (
              <div key={service} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid #2d2820'}}>
                <span style={{color:'#e8e4dc',fontSize:'14px'}}>{service}</span>
                <span style={{color:'#c9973a',fontFamily:'monospace',fontSize:'16px',fontWeight:700}}>{price ? `$${price} CAD` : `from $${min}`}</span>
              </div>
            );
          })}
        </div>
        <div style={{background:'rgba(201,151,58,0.06)',border:'1px solid rgba(201,151,58,0.2)',borderRadius:'8px',padding:'24px',marginBottom:'48px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>Rush Service</p>
          <p style={{color:'#e8e4dc',fontSize:'15px'}}>Need it faster? Rush delivery under 24 hours available at a <strong style={{color:'#c9973a'}}>+50% surcharge</strong>.</p>
        </div>
        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Get a Custom Quote</a>
      </div>
    </div>
  );
}
