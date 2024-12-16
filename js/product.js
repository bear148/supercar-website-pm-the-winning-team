var quantity = 1;
var price = 24.99;
var totalElem = document.getElementById("totalh2");
var prompt = "Total: $";

function parent(e) {
    return e.parentElement;
}

function add_item(e) {
    quantity++;
    parent(e).children[1].innerHTML = quantity;

    price = price + 24.99;
    document.getElementById("totalh2").innerHTML = prompt + price.toFixed(2);
    document.getElementsByClassName("product-header").children[1] = price.toFixed(2);

    console.log(price);
}

function sub_item(e) {
    if(quantity > 0) {
        quantity--;
        parent(e).children[1].innerHTML = quantity;
        price = price - 24.99;
    }

    document.getElementById("totalh2").innerHTML = prompt + price.toFixed(2);

    console.log(price);
}