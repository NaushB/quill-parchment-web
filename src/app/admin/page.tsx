import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");
  if (auth?.value !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login");
  }
  let leads: any[] = [];
  let jobs: any[] = [];
  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`CREATE TABLE IF NOT EXISTS leads (id SERIAL PRIMARY KEY, name VARCHAR(200) NOT NULL, email VARCHAR(200) NOT NULL, service VARCHAR(100), word_count INTEGER, message TEXT, status VARCHAR(50) DEFAULT 'new', created_at TIMESTAMP DEFAULT NOW())`;
    await sql`CREATE TABLE IF NOT EXISTS completed_jobs (id SERIAL PRIMARY KEY, client_name TEXT, project_type TEXT, word_count INTEGER, completed_at TIMESTAMP DEFAULT NOW())`;
    leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
    jobs = await sql`SELECT * FROM completed_jobs ORDER BY completed_at DESC`;
  } catch(e) {
    console.error("DB error:", e);
  }
  const thisMonth = leads.filter((l: any) => new Date(l.created_at) > new Date(new Date().setDate(1)));

  return (
    <div style={{maxWidth:"1100px",margin:"0 auto",padding:"40px 24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"}}>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"36px",color:"#fff"}}>Admin Dashboard</h1>
        <a href="/api/admin/logout" style={{color:"#8a7f6e",fontFamily:"monospace",fontSize:"13px"}}>Log Out</a>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginBottom:"32px"}}>
        {[["Leads This Month", thisMonth.length],["Total Leads", leads.length],["Jobs Completed", jobs.length]].map(([l,v])=>(
          <div key={l as string} style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px",textAlign:"center"}}>
            <div style={{fontFamily:"Georgia,serif",fontSize:"48px",fontWeight:900,color:"#c9973a"}}>{v}</div>
            <div style={{color:"#8a7f6e",fontFamily:"monospace",fontSize:"12px",letterSpacing:"2px",marginTop:"8px"}}>{l as string}</div>
          </div>
        ))}
      </div>

      <div style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px",marginBottom:"24px"}}>
        <h2 style={{fontFamily:"Georgia,serif",color:"#e8e4dc",fontSize:"22px",marginBottom:"20px"}}>Leads</h2>
        {leads.length===0 ? <p style={{color:"#8a7f6e"}}>No leads yet. Submit a test via the contact form.</p> : (
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"14px"}}>
            <thead>
              <tr style={{borderBottom:"1px solid #2d2820"}}>
                {["Name","Email","Service","Date","Status"].map(h=>(
                  <th key={h} style={{color:"#c9973a",fontFamily:"monospace",fontSize:"11px",letterSpacing:"2px",padding:"8px 12px",textAlign:"left"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((l:any)=>(
                <tr key={l.id} style={{borderBottom:"1px solid #2d2820"}}>
                  <td style={{padding:"12px",color:"#e8e4dc"}}>{l.name}</td>
                  <td style={{padding:"12px"}}><a href={`mailto:${l.email}`} style={{color:"#c9973a",textDecoration:"none"}}>{l.email}</a></td>
                  <td style={{padding:"12px",color:"#8a7f6e"}}>{l.service}</td>
                  <td style={{padding:"12px",color:"#8a7f6e",fontFamily:"monospace",fontSize:"12px"}}>{new Date(l.created_at).toLocaleDateString()}</td>
                  <td style={{padding:"12px"}}><span style={{background:l.status==="contacted"?"#1a2e1a":"#2a1f0e",color:l.status==="contacted"?"#4a6741":"#c9973a",padding:"4px 10px",borderRadius:"20px",fontSize:"11px",fontFamily:"monospace"}}>{l.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
        <div style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px"}}>
          <h2 style={{fontFamily:"Georgia,serif",color:"#e8e4dc",fontSize:"20px",marginBottom:"16px"}}>Quick Links</h2>
          {[["View Live Site","https://quillandparchment.ca"],["Services","/services"],["Rates","/rates"],["Contact","/contact"],["Samples","/samples"]].map(([l,h])=>(
            <a key={l} href={h} target="_blank" rel="noreferrer" style={{display:"block",color:"#c9973a",fontFamily:"monospace",fontSize:"14px",padding:"10px 0",borderBottom:"1px solid #2d2820",textDecoration:"none"}}>{l} →</a>
          ))}
        </div>
        <div style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px"}}>
          <h2 style={{fontFamily:"Georgia,serif",color:"#e8e4dc",fontSize:"20px",marginBottom:"16px"}}>Completed Jobs</h2>
          {jobs.length===0 ? <p style={{color:"#8a7f6e",fontSize:"14px"}}>No completed jobs yet.</p> : (
            jobs.map((j:any)=>(
              <div key={j.id} style={{padding:"10px 0",borderBottom:"1px solid #2d2820"}}>
                <div style={{color:"#e8e4dc",fontSize:"14px"}}>{j.client_name}</div>
                <div style={{color:"#8a7f6e",fontSize:"13px",fontFamily:"monospace"}}>{j.project_type} · {j.word_count} pages</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
