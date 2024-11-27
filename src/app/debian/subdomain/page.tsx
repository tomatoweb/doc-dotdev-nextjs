const page = () => {
  const text = 
  `1.
  go to
  https://www.ovh.com/manager/web/index.html#/configuration/domain/dotdev.be/zone
  click add an entry
  champ de pointage: A
  cible: 51.***.**.196

2.
  Créer un fichier /var/www/srv_dev/config/nginx/domains/myapp.dotdev.be.conf
  pour les apps Sf/PHP voir agency.dotdev.be.conf
  pour les apps Next voir app.dotdev.be.conf 

  Pour les apps Sf/PHP uniquement:
  Créer un fichier /var/www/srv_dev/config/php/pool/7002_agency.conf

  Créer un dossier /var/www/srv_dev/app/myapp

  git clone git@github.com:tomatoweb/my-repo.git .

  Manually transfer .env file if needed (il est non-versionné, donc pas dans le git)
  et le modifier si nécessaire (ports, keys, db url, etc...)

  For Next apps: (see also /nextjs/deploy)
  Need node installed, also npm and pm2: https://www.youtube.com/watch?v=HIb4Ucs_foQ&ab_channel=SonnySangha

  npm i

  npm run build          (d'abord en local pour corriger les erreurs webpack)


  For PHP apps:

  Install Composer: 
    https://www.atlantic.net/dedicated-server-hosting/how-to-install-php-composer-on-debian-11/

  composer install

  Créer un fichier /var/www/srv_dev/app/myapp/.nginx

  Pour les apps Next :
  location / {
    proxy_pass http://localhost:3000;   (adapter le port !!)
          // !! rien ici
  }

  Pour les apps PHP, voir le fichier .nginx de l'app agency


chown -R www-data:www-data /var/www/srv_dev (pour le domaine)
chown -R www-data:www-data *
chown -R www-data:www-data .*   (pour .gitignore, .nginx, .next, etc...)
service nginx restart

Installer pm2:
npm install -g pm2

pm2 start npm --name "nextjs-dotdev" -- start -- --port=3000   (adapter le port !!)

pm2 save

pm2 list     (pour checker)

For https add subdomain with this command : certbot --expand -d symfony.dotdev.be


Après un update du code local, commiter et pusher, faire un pull sur le serveur, puis un build, et enfin : 
pm2 list  (voir la liste des process)
pm2 restart [id du process]

!! For the php/Symfony apps update, empty cache : php bin/console cache:clear

help: https://www.youtube.com/watch?v=HIb4Ucs_foQ&ab_channel=SonnySangha


(pour déployer un projet PHP voir l'exemple Symfony de agency.dotdev.be)
(pour installer composer: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-debian-11)
`;
  return (
    <div>
      <h1>Add and deploy subdomain app on Debian</h1>
      <div className='overflow-x-auto text-sm mt-6'>      
        <pre>
          {text}
        </pre>
      </div>
    </div>
  )
}

export default page