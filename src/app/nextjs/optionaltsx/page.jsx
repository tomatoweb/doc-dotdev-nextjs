import CodeBlock from "@/app/components/CodeBlock";
import { Typography } from "@mui/material";

const text1 = 
`const CodeBlock = (props: { text: string; color: string }) => {`;
const text2 = 
`// color can be omitted, but if passed, should be a string
const CodeBlock = (props: { text: string; color?: string }) => {`;

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>.tsx optional params with question mark (?)</Typography>      
      Not optional :
      <CodeBlock text={text1} />
      Optional :
      <CodeBlock text={text2} />
      Use :
      <CodeBlock text={"color: props.color || 'white'"} />
      
    </div>
  )
}
export default page