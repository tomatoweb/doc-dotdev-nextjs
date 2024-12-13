
//import { createPost } from "@/actions/actions";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
//import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function PostsPage() {

  const posts = await prisma.post.findMany();

  const postsCount = await prisma.post.count();

  const addPost = async (formData) => {
    "use server";
    await prisma.post.create({
      data: {
        title: formData.get('title'),
        slug: (formData.get('content'))
          .replace(/\s+/g, "-")
          .toLowerCase(),
        content: formData.get('content')
      }
    })
    revalidatePath('/posts')
  }
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">

      <h1 className="text-3xl font-semibold">All Posts by Prisma ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

        {/* 
          Server Actions to create posts are not working 
          in production (npm run build, pm2) but well in dev.
          error msg : 
          Application error: a server-side exception has occurred 
          (see the server logs for more information).
          Digest: 760205265 
          <form 
          onSubmit={(e) => {
            fetch('/api/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: e.target.title.value,
                content: e.target.content.value,
                }),
                })
                }} 
                className="flex flex-col gap-y-2 w-[300px]"
          >  
        */}        
        
        <form action={addPost} className="flex flex-col gap-y-2 w-[300px]">
          <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
          <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
          <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
        </form>        

     
    </main>
  );
}
