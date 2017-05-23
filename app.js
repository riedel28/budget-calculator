// BUDGET CONTROLLER

var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();


// UI CONTROLLER

var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };


  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMStrings;
    }

  };

})();



// GLOBAL CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {

    // 1. Get field input data
    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI


  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {

    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
