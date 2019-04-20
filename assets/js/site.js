(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }
  // Da Dom offers you a favor you cant refuse
  document.addEventListener('DOMContentLoaded', function(){
    // Make this top of everything!
    var sto = window.localStorage;
    var items=['Mozzarella Sticks', 'Spinach Dip', 'Shrimp Cocktail', 'Crab Ragoon', 'Lemon Chicken', 'Spicy Beef', 'Roasted Duck', 'Eggplant Parmesan', 'Italian Beef', 'Fettuccini Alfredo', 'Baked Mostaccioli', 'Spaghetti and Meatballs', 'Greek Salad', 'Ceaser Salad', 'House Salad', 'Baked Potato', 'Mashed Potato', 'Cannoli Bundle', 'Cheese Cake'];
    console.log(items);
    console.log(sto);


    // load previous local storage data
    if (storageAvailable('localStorage')){
      if (document.querySelector('#menupage') !==null){
        addPrevious();
        addEvents();
      }
    }

    // delete previous form data but not all of local storage
    document.querySelector("#mclear").addEventListener('click', function(){
      var i;
      for(i=0; i<19; i++){
        sto.setItem(i, null);
        console.log(sto.getItem(i));
      }
    });

    // toggle function for focus css
    function focus(){
      if (document.querySelector('.focus')!==null){// this is to throw out error when no focus
        document.querySelector('.focus').classList.toggle('focus');}
      this.classList.toggle('focus');
    }

    // code for adding previous data
    function addPrevious(){
      var i;
      var foodnum;
      for(i=0; i<19; i++){
        foodnum='#'+'food'+(i+1);
        document.querySelector(foodnum).value=sto.getItem(i);
      }
    }

    // code for adding event listeners
    function addEvents(){
      var i;
      var foodnum;
      for(i=0; i<19; i++){
        foodnum='#'+'food'+(i+1);
        document.querySelector(foodnum).addEventListener('focus', focus);
        document.querySelector(foodnum).addEventListener('change', function(e){
          var theid;
          if (e.target.id.length===5){
            theid = e.target.id.charAt(4);
          }
          if(e.target.id.length===6){
            theid = (1+e.target.id.charAt(5));
          }
          setquantity([theid]-1, e.target.value);
        });
      }
    }

    // code for setting local storage
    function setquantity(i, v){
      sto.setItem(i, v);
    }

  });

  // code for seeing if local storage is accessable
  function storageAvailable(type) {
    var storage = window[type], x = '__storage_test__';
    try {
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }
})();
