function makeAjaxcall(country)
{
    let xhr=new XMLHttpRequest();

    xhr.open('GET',`https://restcountries.com/v3.1/name/${country}`,true);

    xhr.send();
    return xhr;
}

function displaycountry(country)
{
     console.log(country); 

     let htmlcode=`<div class="col-md-3">
                  <div class="card">
                     <div class="card-header">
                        <img src="${country.flags.png}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                          <h1>${country.name.common}</h1> 
                          <h2>${(country.population/1000000).toFixed(2)}M</h2>
                          <h3>${country.capital[0]}</h3>
                           

                         </div>
                     </div>
                </div>`;
   let dataEle= document.getElementById('data-ele');
   dataEle.insertAdjacentHTML('beforeend',htmlcode);
}

function getData()
{
        let req1=makeAjaxcall('bharat');
        req1.addEventListener('load',function()
    {
        let serverData=JSON.parse(req1.responseText);
        let data=serverData[0];
        displaycountry(data);

            let req2=makeAjaxcall('usa');
            req2.addEventListener('load',function()
            {
                let serverData=JSON.parse(req2.responseText);
                let data=serverData[0];
                displaycountry(data);

                let req3=makeAjaxcall('uk');
                req3.addEventListener('load',function()
                {
                    let serverData=JSON.parse(req3.responseText);
                    let data=serverData[0];
                    displaycountry(data);
                })
            })
    });

}
getData();