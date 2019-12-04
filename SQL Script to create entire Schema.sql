CREATE DATABASE  IF NOT EXISTS `new_schema` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `new_schema`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: new_schema
-- ------------------------------------------------------
-- Server version	5.6.45-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `username` varchar(90) NOT NULL DEFAULT 'ABC',
  `password` text,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('AmitGarg','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('AvinavTyagi','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('BarackObama','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('Batman','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('BillGates','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('BruceWayne','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('ChrisDouglas','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('ElonMusk','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('HenryFord','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('JuliusCaesar','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('LanceNgo','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('MikeWu','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('SandroSallenbach','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('SriramPriyathamSiram','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m'),('WinstonChurchill','$2a$10$VinYAeqKAsgR6Ll5qLRMuOQYucfPo3of6dVCpsN2dQXpqrqBQn16m');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `championships`
--

DROP TABLE IF EXISTS `championships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `championships` (
  `year` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`title`,`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `championships`
--

LOCK TABLES `championships` WRITE;
/*!40000 ALTER TABLE `championships` DISABLE KEYS */;
INSERT INTO `championships` VALUES (2003,'NCAA Champs'),(2004,'NCAA Champs'),(2005,'NCAA Champs'),(2006,'NCAA Champs'),(2007,'NCAA Champs'),(2008,'NCAA Champs'),(2009,'NCAA Champs'),(2010,'NCAA Champs'),(2011,'NCAA Champs'),(2012,'NCAA Champs'),(2013,'NCAA Champs'),(2014,'NCAA Champs'),(2015,'NCAA Champs'),(2016,'NCAA Champs'),(2017,'NCAA Champs'),(2018,'NCAA Champs');
/*!40000 ALTER TABLE `championships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `ID` int(11) DEFAULT NULL,
  `name` text,
  `State_id` text,
  `State_name` text,
  `Population` int(11) DEFAULT NULL,
  `Lat` double DEFAULT NULL,
  `Lng` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'San Jose','CA','California',1821899,37.3021,-121.8489),(2,'San Diego','CA','California',3210314,32.8312,-117.1225),(3,'Fresno','CA','California',698021,36.7831,-119.7941),(4,'Las Vegas','NV','Nevada',2073045,36.2333,-115.2654),(5,'Reno','NV','Nevada',433271,39.5497,-119.8483),(6,'Albuquerque','NM','New Mexico',758523,35.1053,-106.6464),(7,'Laramie','WY','Wyoming',33508,41.3099,-105.6085),(8,'Fort Collins','CO','Colorado',303184,40.5475,-105.0651),(9,'Boise','ID','Idaho',385218,43.6007,-116.2312),(10,'Logan','UT','Utah',100774,41.74,-111.8419),(11,'Colorado Springs','CO','Colorado',623946,38.8674,-104.7606),(12,'Salt Lake City','UT','Utah',1098400,40.7774,-111.93),(13,'Boulder','CO','Colorado',126054,40.0249,-105.2523),(14,'Tempe','AZ','Arizona',185038,33.3881,-111.9318),(15,'Tucson','AZ','Arizona',868391,32.1545,-110.8782),(16,'Los Angeles','CA','California',12815475,34.1139,-118.4068),(17,'Stanford','CA','California',15277,37.4252,-122.1674),(18,'Berkeley','CA','California',122324,37.8723,-122.276),(19,'Pullman','WA','Washington',33276,46.734,-117.1669),(20,'Corvallis','OR','Oregon',66441,44.5696,-123.2781),(21,'Eugene','OR','Oregon',267568,44.0563,-123.1173),(22,'Seattle','WA','Washington',3643765,47.6211,-122.3244),(23,'Greeley','CO','Colorado',98975,0,0),(24,'Grand Forks','ND','North Dakota',57056,0,0),(25,'Pocatello','ID','Idaho',55193,0,0),(26,'Cheney','WA','Washington',12446,0,0),(27,'Cedar City','UT','Utah',31806,0,0),(28,'Ogden','UT','Utah',87031,0,0),(29,'Flagstaff','AZ','Arizona',71975,0,0),(30,'Sacramento','CA','California',501901,0,0),(31,'Moscow','ID','Idaho',25146,0,0),(32,'Portland','OR','Oregon',647805,0,0);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coaches`
--

DROP TABLE IF EXISTS `coaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coaches` (
  `Coach_id` int(11) DEFAULT NULL,
  `School_name` text,
  `School_conference` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coaches`
--

LOCK TABLES `coaches` WRITE;
/*!40000 ALTER TABLE `coaches` DISABLE KEYS */;
INSERT INTO `coaches` VALUES (1,'San Diego State University','Mountain West'),(2,'University of Wyoming','Mountain West'),(3,'California State University, Fresno','Mountain West'),(4,'Colorado State University','Mountain West'),(5,'University of Nevada, Las Vegas','Mountain West'),(6,'University of Nevada','Mountain West'),(7,'U.S. Air Force Academy','Mountain West'),(8,'San Jose State University','Mountain West'),(9,'Boise State University','Mountain West'),(10,'Utah State University','Mountain West'),(11,'University of New Mexico','Mountain West'),(12,'University of Oregon','Pacific 12'),(13,'University of California, Los Angeles','Pacific 12'),(14,'University of Colorado, Boulder','Pacific 12'),(15,'University of Southern California','Pacific 12'),(16,'Stanford University','Pacific 12'),(17,'University of Washington','Pacific 12'),(18,'Arizona State University','Pacific 12'),(19,'University of California, Berkeley','Pacific 12'),(20,'Washington State University','Pacific 12'),(21,'University of Utah','Pacific 12'),(22,'University of Arizona','Pacific 12'),(23,'Oregon State University','Pacific 12'),(24,'University of Northern Colorado','Big Sky'),(25,'University of North Dakota','Big Sky'),(26,'Idaho State University','Big Sky'),(27,'Eastern Washington University','Big Sky'),(28,'Southern Utah University','Big Sky'),(29,'Weber State University','Big Sky'),(30,'Northern Arizona University','Big Sky'),(31,'California State University, Sacramento','Big Sky'),(32,'University of Idaho','Big Sky'),(33,'Portland State University','Big Sky');
/*!40000 ALTER TABLE `coaches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `head_coach`
--

DROP TABLE IF EXISTS `head_coach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `head_coach` (
  `ID` int(11) DEFAULT NULL,
  `Name` text,
  `WLP` double DEFAULT NULL,
  `Titles` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `head_coach`
--

LOCK TABLES `head_coach` WRITE;
/*!40000 ALTER TABLE `head_coach` DISABLE KEYS */;
INSERT INTO `head_coach` VALUES (1,'Brian Dutcher',0.642,1),(2,'Allen Edwards',0.495,0),(3,'Justin Hutson',0.719,0),(4,'Niko Medved',0.375,0),(5,'Marvin Menzies',0.5,0),(6,'Eric Musselman',0.764,4),(7,'Dave Pilipovich',0.428,0),(8,'Jean Prioleau',0.131,0),(9,'Leon Rice',0.602,1),(10,'Craig Smith',0.8,2),(11,'Paul Weir',0.5,0),(12,'Dana Altman',0.71,5),(13,'Murry Bartow',0.5,0),(14,'Tad Boyle',0.602,1),(15,'Andy Enfield',0.542,0),(16,'Jerod Haase',0.495,0),(17,'Mike Hopkins',0.686,1),(18,'Bobby Hurley',0.557,0),(19,'Wyking Jones',0.254,0),(20,'Ernie Kent',0.52,3),(21,'Larry Krystkowiak',0.583,0),(22,'Sean Miller',0.748,8),(23,'Wayne Tinkle',0.475,0),(24,'Jeff Linder',0.575,1),(25,'Paul Sather',0.535,6),(26,'Ryan Looney',0.714,0),(27,'Shantay Legans',0.522,0),(28,'Todd Simon',0.571,0),(29,'Randy Rahe',0.635,8),(30,'Shane Burcar',0,0),(31,'Brian Katz',0.369,0),(32,'Zac Claus',0,0),(33,'Barret Peery',0.545,6);
/*!40000 ALTER TABLE `head_coach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homestadium`
--

DROP TABLE IF EXISTS `homestadium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homestadium` (
  `ID` int(11) DEFAULT NULL,
  `StadiumName` text,
  `onOffCampus` int(11) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homestadium`
--

LOCK TABLES `homestadium` WRITE;
/*!40000 ALTER TABLE `homestadium` DISABLE KEYS */;
INSERT INTO `homestadium` VALUES (0,'Event Center at San Jose State University',1,5000),(1,'Viejas Arena',1,12411),(2,'Save Mart Center',1,15544),(3,'Thomas & Mack Center',1,17932),(4,'Lawlor Events Center',1,11536),(5,'Dreamstyle Arena',0,15411),(6,'Arena0Auditorium',1,15028),(7,'Moby Arena',1,8745),(8,'ExtraMile Arena',1,12644),(9,'Dee Glen Smith Spectrum',1,10270),(10,'Clune Arena',1,5858),(11,'John M. Huntsman Center',1,15000),(12,'CU Events Center',1,11064),(13,'Wells Fargo Arena',1,14000),(14,'McKale Memorial Center',1,14655),(15,'Pauley Pavilion',1,13800),(16,'Stanford Maples Pavilion',1,7392),(17,'Hass Pavilion',1,11858),(18,'Beasley Coliseum',1,11671),(19,'Gill Coliseum',1,9604),(20,'Matthew Knight Arena',1,12364),(21,'Alaska Airlines Arena',0,10000),(22,'Galen Center',0,10258),(23,'Bank of Colorado Arena',1,2734),(24,'Englestad Siooux Center',1,3300),(25,'Holt Arena',1,8000),(26,'Reese Court',1,6000),(27,'America First Event Center',1,5300),(28,'Dee Events Center',1,11592),(29,'Walkup Skydome',1,11230),(30,'Colberg Court',1,1012),(31,'Kibbie Dome',1,11800),(32,'Viking Pavilion',1,3094);
/*!40000 ALTER TABLE `homestadium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `located_in`
--

DROP TABLE IF EXISTS `located_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `located_in` (
  `City_id` int(11) DEFAULT NULL,
  `School_name` text,
  `School_conference` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `located_in`
--

LOCK TABLES `located_in` WRITE;
/*!40000 ALTER TABLE `located_in` DISABLE KEYS */;
INSERT INTO `located_in` VALUES (1,'San Jose State University','Mountain West'),(2,'San Diego State University','Mountain West'),(3,'California State University, Fresno','Mountain West'),(4,'University of Nevada, Las Vegas','Mountain West'),(5,'University of Nevada','Mountain West'),(6,'University of New Mexico','Mountain West'),(7,'University of Wyoming','Mountain West'),(8,'Colorado State University','Mountain West'),(9,'Boise State University','Mountain West'),(10,'Utah State University','Mountain West'),(11,'U.S. Air Force Academy','Mountain West'),(12,'University of Utah','Pacific 12'),(13,'University of Colorado, Boulder','Pacific 12'),(14,'Arizona State University','Pacific 12'),(15,'University of Arizona','Pacific 12'),(16,'University of California, Los Angeles','Pacific 12'),(17,'Stanford University','Pacific 12'),(18,'University of California, Berkeley','Pacific 12'),(19,'Washington State University','Pacific 12'),(20,'Oregon State University','Pacific 12'),(21,'University of Oregon','Pacific 12'),(22,'University of Washington','Pacific 12'),(16,'University of Southern California','Pacific 12'),(23,'University of Northern Colorado','Big Sky'),(24,'University of North Dakota','Big Sky'),(25,'Idaho State University','Big Sky'),(26,'Eastern Washington University','Big Sky'),(27,'Southern Utah University','Big Sky'),(28,'Weber State University','Big Sky'),(29,'Northern Arizona University ','Big Sky'),(30,'California State University, Sacramento','Big Sky'),(31,'University of Idaho','Big Sky'),(32,'Portland State University','Big Sky');
/*!40000 ALTER TABLE `located_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nbaplayers`
--

DROP TABLE IF EXISTS `nbaplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nbaplayers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `college` varchar(45) DEFAULT NULL,
  `position` varchar(3) DEFAULT NULL,
  `nbasince` int(11) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nbaplayers`
--

LOCK TABLES `nbaplayers` WRITE;
/*!40000 ALTER TABLE `nbaplayers` DISABLE KEYS */;
INSERT INTO `nbaplayers` VALUES (1,'Kyle Anderson','University of California, Los Angeles','PF',2014,'Grizzlies',458725),(2,'Ryan Anderson','University of California, Berkeley','PF',2008,'Rockets',456258),(3,'Trevor Ariza','University of California, Los Angeles','SF',2004,'Kings',326584),(4,'Deandre Ayton','University of Arizona','C',2018,'Suns',547896),(5,'Lonzo Ball','University of California, Los Angeles','PG',2017,'Pelicans',214587),(6,'Aron Baynes','Washington State University','C',2009,'Suns',698745),(7,'Jordan Bell','University of Oregon','PF',2017,'Timberwolves',452369),(8,'Jonah Bolden','University of California, Los Angeles','SF',2017,'Sixers',858523),(9,'Chris Boucher','University of Oregon','PF',2017,'Raptors',456879),(10,'Dillon Brooks','University of Oregon','F',2017,'Grizzlies',214639),(11,'Jaylen Brown','University of California, Berkeley','SF',2016,'Celtics',745863),(12,'Marquese Chriss','University of Washington','PF',2016,'Warriors',256478),(13,'Allen Crabbe','University of California, Berkeley','SG',2013,'Hawks',658963),(14,'DeMar DeRozan','University of Southern California','GF',2009,'Spurs',458711),(15,'Dewayne Dedmon','University of Southern California','PF',2013,'Kings',232456),(16,'Spencer Dinwiddie','University of Colorado, Boulder','PG',2014,'Nets',545315),(17,'Damyean Dotson','Houston','SG',2017,'Knicks',568262),(18,'Drew Eubanks','Oregon State University','C',2018,'Spurs',216612),(19,'Markelle Fultz','University of Washington','PG',2017,'Magic',226463),(20,'Taj Gibson','University of Southern California','F',2009,'Knicks',264221),(21,'Aaron Gordon','University of Arizona','F',2014,'Magic',646482),(22,'James Harden','Arizona State University','SG',2009,'Rockets',264653),(23,'Solomon Hill','University of Arizona','SF',2013,'Grizzlies',264218),(24,'Aaron Holiday','University of California, Los Angeles','PG',2018,'Pacers',245786);
/*!40000 ALTER TABLE `nbaplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playedfor`
--

DROP TABLE IF EXISTS `playedfor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playedfor` (
  `pid` int(11) NOT NULL,
  `schoolname` varchar(45) NOT NULL,
  `conference` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playedfor`
--

LOCK TABLES `playedfor` WRITE;
/*!40000 ALTER TABLE `playedfor` DISABLE KEYS */;
INSERT INTO `playedfor` VALUES (1,'University of California, Los Angeles','Pacific 12'),(2,'University of California, Berkeley','Pacific 12'),(3,'University of California, Los Angeles','Pacific 12'),(4,'University of Arizona','Pacific 12'),(5,'University of California, Los Angeles','Pacific 12'),(6,'Washington State University','Pacific 12'),(7,'University of Oregon','Pacific 12'),(8,'University of California, Los Angeles','Pacific 12'),(9,'University of Oregon','Pacific 12'),(10,'University of Oregon','Pacific 12'),(11,'University of California, Berkeley','Pacific 12'),(12,'University of Oregon','Pacific 12'),(13,'University of Washington','Pacific 12'),(14,'University of California, Berkeley','Pacific 12'),(15,'University of Southern California','Pacific 12'),(16,'University of Southern California','Pacific 12'),(17,'University of Colorado, Boulder','Pacific 12'),(18,'Oregon State University','Pacific 12'),(19,'University of Washington','Pacific 12'),(20,'University of Southern California','Pacific 12'),(21,'University of Arizona','Pacific 12'),(22,'Arizona State University','Pacific 12'),(23,'University of Arizona','Pacific 12'),(24,'University of California, Los Angeles','Pacific 12');
/*!40000 ALTER TABLE `playedfor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plays_in`
--

DROP TABLE IF EXISTS `plays_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plays_in` (
  `SchoolName` text,
  `conf` text,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plays_in`
--

LOCK TABLES `plays_in` WRITE;
/*!40000 ALTER TABLE `plays_in` DISABLE KEYS */;
INSERT INTO `plays_in` VALUES ('San Jose State University','Mountain West',0),('San Diego State University','Mountain West',1),('California State University, Fresno','Mountain West',2),('University of Nevada, Las Vegas','Mountain West',3),('University of Nevada','Mountain West',4),('University of New Mexico','Mountain West',5),('University of Wyoming','Mountain West',6),('Colorado State University','Mountain West',7),('Boise State University','Mountain West',8),('Utah State University','Mountain West',9),('U.S. Air Force Academy','Mountain West',10),('University of Utah','Pacific 12',11),('University of Colorado, Boulder','Pacific 12',12),('Arizona State University','Pacific 12',13),('University of Arizona','Pacific 12',14),('University of California, Los Angeles','Pacific 12',15),('Stanford University','Pacific 12',16),('University of California, Berkeley','Pacific 12',17),('Washington State University','Pacific 12',18),('Oregon State University','Pacific 12',19),('University of Oregon','Pacific 12',20),('University of Washington','Pacific 12',21),('University of Southern California','Pacific 12',22),('University of Northern Colorado','Big Sky',23),('University of North Dakota','Big Sky',24),('Idaho State University','Big Sky',25),('Eastern Washington University','Big Sky',26),('Southern Utah University','Big Sky',27),('Weber State University','Big Sky',28),('Northern Arizona University ','Big Sky',29),('California State University, Sacramento','Big Sky',30),('University of Idaho','Big Sky',31),('Portland State University','Big Sky',32);
/*!40000 ALTER TABLE `plays_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `school` text,
  `conference` text,
  `year` int(11) DEFAULT NULL,
  `wins` int(11) DEFAULT NULL,
  `losses` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES ('Arizona State University','Pacific 12',2019,12,6),('Boise State University','Mountain West',2019,7,11),('California State University, Fresno','Mountain West',2019,13,5),('Colorado State University','Mountain West',2019,7,11),('Oregon State University','Pacific 12',2019,10,8),('San Diego State University','Mountain West',2019,11,7),('San Jose State University','Mountain West',2019,1,17),('Stanford University','Pacific 12',2019,8,10),('U.S. Air Force Academy','Mountain West',2019,8,10),('University of Arizona','Pacific 12',2019,8,10),('University of California, Berkeley','Pacific 12',2019,3,15),('University of California, Los Angeles','Pacific 12',2019,9,9),('University of Colorado, Boulder','Pacific 12',2019,10,8),('University of Nevada','Mountain West',2019,15,3),('University of Nevada, Las Vegas','Mountain West',2019,11,7),('University of New Mexico','Mountain West',2019,7,11),('University of Oregon','Pacific 12',2019,10,8),('University of Southern California','Pacific 12',2019,8,10),('University of Utah','Pacific 12',2019,11,7),('University of Washington','Pacific 12',2019,15,3),('University of Wyoming','Mountain West',2019,4,14),('Utah State University','Mountain West',2019,15,3),('Washington State University','Pacific 12',2019,4,14),('University of Northern Colorado','Big Sky',2019,3,4),('University of North Dakota','Big Sky',2019,6,12),('Idaho State University','Big Sky',2019,9,9),('Eastern Washington University','Big Sky',2019,13,5),('Southern Utah University','Big Sky',2019,5,13),('Weber State University','Big Sky',2019,13,5),('Northern Arizona University','Big Sky',2019,11,7),('California State University, Sacramento','Big Sky',2019,4,14),('University of Idaho','Big Sky',2019,14,4),('Portland State University','Big Sky',2019,9,9);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schools`
--

DROP TABLE IF EXISTS `schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schools` (
  `SchoolName` text,
  `conf` text,
  `attendance` int(11) DEFAULT NULL,
  `tuition` int(11) DEFAULT NULL,
  `mascot` text,
  `logo` text,
  `image` text,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schools`
--

LOCK TABLES `schools` WRITE;
/*!40000 ALTER TABLE `schools` DISABLE KEYS */;
INSERT INTO `schools` VALUES ('San Jose State University','Mountain West',32828,7418,'Sammy','https://www.ncaa.com/sites/default/files/images/logos/schools/s/san-jose-st.200.png','http://newdev.sjsu.edu/_images/hp-prototype/062019_Homepage_Top_IMG_04.jpg',37.3352,-121.8811),('San Diego State University','Mountain West',33778,7510,'Montezuma the Aztec Warrior','https://www.ncaa.com/sites/default/files/images/logos/schools/s/san-diego-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/122409_hero.jpg?itok=PuzgPkQO',32.7757,-117.0719),('California State University, Fresno','Mountain West',22071,6313,'Victor E. Bulldog','https://www.ncaa.com/sites/default/files/images/logos/schools/f/fresno-st.200.png','https://media.licdn.com/dms/image/C4D1BAQFjUyqqfOBHyA/company-background_10000/0?e=2159024400&v=beta&t=54R4NXLGam-I6mpuVMJEtrXornX5xSy-lxZKSPR3S7k',36.8124,-119.7458),('University of Nevada, Las Vegas','Mountain West',30471,6197,'Hey Reb!','https://www.ncaa.com/sites/default/files/images/logos/schools/u/unlv.200.png','https://library.unr.edu/libraries/images/reused-images/hero/knowledge-center.jpg',36.1085,-115.1432),('University of Nevada','Mountain West',20194,7142,'Alphie, Wolfie Jr and Luna','https://www.ncaa.com/sites/default/files/images/logos/schools/n/nevada.200.png','https://upload.wikimedia.org/wikipedia/en/thumb/8/86/UNR_KnowledgeCenter120520.jpg/1280px-UNR_KnowledgeCenter120520.jpg',39.5442,-119.8164),('University of New Mexico','Mountain West',27353,7350,'Lobo','https://www.ncaa.com/sites/default/files/images/logos/schools/n/new-mexico.200.png','https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2019/06/01/a01_jd_02jun_fence.jpg',35.0843,-106.6198),('University of Wyoming','Mountain West',12397,5055,'Pistol Pete and Cowboy Joe','https://www.ncaa.com/sites/default/files/images/logos/schools/w/wyoming.200.png','http://www.uwyo.edu/foundation/_files/images/header_images/MHRGC_South_Night.jpg',41.3149,-105.5666),('Colorado State University','Mountain West',33413,11052,'CAM the Ram','https://www.ncaa.com/sites/default/files/images/logos/schools/c/colorado-st.200.png','https://admissions.colostate.edu/media/sites/19/2014/08/ovalandadmin.jpg',40.5734,-105.0865),('Boise State University','Mountain West',25540,7080,'Buster Bronco','https://www.ncaa.com/sites/default/files/images/logos/schools/b/boise-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/142115_hero.jpg?itok=o9OqTc-a',43.6027,-116.2015),('Utah State University','Mountain West',24880,7426,'Big Blue','https://www.ncaa.com/sites/default/files/images/logos/schools/u/utah-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/230728_hero.jpg?itok=wdqqmm9k',41.745161,-111.809742),('U.S. Air Force Academy','Mountain West',4336,0,'Aurora','https://www.ncaa.com/sites/default/files/images/logos/schools/a/air-force.200.png','http://1.bp.blogspot.com/-45pb9pv42sU/UjYc0EG6EII/AAAAAAAAWC8/exsFDk_8Za4/s1600/IMG_1619.JPG',38.9983,-104.8613),('University of Utah','Pacific 12',32760,8518,'Utes','https://www.ncaa.com/sites/default/files/images/logos/schools/u/utah.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/230764_hero.jpg?itok=QUuKeDsW',40.7649,-111.8421),('University of Colorado, Boulder','Pacific 12',33246,11531,'Buffaloes','https://www.ncaa.com/sites/default/files/images/logos/schools/c/colorado.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/126614_hero.jpg?itok=LLq_ec0W',40.0076,-105.2659),('Arizona State University','Pacific 12',71946,10370,'Sun Devil','https://www.ncaa.com/sites/default/files/images/logos/schools/a/arizona-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/104151_hero.jpg?itok=Md7TSdgm',33.4242,-111.9281),('University of Arizona','Pacific 12',44831,11769,'Wildcats','https://www.ncaa.com/sites/default/files/images/logos/schools/a/arizona.200.png','https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/e/99/e991622c-2cbf-5497-88a2-0fa31b2c30e4/5bb294eb59b84.image.jpg?resize=1200%2C800',32.2319,-110.9501),('University of California, Los Angeles','Pacific 12',44947,12920,'Bruins','https://www.ncaa.com/sites/default/files/images/logos/schools/u/ucla.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/110662_hero.jpg?itok=4TJmdWyP',34.0689,-118.4452),('Stanford University','Pacific 12',16914,47940,'Cardinal','https://www.ncaa.com/sites/default/files/images/logos/schools/s/stanford.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/243744_hero.jpg?itok=8RZemFeU',37.4282,-122.1688),('University of California, Berkeley','Pacific 12',41910,13509,'Golden Bears','https://www.ncaa.com/sites/default/files/images/logos/schools/c/california.200.png','https://www.translegal.com/wp-content/uploads/UC-Berkeley-1.jpg',37.8719,-122.2585),('Washington State University','Pacific 12',29686,11041,'Cougars','https://www.ncaa.com/sites/default/files/images/logos/schools/w/washington-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/236939_hero.jpg?itok=OSAOIzPi',46.7319,-117.1542),('Oregon State University','Pacific 12',28886,10366,'Beavers','https://www.ncaa.com/sites/default/files/images/logos/schools/o/oregon-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/209542_hero.jpg?itok=43vl-V-W',44.5638,-123.2794),('University of Oregon','Pacific 12',23634,10761,'Ducks','https://www.ncaa.com/sites/default/files/images/logos/schools/o/oregon.200.png','https://cdn.wallpapersafari.com/83/54/BmxcVI.jpg',44.0448,-123.0726),('University of Washington','Pacific 12',46081,10753,'Huskies','https://www.ncaa.com/sites/default/files/images/logos/schools/w/washington.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/236948_hero.jpg?itok=awBu5dAD',47.6555,-122.3032),('University of Southern California','Pacific 12',44000,30232,'Traveler','https://www.ncaa.com/sites/default/files/images/logos/schools/s/southern-california.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/218663_hero.jpg?itok=U32tssYN',34.0205,-118.2856),('University of Northern Colorado','Big Sky',12260,8888,'Klawz','https://www.ncaa.com/sites/default/files/images/logos/schools/n/northern-colo.200.png\n','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/127741_hero.jpg?itok=0hDDMXlR',40.4033,-104.7002),('University of North Dakota','Big Sky',14648,8136,'Fighting Hawks','https://www.ncaa.com/sites/default/files/images/logos/schools/n/north-dakota.200.png','https://assets.change.org/photos/8/la/qo/VHLAQOxZslpzqFC-1600x900-noPad.jpg?1553882596',47.9229,-97.0768),('Idaho State University','Big Sky',12387,6956,'Benny the Bengal','https://www.ncaa.com/sites/default/files/images/logos/schools/i/idaho-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/142276_hero.jpg?itok=EKBcirs4',42.8628,-112.4298),('Eastern Washington University','Big Sky',12607,6951,'Swoop','https://www.ncaa.com/sites/default/files/images/logos/schools/e/eastern-wash.200.png','https://cdn.ewu.edu/wp-content/uploads/2018/02/Resources-Advising-e1522275304227.jpg',47.491,-117.5862),('Southern Utah University','Big Sky',10245,6530,'Thunderbird','https://www.ncaa.com/sites/default/files/images/logos/schools/s/southern-utah.200.png','https://pursueabroad.com/wp-content/uploads/2019/08/maxresdefault-22.jpg',37.6764,-113.0713),('Weber State University','Big Sky',27465,5523,'Waldo the Wildcat','https://www.ncaa.com/sites/default/files/images/logos/schools/w/weber-st.200.png','http://datausa.io/api/profile/university/230782/splash',41.1919,-111.9437),('Northern Arizona University ','Big Sky',30736,10764,'Louie the Lumberjack','https://www.ncaa.com/sites/default/files/images/logos/schools/n/northern-ariz.200.png','https://www.kinneyconstruction.net/upload/projects/building%20construction%20-%20new%20construction/nau%20laboratory%20facility/naulab1.jpg',35.1804,-111.654),('California State University, Sacramento','Big Sky',30661,6900,'Herky the Hornet','https://www.ncaa.com/sites/default/files/images/logos/schools/s/sacramento-st.200.png','https://www.cappex.com/sites/default/files/images/hero/college/109208_hero.jpg',38.5613,-121.4241),('University of Idaho','Big Sky',11780,7232,'Joe Vandal','https://www.ncaa.com/sites/default/files/images/logos/schools/i/idaho.200.png\n','https://www.uidaho.edu/-/media/UIdaho-Responsive/Images/current-students/recreation-wellbeing/16-9/facilities/student-recreation-center-building-in-fall.jpg',46.7288,-117.0126),('Portland State University','Big Sky',27229,8337,'Victor E. Viking','https://www.ncaa.com/sites/default/files/images/logos/schools/p/portland-st.200.png','https://www.cappex.com/sites/default/files/styles/1600x900/public/images/hero/college/209807_hero.jpg?itok=CUCpU_N8',45.5111,-122.6833);
/*!40000 ALTER TABLE `schools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(90) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('amenities','$2b$10$.Lt5pP93C5ow1/tYpXGcQezYWRwszXOY65qT.bypZ6hS.hh1vG.c6'),('lancey','$2b$10$ofN0AbFcz/ux7GXjt2M5ae7h9MRTzn7naNZ7FxKrCdOUi6mCXuNi2'),('room202','$2b$10$0rMZLcGPdLyTVM6Dq5Jlk.00A2y0txcahj2dBdjRQmJjwHvOuWT8C'),('room302','$2b$10$WlQmNkfGyaTfKEt8B9i3gu835xfFJ9F6PzUDIj7eGUIiAWM6bjmq2'),('roomservice','$2b$10$k70YwLjIhwiHr9yd30b.u.uujcGfMRdgjQYHCfBIQ5LvCU4W/RpDa'),('sandro','$2b$10$oGlgKnPQUtQ/GjHQ12S/POT9/v8mvxZ63l94EH4LgVqeC1KEp0Dr2'),('valet','$2b$10$mI7W4X9H4S0F5Drc3/t5vOYuyKc8nRVc5Ypcxk86zVMOZrh31/5Le');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `won`
--

DROP TABLE IF EXISTS `won`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `won` (
  `schoolName` varchar(45) NOT NULL,
  `confernce` varchar(45) DEFAULT NULL,
  `year` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `opponent` varchar(45) DEFAULT NULL,
  `score` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`year`,`schoolName`,`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `won`
--

LOCK TABLES `won` WRITE;
/*!40000 ALTER TABLE `won` DISABLE KEYS */;
INSERT INTO `won` VALUES ('Duke','ACC',2001,'NCAA Champs','University of Arizona','82-72'),('Maryland','Big 10',2002,'NCAA Champs','Indiana','64-52'),('Syracuse','ACC',2003,'NCAA Champs','Kansas','81-78'),('Connecticut','American',2004,'NCAA Champs','Georgia Tech','82-73'),('North Carolina','ACC',2005,'NCAA Champs','Illinois','75-70'),('Florida','SEC',2006,'NCAA Champs','University of California, Los Angeles','73-57'),('Florida','SEC',2007,'NCAA Champs','Ohio State','84-75'),('Kansas','Big 12',2008,'NCAA Champs','Memphis','75-68'),('North Carolina','ACC',2009,'NCAA Champs','Michigan State','89-72'),('Duke','ACC',2010,'NCAA Champs','Butler','61-59'),('Connecticut','American',2011,'NCAA Champs','Butler','53-41'),('Kentucky','SEC',2012,'NCAA Champs','Kansas','67-59'),('Louisville','ACC',2013,'NCAA Champs','Michigan','82-76'),('Connecticut','American',2014,'NCAA Champs','Kentucky','60-54'),('Duke','ACC',2015,'NCAA Champs','Wisconsin','68-63'),('Villanova','Big East',2016,'NCAA Champs','North Carolina','77-74'),('North Carolina','ACC',2017,'NCAA Champs','Gonzaga','71-65'),('Villanova','Big East',2018,'NCAA Champs','Michigan','79-62'),('Virginia','ACC',2019,'NCAA Champs','Texas Tech','85-77');
/*!40000 ALTER TABLE `won` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03 21:48:38
