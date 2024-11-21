import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text1 = 
`@tailwind base;
@tailwind components;
@tailwind utilities;`;
const text3 = 
`module.exports = {
  plugins: {
    autoprefixer: {}
  }
}`;
const text4 = 
`module.exports = {
  plugins: {
    tailwindcss: {}
    autoprefixer: {}
  }
}`;
const text5 = 
`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Symfony7-Tailwind from scratch</Typography>
      Install Symfony with symfony.exe
      <CodeBlock text={"symfony new symfony7-tailwind --webapp\ncd symfony7-tailwind"} />
      Or with composer
      <CodeBlock text={"composer create-project symfony/skeleton:\"7.1.*\" symfony7-tailwind\ncd symfony7-tailwind\ncomposer require webapp"} />     
      Install bundle webpack-encore
      <CodeBlock text={"composer require symfony/webpack-encore-bundle\nnpm install"} />
      Install npm packages
      <CodeBlock text={"npm install --force"} />
      In webpack.config.js uncomment .enableSassLoader()
      <CodeBlock text={".enableSassLoader()"} />
      Try to build
      <CodeBlock text={"npm run build"} />
      This will throw an error, so just copy/paste the console response suggested npm command 
      <CodeBlock text={"npm install sass-loader@^13.0.0 sass --save-dev"} />
      the build should now be OK
      <CodeBlock text={"npm run build"} />
      in assets/app.js change .css in .scss
      <CodeBlock text={"import './styles/app.scss';"} />
      Change extension from assets/styles/app.css with .scss
      <CodeBlock text={"assets/styles/app.scss"} />      
      Install postcss and autoprefixer
      <CodeBlock text={"npm install postcss-loader autoprefixer --dev"} />
      Create postcss.config.js like this :
      <CodeBlock text={text3} />
      In webpack.config.js add enablePostCssLoader :  
      <CodeBlock text={".enablePostCssLoader()"} />
      Install tailwindcss :  
      <CodeBlock text={"npm install tailwindcss"} />
      Again update postcss.config.js :
      <CodeBlock text={text4} />    
      init Tailwind :
      <CodeBlock text={"npx tailwindcss init"} />
      Modify tailwind.config.js like this :
      <CodeBlock text={text5} />
      Update assets/styles/app.scss like this :
      <CodeBlock text={text1} />
      In templates/home/index.html.twig use Tailwind
      <CodeBlock text={text6} />
      Build and watch 
      <CodeBlock text={"npm run build\nnpm run watch"} />
      Serve :
      <CodeBlock text={"php -S localhost:8000 -t public"} /> 
      Check that the 4 new used TW classes have been added in public/build/app.css
      <CodeBlock text={text7} />
      for Tailwind components go to :
      <CodeBlock text={"https://tailwindui.com/"} />
      Enjoy !
    </div>
  )
}
export default page