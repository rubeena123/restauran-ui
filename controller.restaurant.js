angular.module("OpenSourceTacos")
  .controller("restaurant", restaurantCtrl)

restaurantCtrl.$inject = ["restaurantInfo"]

function restaurantCtrl(restaurantInfo) {
  var restaurant = this;

  restaurant.tacoStand = restaurantInfo.tacoStand;
  console.log(restaurantInfo);
  restaurant.order = [];

  restaurant.name = "Open Source World of Tacos";

  restaurant.buy = function (item) {
    confirm("Do you want to add this " + item.name + " to your basket?");
    if (item) {
       restaurant.order.push(item);
       console.log(restaurant.order);
       restaurant.total = 0;
       for (var i = 0; i < restaurant.order.length; i++) {
         restaurant.total += restaurant.order[i].price;
       }
    }
  }

  restaurant.citrusFree = function () {
    restaurant.cf = true;
    restaurant.v = false;
    restaurant.gf = false;
  }

  restaurant.glutenFree = function () {
    restaurant.cf = false;
    restaurant.v = false;
    restaurant.gf = true;
  }

  restaurant.vegan = function () {
    restaurant.cf = false;
    restaurant.v = true;
    restaurant.gf = false;
  }

  restaurant.purchase = function () {
    var buy = confirm("Do you want to purchase this food?")
    if (buy) {
      alert("Thanks!")
      restaurant.order = [];
    }
  }
}
