import { Typography } from "@mui/material";
import Image from "next/image";
import CodeBlock from "@/app/components/CodeBlock";

const page = () => {

	const text0 = `npm create vite@latest react-app

 cd react-app

 npm install

 install tailwind https://tailwindcss.com/docs/installation/using-vite

 Remove src/App.css

 Delete all the content of src/index.css

 Add this line at the top of src/index.css
 @import "tailwindcss"

 npm install react-icons --save

 // https://v5.reactrouter.com/web/guides/quick-start
 npm install react-router-dom

 npm run dev`;

  const text = `// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import LoginPage from "./routes/loginPage/loginPage";

function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
                path:"/",
                element:<HomePage />
            },
            {
                path:"/list",
                element:<ListPage />
            },
            {
                path:"/:id",
                element:<SinglePage />
            },
            {
                path:"/login",
                element:<LoginPage />
            },
          ]
        },
      ]);

  return (    
    <RouterProvider router={router}/>
  )
}

export default App`;

  return (
    <div className='text-sm'>
      <div className="items-center mt-5">
        <Typography variant="h4" sx={{ fontWeight: '500' }} mb={4}>
        <Image src="/react.svg" width={35} height={0} className="inline mr-3" alt="GitLab logo" />
				A basic and best practices React Router and Navigation
        </Typography>
        <Typography variant="h5" mb={4}>
				Install React + React-Router-Dom + Tailwind + React-Icons
        </Typography>
      </div>

      <CodeBlock text={text0} />
      <CodeBlock text={text} />
    </div>
  )
}

export default page