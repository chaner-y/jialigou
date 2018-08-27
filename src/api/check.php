<?php
/**
 * @Author: Marte
 * @Date:   2018-08-19 22:25:49
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-20 16:40:10
 */
include 'connect.php';
/*
    接口功能：验证用户名是否存在
    所有需参数：
        username
 */
    $username = isset($_GET['username'])?$_GET['username']:null;
    //查找数据库中否存在同名
    $sql = "SELECT * from register WHERE name='$username'";
    //执行sql语句
    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>