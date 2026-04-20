function allGadgets(a, b, c) {
    this.name = a;
    this.price = b;
    this.src = c;
}
var warmDishes = [
    new allGadgets("Porcelain Buffet Dish WarmFood", "25000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/03/Porcelain-Buffet-Dish-Food-Warmer-Set.jpg?resize=247%2C247&ssl=1"),
    new allGadgets("Food Warmer with Glass Dish", "30000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Food-Warmer-with-Glass-Dish-4-%C3%97-1.5-Liter-K710-1.jpg?resize=247%2C247&ssl=1"),
    new allGadgets("Elegant Buffet Chafting Dish", "35000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/11/Elegant-Buffet-Chafing-Dish-Set-2.jpg?resize=247%2C247&ssl=1"),
    new allGadgets("New White and Golden Food Warmer Dishes", "40000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/11/Elegant-Buffet-Chafing-Dishes-Buffet-Warmer-White-1.jpg?resize=247%2C247&ssl=1"),
];

var dinnerset = [
    new allGadgets("Winsor England Heritage Black Porcelain Dinner Set", "125000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England-Heritage-Black-Porcelain-Dinner-Set-1.jpg?resize=400%2C400&ssl=1"),
    new allGadgets("Winsor England Heritage Black Porcelain Dinner Set", "125000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England%E2%84%A2-Fine-Porcelain-Dinner-Set-Venice-Collection-White.jpg?resize=247%2C247&ssl=1"),
    new allGadgets("Winsor England Venice White Porcelain Dinner Set", "125000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England%E2%84%A2-Fine-Porcelain-Dinner-Set-Venice-Collection-White.jpg?resize=247%2C247&ssl=1"),
    new allGadgets("24PCS Ceramic Breakfast Dinner Set", "27,950 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/02/24Pcs-Ceramic-Breakfast-Dinner-Set.jpg?resize=400%2C400&ssl=1"),

];
var glasssets = [
    new allGadgets("6PCS Crystal Lining Glass Set", "2,950 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Lining-Glass-Set-of-6-Golden-Line-1.jpg?resize=400%2C400&ssl=1t"),
    new allGadgets("Crystal lining glass set of 6PCS", "2,500 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Lining-Glass-Set-of-6-Golden-Line.jpg?resize=400%2C400&ssl=1"),
    new allGadgets("Crystal Wine Glass Set of 6PCS", "2,150 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Wine-Glass-Set-of-6-Golden-Line-1.jpg?resize=400%2C400&ssl=1"),
    new allGadgets("Ceramic Printed Cup-Saucer Set", "15,000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Ceramic-Printed-Cup-Saucer-Set-of-6-Gift-Box.jpg?resize=400%2C400&ssl=1"),
];
var bowls = [
    new allGadgets(" Small Black Lotus Bowls", "5000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772527734_ccccccccccccccccccc_(1).jpg"),
    new allGadgets("Melamine 3 Black Medium Platter", "7000 PKR", "https://www.idealancy.pk/images/product_gallery/1772271434_ccccccccccccccccccc_(29).jpg"),
    new allGadgets("Ceramic 3 Black Medium Platter", "20000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772271130_ccccccccccccccccccc_(25).jpg"),
];
var tray = [
    new allGadgets("Melamine Black Serving Tray", "5000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772038789_ccccccccccccccccccc_(2).jpg"),
    new allGadgets("Melamine White Medium Bowl", "7000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1770111721_y1.jpg"),
    new allGadgets("Melamine Black Serving Platter", "6000 PKR", "https://www.idealancy.pk/images/product_gallery/md_1770722191_ccccccccccccccccccc_(33).jpg"),
];



 allGadgets.prototype.renderCard= function(){
    return`

     <div class="col">
    <div class="card h-100">
      <img src="${this.src}" class="card-img-top gadgets-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name.toUpperCase()}</h5>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Price:${this.price}</small>
        <button onclick="addToCart('$')" class="bg-black text-white px-2 py-2 rounded border-0"> Add to Cart </button>

      </div>
    </div>
  </div>
          `
   };


var ourItems = document.getElementById("ouritems");
for(var item of warmDishes){
    ourItems.innerHTML += item.renderCard();
}
for(var item of dinnerset){
    ourItems.innerHTML += item.renderCard();
}
for(var item of glasssets){
    ourItems.innerHTML += item.renderCard();
}
for(var item of bowls){
    ourItems.innerHTML += item.renderCard();
}
for(var item of tray){
    ourItems.innerHTML += item.renderCard();
}

function addToCart(main, sub, type, product) {
    var selectedProduct = allProducts[main][sub][type][product];
    
    var carousel = document.getElementById("carouselExampleSlidesOnly");
    if(carousel) carousel.style.display = "none";

    var mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <h1 class="text-center text-success mt-4">Product Added Successfully!</h1>
        <div class="card mt-4 p-4 shadow-lg mx-auto" style="max-width: 500px; border-radius: 15px; background: #c6bcffff;">
            <img src="${selectedProduct.src}" class="card-img-top mx-auto" style="max-width: 350px; border-radius: 10px;" alt="...">
            <div class="card-body text-center">
                <h3 class="card-title text-primary fw-bold mt-2">${selectedProduct.name.toUpperCase()}</h3>
                <p class="card-text fs-5 text-secondary mt-3">${selectedProduct.description || ''}</p>
                <div class="mt-3">
                    <h4 class="text-success fw-bold m-0 p-3" style="background: #e8f5e9; border-radius: 10px;">Price: ${selectedProduct.price}</h4>
                </div>
                <button onclick="location.reload()" class="btn btn-warning btn-lg mt-4 w-100 fw-bold">Continue Shopping</button>
            </div>
        </div>
    `;
}

// function displayCat(cat){
// ourMenu.innerHTML ="" ;
// for(item of cat){
//     ourMenu.innerHTML += item.renderCard();
// }
// }
// function displayAll(){
//   var ourMenu = document.getElementById("ourItems");
//   ourItems.innerHTML ="" ;
// for(var item of burgers){
//     ourMenu.innerHTML += item.renderCard();
// }
// for(var item of pizzas){
//     ourMenu.innerHTML += item.renderCard();
// }
// for(var item of cakes){
//     ourMenu.innerHTML += item.renderCard();
// }
// for(var item of coffees){
//     ourMenu.innerHTML += item.renderCard();
// }
// for(var item of salads){
//     ourMenu.innerHTML += item.renderCard();
// }  
// }
// var allgadgets = document.getElementById("allhomegadgets"); 

//   allgadgets.innerHTML += `<div class="col-md-6 col-lg-3">
//                 <div class="card h-100 border-0 shadow-sm selling-card">
//                     <div class="position-relative overflow-hidden rounded-top-4">
//                         <img src="${this.img}" class="card-img-top item-img" alt="Burger">
                        
//                     </div>
//                      <div class="card-body p-4">
//                         <h5 class="card-title fw-bold">${this.name}</h5>
//                         <p class="card-text text-muted small">${this.description}</p>
//                         <div class="d-flex justify-content-between align-items-center mt-3">
//                              <span class="h5 fw-bold mb-0 text-red">$${this.price}</span>
//                           <button class="btn btn-outline-dark btn-sm rounded-pill px-3">Add to Cart</button>
//                          </div>
//                     </div>
//                 </div>
//             </div>`
// }
// for (var maincategory in allProducts) {
//     // console.log(allProducts[products]);
//     for (var subcategory in allProducts[maincategory]) {
//         // console.log(allProducts[maincategory][categories]);
//         for (var type in allProducts[maincategory][subcategory]) {
//             // console.log(allProducts[maincategory][categories][brands]);
//             for (var product in allProducts[maincategory][subcategory][type]) {
//                 // console.log(allProducts[maincategory][categories][brands][items].price);
//                 allCards.innerHTML += `
//                 <div class="col">               
//                      <div class="card h-100">
//                         <img src="${allProducts[maincategory][subcategory][type][product].src}" class="card-bag-img-top" alt="..." />
//                       <div class="card-body custom-body">
//                        <h5 class="card-title -custom-title">${allProducts[maincategory][subcategory][type][product].name.toUpperCase()}</h5>
//                          <p class="card-text">
//                          ${allProducts[maincategory][subcategory][type][product].description}
//                           </p>
//                           </div>
//                           <div class="card-footer bag-footer d-flex flex-column align-items-center">
//                               <small class="text-body-secondary price">
                            //  Price: ${allProducts[maincategory][subcategory][type][product].price}/-
//                                   </small>
//                                <button onclick="addToCart('${maincategory}', '${subcategory}', '${type}', '${product}')" class="bg-primary text-white px-2 py-2 rounded border-0"> Add to Cart </button>

//                        </div>
                        
//                     </div>
//                 </div>`;
//             }
//         }
//     }
// }

// allGadgets.prototype.renderCard = function(){
//     return`<div class="col-md-6 col-lg-3">
//                 <div class="card h-100 border-0 shadow-sm selling-card">
//                     <div class="position-relative overflow-hidden rounded-top-4">
//                         <img src="${this.img}" class="card-img-top item-img" alt="Burger">
                        
//                     </div>
//                     <div class="card-body p-4">
//                         <h5 class="card-title fw-bold">${this.name}</h5>
//                         <p class="card-text text-muted small">${this.description}</p>
//                         <div class="d-flex justify-content-between align-items-center mt-3">
//                             <span class="h5 fw-bold mb-0 text-red">$${this.price}</span>
//                             <button class="btn btn-outline-dark btn-sm rounded-pill px-3">Add to Cart</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
// }


