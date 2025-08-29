'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material';

const Page = () => {
  
  const text = `import prisma from "@/lib/db";
import Link from "next/link";
import AddPost from "@/app/components/AddPost";

export const dynamic = "force-dynamic"; // If you want no caching from posts at all

export default async function PostsPage() {

  /* Here we can see that Prisma client provides
     direct query from your react component
     without creating REST API but it will be only available for server side component
     because client side browser does not have support for nodejs.
     Be aware that this will be build as static/cached route
     thus, the re-rendered posts list will NOT reflected the DB state,
     except if "force-dynamic" is specified on top of the component
  */
  const posts = await prisma.post.findMany();
  const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">

      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={\`/posts-orm/\${post.slug}\`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

      <AddPost/>

      {/*
        // Server Action to add post is not working on Debian
        // (npm run build, pm2) but well in dev.
        // error msg :
        // Application error: a server-side exception has occurred (see the server logs for more information) Digest: 760205265
        <form action={addPost} className="flex flex-col gap-y-2 w-[300px]">
          <input type="text" name="title" placeholder="title" className="p-2 rounded-sm bg-gray-900" />
          <textarea rows={5} name="content" placeholder="content" className="p-2 rounded-sm bg-gray-900" />
          <button className="bg-blue-500 py-2 text-white rounded-sm">Create post</button>
        </form>
      */}

    </main>
  );
}`;
    
    return (
    <main>
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ Suspense
      </Typography>
      <CodeBlock text={text} />
    </main>
  )
}

export default Page