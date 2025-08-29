"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'

// Server Action : add a new post (publication, article) in database
export async function createPost(formData: FormData) {

  try {
    await prisma.post.create({
      data: {
        title: formData.get('title') as string,
        slug: (formData.get('content') as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        content: formData.get('content') as string
      }
    });    
  } catch (e) {
    console.log(e.message)
    return e.message
    
  }

  revalidatePath('/posts-action')
}


// Server Action : Set cookie in user browser
export async function setCookie(data : { name: string; value: string }) {
	if(!cookies().get(data.name)) {
		cookies().set(data.name, data.value);
	}	
}