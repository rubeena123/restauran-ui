angular.module("OpenSourceTacos")
  .factory("restaurantInfo", InfoFact)


function InfoFact () {
  
  // object constructors
  class FoodItem {

    constructor(foodInfo){
      this.name = foodInfo.name;
      this.calories = foodInfo.calories;
      this.vegan = foodInfo.vegan;
      this.glutenFree = foodInfo.glutenFree;
      this.citrusFree = foodInfo.citrusFree;
    }

    stringify(){
      var description = this.name + " has " + this.calories + " calories and is";
      description += this.vegan ? " V" : " not V";
      description += this.glutenFree ? ", is GF" : ", is not GF";
      description += this.citrusFree ? ", is CF" : ", is not CF";

      return description
    }
  }

  class Drink {
    constructor(drinkInfo) {
      this.name = drinkInfo.name;
      this.description = drinkInfo.description;
      this.price = drinkInfo.price;
      this.ingredients = drinkInfo.ingredients;
    }

    veganCheck(){
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].vegan === false) {
          console.log(this.name + " is NOT vegan!");
          return false
        }
      }
      console.log(this.name + " is vegan!");
      return true
    }

    gfCheck(){
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].glutenFree === false) {
          console.log(this.name + " is NOT GF!");
          return false
        }
      }
      console.log(this.name + " is GF!");
      return true
    }

    cfCheck(){
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].citrusFree === false) {
          console.log(this.name + " is NOT CF!");
          return false
        }
      }
      console.log(this.name + " is CF!");
      return true
    }

    stringify(){
      var description = this.name + " is " + this.description + ".\n$" + this.price + '.';
      return description
    }
  }

  class Plate {
   constructor(plateInfo) {
     this.name = plateInfo.name;
     this.description = plateInfo.description;
     this.price =plateInfo.price;
     this.ingredients = plateInfo.ingredients;
    }
    veganCheck(){
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].vegan === false) {
          console.log(this.name + " is NOT vegan!");
          return false
        }
      }
      console.log(this.name + " is vegan!");
      return true
    }

    gfCheck(){
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].glutenFree === false) {
          console.log(this.name + " is NOT GF!");
          return false
        }
      }
      console.log(this.name + " is GF!");
      return true
    }

    cfCheck(){
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].citrusFree === false) {
          console.log(this.name + " is NOT CF!");
          return false
        }
      }
      console.log(this.name + " is CF!");
      return true
    }

    stringify(){
      var description = this.name + " is " + this.description + ".\n$" + this.price + '.';
      return description
    }
  }

  class Order {
   constructor(orderInfo) {
     this.plate = orderInfo.plate;
    }

    stringify(){
      var receipt = "";

      for (var i = 0; i < this.plate.length; i++) {
        receipt += this.plate[i].name + "\n";
      }
      return receipt
    }

   //  stringify () {
   //   return `The ${this.name} costs ${this.price} and contains ${this.ingredients.map(function(ing){
   //     return ing.stringify()
   //   })}!`
   // }
  }

  class Menu {
   constructor(menuInfo) {
     this.plate = menuInfo.plate;
    }

    stringify(){
      var cartMenu = "";

      for (var i = 0; i < this.plate.length; i++) {
        cartMenu += this.plate[i].name + "\n  " + this.plate[i].description + "\n  " + "$" + this.plate[i].price + "\n" ;
      }
      return cartMenu
    }
  }

  class Restaurant {
   constructor(resturantInfo) {
     this.name = resturantInfo.name;
     this.description = resturantInfo.description;
     this.menu = resturantInfo.menu;
    }
  }

  class Customer {
   constructor(customerInfo) {
     this.dietaryRestrictions = customerInfo.dietaryRestrictions;
    }
  }

  // FoodItem instances
  var eggplant = new FoodItem({
    name: "eggplant",
    calories: 20,
    vegan: true,
    glutenFree: true,
    citrusFree: true,
  });

  var groundBeef = new FoodItem({
    name: "ground beef",
    calories: 93,
    vegan: false,
    glutenFree: true,
    citrusFree: true,
  });

  var cornTortilla = new FoodItem({
    name: "corn tortilla",
    calories: 62,
    vegan: true,
    glutenFree: true,
    citrusFree: true,
  });

  var wheatTortilla = new FoodItem({
    name: "wheat tortilla",
    calories: 237,
    vegan: true,
    glutenFree: false,
    citrusFree: true,
  });

  var tomatoe = new FoodItem({
    name: "tomatoe",
    calories: 5,
    vegan: true,
    glutenFree: true,
    citrusFree: true,
  });

  var lettuce = new FoodItem({
    name: "Lettuce",
    calories: 5,
    vegan: true,
    glutenFree: true,
    citrusFree: true,
  })

  var lime = new FoodItem({
    name: "lime",
    calories: 20,
    vegan: true,
    glutenFree: true,
    citrusFree: false,
  });

  var mexChocIcecream = new FoodItem({
    name: "Mexican Chocolate Ice Cream",
    calories: 332,
    vegan: false,
    glutenFree: false,
    citrusFree: true,
  })


  var beer = new FoodItem({
    name: "beer",
    calories: 100,
    vegan: true,
    glutenFree: false,
    citrusFree: true,
  })

  var gfBeer = new FoodItem({
    name: "beer",
    calories: 100,
    vegan: true,
    glutenFree: true,
    citrusFree: true,
  })

  // drinks
  var corona = new Drink({
    name: "Corona",
    description: "pale lager",
    price: 3,
    ingredients: [beer, lime],
  })

  var greens = new Drink({
    name: "Greens",
    description: "GF Amber Ale",
    price: 4,
    ingredients: [gfBeer],
  })

  // plates
  var cornTaco = new Plate({
    name: "corn tortilla taco",
    description: "gluten free taco made with organic ground beef, tomatoe, and lettuce",
    price: 6,
    ingredients: [cornTortilla, tomatoe, lettuce, groundBeef]
  })

  var wheatTaco = new Plate({
    name: "wheat tortilla taco",
    description: "made with organic an organic wheat tortilla, ground beef, tomatoe, and lettuce",
    price: 6,
    ingredients: [wheatTortilla, tomatoe, lettuce, groundBeef]
  })

  var veganGfTaco = new Plate({
    name: "vegan corn tortilla taco",
    description: "made with organic eggplant instead of meat, tomatoe, and lettuce in a corn tortilla",
    price: 8,
    ingredients: [cornTortilla, tomatoe, lettuce, eggplant]
  })

  var veganTaco = new Plate({
    name: "vegan wheat tortilla taco",
    description: "made with organic eggplant instead of meat, tomatoe, and lettuce in a wheat tortilla",
    price: 8,
    ingredients: [wheatTortilla, tomatoe, lettuce, eggplant]
  })

  // order
  var partyOfTwo = new Order({
    plate: [veganGfTaco, cornTaco, wheatTaco, veganTaco]
  })

  // menu
  var tacoMenu = new Menu({
    plate: [cornTaco, wheatTaco, veganGfTaco, veganTaco, corona, greens]

  })

  // restaurant
  var tacoStand = new Restaurant({
    name: "Our Taco Stand",
    description: "Organic and authentic tacos!",
    menu: tacoMenu,
  })



  return {

    tacoStand : tacoStand

  }
}
