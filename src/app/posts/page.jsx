
//import { ArticleForm } from "@/actions/actions";
import prisma from "@/lib/db";
//import { revalidatePath } from "next/cache";
import Link from "next/link";
import ArticleForm from "@/app/components/ArticleForm";

export const dynamic = "force-dynamic"; // If you want no caching from posts at all

export default async function PostsPage() {

  /* Here we can see that Prisma client provides the feature like 
  direct query from your react component 
  without creating REST API but it will be only available for server side component 
  because client side browser does not have support for nodejs. 
  This will be a static route at build
  */
  const posts = await prisma.post.findMany();
  const postsCount = await prisma.post.count();

  /* const response = await fetch(process.env.URL + '/api/posts/', {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
	}
	const res = await response.json();
  
  const posts = res.data

  console.log(posts) */
  
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

      <ArticleForm/>

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

      <form action={addPost} className="flex flex-col gap-y-2 w-[300px]">
        <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
        <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
        <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
      </form>
        */}

    </main>
  );
}
