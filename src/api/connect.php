<?php
    header('Content-Type:text/html;charset=utf-8');
    /*
    连接数据库
        匹配参数
        创建连接（实例化）
    php操作数据库
        增;
        删：
        改：
        查：
     */
        //匹配参数
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "jialigou";

        //创建连接（实例化）
        $conn = new mysqli($servername,$username,$password,$dbname);
        mysqli_query($conn,"set names utf8");
        //检测连接
        if($conn->connect_error){
            //输出信息并结束连接
            die("连接失败：".$conn->connect_error);
        }
?>