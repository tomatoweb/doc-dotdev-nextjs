import prisma from "@/lib/db";
import { NextResponse } from "next/server"


export async function POST(request) {
  const res = await request.json()
  const {title, content} = res
  const response = await prisma.post.create({
    data: {
      title: title,
      slug: title
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: content
    }
  })
  return NextResponse.json({data: response})
}