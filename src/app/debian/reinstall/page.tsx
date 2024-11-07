const page = () => {
  const text = 
  `Reinstall from scratch VPS 5*.***.**.**6 with Debian 11
-------------------------------------------------------

https://www.ovh.com/manager 
En bas de cette page, click on Serveurs privés virtuels 1 vps******.ovh.net
Then click  reinstall my VPS --> Debian 11
if a public key is required, it's in c:/users/matha/.ssh/id_rsa.pub

The new root pwd will be sended to t******@gmail.com

Se connecter avec Putty et Filezilla sftp 5*.***.**.**6 root k****m

When connected, change root pwd with command 'passwd root'

In CLI :

apt update
apt -y install nginx
apt install -y lsb-release ca-certificates apt-transport-https software-properties-common gnupg2
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
curl -fsSL  https://packages.sury.org/php/apt.gpg| sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg
apt update
apt -y install php8.1 php8.1-fpm


Configure the nginx and srv_dev files, based on backup H:/DEV/srv_dev :
/etc/nginx
/etc/php
/var/www/srv_dev
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