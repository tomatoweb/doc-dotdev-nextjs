
import AddPost from "@/app/components/AddPost";
import PostsList from "../components/posts-list";
import { Suspense } from "react";

/* Prisma client provides direct query from this React component
	 without creating REST API, but it will be only available for server side component
	 because client side browser does not have support for nodejs.
	 Be aware that this will be build as static/cached route
	 thus, the re-rendered posts list will NOT reflect the DB state
	 Except if "force-dynamic" is specified on top of the component,
	 thus, If you want no caching from posts at all :
*/
export const dynamic = "force-dynamic";  

export default async function PostsPage() {  

	// await new Promise( (resolve) => setTimeout(resolve, 3000) ); // delay (dev)

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">

      <h1 className="text-3xl font-semibold">All Posts</h1>


			{/* Suspense will make Nextjs rendering and sending immediately the code that is outside this Suspense tag,
			meaning, the h1 element and the AddPost form are immediately sended to the client,
			and after 3 secondes (I added a 3 sec timeout in the utils/getPostsByOrm to easy visualize the delay) 
			the posts list will be sended. */}
			<Suspense fallback={<p className="text-emerald-700">Loading...</p>}>
      	<PostsList />
			</Suspense>

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
}
