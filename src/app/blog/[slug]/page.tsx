import { getPosts } from "../../lib/sanity"
import { PortableText } from "@portabletext/react"

export default async function BlogPost({ params }: { params:{slug:string}}) {

  const post = await getPost(params.slug)

  if(!post){
    return <div>Post not found</div>
  }

  return (
    <article style={{maxWidth:"700px",margin:"0 auto",padding:"40px"}}>

      <h1>{post.title}</h1>

      <p>{new Date(post.publishedAt).toDateString()}</p>

      <PortableText value={post.body}/>

    </article>
  )
}