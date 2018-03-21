# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.20)
# Database: graphql
# Generation Time: 2018-03-21 03:07:27 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table authors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `authors`;

CREATE TABLE `authors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT 'asdasdd',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;

INSERT INTO `authors` (`id`, `firstName`)
VALUES
	(1,'塞缪尔·厄尔曼'),
	(2,'席慕蓉'),
	(3,'塞缪尔3'),
	(4,'塞缪尔4'),
	(5,'佚名'),
	(6,'佚名6'),
	(7,'佚名7'),
	(8,'ddd'),
	(9,'cancan'),
	(10,'3333'),
	(11,'33333333'),
	(12,'cancan'),
	(13,'test'),
	(14,'333'),
	(15,'3333'),
	(16,'123'),
	(17,'未输入'),
	(18,'yuanfang'),
	(19,'yuanfang'),
	(20,'yuanfang'),
	(21,'yuanfang'),
	(22,'灿灿'),
	(23,'sddd'),
	(24,'李狗嗨'),
	(25,'123'),
	(26,'三体'),
	(27,'三体'),
	(28,'asdads'),
	(29,'d');

/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `authorId` int(11) DEFAULT NULL,
  `author` varchar(30) DEFAULT 'firstName',
  `title` varchar(100) DEFAULT 'firstName',
  `agree` int(11) DEFAULT '0',
  `img` varchar(100) DEFAULT 'http://img3x9.ddimg.cn/55/10/25125859-1_b_1.jpg',
  `digest` varchar(100) CHARACTER SET utf8mb4 DEFAULT 'firstName',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `authorId`, `author`, `title`, `agree`, `img`, `digest`)
VALUES
	(1,1,'塞缪尔·厄尔曼','青春',48,'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1008349656,2072975832&fm=200&gp=0.jpg','岁月悠悠，衰微只及肌肤；热忱抛却，颓唐必致灵魂。忧烦、惶恐、丧失自信，定 使心灵扭曲，意气如灰。'),
	(2,2,'席慕蓉','一颗会开花的树',23,'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2842158468,687162606&fm=58&bpow=640&bpoh=854','如何让你遇见我，在我最美丽的时刻，为这，我已在佛前求了五百年'),
	(3,3,'荣雪烟',' 随风不逝·张国荣',5,'http://img3m1.ddimg.cn/11/10/25197491-1_l_8.jpg','15年，属于所有荣迷的追忆和想念！在茫然中，思忆里，所有冷冰的，暖了'),
	(4,4,'白茶','就喜欢你看不惯我又干不掉我的样子',39,'http://img3m2.ddimg.cn/68/14/25200122-1_l_12.jpg','吾皇巴扎黑爆笑来袭！姚晨、马东、高晓松、林依轮、俞敏洪等众多名人转发推荐！'),
	(5,5,'圣-埃克苏佩里','小王子',4,'http://img3m0.ddimg.cn/12/36/24182940-1_b_116.jpg','全新畅销珍藏版，首创豆瓣9.8高分好评！27645位读者五星推荐，好评如潮！100%译自法国Gallimard出版社权威定本，译者荣获法国政府骑士勋章！国内独家修复小王子原版46幅全套插图。'),
	(6,5,'英国DK公司','DK伟大的世界地图',6,'http://img3m0.ddimg.cn/73/6/25079050-1_b_6.jpg','每一幅地图都是一件精心设计的艺术品 全面展示每幅地图的创作原因和创造过程，地图所在时期的历史文化背景以及背后的故事（百科出品）'),
	(7,5,'戴维·伽特森','雪落香杉树',5,'http://img3m0.ddimg.cn/11/18/25093640-1_b_8.jpg','当代美国文学史上罕见的超级畅销获奖经典，被译成30余种文字，全球畅销500万册。1995福克纳奖得主。全美大中学文学课堂读本。是一颗懂得仁慈与宽恕的心，让公平与正义像太阳一样照耀！'),
	(9,10,'于平 任凭','狗年的礼物',4,'http://img3m8.ddimg.cn/35/1/25217018-1_l_3.jpg','生肖贺岁限量套装'),
	(34,NULL,'asdads','asdasd',1,'http://img3x9.ddimg.cn/55/10/25125859-1_b_1.jpg','xxxx'),
	(35,NULL,'d','d',3,'http://img3x9.ddimg.cn/55/10/25125859-1_b_1.jpg','d');

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
