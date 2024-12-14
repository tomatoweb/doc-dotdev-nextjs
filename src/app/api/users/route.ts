import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {

  try {

    const posts = await prisma.post.findMany();

    return NextResponse.json(posts)
    
  } catch (error) {
    console.log('server error', error)
    return new NextResponse('Internal error', { status: 500})
  }
}


/* This request object below is a NextRequest object, 
which is an extension of the Web Request API. 
NextRequest gives you additional control over the incoming request, 
including easily accessing cookies and an extended, parsed, URL object nextUrl. */
export async function POST(request: NextRequest) {
  
  try {

    const url = request.nextUrl

    console.log('this is a POST...')
    console.log(url)

    const posts = await prisma.post.findMany();

    //console.log(posts)


    return NextResponse.json(posts)
    
  } catch (error) {
    console.log('server error', error)
    return new NextResponse('Internal error', { status: 500})
  }
}