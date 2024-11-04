import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text = 
`import { Box, Container, Typography } from "@mui/material";
export default function Home() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h1" gutterBottom>
          Welcome to My Next.js App
        </Typography>
        <Typography variant="h2" gutterBottom>
          Enjoy this moment!
        </Typography>
        <Typography variant="body1" className="text-tahiti">
          This is an example of how to use Material-UI Typography.
          The h1 heading and this paragraph are styled.
        </Typography>
      </Box>
    </Container>
  );
}`

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Nextjs Tailwind MUI app from scratch</Typography>
      <CodeBlock text={"npx create-next-app@14 appName"} />
      <CodeBlock text={"cd appName"} />
      <CodeBlock text={"code ."} />
      <CodeBlock text={"npm install @mui/material @emotion/react @emotion/styled\nnpm install @mui/material-nextjs @emotion/cache"} />
      <Typography>note: for nextjs 15 add option --force</Typography>
      <CodeBlock text={text} />
    </div>
  )
}
export default page