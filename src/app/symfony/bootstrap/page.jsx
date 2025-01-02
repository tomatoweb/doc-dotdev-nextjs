import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text = 
`CSS Bootstrap : 
	in base.html.twig 		
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

FORM Bootstrap CSS: 
  # config/packages/twig.yaml
  twig:
      form_themes: ['bootstrap_5_layout.html.twig']`;

const page = () => {
  return (
    <div>
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
        🚀 Bootstrap CSS and FORM CSS
      </Typography>
      
      <CodeBlock text={text} />
      
    </div>
  )
}
export default page