<?php
    header('content-type:text/html;charset="utf-8"');
    error_reporting(0);

    $username = $_POST['username'];
    $password = $_POST['password'];

    if(strstr($username,"15771902523")&&strstr($password,"214310")){
        echo 1;
    }else{
        echo 0;
    }
?>