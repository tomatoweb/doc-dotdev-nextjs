"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

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