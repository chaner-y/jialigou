<?php
/**
 * @Author: Marte
 * @Date:   2018-08-22 09:34:59
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-22 10:18:51
 */
include 'connect.php';

/*
接口功能
    商品列表页生成数据
    分页显示
    所需参数
        qty
        pageno
 */

//获取前端存入数据
    $pageNo = isset($_POST['pageNo'])?$_POST['pageNo']:null;
    $qty = isset($_POST['qty'])?$_POST['qty']:null;
    //查询数据库
    $sql = "select * from goodslist";
    //执行sql语句
    $result = $conn->query($sql);

    $result = $result->fetch_all(MYSQLI_ASSOC);

    $res = array(
        "total" => count($result),
        "data" => array_slice($result,($pageNo-1)*$qty,$qty),
        "pageNo" => $pageNo,
        "qty" => $qty
    );

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>