angular.module("OpenSourceTacos")
  .controller("order", orderCtrl)

restaurantCtrl.$inject = ["restaurantInfo"]

function orderCtrl(restaurantInfo) {
  var order = this;
  order.menu = restaurantInfo.menu;

}
