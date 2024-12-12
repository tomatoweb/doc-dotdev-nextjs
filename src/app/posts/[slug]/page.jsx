
import prisma from "@/lib/db"
import { Box } from "@mui/material";
import Link from "next/link";

export default async function PostPage({params}) {

  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    }
  })
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <Box className="border-t border-b border-primary py-5 leading-8 ">        
        {post.content}              
      </Box>
      <Box>
        <Link href="/posts">
          All Posts
        </Link>
      </Box>
    </main>
  );
}