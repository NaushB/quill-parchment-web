import Link from "next/link"
import { getPosts } from "../../lib/sanity"

export default async function BlogPage() {

  const posts = await getPosts()

  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"40px"}}>
      <h1 style={{fontSize:"36px"}}>Blog</h1>

      {posts?.map((post:any)=>(
        <div key={post.slug.current} style={{marginTop:"30px"}}>

          <Link href={`/blog/${post.slug.current}`}>
            <h2>{post.title}</h2>
          </Link>

          <p>{new Date(post.publishedAt).toDateString()}</p>

          <p>{post.excerpt}</p>

        </div>
      ))}

    </div>
  )
}