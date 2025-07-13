
// Make server call using AJAX

function fetchData() 
{
    // 1. Create an object
    let xhr = new XMLHttpRequest();

    // 2. Create a request

    xhr.open("GET", "./products.json", true);

    // 3. Send the request
    xhr.send();

    // 4. When request is sent to server, it takes some time to load the data
    xhr.addEventListener("progress", function () {
        // window.alert("Data is loading");
        console.log("Data is loading...");
    });

    // 5. Once the data is loaded
    xhr.addEventListener("load", function () {
        let getData = JSON.parse(xhr.responseText);
         products = getData.arrayOfproducts; // Assign to global variable
         display(products);
        console.log(getData);
    });
}

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


