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
var spoon = [
    new allGadgets("white Soup Spoon", "200 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772270630_ccccccccccccccccccc_(21).jpg"),
    new allGadgets("Vlack curry Serving Spoon", "200 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772270059_ccccccccccccccccccc_(12).jpg"),
    new allGadgets("black spoon", "199 PKR", "https://www.idealancy.pk/images/product_gallery/md_1772270776_ccccccccccccccccccc_(19).jpg"),
];
var plate = [
    new allGadgets("white Soup Spoon", "900 PKR", "https://www.idealancy.pk/images/product_gallery/md_1771407813_ccccccccccccccccccc_(6).jpg"),
new allGadgets("melamine white plate", "900 PKR", "https://www.idealancy.pk/images/product_gallery/md_1771407624_ccccccccccccccccccc_(7).jpg"),
new allGadgets("melamine black medium plate", "700 PKR", "https://www.idealancy.pk/images/product_gallery/md_1771407440_ccccccccccccccccccc_(8).jpg"),
];

allGadgets.prototype.renderCard = function () {
    return `

     <div class="col">
    <div class="card h-100">
      <img src="${this.src}" class="card-img-top gadgets-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name.toUpperCase()}</h5>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Price:${this.price}</small>
 <button onclick='addToCart(${JSON.stringify(this)})'
        class="bg-black text-white px-2 py-2 rounded border-0">
        Add to Cart
        </button>
      </div>
    </div>
  </div>
          `
};
var ourItems = document.getElementById("ouritems");
for (var item of warmDishes) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of dinnerset) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of glasssets) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of bowls) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of tray) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of spoon) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of plate) {
    ourItems.innerHTML += item.renderCard();
}


var cart = [];

function addToCart(product) {

    cart.push(product);

    showCart();
}

function showCart() {

    var cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    for (var item of cart) {

        cartItems.innerHTML += `
        <div class="d-flex align-items-center gap-2 border p-2 mb-2">

        <img src="${item.src}" width="50">

        <div>
        <div>${item.name}</div>
        <div>${item.price}</div>
        </div>

        </div>
        `;
    }
}



function addToCart(product) {

    cart.push(product);

    // hide carousel if exists
    var carousel = document.getElementById("carouselExampleSlidesOnly");
    if (carousel) {
        carousel.style.display = "none";
    }

    // hide product grid
    var productsSection = document.getElementById("ouritems");
    if (productsSection) {
        productsSection.style.display = "none";
    }

    // show success card screen
    var mainContent = document.querySelector(".container") || document.body;

    mainContent.innerHTML = `
    
        <h1 class="text-center productname mt-4">
        Product Added Successfully!
        </h1>
        <div class="card mt-4 p-4 shadow-lg mx-auto"
        style="max-width: 500px;
        border-radius: 15px;
        background: #ffbcbc;">

            <img src="${product.src}"
            class="card-img-top mx-auto"
            style="max-width: 350px;
            border-radius: 10px;">

            <div class="card-body text-center">

                <h3 class="card-title fw-bold mt-2">
                ${product.name.toUpperCase()}
                </h3>

                <div class="mt-3">
                    <h4 class="text-success fw-bold m-0 p-3"
                    style="background: #e8f5e9;
                    border-radius: 10px;">
                    Price: ${product.price}
                    </h4>
                </div>
                <button onclick="location.reload()" class="btn btn-warning btn-lg mt-4 w-100 fw-bold"> Continue Shopping </button>

            </div>

        </div>
    `;
}

