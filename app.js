//Hover Effect

var h3 = document.querySelectorAll("h3");

for (var i=0; i < h3.length; i++){
	h3[i].addEventListener("mouseover", function() {
    this.style.color="#939393";
});
}

for (var i=0; i < h3.length; i++){
	h3[i].addEventListener("mouseout", function() {
    this.style.color="inherit";
});
}

var a = document.querySelectorAll("a");

for (var i=0; i < a.length; i++){
	a[i].addEventListener("mouseover", function() {
    this.style.color="#939393";
});
}

for (var i=0; i < a.length; i++){
	a[i].addEventListener("mouseout", function() {
    this.style.color="inherit";
});
}

//Change Quantity
var quantity = 1;
var quantityDisplay= document.querySelector("#quantityDisplay");
var minusbutton= document.querySelector("#minus");
var plusbutton= document.querySelector("#plus");

minusbutton.addEventListener("click", function(){
	if (quantity != 0){
		quantity--;
	}
	quantityDisplay.textContent = quantity;
});

plusbutton.addEventListener("click", function(){
	if (quantity < 10){
		quantity++;
	}
	quantityDisplay.textContent = quantity;
});

//Object shortcake
var shortcake = {
	_name: 'Shortcake Cupcake', 
	_quantity: 0,
	_price: 3,

	get Name() {
	  return this._name;
	},

	set Quantity(num) {
    if (typeof num === 'number') {
      this._quantity = num;
  	}
  },

  get Quantity() {
    return this._quantity;
  },

  set Price(num) {
    if (typeof num === 'number') {
      this._price = num;
    } 
  },

  get Price() {
    return this._price;
  }
};

//Add to Cart Popup
var Added = document.querySelector("#addCart");

Added.addEventListener("click", function(){
	alert("Added " + quantity + " Shortcake Cupcake(s) to Shopping Cart!");
	shortcake.Quantity = quantity + shortcake.Quantity;
})

//Shopping Cart Amount and Total Popup
var shoppingCart = document.querySelector("#cart");

shoppingCart.addEventListener("click", function(){
	if (shortcake.Quantity === 0){
		alert("Your cart is empty.");
	}
	else{
		var total = shortcake.Price * shortcake.Quantity;
		alert("You have " + shortcake.Quantity + " " + shortcake.Name + "(s) in your Shopping Cart. Your total is $" + total);
	}
});