import Link from "next/link";
import prisma from "@/lib/db";
import Form from "../components/Form";

export default async function PostsPage() {

  const posts = await prisma.post.findMany()

  const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-6 text-center bg-gray-800">
      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={`/posts-api/${post.slug}`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

      { postsCount < 50 && <Form /> }      

    </main>
  );
}
