import CodeBlock from "@/app/components/CodeBlock";

const page = () => {
  const text = 
  `MYSQL (Linux - for Windows see below):
  
mysql -u root -p
  
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
FLUSH PRIVILEGES;
  
// Import a SCRIPT .sql:
> source /path/to/myscript.sql

// Show users:
> SELECT user FROM mysql.user;

> create database dev;
  
> show databases;

> use myDB;

> show tables;

> show columns from profile;

+-------------+----------------------+------+-----+-------------------+----------------+
| Field       | Type                 | Null | Key | Default           | Extra          |
+-------------+----------------------+------+-----+-------------------+----------------+
| profileID   | smallint(5) unsigned | NO   | PRI | NULL              | auto_increment |
| name        | varchar(32)          | NO   | UNI | NULL              |                |
| age         | smallint(2) unsigned | NO   |     | NULL              |                |
| plz         | smallint(5) unsigned | NO   |     | NULL              |                |
| height      | smallint(3) unsigned | NO   |     | NULL              |                |
| weight      | smallint(2) unsigned | NO   |     | NULL              |                |
| description | varchar(150)         | NO   |     | NULL              |                |
| createTime  | timestamp            | NO   |     | CURRENT_TIMESTAMP |                |
| imageID     | smallint(5) unsigned | YES  |     | NULL              |                |
+-------------+----------------------+------+-----+-------------------+----------------+

> select * from profile;

> update product set price= 2999 where id=1;

exit;

Delete all tab characters (\t) from a field from a table for all occurences:

UPDATE mytable 	SET myfield = TRIM(CHAR(9) FROM TRIM(myfield));
UPDATE image SET name = TRIM(CHAR(9) FROM TRIM(name));
UPDATE profile SET name = TRIM(CHAR(9) FROM TRIM(name));
UPDATE profile SET description = TRIM(CHAR(9) FROM TRIM(description))


COALESCE (la fonction COALESCE permet de remplacer NULL par une valeur donnée)
--------
's_mobile' => "SELECT m.ID AS \`mobileID\`, m.*, COALESCE(i.blacklistlvl, 0) AS \`blacklistlvl\`, t1.createTime AS \`imsi_createTime\`, t1.imsi
FROM \`mobile\` m	LEFT JOIN \`mobile_info\` i ON i.mobileID = m.ID


sudo service mysql status

Enabling TokuDB on Debian:

add plugin-load=ha_tokudb in /etc/mysql/conf.d/tokudb.cnf
and type in console mysql:
INSTALL SONAME 'ha_tokudb';
`;

const text1 = `CREATE TABLE IF NOT EXISTS \`product\`(
	\`id\` mediumint(8) PRIMARY KEY NOT NULL,
 	\`name\` varchar(255) NOT NULL, 
 	\`description\` varchar(255), 
 	\`image\` varchar(255),
 	\`price\` float, 
 	\`created_at\` timestamp default current_timestamp, 
 	\`updated_at\` timestamp default current_timestamp
 	);
INSERT INTO product VALUES(1,'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max','Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max','AppleiMac27p.png',1999.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(2,'Apple iPhone 15 Pro Max, 256GB, Blue Titanium','Apple iPhone 15 Pro Max, 256GB, Blue Titanium','AppleiPhone15Pro.png',1479.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(3,'iPad Pro 13-Inch (M4): XDR Display, 512GB','iPad Pro 13-Inch (M4): XDR Display, 512GB','iPadPro13.png',1097.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(4,'PlayStation®5 Console – 1TB, PRO Controller','PlayStation®5 Console – 1TB, PRO Controller','PlayStation5.png',749.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(5,'Microsoft Xbox Series X 1TB Gaming Console','Microsoft Xbox Series X 1TB Gaming Console','MicrosoftXboxSeriesX.png',499.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(6,'Apple MacBook PRO Laptop with M2 chip','Apple MacBook PRO Laptop with M2 chip','AppleMacBookPRO.png',1079.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(7,'Apple Watch SE [GPS 40mm], Smartwatch','Apple Watch SE [GPS 40mm], Smartwatch','AppleWatchSE.png',699.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
INSERT INTO product VALUES(8,'Microsoft Surface Pro, Copilot+ PC, 13 Inch','Microsoft Surface Pro, Copilot+ PC, 13 Inch','MicrosoftSurfacePro.png',899.0,'2024-11-26 11:36:48','2024-11-26 11:36:48');
`;
const text2 = `-- phpMyAdmin SQL Dump
-- version 4.2.13.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1:3306
-- Généré le :  Jeu 29 Août 2024 à 09:05
-- Version du serveur :  10.0.38-MariaDB-0+deb8u1
-- Version de PHP :  7.0.33-1~dotdeb+8.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  \`app_bragi\`
--

-- --------------------------------------------------------

--
-- Structure de la table \`pool\`
--

CREATE TABLE IF NOT EXISTS \`pool\` (
\`id\` smallint(5) unsigned NOT NULL,
  \`name\` varchar(30) NOT NULL,
  \`country\` tinyint(3) unsigned NOT NULL,
  \`scheme\` varchar(32) NOT NULL,
  \`domain\` varchar(80) NOT NULL
) ENGINE=TokuDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Contenu de la table \`pool\`
--

INSERT INTO \`pool\` (\`id\`, \`name\`, \`country\`, \`scheme\`, \`domain\`) VALUES
(1, 'CherryChat DE', 1, 'cherry', 'cherrychat.red'),
(2, 'CherryChat AT', 2, 'cherry', 'cherrychat.red'),
(3, 'Flirddy AT', 2, 'flirddy', 'flirddy.com'),
(4, 'Flirddy AT Men', 2, 'flirddy', 'flirddy.com'),
(5, 'Flirddy CH', 3, 'flirddy', 'flirddy.com'),
(6, 'Flirddy CH Men', 3, 'flirddy', 'flirddy.com'),
(7, 'Flirddy HU', 4, 'flirddy', 'flirddy.com'),
(8, 'Flirddy HU Men', 4, 'flirddy', 'flirddy.com'),
(9, 'CherryChat HU', 4, 'cherry', 'cherrychat.red');

--
-- Index pour les tables exportées
--

--
-- Index pour la table \`pool\`
--
ALTER TABLE \`pool\`
 ADD PRIMARY KEY (\`id\`), ADD KEY \`name\` (\`name\`), ADD KEY \`country\` (\`country\`), ADD KEY \`scheme\` (\`scheme\`), ADD KEY \`domain\` (\`domain\`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table \`pool\`
--
ALTER TABLE \`pool\`
MODIFY \`id\` smallint(5) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


For Windows :
-----------
- Add mysql.exe in the system PATH (e.g. C:\\wamp64\\bin\\mysql\\mysql9.1.0\\bin) and restart the computer.
- open a CLI : mysqld.exe -u mathias -p
`;

return (
  <>      
      <CodeBlock text={text}/>
      <CodeBlock text={text1}/>
      <CodeBlock text={text2}/>
    </>
  )
}

export default page