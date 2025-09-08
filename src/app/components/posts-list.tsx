import { getPostsByOrm } from "@/utils/getPostsByOrm";
import Link from "next/link";

export default async function PostsList() {

	const res = await getPostsByOrm();

	const posts = res.data;

	return (
		<ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
            <li key={post.id} className="flex items-center justify-center px-5">
              <Link href={`/posts-orm/${post.slug}`}>
                {post.title}
              </Link>
            </li>
        ) )}
      </ul>
	)
}