/*
SQLyog Community Edition- MySQL GUI v8.11 
MySQL - 5.6.17 : Database - dgs
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`dgs` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `dgs`;

/*Table structure for table `coursemaster` */

DROP TABLE IF EXISTS `coursemaster`;

CREATE TABLE `coursemaster` (
  `courseId` varchar(50) NOT NULL,
  `courseName` varchar(500) NOT NULL,
  PRIMARY KEY (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `coursemaster` */

insert  into `coursemaster`(courseId,courseName) values ('CS 500','Database Theory'),('CS 510','Artificial Intelligence'),('CS 511','Robot Lab'),('CS 521','Data Structures and Algorithms I'),('CS 522','Data Structures and Algorithms II'),('CS 525','Theory of Computation'),('CS 530','Developing User Interfaces'),('CS 536','Computer Graphics'),('CS 540','High Performance Computing'),('CS 543','Operating Systems'),('CS 544','Computer Networks'),('CS 550','Programming Languages'),('CS 567','Applied Symbolic Computation'),('CS 575','Software Design'),('CS 576','Dependable Software Systems'),('CS 583','Introduction to Computer Vision'),('CS 610','Advanced Artificial Inteligence'),('CS 612','Knowledge-Based Agents'),('CS 613','Machine Learning'),('CS 620','Advanced Data Structures and Algorithms'),('CS 621','Approximation Algorithms'),('CS 623','Computational Geometry'),('CS 630','Cognitive Systems'),('CS 634','Advanced Computer Vision'),('CS 636','Advanced Computer Graphics'),('CS 637','Interactive Computer Graphics'),('CS 643','Advanced Operating Systems'),('CS 645','Network Security'),('CS 647','Distributed Software Systems'),('CS 650','Program Generation & Optimization'),('CS 668','Computer Algebra I'),('CS 669','Computer Algebra II'),('CS 675','Reverse Software Engineering'),('CS 676','Parallel Programming');

/*Table structure for table `grademaster` */

DROP TABLE IF EXISTS `grademaster`;

CREATE TABLE `grademaster` (
  `gradeId` varchar(10) NOT NULL,
  `percentageRange` varchar(20) NOT NULL,
  PRIMARY KEY (`gradeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `grademaster` */

insert  into `grademaster`(gradeId,percentageRange) values ('A','92% to 98%'),('A+','98% and above'),('A-','90% to 92%'),('B','82% to 88%'),('B+','88% to 90%'),('B-','80% to 82%'),('C','72% to 78%'),('C+','78% to 80%'),('C-','70% to 72%'),('D','60% to 65%'),('D+','65% to 70%'),('F','Below 60%');

/*Table structure for table `professorcoursemapping` */

DROP TABLE IF EXISTS `professorcoursemapping`;

CREATE TABLE `professorcoursemapping` (
  `professorMappingId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) NOT NULL,
  `courseId` varchar(50) NOT NULL,
  PRIMARY KEY (`professorMappingId`),
  KEY `FK_professorcoursemapping_course` (`courseId`),
  KEY `FK_professorcoursemapping_user` (`userId`),
  CONSTRAINT `FK_professorcoursemapping_course` FOREIGN KEY (`courseId`) REFERENCES `coursemaster` (`courseId`),
  CONSTRAINT `FK_professorcoursemapping_user` FOREIGN KEY (`userId`) REFERENCES `usermaster` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `professorcoursemapping` */

insert  into `professorcoursemapping`(professorMappingId,userId,courseId) values (1,'akhilas','CS 500'),(3,'akhilas','CS 511'),(4,'akhilas','CS 510'),(6,'akhilas','CS 521'),(7,'akhilas','CS 522'),(8,'akhilas','CS 525');

/*Table structure for table `studentmapping` */

DROP TABLE IF EXISTS `studentmapping`;

CREATE TABLE `studentmapping` (
  `studentMappingId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) NOT NULL,
  `courseId` varchar(50) NOT NULL,
  `gradeId` varchar(10) NOT NULL,
  PRIMARY KEY (`studentMappingId`),
  KEY `FK_studentmapping_course` (`courseId`),
  KEY `FK_studentmapping_grade` (`gradeId`),
  KEY `FK_studentmapping_user` (`userId`),
  CONSTRAINT `FK_studentmapping_course` FOREIGN KEY (`courseId`) REFERENCES `coursemaster` (`courseId`),
  CONSTRAINT `FK_studentmapping_grade` FOREIGN KEY (`gradeId`) REFERENCES `grademaster` (`gradeId`),
  CONSTRAINT `FK_studentmapping_user` FOREIGN KEY (`userId`) REFERENCES `usermaster` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

/*Data for the table `studentmapping` */

insert  into `studentmapping`(studentMappingId,userId,courseId,gradeId) values (3,'muthuvel','CS 525','F'),(4,'muthuvel','CS 511','A+'),(5,'muthuvel','CS 525','F'),(6,'muthuvel','CS 525','F'),(7,'muthuvel','CS 525','F'),(8,'muthuvel','CS 525','F'),(9,'muthuvel','CS 525','F'),(10,'muthuvel','CS 500','A+'),(11,'harsha','CS 511','A+'),(12,'mukundan','CS 525','A+'),(13,'mukundan','CS 511','A-'),(14,'mukundan','CS 521','B'),(15,'harsha','CS 510','A'),(16,'muthuvel','CS 521','A-'),(17,'harsha','CS 500','B+'),(18,'harsha','CS 522','A+');

/*Table structure for table `usermaster` */

DROP TABLE IF EXISTS `usermaster`;

CREATE TABLE `usermaster` (
  `userId` varchar(100) NOT NULL,
  `password` varchar(30) NOT NULL,
  `firstName` char(100) DEFAULT NULL,
  `middleName` char(100) DEFAULT NULL,
  `lastName` char(100) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `dateOfJoining` date DEFAULT NULL,
  `mobile` decimal(10,0) DEFAULT NULL,
  `gender` char(10) DEFAULT NULL,
  `emailId` varchar(100) DEFAULT NULL,
  `role` char(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `usermaster` */

insert  into `usermaster`(userId,password,firstName,middleName,lastName,dateOfBirth,dateOfJoining,mobile,gender,emailId,role) values ('akhilas','akhila','Akhila',NULL,'S',NULL,NULL,NULL,'Female','akhila@gmail.com','PROFESSOR'),('apoorva','apporva','Apoorva',NULL,NULL,NULL,NULL,NULL,'Female','apporva@gmail.com','STUDENT'),('harsha','harsha','Harsha','C','G',NULL,NULL,NULL,'Male','harsha@gmail.com','STUDENT'),('mukundan','mukunda','Mukunda',NULL,'N','0000-00-00',NULL,'9535737372','Male','mukunda.mnm@gmail.com','STUDENT'),('muthuvel','muthu','Muthuvel','S','S',NULL,NULL,NULL,'Male','muthuvel@gmail.com','STUDENT');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
