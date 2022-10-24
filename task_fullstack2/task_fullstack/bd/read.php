<?php
include "../session.php";
include "./post.php";
include "./functions.php";
include "./mysql.php";

if(isset($_POST["login"])){
    $login=clear_data($_POST["login"]);
    // $password=clear_data($_POST["password"]);

    $sqlAllData="SELECT * FROM users WHERE `login`='".$login."'";
    $res=$sql->query($sqlAllData);
    if($res->num_rows>0){
        while($row=$res->fetch_assoc()){
            $arr[]=$row;
        }
        $sql->close();
        $_SESSION['user']['type']='client';
        $_SESSION['user']['name']=$arr[0]['name'];
        $_SESSION['user']['id']=$arr[0]['id'];
        $_SESSION['user']['login']=$arr[0]['login'];
        echo json_encode(["status"=>"ok","users"=>$arr,"login"=>"","ps"=>""]);
    }else{
        $sql->close();
        echo json_encode(["status"=>"ok","login"=>"Логин ввидён не правильно!"]);
    }
}

if(isset($_GET["products"])){
    $sqlAllProduct="SELECT * FROM products";
    $res=$sql->query($sqlAllProduct);
    if($res->num_rows>0){
        while($row=$res->fetch_assoc()){
            $arr[]=$row;
        }
        $sql->close();
        echo json_encode(["status"=>"ok","product"=>$arr]);
    }else{
        echo json_encode(["status"=>"ok","err"=>"Продуктов нету!"]);
    }
}

if(isset($_GET["orders"])){
    $sqlAllOrders="SELECT * FROM orders_users WHERE `user_id`=".$_SESSION['user']['id'];
    $res=$sql->query($sqlAllOrders);
    $orders=[];
    if($res->num_rows>0){
        while($row=$res->fetch_assoc()){
            $orders[]=$row;
        }
    }else{
        $orders=[];
    }
    echo json_encode(["status"=>"ok","orders_users"=>$orders]);
}

if(isset($_GET["coins"])){
    $sqlAllCoins="SELECT * FROM coins WHERE `user_id`=".$_SESSION['user']['id'];
    $res=$sql->query($sqlAllCoins);
    $coins=[];
    if($res->num_rows>0){
        while($row=$res->fetch_assoc()){
            $coins[]=$row;
        }
    }else{
        $sqlAllCoins="SELECT * FROM coins";
        $res=$sql->query($sqlAllCoins);
        $coins=[];
    }
    $sql->close();

    echo json_encode(["status"=>"ok","coins"=>$coins]);
}
?>