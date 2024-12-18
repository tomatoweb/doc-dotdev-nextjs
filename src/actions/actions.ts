"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { headers } from 'next/headers';

export async function createPost(formData: FormData) {

  const headersList = headers();

  console.log(headersList)

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