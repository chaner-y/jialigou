<?php
include 'connect.php';
/**
 *  接口功能：用户注册
            * 写入数据库
        *所需参数：
            * username
            * password
 */
$username = isset($_POST['username'])? $_POST['username']:null;
    $password = isset($_POST['password'])? $_POST['password']:null;
    $rpassword = isset($_POST['rpassword'])? $_POST['rpassword']:null;


    //查找数据库是否存在同用户名
    if($password === $rpassword){
        $sql = "insert into register(name,password) values('$username','$password')";

    //执行sql语句
         $result = $conn->query($sql);

        if($result){
          echo "success";
        }else{
         echo "fail";
        }
    }else{
        echo "不一致";
    }
?>
