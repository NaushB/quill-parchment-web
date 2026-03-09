export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#8a7f6e"}}>Post not found: {params.slug}</p>
    </div>
  );
}
