import CodeBlock from "@/app/components/CodeBlock";

const page = () => {
  const text = 
  `SQLITE on Windows

Activate extension=pdo_sqlite in php.ini

Download sqlite3 for Windows 
https://www.sqlite.org/download.html

1. Dézipper les 3 fichiers .exe dans c:\\sqlite
2. ajouter c:\\sqlite dans le path de windows

close and reopen CLI, and type sqlite3

// enter database
$ sqlite3 mydb.db

// help
sqlite> .help

// show tables
sqlite> .tables

// Create table
sqlite> CREATE TABLE product(id INTEGER PRIMARY KEY NOT NULL, name char(255) NOT NULL, description text, image char(255), price real, createdAt datetime default current_timestamp, updatedAt datetime default current_timestamp);

// show table structure, the CREATE TABLE sql script
sqlite> .schema product

// populate table
sqlite> INSERT INTO 'product' ('id', 'name', 'description', 'image', 'price') VALUES
(1, 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max', 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max', 'AppleiMac27p.png', 1999),
(2, 'Apple iPhone 15 Pro Max, 256GB, Blue Titanium', 'Apple iPhone 15 Pro Max, 256GB, Blue Titanium', 'AppleiPhone15Pro.png', 1479),
(3, 'iPad Pro 13-Inch (M4): XDR Display, 512GB', 'iPad Pro 13-Inch (M4): XDR Display, 512GB', 'iPadPro13.png', 1097),
(4, 'PlayStation®5 Console – 1TB, PRO Controller', 'PlayStation®5 Console – 1TB, PRO Controller', 'PlayStation5.png', 749),
(5, 'Microsoft Xbox Series X 1TB Gaming Console', 'Microsoft Xbox Series X 1TB Gaming Console', 'MicrosoftXboxSeriesX.png', 499),
(6, 'Apple MacBook PRO Laptop with M2 chip', 'Apple MacBook PRO Laptop with M2 chip', 'AppleMacBookPRO.png', 1079),
(7, 'Apple Watch SE [GPS 40mm], Smartwatch', 'Apple Watch SE [GPS 40mm], Smartwatch', 'AppleWatchSE.png', 699),
(8, 'Microsoft Surface Pro, Copilot+ PC, 13 Inch', 'Microsoft Surface Pro, Copilot+ PC, 13 Inch', 'MicrosoftSurfacePro.png', 899);


Dans le projet Sf:
modifier le database_url dans le .env : DATABASE_URL=sqlite:///%kernel.project_dir%/var/agence.db

Dans VS code, installer l'extension SQLite3 Editor (publisher yy0931).

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

const text1 = `To export the whole database :

$ sqlite3 ./dev.db

> .output ./backup.sql
> .dump
> .exit


To export a specific table :

.output ./backup_users_table.sql
.dump users
.exit

If you want to exclude all data and only export the database schema (DDL), 
you can use .schema instead of .dump:

.output ./backup_schema.sql
.schema
.exit`;

  return (
    <>      
      <CodeBlock text={text}/>
      <CodeBlock text={text1}/>
    </>
  )
}

export default page