"use server"

import { z } from "zod"

const schema = z.object({
 name:z.string(),
 email:z.string().email(),
 message:z.string()
})

export async function submitContact(data:any){

 const parsed = schema.safeParse(data)

 if(!parsed.success){
  return {error:"Invalid form"}
 }

 console.log(parsed.data)

 return {success:true}

}