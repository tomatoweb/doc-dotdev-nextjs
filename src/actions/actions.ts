"use server";

import prisma from "@/lib/db";

export async function createPost(formData: FormData) {

  const result = await prisma.post.create({
    data: {
      title: formData.get('title') as string,
      slug: (formData.get('content') as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get('content') as string
    }
  });

  return result;
}