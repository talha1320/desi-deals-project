console.log(document) 
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// getElement("product-box").addEventListener delegation

// traverse way of adding event listener to a button

const cartbtns = document.getElementsByClassName("cart-btn")
console.log(cartbtns)

for (const cartbtn of cartbtns) {
    cartbtn.addEventListener("click", function() {
        const productImg = cartbtn.parentNode.parentNode.parentNode.children[0].children[0].src;
        const productTitle = cartbtn.parentNode.parentNode.children[1].innerText;
        const productPrice = cartbtn.parentNode.parentNode.children[2].children[0].innerText;
        
        const totalPrice = getElement("total-price").innerText;
        const currentTotal = Number(productPrice) + Number(totalPrice);      
        getElement("total-price").innerText = currentTotal.toFixed(2);
        
        const cartContainer = getElement("cart-container");
        const newCart = document.createElement("div");
       newCart.innerHTML = `
                              <div>
                        <div class="rounded-xl bg-gray-300 p-3 mb-3">
                                    <div class="flex items-center gap-3 justify-between">
                                        <img class="w-16 h-16 object-contain" src="${productImg}" alt="">

                                        <div>
                                            <h2 class="font-bold text-sm">${productTitle}</h2>
                                            <h2 class="text-gray-700">${productPrice} TK</h2>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                                `;
    cartContainer.append(newCart);

     const quantity = getElement("total-quantity").innerText;
    const currentQuantity = Number(quantity) + 1;
    getElement("total-quantity").innerText = currentQuantity;
    })
   
}
document.getElementById("btn-clear").addEventListener("click", function() {
    const cartContainer = getElement("cart-container");
    cartContainer.innerHTML = "";
    getElement("total-price").innerText = "0.00";
    getElement("total-quantity").innerText = "0";
});

//......... traditional way of adding event listener to a button

// const clearBtn = getElement("btn-clear");
// clearBtn.addEventListener("click", function() {
//     const cartContainer = getElement("cart-container");
//     cartContainer.innerHTML = "";
//     getElement("total-price").innerText = "0.00";
//     getElement("total-quantity").innerText = "0";
// });

// document.getElementById("cart-btn-1").addEventListener("click", function() 
// {
//     const title = getElement("cart-title-1").innerText;
//     const price = getElement("cart-price-1").innerText;
//     console.log(title, price); 
    
//     const totalPrice = getElement("total-price").innerText;
//     currentTotal = Number(price) + Number(totalPrice);      
//     getElement("total-price").innerText = currentTotal.toFixed(2); 
//     const cartContainer = getElement("cart-container");
//     const newCart = document.createElement("div");
    // newCart.innerHTML = `<div class="rounded-xl bg-gray-300 p-4 items-center gap-3">
    //                         <div class="flex justify-between">
    //                             <img class="w-10" src="./assets/kitchen-1.png" alt="">
    //                             <div>
    //                                 <h2 class="font-bold">${title}</h2>
    //                                 <h2 class="font-bold">${price}</h2>
    //                             </div>
    //                         </div>
    //                     </div>`;
    // cartContainer.append(newCart);
// }); 