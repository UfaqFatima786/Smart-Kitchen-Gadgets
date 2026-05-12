function products (a,b,c){
    this.name=a;
    this.price=b;
    this.src=c;
}

var treandingProducts = [
    new products("Dinner Set", "1500 EGP", "images/dinner set.jpg"),
    new products("Glass Set", "500 EGP", "images/glass set.jpg"),
    new products("Glass Set", "500 EGP", "images/glass set.jpg"),
]
var bestSellers = [
    new products("Dinner Set", "1500 EGP", "images/dinner set.jpg"),
    new products("Glass Set", "500 EGP", "images/glass set.jpg"),
    new products("Glass Set", "500 EGP", "images/glass set.jpg"),
]
var newArrivals = [
    new products("Dinner Set", "1500 EGP", "images/dinner set.jpg"),
    new products("Glass Set", "500 EGP", "images/glass set.jpg"),
    new products("Glass Set", "500 EGP", "images/glass set.jpg"),
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