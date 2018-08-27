<?php
/**
 * @Author: Marte
 * @Date:   2018-08-20 21:39:10
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-20 22:01:58
 */
include "connect.php";
/*
    接口功能：
        获取数据库的商品信息
 */
$sql = "select * from goodslist";

//执行sql语句  
$result = $conn->query($sql);

$result = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($result,JSON_UNESCAPED_UNICODE);

?>