/*
 Navicat Premium Data Transfer

 Source Server         : localhost MAMP
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : localhost:8889
 Source Schema         : quote

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 09/06/2022 17:07:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for quote
-- ----------------------------
DROP TABLE IF EXISTS `quote`;
CREATE TABLE `quote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quote` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_quote_uniqie` (`quote`),
  KEY `idx_author` (`author`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of quote
-- ----------------------------
BEGIN;
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (1, 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.', 'Bjarne Stroustrup', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (3, 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Martin Fowler', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (4, 'First, solve the problem. Then, write the code.', 'John Johnson', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (5, 'Java is to JavaScript what car is to Carpet.', 'Chris Heilmann', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (6, 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', 'John Woods', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (7, 'I\'m not a great programmer; I\'m just a good programmer with great habits.', 'Kent Beck', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (8, 'Truth can only be found in one place: the code.', 'Robert C. Martin', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (9, 'If you have to spend effort looking at a fragment of code and figuring out what it\'s doing, then you should extract it into a function and name the function after the \'what\'.', 'Martin Fowler', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (10, 'The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.', 'Donald Knuth', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (11, 'SQL, Lisp, and Haskell are the only programming languages that I’ve seen where one spends more time thinking than typing.', 'Philip Greenspun', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (12, 'Deleted code is debugged code.', 'Jeff Sickel', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (13, 'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies.', 'C.A.R. Hoare', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (14, 'Simplicity is prerequisite for reliability.', 'Edsger W. Dijkstra', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (15, 'There are only two hard things in Computer Science: cache invalidation and naming things.', 'Phil Karlton', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (16, 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.', 'Bill Gates', '2022-06-09 13:00:02', '2022-06-09 13:00:02');
INSERT INTO `quote` (`id`, `quote`, `author`, `created_at`, `updated_at`) VALUES (17, 'Controlling complexity is the essence of computer programming.', 'Brian Kernighan', '2022-06-09 17:03:16', '2022-06-09 17:03:16');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
