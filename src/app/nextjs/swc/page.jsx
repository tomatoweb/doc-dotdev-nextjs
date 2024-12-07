import { Typography } from "@mui/material";

const page = () => {
  const text = 
  `
The Next.js Compiler, written in Rust using SWC, allows Next.js to transform and minify your JavaScript code for production. This replaces Babel for individual files and Terser for minifying output bundles.

Compilation using the Next.js Compiler is 17x faster than Babel and enabled by default since Next.js version 12. If you have an existing Babel configuration or are using unsupported features, your application will opt-out of the Next.js Compiler and continue using Babel.

Why SWC?
SWC is an extensible Rust-based platform for the next generation of fast developer tools.

SWC can be used for compilation, minification, bundling, and more – and is designed to be extended. It's something you can call to perform code transformations (either built-in or custom). Running those transformations happens through higher-level tools like Next.js.

We chose to build on SWC for a few reasons:

Extensibility: SWC can be used as a Crate inside Next.js, without having to fork the library or workaround design constraints.
Performance: We were able to achieve ~3x faster Fast Refresh and ~5x faster builds in Next.js by switching to SWC, with more room for optimization still in progress.
WebAssembly: Rust's support for WASM is essential for supporting all possible platforms and taking Next.js development everywhere.
Community: The Rust community and ecosystem are amazing and still growing.
`;
  return (
    
      <div className='overflow-x-auto text-sm'>
        <Typography variant="h5" mb={4}>SWC Next.js Compiler</Typography>
        <pre className="text-wrap">
          {text}
        </pre>
      </div>
   
  )
}

export default page