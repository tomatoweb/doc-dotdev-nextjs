import { Typography } from "@mui/material";

const page = () => {
	return (
		<div className='overflow-x-auto text-sm'>
			<Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>Transpile and Bundle the code</Typography>
			<Typography variant="body1" mb={4}>
				<span className="text-link font-semibold">Babel </span>
				{`transpile a Javascript code version, e.g. ES2017 described by ECMAScript 6 latest standard (React's JSX, JS/TS arrow functions, etc) to the standard ES2015 Javascript code supported by majority of browsers`}
			</Typography>
			<Typography variant="body1" mb={4}>
				<span className="text-link font-semibold">Webpack </span>
				is a module bundler that packages the Javascript code and other assets (like CSS, images, and fonts) into a small number of optimized files called bundles.
				This process makes web applications load faster and more efficiently by reducing the number of HTTP requests and optimizing file sizes. </Typography>
			<Typography variant="body1" mb={4}>
				<span className="text-link font-semibold">SWC </span>
				or Speedy Web Compiler, Written in Rust, can perform both code compilation that the older Babel does and bundling that Webpack does.
				This is the Next.js default bundler.
				 </Typography>
			<Typography variant="body1" mb={4}>
				<span className="text-link font-semibold">Turbopack </span>
				is a Rust-based, incremental bundler and the successor to Webpack, designed to make local development and builds significantly faster,
				especially for large JavaScript and TypeScript applications like those built with Next.js.
				It can replace Webpack in development fast refresh mode by adding it in package.json scripts next dev --turbopack</Typography>
		</div>
	)
}

export default page