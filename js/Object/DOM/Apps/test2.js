let product={id:1,title:"Microsoft Xbox X/S Wireless Controller Robot White",
    imgURL:"https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price:1000,brand:"Microsoft",category:"Gaming",qty:1};

let htmlcode=`<div class="col-md-3">
                  <div class="card">
                     <div class="card-header">
                        <img src="${product.imgURL}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                           <h4 class="text-danger">${product.brand}</h4>
                           <h2>&#8377;${product.price}.00</h2>
                           <button class="btn btn-danger" id="dec-btn"><i class="fa-solid fa-minus-circle"></i></button>
                           <span class="h2" id="qty-ele">${product.qty}</span>
                           <button class="btn btn-success" id="inc-btn"><i class="fa-solid fa-plus-circle"></i></button>
                           
                           <h4 class="text-danger" id="tprice">Tprice:-&#8377;${product.qty*product.price}.00</h4>
                         </div>
                         </div>
                         </div>`;
                         document.getElementById('data-ele').innerHTML=htmlcode;

let incbtn=document.getElementById('inc-btn');
let decbtn=document.getElementById('dec-btn');
let qtyele=document.getElementById('qty-ele');
let tpriceele=document.getElementById('tprice');
incbtn.addEventListener('click',function()
{
   qtyele.textContent=++product.qty;
   tpriceele.innerHTML =`Tprice:-&#8377;${product.qty*product.price}.00`;

});
decbtn.addEventListener('click',function()
{
   if(product.qty>1)
      {
         qtyele.textContent=--product.qty;
         tpriceele.innerHTML =`Tprice:-&#8377;${product.qty*product.price}.00`;
   }
   else
   {
      product.qty=1;
      tpriceele.innerHTML =`Tprice:-&#8377;${product.qty*product.price}.00`;
   }
});