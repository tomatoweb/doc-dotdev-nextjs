import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text = `make:entity MyEntity
make:migration
migrate    or d:m:m   or doctrine:migrations:migrate`;

const page = () => {
  return (
    <div>
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
        🚀 Doctrine commands
      </Typography>      
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
        php bin/console
      </Typography>      
      <CodeBlock text={text} lang={'php'} />      
    </div>
  )
}
export default page