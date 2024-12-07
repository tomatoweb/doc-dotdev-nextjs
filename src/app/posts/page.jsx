import { createPost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";


export default async function PostsPage() {

  const posts = await prisma.post.findMany();

  const postsCount = await prisma.post.count();
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>
      { postsCount < 30 && // avoid DDoS attacks
        <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
          <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
          <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
          <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
        </form>
      }
    </main>
  );
}
