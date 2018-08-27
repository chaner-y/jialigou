<?php
/**
 * @Author: Marte
 * @Date:   2018-08-20 00:14:23
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-20 20:33:56
 */
include 'connect.php';

/*
    接口功能：用户登录
            读取数据库
            所需参数：
            username;
            password;
 */

$username = isset($_POST['username'])?$_POST['username']:null;
$password = isset($_POST['password'])?$_POST['password']:null;


    //查找数据库是否有该用户
    $sql = "select name password from register where name='$username' and password='$password'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }
?>