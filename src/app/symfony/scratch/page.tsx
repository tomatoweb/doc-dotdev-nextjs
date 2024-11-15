import { Alert, Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";
import { CheckCircleOutline } from "@mui/icons-material";

const text1 = 
`@tailwind base;
@tailwind components;
@tailwind utilities;`;
const text2 = 
`remove the line "import ./bootstrap.js;" from /assets/app.js`;
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
}`;
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
const text8 = 
`{
  "entrypoints": {
    "app": {
      "js": [
        "/build/runtime.js",
        "/build/app.js"
      ],
      "css": [
        "/build/app.css"
      ]
    }
  }
}`;
const text9 = 
`{
  "build/app.css": "/build/app.css",
  "build/app.js": "/build/app.js",
  "build/runtime.js": "/build/runtime.js"
}`;

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Symfony7-Tailwind from scratch</Typography>
      with symfony.exe
      <CodeBlock text={"symfony new symfony7-tailwind --webapp\ncd symfony7-tailwind"} />
      with composer
      <CodeBlock text={"composer create-project symfony/skeleton:\"7.1.*\" symfony7-tailwind\ncd symfony7-tailwind\ncomposer require webapp"} />     
      Install bundle webpack-encore
      <CodeBlock text={"composer require symfony/webpack-encore-bundle\nnpm install"} />
      <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity="error" sx={{marginBottom: '2rem'}}>      
        <Typography sx={{fontWeight: 600}}>
          {text2}
        </Typography>
      </Alert>
      Install Tailwind bundle, dependencies and compile assets to public/build.
      Install and initialize Tailwind
      <CodeBlock text={"composer require symfonycasts/tailwind-bundle\nnpm install\nnpm run dev\nnpm install -D tailwindcss postcss-loader purgecss-webpack-plugin path\nnpx tailwindcss init -p"} />     
      Modify postcss.config.js like this :
      <CodeBlock text={text3} />
      In webpack.config.js add :  
      <CodeBlock text={text4} />
      Modify assets/styles/app.css like this :
      <CodeBlock text={text1} color='#84cc16' />     
      Modify tailwind.config.js like this :
      <CodeBlock text={text5} />
      Build input -i output -o and watch for changes
      <CodeBlock text={"npx tailwindcss -i ./assets/styles/app.css -o ./public/build/app.css --watch"} />  
      In another CLI create a controller/route and change its route from /home  to / 
      <CodeBlock text={"php bin/console make:controller Home"} />
      In templates/home/index.html.twig use Tailwind
      <CodeBlock text={text6} />
      Built Tailwind : 
      <CodeBlock text={"php bin/console tailwind:build"} />
      Serve :
      <CodeBlock text={"php -S localhost:8000 -t public"} />  
      Check that the 4 new used TW classes have been added in public/build/app.css
      <CodeBlock text={text7} />
      In case of problem: check public/build/entrypoints.json and public/build/manifest.json, should look like this :
      <CodeBlock text={text8} />
      <CodeBlock text={text9} />
      Enjoy !
    </div>
  )
}
export default page