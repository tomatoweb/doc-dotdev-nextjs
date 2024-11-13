import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text1 = 
`@tailwind base;
@tailwind components;
@tailwind utilities;`;
const text3 = 
`let tailwindcss = require("tailwindcss")

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('postcss-import'),
    require('autoprefixer')
  ]
}`;
const text4 = 
`.enablePostCssLoader((options) => {
  options.postcssOptions = {
    config: './postcss.config.js'
  }
})`;
const text5 = 
`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
    "./templates/**/*.{html,twig}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})`;
const text6 = 
`{% extends 'base.html.twig' %}

{% block title %}Hello HomeController!{% endblock %}

{% block body %}
  <h1 class="bg-blue-500 text-2xl text-center font-bold">Woohoooo.</h1>
{% endblock %}`;
const text7 = 
`.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.text-center {
  text-align: center;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}`;

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Symfony7-Tailwind from scratch</Typography>
      with symfony.exe
      <CodeBlock text={"symfony new symfony7-tailwind --webapp"} />
      with composer
      <CodeBlock text={"composer create-project symfony/skeleton:\"7.1.*\" symfony7-tailwind\ncd symfony7-tailwind\ncomposer require webapp"} />     
      Install Tailwind bundle, dependencies and compile assets to public/build.
      Install and initialize Tailwind
      <CodeBlock text={"composer require symfonycasts/tailwind-bundle\nnpm install\nnpm run dev\nnpm install -D tailwindcss postcss-loader purgecss-webpack-plugin path\nnpx tailwindcss init -p"} />     
      Modify postcss.config.js like this :
      <CodeBlock text={text3} />
      In webpack.config.js add :  
      <CodeBlock text={text4} />
      Modify assets/styles/app.css this :
      <CodeBlock text={text1} />     
      Modify tailwind.config.js like this :
      <CodeBlock text={text5} />
      In CLI 
      <CodeBlock text={"npx tailwindcss -i ./assets/styles/app.css -o ./public/build/app.css --watch"} />  
      In another CLI create a controller/route :
      <CodeBlock text={"php bin/console make:controller Home"} />  
      Serve :
      <CodeBlock text={"php -S localhost:8000 -t public"} />  
      In templates/home/index.html.twig use Tailwind
      <CodeBlock text={text6} />
      Check that the 4 new used TW classes have been added in public/build/app.css and refresh browser
      <CodeBlock text={text7} />
    </div>
  )
}
export default page