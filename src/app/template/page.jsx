import { Link, Typography } from "@mui/material";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";
import CodeBlock from "@/app/components/CodeBlock";

const page = () => {

  const text = `'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")

    useEffect(() => {
      document.title = title
      console.log('rendering...')
    }, [title]);


    return (
      <main className="flex flex-col p-4 bg-gray-900">    
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)} 
          className="m-4 bg-gray-800" 
          placeholder="title" 
        />
        <input 
          type="text" 
          onChange={e => setFirstName(e.target.value)} 
          className="m-4 bg-gray-800" 
          placeholder="first name"
        />
      </main>
    )
}

export default MyUseEffect`;

  return (
    <div className='text-sm'>
      <div className="flex items-center mt-5">
        <Image src="/gitlab-logo-500-svg.svg" width={70} height={0} className="-mt-8" alt="GitLab logo" />
        <Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
          This is the base template to create a new page here in doc.dotdev.be
        </Typography>
      </div>
      <Typography variant="body1" mb={4} sx={{ whiteSpace: 'pre-wrap', lineHeight: '2em' }}>
        <span className="text-link font-semibold">CI/CD </span>
        {`automates the software development process, from coding through deployment. 
Falls under DevOps (the joining of development and operations teams) and combines the practices of continuous integration and continuous delivery. 
CI/CD automates much or all of the manual human intervention traditionally needed to get new code from a commit into production, encompassing the build, test (including integration tests, unit tests, and regression tests), and deploy phases, as well as infrastructure provisioning. 
`}
      </Typography>
      <Typography variant="body1" mb={4}>
        With a <span className="text-link font-semibold">CI/CD </span> pipeline, development teams can make changes to code that are then automatically tested and pushed out for delivery and deployment.
        Get CI/CD right and downtime is minimized and code releases happen faster.
      </Typography>
      <CodeBlock text={text} />
      <Typography variant="body1" mb={4}>
        <span className="text-link font-semibold">CI/CD </span>
        {`also allows for quicker feedback loops with stakeholders, ensuring that the final product aligns closely with user expectations. 
				Overall, it's a foundational practice for any team aiming for high-speed, high-quality software development.`}
      </Typography>
      <Typography sx={{ mb: 4 }}>
        <Link href="https://about.gitlab.com/topics/ci-cd/" target="_blank">
          https://about.gitlab.com/topics/ci-cd/
        </Link>
      </Typography>
      <ImageModal img={"/useEffect.png"} />
    </div>
  )
}

export default page