
const page = () => {
  const text = 
  `Deploy a Nextjs app on Debian 11 (VPS)
-----------------------------------------

Create a repo on Github

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
  return (
    
      <nav className='overflow-x-auto text-sm'>
        <pre>
          {text}
        </pre>
      </nav>
   
  )
}

export default page