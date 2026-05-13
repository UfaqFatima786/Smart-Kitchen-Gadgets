function products (a,b,c){
    this.name=a;
    this.price=b;
    this.src=c;
}

var treandingProducts = [
    new products("Dinner Set", "15000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/03/Porcelain-Buffet-Dish-Food-Warmer-Set.jpg?resize=247%2C247&ssl=1"),
    new products("dinner Set", "20000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/01/Winsor-England-Heritage-Black-Porcelain-Dinner-Set-1.jpg?resize=400%2C400&ssl=1"),
    new products("glass set", "1500 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Crystal-Lining-Glass-Set-of-6-Golden-Line-1.jpg?resize=400%2C400&ssl=1"),
]
var bestSellers = [
    new products("WINSOR ENGLAND HERITAGE BLACK PORCELAIN DINNER SET", "125000 PKR", "https://homegadgets.pk/wp-content/uploads/2025/10/Fryers-and-Pans-in-Pakistan-400x400.jpg"),
    new products("freypan set Set", "20000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Baroly-Earth-Grey-Frypan-24cm.jpg?resize=247%2C247&ssl=1"),
    new products("black dish  set", "15000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2026/04/Baroly-Kappe-Deep-Fryer-24cm-with-Strainer.jpg?resize=247%2C247&ssl=1"),
]
var newArrivals = [
    new products("grey utensil Set", "10000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/10/Cooking-Utensils-in-Pakistan.jpg?resize=247%2C247&ssl=1"),
    new products("khife and spoon Set", "2000 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/10/2-Piece-Spoon-Organizer-with-Metal-Rack-Kitchen-Spoon-Holder-3.jpg?resize=247%2C247&ssl=1"),
    new products("vlack utensil Set", "1500 PKR", "https://i0.wp.com/homegadgets.pk/wp-content/uploads/2025/10/Nonstick-Kitchen-Cooking-Utensils-7Pcs-Set.jpg?resize=247%2C247&ssl=1"),
]

products.prototype.renderCard = function () {
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

var ourItems = document.getElementById("ourproducts");
for (var item of treandingProducts) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of bestSellers) {
    ourItems.innerHTML += item.renderCard();
}
for (var item of newArrivals) {
    ourItems.innerHTML += item.renderCard();
}
