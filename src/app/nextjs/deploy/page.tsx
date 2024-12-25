import CodeBlock from "@/app/components/CodeBlock";
import { Typography, Link } from "@mui/material";

const page = () => {
  const text = 
  `Create a repo on Github

Dans le projet nextjs local
	changer l'origin si on a déjà un .git
		git remote set-url git@github.com:tomatoweb/dotdev-next-tw.git
		git push origin master

	si on a pas encore de .git
		git init
		git remote add origin git@github.com:tomatoweb/dotdev-next-tw.git
		git push -u origin main


Créer un fichier /var/www/srv_dev/config/nginx/domains/myapp.dotdev.be.conf 
et préciser le domaine, le chemin de l'app, et du fichier .nginx, par exemple:
(voir srv_dev backup dans H:/DEV/srv_dev)
server_name     dotdev.be;
set $app_path				$env_path/app/dotdev;
set $autoload_php			$env_path/app/dotdev/index.php;
include 					/var/www/srv_dev/app/dotdev/.nginx;

Avec putty, aller dans /var/www/srv_dev/app/myapp ou bien le créer

le vider si nécessaire: rm -R * et rm -R .*

git clone git@github.com:tomatoweb/dotdev-next-tw.git .

!! avec filezilla, transférer le fichier .env s'il existe (il est non-versionné, donc pas dans le git)
!! et le modifier si nécessaire (port ?)

(Need node installed, also npm and pm2: https://www.youtube.com/watch?v=HIb4Ucs_foQ&ab_channel=SonnySangha)

npm i

npm run build          (d'abord en local pour corriger les erreurs webpack)

Créer un fichier /var/www/srv_dev/app/myapp/.nginx 
avec en premières lignes :
location / {
	proxy_pass http://localhost:3000;   (adapter le port !!)
				(rien d'autres ici !)
}


chown -R www-data:www-data /var/www/srv_dev (pour le domaine)
chown -R www-data:www-data *
chown -R www-data:www-data .*   (pour .gitignore, .nginx, .next, etc...)
service nginx restart

pour installer pm2:
npm install -g pm2

// vérifier qu'on est bien dans le bon directory
cd /var/www/srv_dev/app/myapp

pm2 start npm --name "nextjs-dotdev" -- start -- --port=3000   (adapter le port !!)

pm2 save

pm2 list     (pour checker)


Après un update du code local, commiter et pusher, faire un pull sur le serveur, puis un build, et enfin : 
pm2 list  (voir la liste des process)
pm2 restart [id du process]

help: https://www.youtube.com/watch?v=HIb4Ucs_foQ&ab_channel=SonnySangha


(pour déployer un projet PHP voir l'exemple Symfony de agency.dotdev.be)
(pour installer composer: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-debian-11)
`;

const text2 = `apt install snapd
snap install snapd
snap install hello-world
hello-world
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
certbot --nginx
`;

const text4 = `root@vps683375:/var/www/srv_dev/app/social# certbot certificates
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Found the following certs:
  Certificate Name: dotdev.be
    Serial Number: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    Key Type: ECDSA
    Domains: dotdev.be agency.dotdev.be app.dotdev.be dashboard.dotdev.be doc.dotdev.be e-shop.dotdev.be immo.dotdev.be mtapp.dotdev.be
    Expiry Date: 2025-02-19 15:21:47+00:00 (VALID: 56 days)
    Certificate Path: /etc/letsencrypt/live/dotdev.be/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/dotdev.be/privkey.pem
  Certificate Name: symfony.dotdev.be
    Serial Number: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    Key Type: ECDSA
    Domains: symfony.dotdev.be
    Expiry Date: 2025-02-24 13:07:07+00:00 (VALID: 61 days)
    Certificate Path: /etc/letsencrypt/live/symfony.dotdev.be/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/symfony.dotdev.be/privkey.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`;

const text5 = `root@vps683375:/var/www/srv_dev/app/social# certbot --expand -d dotdev.be,agency.dotdev.be,app.dotdev.be,dashboard.dotdev.be,doc.dotdev.be,e-shop.dotdev.be,immo.dotdev.be,mtapp.dotdev.be,social.dotdev.be
Saving debug log to /var/log/letsencrypt/letsencrypt.log

How would you like to authenticate and install certificates?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Apache Web Server plugin (apache)
2: Nginx Web Server plugin (nginx)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Renewing an existing certificate for dotdev.be and 8 more domains

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/dotdev.be/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/dotdev.be/privkey.pem
This certificate expires on 2025-03-25.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Successfully deployed certificate for dotdev.be to /var/www/srv_dev/config/nginx/domains/dotdev.be.conf
Successfully deployed certificate for agency.dotdev.be to /var/www/srv_dev/config/nginx/domains/agency.dotdev.be.conf
Successfully deployed certificate for app.dotdev.be to /var/www/srv_dev/config/nginx/domains/app.dotdev.be.conf
Successfully deployed certificate for dashboard.dotdev.be to /var/www/srv_dev/config/nginx/domains/dashboard.dotdev.be.conf
Successfully deployed certificate for doc.dotdev.be to /var/www/srv_dev/config/nginx/domains/doc.dotdev.be.conf
Successfully deployed certificate for e-shop.dotdev.be to /var/www/srv_dev/config/nginx/domains/eshop.dotdev.be.conf
Successfully deployed certificate for immo.dotdev.be to /var/www/srv_dev/config/nginx/domains/immo.dotdev.be.conf
Successfully deployed certificate for mtapp.dotdev.be to /var/www/srv_dev/config/nginx/domains/mtapp.dotdev.be.conf
Successfully deployed certificate for social.dotdev.be to /var/www/srv_dev/config/nginx/domains/social.dotdev.be.conf
Your existing certificate has been successfully renewed, and the new certificate has been installed.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`;

  return (
    
      <nav className='overflow-x-auto text-sm'>
        <Typography variant="h6" component="div" sx={{mb:2}}>
          ✨ Deploy a Nextjs app on Debian 11 VPS
        </Typography>
        <CodeBlock text={text} />
        <Typography variant="h6" component="div" sx={{mb:2}}>
          ✨ Enable HTTPS, use CerBot : 
        </Typography>
        <Typography variant="body1" component="div" sx={{my:2}}>
          Install Snap 
        </Typography>
        <Link href={"https://snapcraft.io/docs/installing-snap-on-debian"} sx={{color: 'link.main'}}> 
          https://snapcraft.io/docs/installing-snap-on-debian
        </Link>
        <Typography variant="body1" component="div" sx={{my:2}}>
          Install Certbot 
        </Typography>
        <Link href={"https://certbot.eff.org/instructions?ws=nginx&os=snap"} sx={{color: 'link.main'}}> 
          https://certbot.eff.org/instructions?ws=nginx&os=snap
        </Link>
        <CodeBlock text={text2} />
        <Typography variant="h6" component="div" sx={{mb:2}}>
          ✨ Add another new HTTPS subdomain : 
        </Typography>
        <Link href={"https://eff-certbot.readthedocs.io/en/latest/using.html#re-creating-and-updating-existing-certificates"} sx={{color: 'link.main'}}> 
          https://eff-certbot.readthedocs.io/en/latest/using.html#re-creating-and-updating-existing-certificates
        </Link>        
        <Typography variant="body2" component="div" sx={{my:2}}>
          check certificates :
        </Typography>
        <CodeBlock text={text4} />
        <Typography variant="body2" component="div" sx={{my:2}}>
          Add subdomain social.dotdev.be to existing certificate :
        </Typography>
        <CodeBlock text={text5} />
      </nav>
   
  )
}

export default page