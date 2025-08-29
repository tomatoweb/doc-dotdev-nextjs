import Link from "next/link";
import AddPost from "@/app/components/AddPost";

export default async function PostsPage() {  

  // This is the classic data fetch with call to API
  const response = await fetch(process.env.URL + '/api/posts/', { cache: "no-store" })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
	}
	const res = await response.json();
  
  const posts = res.data
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-800">

      <h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={`/posts-api/${post.slug}`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>

      <AddPost/>

    </main>
  );
}
