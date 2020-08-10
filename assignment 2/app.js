(function () {
  'use strict';
  
  angular.module('BuyLists', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController (ShoppingListCheckOffService) {
    let list1 = this;

    list1.items = ShoppingListCheckOffService.getToBuy();
    list1.isEmpty = false;
    list1.bought = function (itemIndex) {
      list1.isEmpty = ShoppingListCheckOffService.buy(itemIndex);
    }
    
  }


  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    let list2 = this;
    list2.items = ShoppingListCheckOffService.getBought();
    list2.isEmpty = function() {
      return list2.items.length == 0;
    }
      
  }

  function ShoppingListCheckOffService () {
    let service = this;
    let itemsToBuy = [{name: "ss", quantity: 1 },
                      {name: "dd", quantity: 2 },
                      {name: "ff", quantity: 2 },
                      {name: "gg", quantity: 1 },
                      {name: "aa", quantity: 1 }];
    let itemsBought = [];

    service.getToBuy = function () {
      return itemsToBuy;

    }

    service.getBought = function () {
      return itemsBought;
    }

    service.buy = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
      return itemsToBuy.length == 0;
    }

  }

})();
