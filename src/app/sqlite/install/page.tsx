
const page = () => {
  const text = 
  `SQLITE in Windows and export in Symfony :
-----------------------------------------
(pour ouvrir une db qui existe déjà: aller dans le dossier contenant le agence.db, ouvrir un powershell, taper sqlite3 agence.db)

Il faut PHP 7 installé, et l'extension=pdo_sqlite activée dans le php.ini.
Download sqlite3 for Windows files on https://www.sqlite.org/download.html
1. Dézipper les 3 fichiers .exe dans c:\sqlite
2. ajouter c:\sqlite dans le path de windows

open CLI.

> sqlite3 agence.db
 output
SQLite version 3.31.1 2020-01-27 19:55:54
Enter ".help" for usage hints.

sqlite> .databases
output
main: C:\Users\\601575610\local\agence.db

sqlite> CREATE TABLE property(
   ...>   id INTEGER PRIMARY KEY NOT NULL,
   ...>   name char(255) NOT NULL,
   ...>   description text NOT NULL,
   ...>   rooms int NOT NULL,
   ...>   bedrooms int NOT NULL,
   ...>   surface int NOT NULL,
   ...>   price char(255) NOT NULL,
   ...>   created text NOT NULL
   ...> );

sqlite> .tables
property

sqlite> .schema property

DROP TABLE property;

CREATE TABLE property(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name char(255) NOT NULL,
  description text NOT NULL,
  rooms int NOT NULL,
  bedrooms int NOT NULL,
  surface int NOT NULL,
  price char(255) NOT NULL,
  created text NOT NULL
);

sqlite> INSERT INTO \`property\` (\`id\`, \`name\`, \`description\`, \`rooms\`, \`bedrooms\`, \`surface\`, \`price\`, \`created\`) VALUES
(1, 'maison-plein-pied', 'une maison très sympa à la mer', 6, 4, 55, '200000', '2019-12-02 14:45:19'),
(2, 'appart', 'une maison', 6, 4, 60, '100000', '2019-12-02 14:45:19'),
(3, 'duplex', 'un duplex', 4, 2, 55, '100000', '2019-12-02 14:45:19'),
(4, 'duplex-mansarde', 'un duplex', 4, 2, 55, '100000', '2019-12-02 14:45:19'),
(5, 'appart', 'un duplex', 4, 2, 55, '100000', '2019-12-02 14:45:19'),
(6, 'appart', 'un duplex', 4, 2, 55, '100000', '2019-12-02 14:45:19'),
(7, 'bel-etage-un', 'un duplex', 4, 2, 55, '100000', '2019-12-02 14:45:19'),
(9, 'bel-etage-belgique', 'un duplex', 4, 2, 55, 15000, '2019-12-02 14:45:19'),
(11, 'bel-etage-a-la-mer', 'un duplex', 4, 2, 55, 15000, '2019-12-02 14:45:19'),
(16, 'garage', 'un petit garage', 1, 0, 5, '50000', '2019-12-03 08:35:55'),
(17, 'garage_devant', 'un  petit garage devant', 1, 0, 5, '50000', '2019-12-03 08:37:06'),
(18, 'bel-etage', 'un duplex', 4, 2, 55, 15000, '2019-12-03 11:06:46');
sqlite>

- copier le fichier agence.db dans le dossier var du projet symfony 4
- modifier le database_url dans le .env : DATABASE_URL=sqlite:///%kernel.project_dir%/var/agence.db
- modifier le doctrine.php dans config/package :
doctrine:
    dbal:
        driver: 'pdo_sqlite'
        url: '%env(resolve:DATABASE_URL)%'

        # IMPORTANT: You MUST configure your server version,
        # either here or in the DATABASE_URL env var (see .env file)
        server_version: '5.7'


Dans VS code, installer l'extension sqlite (celui avec une plume comme icone).

CTRL + P
--> SQLite Open Database
--> SQLITE EXPLORER
--> agence.db --> cliquer sur la petite flèche à droite de la table qu'on veut voir (ou clic droit dessus: show table)
POUR voir la structure: clic droit sur la DB (p.e. agence.db), show master

pour fair un query, ctrl + p, sqlite new query, taper la query, clic droit derrière la point-virgule de la query, run query.

on peut taper plusieurs lignes de query, mais elle seront executées à chaque fois, sauf si on commente (deux fois -):

-- SQLite
-- insert into 'property' ('name', ...) values ('un nom', ...);
select * from property
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