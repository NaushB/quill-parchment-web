export default function PreferencesPage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'800px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>First Time Clients</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Proofreading Preferences</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'48px'}}>First time working together? Fill out this preference sheet so Khurram can tailor his work to your exact style guide and preferences.</p>
        <div style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'32px',marginBottom:'32px'}}>
          <h2 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'24px',marginBottom:'24px'}}>Style Guide</h2>
          {[
            "Morson's English Guide for Court Reporters",
            "BGGP (Bad Grammar/Good Punctuation)",
            "Gregg Reference Manual",
          ].map(item=>(
            <div key={item} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px 0',borderBottom:'1px solid #2d2820'}}>
              <div style={{width:'20px',height:'20px',border:'2px solid #c9973a',borderRadius:'3px',flexShrink:0}}></div>
              <span style={{color:'#e8e4dc',fontSize:'15px'}}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'32px',marginBottom:'32px'}}>
          <h2 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'24px',marginBottom:'24px'}}>Punctuation Preferences</h2>
          {[
            'Oxford comma',
            'No comma after full year: March 1, 2022 letter',
            'Comma between month and year: January 2023',
            'Keep month and day together at end of line',
            '8:00 for "8 o\'clock"',
            'Semicolon before "is that correct/right?"',
            'Comma before "right/correct?"',
            'Comma after business names: Inc./LLC, etc.',
            'Starting line with a figure (except Exhibit and Bates numbers)',
            'Capping "paragraph" or "page"',
            'Spells out numbers through TEN (except prison sentencing)',
            '"Number," not "No."',
            'Colon: "The question is: When was that order issued?"',
            'Comma or period after Objection: "Objection, form."',
            'Only hyphenate before a noun: "On-site"',
            'Hyphenating ethnicities: African American',
            'Lowercase "subsection"',
            'Cap "paragraph," "page," and "line"',
            'Quotation marks for confirmation: Is that a "yes"?',
            'Uses ITALICS for citing court cases',
            'AM/PM or A.M./P.M.',
            '"email" or "e-mail"',
          ].map(item=>(
            <div key={item} style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 0',borderBottom:'1px solid #2d2820'}}>
              <div style={{width:'20px',height:'20px',border:'2px solid #2d2820',borderRadius:'3px',flexShrink:0}}></div>
              <span style={{color:'#8a7f6e',fontSize:'14px'}}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
          <a href="/PROOFREADING-PREFERNCES.docx" download style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Download Preference Sheet</a>
          <a href="/contact" style={{display:'inline-block',border:'1px solid #2d2820',color:'#e8e4dc',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Contact Khurram</a>
        </div>
      </div>
    </div>
  );
}
