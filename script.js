let getlistofproductelements=document.querySelector(".list-of-products");


function renderproducts(getproducts){
    getlistofproductelements.innerHTML=getproducts.map(singleproductItem=>`<p>${singleproductItem.title}</p>`).join(" ")
}


async function fetchlistofproducts(){

    try{
         const apiresponse = await fetch("https://dummyjson.com/products",{
         method:"GET"
         })

         const result= await apiresponse.json();
         console.log(result);

         if(result?.products?.length>0) renderproducts(result?.products)
    }

    catch(e){
         console.log(`${e} is the error`);
    }
}

fetchlistofproducts();
