import CodeBlock from "@/app/components/CodeBlock"


const page = () => {

  const text = 
`<Image 
  className="rounded-lg" 
  src="/children-pattern.png" 
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} alt=""
/>`;

  return (
    <div>
      <CodeBlock text={text} />
    </div>
  )
}

export default page