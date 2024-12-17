import prisma from "@/lib/db";
import { NextResponse } from "next/server"

export async function GET() {

  const result = await prisma.post.findMany()

  return NextResponse.json({
    message: 'ok',
    status: 200,
    data: result
  })
}


export async function POST(req: Request) {

  const body = await req.json()

  const {title, content} = body

  await prisma.post.deleteMany({where: {}})

  const result = await prisma.post.create({
    data: {
      title: title,
      slug: title
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: content
    }
  })

  if(!result) return NextResponse.json({
    message: 'error',
    status: 500
  })
  
  return NextResponse.json({ 
    message: 'ok', 
    status: 200,
    data: result
  })
}