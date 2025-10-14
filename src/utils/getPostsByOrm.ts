import prisma from "@/lib/db";

export async function getPostsByOrm() {
	const data = await prisma.post.findMany();
	const count = await prisma.post.count();

	// set delay for dev purpose
	// await new Promise((resolve) => setTimeout(resolve, 3000));
console.log(data)
	return { data, count };
}