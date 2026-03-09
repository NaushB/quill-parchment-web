"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',color:'#e8e4dc'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'80px 24px'}}>
        
        <motion.p
          initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}}
          style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'24px'}}>
          Professional Proofreading & Editing · Markham, Ontario
        </motion.p>

        <motion.h1
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.1}}
          style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'clamp(40px,7vw,80px)',fontWeight:900,lineHeight:1.05,marginBottom:'24px',color:'#fff'}}>
          Clarity &amp; Precision<br/>in Every Word
        </motion.h1>

        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'32px'}}></div>

        <motion.p
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.2}}
          style={{fontSize:'18px',color:'#8a7f6e',maxWidth:'600px',lineHeight:1.7,marginBottom:'40px'}}>
          Expert proofreading and editing for legal documents, academic papers, transcripts, and social sector research. Your message deserves precision and care.
        </motion.p>

        <motion.div
          initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}}
          style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'80px'}}>
          <Link href="/contact" style={{background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
            Get a Free Quote
          </Link>
          <Link href="/samples" style={{border:'1px solid #2d2820',color:'#e8e4dc',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
            See Our Work
          </Link>
        </motion.div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px',marginBottom:'80px'}}>
          {[
            {value:'500+',label:'Documents Edited'},
            {value:'98%',label:'Client Satisfaction'},
            {value:'48hr',label:'Turnaround'},
            {value:'15+',label:'Years Experience'},
          ].map(({value,label})=>(
            <div key={label} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <p style={{fontFamily:'Playfair Display,serif',fontSize:'32px',fontWeight:900,color:'#c9973a',margin:'0 0 4px'}}>{value}</p>
              <p style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',color:'#8a7f6e',margin:0}}>{label}</p>
            </div>
          ))}
        </div>

        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'32px'}}>Services</p>
        <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'36px',fontWeight:900,color:'#fff',marginBottom:'32px'}}>What We Do</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginBottom:'80px'}}>
          {[
            {title:'Proofreading',desc:'Meticulous error detection for flawless final documents.'},
            {title:'Copyediting',desc:'Transformative editing for clarity, flow, and style.'},
            {title:'Transcript Editing',desc:'Accurate, professionally formatted transcripts.'},
            {title:'Legal Documents',desc:'Precise editing that respects legal intent and standards.'},
            {title:'Academic Papers',desc:'Research-ready editing for theses and journal submissions.'},
            {title:'Social Sector',desc:'Clear, persuasive content for nonprofits and NGOs.'},
          ].map(({title,desc})=>(
            <div key={title} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'18px',marginBottom:'10px'}}>{title}</h3>
              <p style={{color:'#8a7f6e',fontSize:'13px',lineHeight:1.6,margin:0}}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'48px',marginBottom:'80px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Testimonials</p>
          <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'32px',color:'#fff',marginBottom:'40px'}}>What Clients Say</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {[
              {quote:'The edits were thoughtful and precise. My document read clearer immediately.',name:'Dr. S.M.',role:'PhD Candidate'},
              {quote:'Fast turnaround and exceptional attention to detail. Highly recommend.',name:'J.T.',role:'Legal Professional'},
              {quote:'The grant proposal Khurram edited secured us significant funding.',name:'M.L.',role:'NGO Director'},
            ].map(({quote,name,role})=>(
              <div key={name} style={{borderLeft:'2px solid #c9973a',paddingLeft:'20px'}}>
                <p style={{color:'#e8e4dc',fontSize:'14px',lineHeight:1.7,marginBottom:'16px',fontStyle:'italic'}}>"{quote}"</p>
                <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px'}}>{name} · {role}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:'linear-gradient(135deg,#1a1813,#0f0e0b)',border:'1px solid #c9973a',borderRadius:'8px',padding:'48px',textAlign:'center'}}>
          <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'36px',color:'#fff',marginBottom:'16px'}}>Ready for Flawless Documents?</h2>
          <p style={{color:'#8a7f6e',fontSize:'16px',marginBottom:'32px'}}>Get a free quote in under 24 hours.</p>
          <Link href="/contact" style={{background:'#c9973a',color:'#0f0e0b',padding:'18px 40px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
            Contact Us Today
          </Link>
        </div>

      </div>
    </div>
  );
}
