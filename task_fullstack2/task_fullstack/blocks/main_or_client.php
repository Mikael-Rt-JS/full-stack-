<?php 
if(isset($_SESSION['user'])){
    if($_SESSION['user']['type']==='client'){ ?>
    
    <div class="user_btns">
        <span id="user" data-usid="<?=$_SESSION['user']['id'];?>" data-name="<?=$_SESSION['user']['login'];?>">
            <?=$_SESSION['user']['login'];?>
        </span>
        <a class="curs_point" id="clientLogOut">Выйти</a>
    </div>
                                                    
<?php }else if($_SESSION['user']['type']==='main'){ ?>

    <div class="user_btns">
        <span id="user" data-name="<?=$_SESSION['user']['login'];?>">
            <?=$_SESSION['user']['login'];?>
        </span>
        <a class="curs_point" id="mainLogOut">Выйти</a>
    </div>

<?php 
    }
}else{ ?>
    <button id="want_signin" class="user_signin txt-upper">Войти</button>
<?php } ?>
