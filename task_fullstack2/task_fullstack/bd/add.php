<?php
include "./post.php";
include "./functions.php";
include "./mysql.php";

if(isset($_POST['price'])){
    $user_id=clear_data($_POST["user_id"]);
    $price=clear_data($_POST["price"]);
    $action=clear_data($_POST["action"]);
    $sqlAddData="INSERT INTO coins (user_id,price,action) VALUES (".$user_id.",".$price.",".$action.")";
    if($sql->query($sqlAddData)===true){
        $sql->close();
        echo json_encode(["status"=>"ok"]);
    }else{
        $sql->close();
        echo json_encode(["status"=>"no","err"=>"Не удалось добавить."]);
    }
}

if(isset($_POST['product_id'])){
    $user_id=clear_data($_POST["user_id"]);
    $product_id=clear_data($_POST["product_id"]);
    $sqlAddData="INSERT INTO orders_users (product_id,user_id) VALUES (".$product_id.",".$user_id.")";
    if($sql->query($sqlAddData)===true){
        $sql->close();
        echo json_encode(["status"=>"ok"]);
    }else{
        $sql->close();
        echo json_encode(["status"=>"no","err"=>"Не удалось добавить."]);
    }
}
?>
