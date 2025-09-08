export async function getPostsByApi() {
	const response = await fetch(process.env.URL + '/api/posts/', { cache: "no-store" })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
	}
	const posts = await response.json();
	return posts;
}