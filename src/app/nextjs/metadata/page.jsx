// only on server side

import CodeBlock from "@/app/components/CodeBlock";

// import type { Metadata } from "next"; // for tsx

// https://nextjs.org/docs/app/getting-started/metadata-and-og-images
// server side adding <meta> in the <head>
export const metadata = {
	title: "Mathias Appelmans mathiasappelmans.be",
	description: "Mathias Appelmans Web developer React PHP",
};


// for tsx
/* export const metadata: Metadata = {
	title: "Mathias Appelmans mathiasappelmans.be",
	description: "Mathias Appelmans Web developer React PHP",
}; */


const Page = () => {

	const text = `// Use only on server side, e.g. in RootLayout.tsx
https://nextjs.org/docs/app/getting-started/metadata-and-og-images

// TSX
import type { Metadata } from "next"; // for tsx

// This will add the tags <meta> in the <head> 
// during rendering page on server side

// JSX
export const metadata = {
	title: "Mathias Appelmans mathiasappelmans.be",
	description: "Mathias Appelmans Web developer React PHP",
};

// TSX
export const metadata: Metadata = {
	title: "Mathias Appelmans mathiasappelmans.be",
	description: "Mathias Appelmans Web developer React PHP",
};
`;

	return (
		<main className="flex flex-col p-4 bg-gray-900">
			<CodeBlock text={text} />
		</main>
	)
}

export default Page