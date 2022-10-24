<?php
// PHP validate data
function clear_data($val){
    $val=trim($val);
    $val=stripslashes($val);
    $val=strip_tags($val);
    $val=htmlspecialchars($val);
    return $val;
}

function add($sqlAddData,$sql){
    if($sql->query($sqlAddData)===true){
        //echo "добавлено";
        $sql->close();
        header('Location: .././main.php');
    }else{
        $sql->close();
        echo '<a href="../main.php">back</a>';
    }
    //$sql->close();
    //header('Location: .././main.php');
}

function read($sqlAllData,$sql){
    $res=$sql->query($sqlAllData);
    $arr=[];
    if($res->num_rows>0){
        while($row=$res->fetch_assoc()){
            $arr[]=$row;
        }
    }
    $sql->close();
    return $arr;
}

function updatereplace($sqlReplaceData,$sql){
    if($sql->query($sqlReplaceData)===true){
        $sql->close();
        header('Location: .././main.php');
    }else{
        $sql->close();
        echo '<a href="../main.php">back</a>';
    }
}
?>