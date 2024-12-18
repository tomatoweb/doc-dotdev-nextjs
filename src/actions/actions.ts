"use server";

//import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { headers } from 'next/headers';

export async function createPost() {

  const headersList = headers();

  console.log(headersList)

  

  revalidatePath('/posts-action')
}