import CodeBlock from "@/app/components/CodeBlock";
import { Typography} from "@mui/material";
import Image from "next/image";

const page = () => { 

const text = `// on local
npm run build
`;

const text1 = `server {
	server_name social.dotdev.be;	

	root 						/var/www/srv_dev/app/social/build;
	index index.html;

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/dotdev.be/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/dotdev.be/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
    if ($host = social.dotdev.be) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


	listen 							80;
	listen 							[::]:80;
	server_name social.dotdev.be;
    return 404; # managed by Certbot
}
`;
  return (
    
      <div className='overflow-x-auto text-sm'>
        <Typography variant="h6" component="div" sx={{mb:2}}>
          ✨ Deploy a React app on Debian 11 VPS
        </Typography>
        <CodeBlock text={text} />
        <Typography variant="h6" component="div" sx={{mb:2}}>
          Connect to VPS with Filezilla
        </Typography>
        <Typography variant="h6" component="div" sx={{mb:2}}>
          copy local build folder to /var/www/srv_dev/app/social/
        </Typography>
        <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{width: '100%', height: 'auto'}} 
        className="h-auto rounded-lg" 
        src="/deploy-react.png" 
        alt=""
      />
        <Typography variant="body2" component="div" sx={{mt:5}}>
          configure /var/www/srv_dev/config/nginx/domains/social.dotdev.be.conf, restart nginx
        </Typography>
        <CodeBlock text={text1} />
        <Typography variant="body2" component="div" sx={{mt:5}}>
          no pm2 config needed, no git on remote server
        </Typography>
        
      </div>
   
  )
}

export default page