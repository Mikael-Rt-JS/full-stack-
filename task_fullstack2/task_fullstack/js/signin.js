$('signin').addEventListener('click',async e=>{
    err=[];
    let login=deleteSpace($('login').value );
    // let password=deleteSpace($('password').value );
    let client={};

    if(login===""){
        err.push([$('er_login'),'Заполните поле!']);
    }else if(login.length<3){
        err.push([$('er_login'),'Логин короче 3-х символов!']);
    }else if(login.length>255){
        err.push([$('er_login'),'Логин привышает 255 символов!']);
    }else{
        client.login=login;
        $('er_login').innerHTML='';
    }
    
    // if(password===""){
    //     err.push([$('er_password'),'Заполните поле!']);
    // }else if(password.length<4){
    //     err.push([$('er_password'),'Пароль короче 4-и символов!']);
    // }else if(password.length>255){
    //     err.push([$('er_password'),'Пароль привышает 255 символов!']);
    // }else{
    //     client.password=password;
    //     $('er_password').innerHTML='';
    // }
    
    if(err.length===0){
        //
        let user=await post('./bd/read.php',client).catch(err=>l(err));
        if(await user){
            if(user.login!==""){
                $('er_login').innerHTML=user.login;
            }
            // else if(user.ps!==""){
            //     $('er_password').innerHTML=user.ps;
            // }
            else{
                $('er_login').innerHTML='';
                // $('er_password').innerHTML='';
                localStorage.setItem('id', user.users[0].id);
                window.location.href="./index.php";
            }
        }
    }else{
      for(let i=0;i<err.length;i++){
        err[i][0].innerHTML=err[i][1];
      }
    }
});
  