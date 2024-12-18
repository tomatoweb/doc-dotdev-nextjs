import Link from "next/link";
import prisma from "@/lib/db";

export default async function PostsPage() {

  const posts = await prisma.post.findMany()

  const postsCount = await prisma.post.count();

  const addPost = async (formData) => {
    "use server";

    await prisma.post.create({
      data: {
        title: formData.get('title'),
        slug: (formData.get('title'))
          .replace(/\s+/g, "-")
          .toLowerCase(),
        content: formData.get('content')
      }
    })
  }

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">
      <form
        action={addPost} 
        className="flex flex-col gap-y-2 w-[300px]"
      >
        <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
        <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
        <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
      </form>

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

    </main>
  );
}
