import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text = 
`php bin/console make:controller MyController
php bin/console make:entity MyEntity
php bin/console make:migration
php bin/console migrate    or d:m:m   or doctrine:migrations:migrate`;

const page = () => {
  return (
    <div>
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
        🚀 Doctrine commands
      </Typography>      
      <CodeBlock text={text} />      
    </div>
  )
}
export default page