import Link from "next/link";
import AddPost from "@/app/components/AddPost"; 

export default async function PostsPage() {

	// Get data by fetching api (client side, with useEffect)
	const response = await fetch(process.env.URL + '/api/posts/', { cache: "no-store" })
	const data = await response.json()
	const posts = data.data

	// Get data directly from own database
  // const posts = await prisma.post.findMany();

	// set delay for dev purpose
	// await new Promise( (resolve) => setTimeout(resolve, 3000) );

  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">

      <h1 className="text-3xl font-semibold">All Posts</h1>

      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={`/posts-orm/${post.slug}`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

			{/* Form to add a Post to the list (client component) */}
      <AddPost/>

    </main>
  );
}
