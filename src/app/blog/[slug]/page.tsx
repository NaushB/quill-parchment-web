import { getPost } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: any = null;
  try { post = await getPost(slug); } catch {}
  if (!post) return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#8a7f6e"}}>Post not found.</p>
      <Link href="/blog" style={{color:"#c9973a"}}>← Back to blog</Link>
    </div>
  );
  return (
    <article style={{maxWidth:"720px",margin:"0 auto",padding:"80px 24px"}}>
      <Link href="/blog" style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"2px",textDecoration:"none",display:"block",marginBottom:"32px"}}>← BACK TO BLOG</Link>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"48px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>{post.title}</h1>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",marginBottom:"48px"}}>{post.author || "Khurram Butt"} · {new Date(post.publishedAt).toDateString()}</p>
      <div style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.9}}>
        <PortableText value={post.body} />
      </div>
      <div style={{marginTop:"60px",padding:"32px",background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",textAlign:"center"}}>
        <p style={{fontFamily:"Georgia,serif",fontSize:"20px",color:"#e8e4dc",marginBottom:"16px"}}>Need professional transcript proofreading?</p>
        <Link href="/contact" style={{background:"#c9973a",color:"#0f0e0b",padding:"14px 28px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Get a Quote</Link>
      </div>
    </article>
  );
}
