$('want_signin').addEventListener('click',()=>{
    if($('want_signin').innerHTML==="ВОЙТИ" || $('want_signin').innerHTML==="Войти"){
        $('s_signin').classList.toggle('no_see');
        // $('name_help').title="Длина должна быть от 3-х до 255-и символов.";
        $('login_help').title="Длина должна быть от 3-х до 255-и символов.";
        // $('password_help').title="Длина должна быть от 8-и до 255-и символов.";
        $('want_signin').innerHTML="Обратно";
    }else{
        $('s_signin').classList.toggle('no_see');
        $('want_signin').innerHTML="Войти";
    }
});