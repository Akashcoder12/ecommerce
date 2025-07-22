const products=[
   {
     id:1,
     name:"Mouse",
     price:499,
     image:"images/mouse.jpeg",
    }
    ,
    {
     id:2,
     name:"Speaker",
     price:1299,
     image:"images/speaker.webp",
    }
    ,
    {
     id:1,
     name:"cable",
     price:199,
     image:"images/cable.webp",
   }
   ,
    {
     id:4,
     name:"SmartWatch",
     price:2499,
     image:"images/smart.webp",
}
];

const container=document.getElementById("product-container");

products.forEach((p)=>{
     const card=document.createElement("div");
     card.className="product-card";

     card.innerHTML=`
       <img src="${p.image}" alt="${p.name}">
       <h3>${p.name}</h3>
       <p>${p.price}</p>
       <button onclick="addToCart(${p.id})">Add to Cart</button>
     `;

     container.appendChild(card);
});

function addToCart(id){
     const product=products.find((p)=>p.id===id);
      
     let cart=JSON.parse(localStorage.getItem("cart"))||[];
     cart.push(product);
     localStorage.setItem("cart",JSON.stringify(cart));

     alert(`${product.name} added to cart!`);
}