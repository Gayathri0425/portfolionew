let product1={id:1,title:"Microsoft Xbox X/S Wireless Controller Robot White",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price:1000,brand:"Microsoft",category:"Gaming",qty:1};

let product2={id:2,title:"Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price:2000,brand:"sony",category:"audio",qty:1};

let product3={id:3,title:"Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
    price:3000,brand:"logitech G",category:"Gaming",qty:1};

let product4={id:4,title:"Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
    price:4000,brand:"Los Angeles",category:"audio",qty:1};


let products=[product1,product2,product3,product4]

function display(items)
{
    if(items.length==0)
    {
        alert("please Add the products");
        return;
    } 

    let eachItem="";
    let grantotal=0;
     for(let item of items)
    {
        let totalprice=item.qty*item.price;
        grantotal+=totalprice;
        eachItem +=`<div class="col-md-3">
                  <div class="card animate__animated animate__flipInX">
                     <div class="card-header">
                        <img src="${item.imgURL}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                           <h4 class="text-danger">${item.brand}</h4>
                           <h2>&#8377;${item.price}.00</h2>
                           <button class="btn btn-danger" onclick ="decqty(${item.id})"><i class="bi bi-dash-circle-fill"></i></button>
                           <span class="h2" id="qty-ele-">${item.qty}</span>
                           <button class="btn btn-success" onclick ="incqty(${item.id})"><i class="bi bi-plus-circle-fill"></i></button>
                           <h4 class="text-danger" id="tprice-">Tprice:-&#8377;${item.qty*item.price}.00</h4>
                           <h3 id="grand-total"></h3>
                           

                         </div>
                         </div>
                         </div>`;
    }
    document.getElementById('data-ele').innerHTML=eachItem ;
    document.getElementById('grand-total').innerHTML=`<button class="btn-btn-sucess mt-4">grand total:&#8377;${grantotal}.00</button>`;
}
display(products);


function incqty(id)
{
    let newArr=[]; 
    for (let item of products  ) 
    {
        if(item.id==id)
        {
            let newobj={...item,qty:++item.qty};
            newArr.push(newobj);
        }
        else
        {
            newArr.push(item);
        }
    }
    display(newArr);
}


function decqty(id)
{
    let newArr=products.map(function(item)
    {
        if (item.id==id)
            return{...item,qty:(item.qty>1)?--item.qty:1};
        else
            return item;
    })
    display(newArr);
}


function audioproducts()
{
    let newarr=[];
    for(let item of products)
    {
        if(item.category=="audio") newarr.push(item);
    }
    display(newarr);
}
let audiobtn=document.getElementById('audio-btn');
audiobtn.addEventListener('click',audioproducts);



function gamingproducts()
{
    let newarr=products.filter(item=>item.category=="Gaming");
    display(newarr);
}
let gamingbtn=document.getElementById('gaming-btn');
    gamingbtn.addEventListener('click',gamingproducts);




let homebtn=document.getElementById('home-btn');
    homebtn.addEventListener('click',()=>
    {
       display(products);
    }); 
   

let searchBox=document.getElementById('search-box');
searchBox.addEventListener('keyup',function()
{
    let enteredName=searchBox.value;
    let updatedArr=searchHere(enteredName,products);
    display(updatedArr);
})



function searchHere(value,items)
{
    value=value.toLowerCase().trim();

    let filterdproducts=[];
    for(let item of items)
    {
        let oBrandname=item.brand.toLowerCase().trim()

        if(oBrandname.includes(value))
        {
            filterdproducts.push(item);
        }
    }
    return filterdproducts;
}


