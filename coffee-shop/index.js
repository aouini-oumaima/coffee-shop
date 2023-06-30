var openShopping = $('.shopping');
var closeShopping = $('.closeShopping');
var list = $('.list');
var listCard = $('.listCard');
var body = $('body');
var total = $('.total');
var quantity = $('.quantity');


$(document).ready(function() {
    $('#myButton').click(function() {
      window.location.href = 'style.html';
    });
  });
  

openShopping.on('click', function() {
    body.addClass('active');
});

closeShopping.on('click', function() {
    body.removeClass('active');
});

var products = [
    {
        id: 1,
        name: 'Black Ivory Coffee',
        image: 'ouma2.jpeg',
        price: 1500
    },
    {
        id: 2,
        name: 'Hacienda La Esmeralda',
        image: 'ouma5.jpeg',
        price: 1400 
    },
    {
        id: 3,
        name: 'St. Helena Coffee',
        image: 'ouma3.jpg',
        price: 170 
    },
    {
        id: 4,
        name: 'Kopi Luwak',
        image: 'ouma4.jpeg',
        price:  600 
    },
    {
        id: 5,
        name: 'Black Blood of the Earth',
        image: 'oumaa.jpeg',
        price: 515
    },
    {
        id: 6,
        name: 'St. Moritz, El Injerto',
        image: 'ou.jpeg',
        price: 350
    }
];
var listCards = [];

$.each(products, function(key, value) {
    var newDiv = $('<div>').addClass('item');
    newDiv.html(`
        <img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
    `);
    list.append(newDiv);
});

function addToCard(key) {
    if (listCards[key] == null) {
        var copiedProduct = $.extend(true, {}, products[key]);
        copiedProduct.quantity = 1;
        listCards[key] = copiedProduct;
    }
    reloadCard();
}

function reloadCard() {
    listCard.empty();
    var count = 0;
    var totalPrice = 0;
    $.each(listCards, function(key, value) {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            var newDiv = $('<li>');
            newDiv.html(`
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `);
            listCard.append(newDiv);
        }
    });
    total.text(totalPrice.toLocaleString());
    quantity.text(count);
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
}

initApp();
