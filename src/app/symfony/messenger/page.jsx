import { Typography, Link } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const Page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Messenger: async queueing tasks to liberate user interface from waiting (example with sendings emails) </Typography>
      <CodeBlock text={"composer require symfony/messenger"} />
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4, marginTop: 4}}>
      More details :
      </Typography>
      <Link 
				href={"https://symfony.com/doc/current/messenger.html"} 
				sx={{color: 'link', wordBreak: 'break-all'}} 
				target="_blank"> https://symfony.com/doc/current/messenger.html
			</Link> 
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4, marginTop: 4}}>
      Youtube :
      </Typography>
      <Link 
				href={"https://www.youtube.com/watch?v=B3FBJzuueN0&list=PLjwdMgw5TTLXuvlGqP18gbJCYVg7y6Fig&index=28&ab_channel=Grafikart.fr"} 
				sx={{color: 'link', wordBreak: 'break-all'}} 
				target="_blank"> 
					https://www.youtube.com/watch?v=B3FBJzuueN0&list=PLjwdMgw5TTLXuvlGqP18gbJCYVg7y6Fig&index=28&ab_channel=Grafikart.fr
				</Link>
    </div>
  )
}
export default Page