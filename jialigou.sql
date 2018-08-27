/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : jialigou

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-25 17:34:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `titile` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sell` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `u_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', 'DR.SOS微雕换肤无痕肌底精华', '998.00', '12', 'images/g1.jpg', '2018-08-20 21:05:43');
INSERT INTO `goodslist` VALUES ('2', 'FancyFuel滚轮紧致塑身健康美霜', '399.00', '17', 'images/g2.jpg', '2018-08-20 21:08:21');
INSERT INTO `goodslist` VALUES ('3', '惠氏钙尔奇氨糖软骨素健康套组', '298.00', '20', 'images/g3.jpg', '2018-08-20 21:09:42');
INSERT INTO `goodslist` VALUES ('4', '多森蛋白生物孝素家庭清洁组', '169.00', '10', 'images/g4.jpg', '2018-08-20 21:11:01');
INSERT INTO `goodslist` VALUES ('5', '新秀丽旗下卡米龙24寸时尚拉杆箱', '499.00', '25', 'images/g5.jpg', '2018-08-20 21:12:23');
INSERT INTO `goodslist` VALUES ('6', '卡的罗尼1851多功能料理机', '299.00', '22', 'images/g6.jpg', '2018-08-20 21:13:23');
INSERT INTO `goodslist` VALUES ('7', '德国爱乐仕品质锅具经典组', '698.00', '28', 'images/g7.jpg', '2018-08-20 21:15:13');
INSERT INTO `goodslist` VALUES ('8', '韩后达人严选黑科技面膜', '299.00', '35', 'images/g8.jpg', '2018-08-20 21:16:07');
INSERT INTO `goodslist` VALUES ('9', '京城之霜皮淼抚纹精华素组', '1280.00', '19', 'images/g9.jpg', '2018-08-20 21:18:29');
INSERT INTO `goodslist` VALUES ('10', '中粮塔原红花籽油十周年供组', '399.00', '9', 'images/g10.jpg', '2018-08-20 21:19:56');
INSERT INTO `goodslist` VALUES ('11', '康新牧场草原酱牛肉美味分享组', '298.00', '45', 'images/g11.jpg', '2018-08-20 21:21:00');
INSERT INTO `goodslist` VALUES ('12', 'Dunlop男士英伦经典商务包', '1280.00', '35', 'images/g12.jpg', '2018-08-20 21:22:24');
INSERT INTO `goodslist` VALUES ('13', '意大利Bagutta风衣款男羽绒服', '599.00', '8', 'images/g13.jpg', '2018-08-20 21:23:32');
INSERT INTO `goodslist` VALUES ('14', 'RQQBA男士休闲西裤经典组', '399.00', '9', 'images/g14.jpg', '2018-08-20 21:24:29');
INSERT INTO `goodslist` VALUES ('15', '库思特交流变频落地扇', '299.00', '179', 'images/g15.jpg', '2018-08-20 21:28:06');
INSERT INTO `goodslist` VALUES ('16', '可李司魔术折叠衣架欢乐组', '199.00', '51', 'images/g16.jpg', '2018-08-20 21:27:29');
INSERT INTO `goodslist` VALUES ('17', '新西兰纽西小精灵蜂胶牙膏家庭组', '298.00', '45', 'images/g17.jpg', '2018-08-20 21:30:01');
INSERT INTO `goodslist` VALUES ('18', '自然韵兔撬小片有机黑茶家庭超值组', '258.00', '6', 'images/g18.jpg', '2018-08-20 21:34:35');
INSERT INTO `goodslist` VALUES ('19', 'KEEFE棉麻休闲宽版裙裤超值套组', '199.00', '54', 'images/g19.jpg', '2018-08-20 21:35:58');
INSERT INTO `goodslist` VALUES ('20', '极脉清爽休闲女士套装', '208.00', '30', 'images/g20.jpg', '2018-08-20 21:37:05');
INSERT INTO `goodslist` VALUES ('21', 'DR.SOS微雕换肤无痕肌底精华', '654.00', '34', 'images/g21.jpg', '2018-08-22 09:47:23');
INSERT INTO `goodslist` VALUES ('22', 'FancyFuel滚轮紧致塑身健康美霜', '789.00', '53', 'images/g22.jpg', '2018-08-22 09:47:34');
INSERT INTO `goodslist` VALUES ('23', '惠氏钙尔奇氨糖软骨素健康套组', '345.00', '20', 'images/g23.jpg', '2018-08-22 09:47:47');
INSERT INTO `goodslist` VALUES ('24', '多森蛋白生物孝素家庭清洁组', '456.00', '87', 'images/g24.jpg', '2018-08-22 09:48:00');
INSERT INTO `goodslist` VALUES ('25', '新秀丽旗下卡米龙24寸时尚拉杆箱', '456.00', '25', 'images/g25.jpg', '2018-08-22 09:48:08');
INSERT INTO `goodslist` VALUES ('26', '卡的罗尼1851多功能料理机', '345.00', '67', 'images/g26.jpg', '2018-08-22 09:48:16');
INSERT INTO `goodslist` VALUES ('27', '德国爱乐仕品质锅具经典组', '698.00', '65', 'images/g27.jpg', '2018-08-22 09:48:21');
INSERT INTO `goodslist` VALUES ('28', '韩后达人严选黑科技面膜', '235.00', '45', 'images/g28.jpg', '2018-08-22 09:48:27');
INSERT INTO `goodslist` VALUES ('29', '京城之霜皮淼抚纹精华素组', '987.00', '60', 'images/g29.jpg', '2018-08-22 09:48:34');
INSERT INTO `goodslist` VALUES ('30', '京城之霜皮淼抚纹精华素组', '1354.00', '12', 'images/g30.jpg', '2018-08-20 21:18:29');
INSERT INTO `goodslist` VALUES ('31', '中粮塔原红花籽油十周年供组', '567.00', '9', 'images/g31.jpg', '2018-08-20 21:19:56');
INSERT INTO `goodslist` VALUES ('32', '康新牧场草原酱牛肉美味分享组', '678.00', '45', 'images/g32.jpg', '2018-08-20 21:21:00');
INSERT INTO `goodslist` VALUES ('33', 'Dunlop男士英伦经典商务包', '987.00', '35', 'images/g33.jpg', '2018-08-20 21:22:24');
INSERT INTO `goodslist` VALUES ('34', '意大利Bagutta风衣款男羽绒服', '888.00', '8', 'images/g34.jpg', '2018-08-20 21:23:32');
INSERT INTO `goodslist` VALUES ('35', 'RQQBA男士休闲西裤经典组', '567.00', '78', 'images/g35.jpg', '2018-08-20 21:24:29');
INSERT INTO `goodslist` VALUES ('36', '库思特交流变频落地扇', '399.00', '179', 'images/g36.jpg', '2018-08-20 21:28:06');
INSERT INTO `goodslist` VALUES ('37', '可李司魔术折叠衣架欢乐组', '345.00', '51', 'images/g37.jpg', '2018-08-20 21:27:29');
INSERT INTO `goodslist` VALUES ('38', '新西兰纽西小精灵蜂胶牙膏家庭组', '199.00', '45', 'images/g38.jpg', '2018-08-20 21:30:01');
INSERT INTO `goodslist` VALUES ('39', '自然韵兔撬小片有机黑茶家庭超值组', '456.00', '79', 'images/g39.jpg', '2018-08-20 21:34:35');
INSERT INTO `goodslist` VALUES ('40', 'KEEFE棉麻休闲宽版裙裤超值套组', '599.00', '54', 'images/g40.jpg', '2018-08-20 21:35:58');
INSERT INTO `goodslist` VALUES ('41', '库思特交流变频落地扇', '299.00', '56', 'images/g41.jpg', '2018-08-22 09:53:01');
INSERT INTO `goodslist` VALUES ('42', '可李司魔术折叠衣架欢乐组', '678.00', '90', 'images/g42.jpg', '2018-08-22 09:53:18');
INSERT INTO `goodslist` VALUES ('43', '新西兰纽西小精灵蜂胶牙膏家庭组', '298.00', '45', 'images/g43.jpg', '2018-08-22 09:53:40');
INSERT INTO `goodslist` VALUES ('44', '自然韵兔撬小片有机黑茶家庭超值组', '258.00', '98', 'images/g44.jpg', '2018-08-22 09:53:56');
INSERT INTO `goodslist` VALUES ('45', 'KEEFE棉麻休闲宽版裙裤超值套组', '456.00', '54', 'images/g45.jpg', '2018-08-22 09:54:08');
INSERT INTO `goodslist` VALUES ('46', '极脉清爽休闲女士套装', '398.00', '30', 'images/g46.jpg', '2018-08-22 09:54:22');
INSERT INTO `goodslist` VALUES ('47', 'DR.SOS微雕换肤无痕肌底精华', '746.00', '34', 'images/g47.jpg', '2018-08-22 09:54:39');
INSERT INTO `goodslist` VALUES ('48', 'FancyFuel滚轮紧致塑身健康美霜', '789.00', '53', 'images/g48.jpg', '2018-08-22 09:54:48');
INSERT INTO `goodslist` VALUES ('49', '惠氏钙尔奇氨糖软骨素健康套组', '345.00', '20', 'images/g49.jpg', '2018-08-22 09:55:00');
INSERT INTO `goodslist` VALUES ('50', '多森蛋白生物孝素家庭清洁组', '456.00', '87', 'images/g50.jpg', '2018-08-22 09:55:14');
INSERT INTO `goodslist` VALUES ('51', '新秀丽旗下卡米龙24寸时尚拉杆箱', '456.00', '25', 'images/g51.jpg', '2018-08-22 09:55:24');
INSERT INTO `goodslist` VALUES ('52', '卡的罗尼1851多功能料理机', '345.00', '67', 'images/g52.jpg', '2018-08-22 09:55:35');
INSERT INTO `goodslist` VALUES ('53', '德国爱乐仕品质锅具经典组', '698.00', '65', 'images/g53.jpg', '2018-08-22 09:55:45');
INSERT INTO `goodslist` VALUES ('54', '韩后达人严选黑科技面膜', '235.00', '45', 'images/g54.jpg', '2018-08-22 09:55:55');
INSERT INTO `goodslist` VALUES ('55', '京城之霜皮淼抚纹精华素组', '987.00', '60', 'images/g55.jpg', '2018-08-22 09:56:09');
INSERT INTO `goodslist` VALUES ('56', '京城之霜皮淼抚纹精华素组', '1354.00', '12', 'images/g56.jpg', '2018-08-22 09:56:17');
INSERT INTO `goodslist` VALUES ('57', '中粮塔原红花籽油十周年供组', '567.00', '9', 'images/g57.jpg', '2018-08-22 09:56:26');
INSERT INTO `goodslist` VALUES ('58', '康新牧场草原酱牛肉美味分享组', '678.00', '45', 'images/g58.jpg', '2018-08-22 09:56:36');
INSERT INTO `goodslist` VALUES ('59', 'Dunlop男士英伦经典商务包', '987.00', '35', 'images/g59.jpg', '2018-08-22 09:56:44');
INSERT INTO `goodslist` VALUES ('60', '意大利Bagutta风衣款男羽绒服', '888.00', '8', 'images/g60.jpg', '2018-08-22 09:56:55');
INSERT INTO `goodslist` VALUES ('61', 'RQQBA男士休闲西裤经典组', '567.00', '78', 'images/g61.jpg', '2018-08-22 09:57:05');
INSERT INTO `goodslist` VALUES ('62', '库思特交流变频落地扇', '399.00', '179', 'images/g62.jpg', '2018-08-22 09:57:35');
INSERT INTO `goodslist` VALUES ('63', '可李司魔术折叠衣架欢乐组', '345.00', '51', 'images/g63.jpg', '2018-08-22 09:57:46');
INSERT INTO `goodslist` VALUES ('64', '新西兰纽西小精灵蜂胶牙膏家庭组', '199.00', '45', 'images/g64.jpg', '2018-08-22 09:57:55');
INSERT INTO `goodslist` VALUES ('65', '自然韵兔撬小片有机黑茶家庭超值组', '456.00', '79', 'images/g65.jpg', '2018-08-22 09:58:02');
INSERT INTO `goodslist` VALUES ('66', 'KEEFE棉麻休闲宽版裙裤超值套组', '599.00', '54', 'images/g66.jpg', '2018-08-22 09:58:11');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('1', 'admin', '12345', '2018-08-19 21:26:53');
INSERT INTO `register` VALUES ('51', 'chaner', '123456', '2018-08-20 20:55:06');
INSERT INTO `register` VALUES ('54', '18318869616', '123456', '2018-08-25 17:22:37');
INSERT INTO `register` VALUES ('53', 'wertyui', '123456', '2018-08-24 17:44:08');
INSERT INTO `register` VALUES ('52', 'tiantian', '123456', '2018-08-21 12:38:33');
SET FOREIGN_KEY_CHECKS=1;
