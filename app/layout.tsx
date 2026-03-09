import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quill & Parchment | Professional Proofreading & Editing",
  description: "Expert transcript proofreading and editing for court reporters, legal professionals, academics, and nonprofits. Based in Markham, Ontario. PDF annotation workflow. 15+ years experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{margin:0,padding:0,background:'#0f0e0b'}}>
        <nav style={{background:'#0f0e0b',borderBottom:'1px solid #2d2820',padding:'0 24px',position:'sticky',top:0,zIndex:100}}>
          <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',height:'64px'}}>
            <a href="/" style={{display:'flex',alignItems:'center',gap:'12px',textDecoration:'none'}}>
              <img src="/logo_banner.jpeg" alt="Quill and Parchment" style={{height:'40px',width:'auto'}}/>
            </a>
            <div style={{display:'flex',gap:'32px',alignItems:'center'}}>
              {[
                {label:'Services',href:'/services'},
                {label:'Samples',href:'/samples'},
                {label:'Rates',href:'/rates'},
                {label:'How It Works',href:'/how-it-works'},
                {label:'About',href:'/about'},
              ].map(({label,href})=>(
                <a key={href} href={href} style={{color:'#8a7f6e',fontFamily:'monospace',fontSize:'12px',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none'}}>{label}</a>
              ))}
              <a href="/contact" style={{background:'#c9973a',color:'#0f0e0b',padding:'10px 20px',borderRadius:'6px',fontFamily:'monospace',fontSize:'12px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Get a Quote</a>
            </div>
          </div>
        </nav>
        {children}
        <footer style={{background:'#0f0e0b',borderTop:'1px solid #2d2820',padding:'48px 24px',marginTop:'80px'}}>
          <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'48px'}}>
            <div>
              <img src="/logo_banner.jpeg" alt="Quill and Parchment" style={{height:'48px',width:'auto',marginBottom:'16px'}}/>
              <p style={{color:'#8a7f6e',fontSize:'13px',lineHeight:1.7,maxWidth:'280px'}}>Professional proofreading and editing for court reporters, legal professionals, academics, and nonprofits.</p>
            </div>
            <div>
              <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>Services</p>
              {['Transcript Proofreading','Legal Documents','Academic Papers','Social Sector','Copyediting'].map(s=>(
                <a key={s} href="/services" style={{display:'block',color:'#8a7f6e',fontSize:'13px',textDecoration:'none',marginBottom:'8px'}}>{s}</a>
              ))}
            </div>
            <div>
              <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>Quick Links</p>
              {[
                {label:'Samples',href:'/samples'},
                {label:'Rates',href:'/rates'},
                {label:'How It Works',href:'/how-it-works'},
                {label:'Preferences',href:'/preferences'},
                {label:'About',href:'/about'},
              ].map(({label,href})=>(
                <a key={href} href={href} style={{display:'block',color:'#8a7f6e',fontSize:'13px',textDecoration:'none',marginBottom:'8px'}}>{label}</a>
              ))}
            </div>
            <div>
              <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>Contact</p>
              <a href="mailto:kjbutt@quillandparchment.ca" style={{display:'block',color:'#8a7f6e',fontSize:'13px',textDecoration:'none',marginBottom:'8px'}}>kjbutt@quillandparchment.ca</a>
              <a href="tel:+16479865007" style={{display:'block',color:'#8a7f6e',fontSize:'13px',textDecoration:'none',marginBottom:'8px'}}>+1 647 986 5007</a>
              <p style={{color:'#8a7f6e',fontSize:'13px',margin:0}}>55 Yale Lane<br/>Markham, Ontario L6B 1G7</p>
            </div>
          </div>
          <div style={{maxWidth:'1100px',margin:'40px auto 0',paddingTop:'24px',borderTop:'1px solid #2d2820',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{color:'#8a7f6e',fontSize:'12px',margin:0}}>© 2025 Quill & Parchment. All rights reserved.</p>
            <p style={{color:'#8a7f6e',fontSize:'12px',margin:0}}>Markham, Ontario · Canada</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
