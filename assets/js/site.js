(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }
  // Da Dom offers you a favor you cant refuse
  document.addEventListener('DOMContentLoaded', function(){
    // Make this top of everything!
    var items=['Mozzarella Sticks', 'Spinach Dip', 'Shrimp Cocktail', 'Crab Ragoon', 'Lemon Chicken', 'Spicy Beef', 'Roasted Duck', 'Eggplant Parmesan', 'Italian Beef', 'Fettuccini Alfredo', 'Baked Mostaccioli', 'Spaghetti and Meatballs', 'Greek Salad', 'Ceaser Salad', 'House Salad', 'Baked Potato', 'Mashed Potato', 'Cannoli Bundle', 'Cheese Cake'];
    var quantity=[];
    forloop();
    // Declare variables
    // toggle function for focus css
    /* function focus(){
       console.log('yeah they click me!');
      if (document.querySelector('.focus')!==null){// this is to throw out error when no focus
        document.querySelector('.focus').classList.toggle('focus');}
      this.classList.toggle('focus');
    } */


    function forloop(){
      var i;
      var foodnum;
      for(i=0; i<19; i++){
        foodnum='#'+'food'+(i+1);
        document.querySelector(foodnum).addEventListener('change', function(e){
          var theid = e.target.id.charAt(4);
          setquantity([theid], e.target.value);
          console.log(quantity);
        });
      }
    }

    function setquantity(i, v){
      quantity[i]=v;
    }
    /*
    function eq(value, condition) {
      return value === condition;
    }
    function gt(value, condition) {
      return value > condition;
    }
    function gte(value, condition) {
      return value >= condition;
    }
    function lt(value,condition) {
      return value < condition;
    }
    function lte(value,condition) {
      return value <= condition;
    } */
  });
  function storageAvailable(type) {
  try {
    var storage = window[type],
    x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}
})();
