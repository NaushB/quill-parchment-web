import Link from "next/link";
import { getPosts } from "../../lib/sanity";

export default async function BlogPage() {
  let posts: any[] = [];
  try { posts = await getPosts(); } catch {}
  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>Blog</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>Proofreading Insights</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"48px"}}></div>
      {posts.length === 0 ? (
        <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8}}>Content coming soon — check back weekly for proofreading tips and writing advice from Khurram.</p>
      ) : (
        <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
          {posts.map((post:any) => (
            <div key={post.slug.current} style={{borderBottom:"1px solid #2d2820",paddingBottom:"40px"}}>
              <Link href={`/blog/${post.slug.current}`} style={{textDecoration:"none"}}>
                <h2 style={{fontFamily:"Georgia,serif",fontSize:"26px",color:"#e8e4dc",marginBottom:"8px"}}>{post.title}</h2>
              </Link>
              <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",marginBottom:"12px"}}>{new Date(post.publishedAt).toDateString()}</p>
              <p style={{color:"#8a7f6e",fontSize:"15px",lineHeight:1.7,marginBottom:"16px"}}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug.current}`} style={{color:"#c9973a",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textDecoration:"none"}}>READ MORE →</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
