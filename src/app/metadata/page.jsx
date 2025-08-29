// only on server side

import CodeBlock from "../components/CodeBlock";

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

	const text = `// only on server side

import CodeBlock from "../components/CodeBlock";

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

    return (
      <main className="flex flex-col p-4 bg-gray-900">    
        <CodeBlock text={text} />
      </main>
    )
}

export default Page
`;

	return (
		<main className="flex flex-col p-4 bg-gray-900">
			<CodeBlock text={text} />
		</main>
	)
}

export default Page