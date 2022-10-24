$('settings_dialog_open').addEventListener('click',()=>{
    $('settings_dialog_content').style.display="block";
});
$('settings_close').addEventListener('click',()=>{
    $('settings_dialog_content').style.display="none";
});
$('settings_dialog').addEventListener('click',e=>{
    if(e.target.classList.contains('settings_dialog')){
        $('settings_dialog_content').style.display="none";
    }
});

function productInAccount(order_yes,products){
    $('products_stocks').innerHTML="";
    let coins=[50,70,100,139];
    let str="";

    for(let i=0;i<products.length;i++){
        let to=products[i].description.search('%');
        let from=0;
        let prcent=products[i].description.substring(from,to+1);
        let title=products[i].description.substring(to+1,products[i].description.length);
        str+=`<div class="card">
        <div class="coins sell_coins_gap">
            <img src="./imgs/Монета ET 3.png" alt="Монета ET 3" title="Монета ET 3" class="monet_img_cards"/>
            <span class="sell_balance">${coins[i]}</span>
            <!-- <img src="./imgs/Mask group.png" alt="icons" title="icons" class="icons_coins"/> -->
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_1_46" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="13">
                <rect width="15" height="13" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_1_46)">
                <rect y="-4" width="20" height="21" fill="#242424"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1_46" transform="translate(-0.027027) scale(0.0117117 0.0135135)"/>
                </pattern>
                <image id="image0_1_46" width="90" height="74" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABKCAYAAAA7fkOZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgB7dqxDYQwEABB+/X9twwUAIEDVoBmQjJWF+AzczsMbvcbJISOCB0ROiJ0ROiI0BGhI0JHhI4IDQA05tMX//Nw9vxtFxY+7yJCR4SOCB0ROiJ0ROiI0BGhI8snw6uT2tvU722iI0JHhI4IHRE6InRE6IjQEaEjQkf+Y1F9KfqVI7+JjggdEToidEToiNARoSNCR4SOCB0ROrK86/jK7qFmoiNCR4SOCB0ROiJ0ROiI0BGhI0JHhI74ryNioiNCR4SOCB0ROiJ0ROiI0BGhI0JHhI7sa9YcimyyDg0AAAAASUVORK5CYII="/>
                </defs>
            </svg>
        </div>`;

        if(i===0){
            str+=`<div class="phone_stock">
                <img src="./imgs/phone.png" alt="phone" title="phone" class="icons_coins"/>
                <span>x2</span>
            </div>`;
        }else if(i===1){
            str+=`<img src="./imgs/book.png" alt="icons open book" title="icons open book" class="icons_coins"/>`;
        }else{
            str+=`<img src="./imgs/book_2.png" alt="icons books" title="icons books" class="icons_coins"/>`
        }

        str+=`<div class="title_stock_block">
            <div class="stock_pracent">
                <p>${prcent}</p>
            </div>
            <h4>${i===0 ? title+'(x2)' : title}</h4>
        </div>
        <button data-productid="${products[i].id}" class="${(order_yes[i] && order_yes[i].product_id===products[i].id) ? 'buy">Уже использовано</button>':'sell">Использовать скидку</button>' }
    </div>`;
    }
    $('products_stocks').innerHTML=str;
}

function defaultProductRender(products){
    $('products_stocks').innerHTML="";
    let coins=[50,70,100,139];
    let str="";

    for(let i=0;i<products.length;i++){
        let to=products[i].description.search('%');
        let from=0;
        let prcent=products[i].description.substring(from,to+1);
        let title=products[i].description.substring(to+1,products[i].description.length);
        str+=`<div class="card">
        <div class="coins sell_coins_gap">
            <img src="./imgs/Монета ET 3.png" alt="Монета ET 3" title="Монета ET 3" class="monet_img_cards"/>
            <span class="sell_balance">${coins[i]}</span>
            <!-- <img src="./imgs/Mask group.png" alt="icons" title="icons" class="icons_coins"/> -->
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_1_46" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="13">
                <rect width="15" height="13" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_1_46)">
                <rect y="-4" width="20" height="21" fill="#242424"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1_46" transform="translate(-0.027027) scale(0.0117117 0.0135135)"/>
                </pattern>
                <image id="image0_1_46" width="90" height="74" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABKCAYAAAA7fkOZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgB7dqxDYQwEABB+/X9twwUAIEDVoBmQjJWF+AzczsMbvcbJISOCB0ROiJ0ROiI0BGhI0JHhI4IDQA05tMX//Nw9vxtFxY+7yJCR4SOCB0ROiJ0ROiI0BGhI8snw6uT2tvU722iI0JHhI4IHRE6InRE6IjQEaEjQkf+Y1F9KfqVI7+JjggdEToidEToiNARoSNCR4SOCB0ROrK86/jK7qFmoiNCR4SOCB0ROiJ0ROiI0BGhI0JHhI74ryNioiNCR4SOCB0ROiJ0ROiI0BGhI0JHhI7sa9YcimyyDg0AAAAASUVORK5CYII="/>
                </defs>
            </svg>
        </div>`;

        if(i===0){
            str+=`<div class="phone_stock">
                <img src="./imgs/phone.png" alt="phone" title="phone" class="icons_coins"/>
                <span>x2</span>
            </div>`;
        }else if(i===1){
            str+=`<img src="./imgs/book.png" alt="icons open book" title="icons open book" class="icons_coins"/>`;
        }else{
            str+=`<img src="./imgs/book_2.png" alt="icons books" title="icons books" class="icons_coins"/>`
        }

        str+=`<div class="title_stock_block">
            <div class="stock_pracent">
                <p>${prcent}</p>
            </div>
            <h4>${i===0 ? title+'(x2)' : title}</h4>
        </div>
        <button data-productid="${products[i].id}" class="sell">Использовать скидку</button>
    </div>`;
    }
    $('products_stocks').innerHTML=str;
}

async function productget(bool){
    if(bool){
        $('client_balance').innerHTML=0;
        let products=await get('./bd/read.php?products');
        if(await products){
            return  products.product;
        }
    }else{
        $('client_balance').innerHTML=0;
        let products=await get('./bd/read.php?products');
        if(await products){
            defaultProductRender(products.product);
        }
    }
    
}
function renderTh(th){
    $('th').innerHTML="";
    let str=``;
    for(let i=0;i<th.length;i++){
        str+=`<th>${th[i]}</th>`;
    }
    $('th').innerHTML=str;
}

function renderOrders(th){
    $('th_orders').innerHTML="";
    let str=``;
    for(let i=0;i<th.length;i++){
        str+=`<th>${th[i]}</th>`;
    }
    $('th_orders').innerHTML=str;
}

async function tableHistory(coins){
    let th=['#','login','price','action'];
    let str="";
    let balance=0;
    renderTh(th);
    
    for(let i=0;i<coins.length;i++){
        str+=`<tr>`;
        for(let [key,val] of Object.entries(coins[i])){
            if(key==="id"){
                str+=`<td>${i}</td>`;
            }else if(key==="user_id"){
                str+=`<td>${$('user').innerText}</td>`;
            }else if(key==="price"){
                if(i+1===coins.length ){
                    if((+val)===0){
                        balance=0;
                        str+=`<td>${val}</td>`;
                    }else if((+val)<0){
                        balance+=(+val);
                        str+=`<td>${val}</td>`;
                    }
                }else{
                    balance+=(+val);
                    str+=`<td>${val}</td>`;
                }
            }else{
                str+=`<td>${val}</td>`;
            }
        }
        str+=`</tr>`;
    }
    $('client_balance').innerHTML=balance;
    $('td').innerHTML=str;
}

async function tableOrders(orders,products){
    let th=['#','login','product','price'];
    let str="";
    let bool=false;
    if(orders.length===0){
        renderOrders(th);
    }else{
        renderOrders(th);
        for(let i=0;i<products.length;i++){
            for(let j=0;j<orders.length;j++){
                if(products[i].id===orders[j].product_id){
                    str+=`<tr>
                        <td>${i}</td>
                        <td>${$('user').innerText}</td>
                    `;
                    str+=`<td>${products[i].description}</td>`;
                    str+=`<td>${products[i].price}</td></tr>`;
                }else{
                    continue;
                }
            }
            
        }
        $('td_orders').innerHTML=str;
    }

}
$('products_stocks').addEventListener('click',async e=>{
    if(!client){
        alert('Войдите в ваш аккаунт!');
    }else{
        if(e.target.classList.contains('buy')){
            alert('Вы уже используетет акцию.')
        }else{
            let product_id=e.target.dataset.productid;
            let user_id=$('user').dataset.usid ? $('user').dataset.usid: client;
            let balance=+$('client_balance').innerHTML;
            let price=+e.target.parentElement.children[0].children[1].innerText;

            if(product_id && user_id){
                let coins=-price;
                if(balance>=price){
                    let okCoins=await post('./bd/add.php',{user_id:user_id,price:coins,action:0});
                    let ok=await post('./bd/add.php',{product_id:product_id,user_id:user_id});
                    if(await ok.status==='ok'){
                        if(await okCoins.status==='ok'){
                            window.location.href="./index.php";
                        }else{
                            alert(okCoins.err);
                        }
                    }else{
                        alert(ok.err);
                    }
                }else{
                    alert('Не хватает средств в вашем балансе.');
                }
            }else{
                alert('Войдите в ваш аккаунт!');
            }
            l($('user').dataset.usid);
        }
    }
});

$('bonus').addEventListener('click',async ()=>{
    let coins=Math.floor(Math.random() * 30);
    let user_id=$('user').dataset.usid ? $('user').dataset.usid: client;
    let ok=await post('./bd/add.php',{user_id:user_id,price:coins,action:0});
    if(await ok.status==='ok'){
        window.location.href="./index.php";
    }else{
        alert(ok.err);
    }
});

window.onload=async ()=>{
    if(client){
        let outUsers=$('clientLogOut') || $('mainLogOut');
        let orders=await get('./bd/read.php?orders');
        let coins=await get('./bd/read.php?coins');
        let products;
        if(await orders){
            if(orders.orders_users.length===0){
                await productget();
                products=await productget(true);
                if(await products){
                    tableOrders(orders.orders_users,products);
                }
                
            }else{
                products=await productget(true);
                if(await products){
                    productInAccount(orders.orders_users,products);
                    tableOrders(orders.orders_users,products);
                }
            }
            
        }
        

        if(await coins){
            $('client_balance').innerHTML='';
            tableHistory(coins.coins);
        }

        outUsers.addEventListener('click',e=>{
            localStorage.clear();
            window.location.href="./php/logOut.php";
        })
    }else{
        await productget();
    }

    $('settings_dialog_content').style.display="none";

}