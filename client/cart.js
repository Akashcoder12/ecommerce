const cartContainer=document.getElementById("cart-container");
const totalPriceEl=document.getElementById("total-price");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function renderCart(){

    cartContainer.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{
         total+=item.price;

         const cartItem=document.createElement("div");
         cartItem.className="cart-item";

         cartItem.innerHTML=`
           <img src="${item.image}" alt="${item.name}">
           <div class="cart-item-details">
              <h4>${item.name}</h4>
              <p>${item.price}</p>
           </div>
           <button onclick="removeFromCart(${index})">Remove</button>
         `
         cartContainer.appendChild(cartItem);

    });

    totalPriceEl.textContent=total;
}

function removeFromCart(index){
     cart.splice(index,1);
     localStorage.setItem("cart",JSON.stringify(cart));
     renderCart();
}

renderCart();