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

    // load previous local storage data
    if (storageAvailable('localStorage')){
      if (document.querySelector('#menupage') !==null){
        addPrevious();
        addEvents();
      }
      if (document.querySelector('#checkoutpage') !==null){
        document.querySelector('#submit').addEventListener('click', function(){
          sto.clear();
        });
        document.querySelector('#review').classList.toggle('nv');
        console.log("your in checkout now");
        addReview();
      }
    }

    // Get item discriptions
    function getItems(i){
      return items[i];
    }
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
        // delete previous form data but not all of local storage
        document.querySelector("#mclear").addEventListener('click', function(){
          var i;
          for(i=0; i<19; i++){
            sto.setItem(i, null);
            console.log(sto.getItem(i));
          }
        });
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

    // code for Adding review Section
    function addReview(){
      var i, li, pa, inum, ides, but1, but2, but3, input, itemnum;
      for(i=0; i<19; i++){
        itemnum =sto.getItem(i);
        if(itemnum>0){
          // declare the items elements
          li= document.createElement('li');
          pa= document.createElement('p');
          inum= document.createElement('i');
          ides= document.createElement('i');
          but1= document.createElement('a');
          but2= document.createElement('a');
          but3= document.createElement('a');
          input= document.createElement('input');
          // Define item and quantity
          li.classList.add('review-item');
          li.id= i;
          inum.id= 'inum'+i;
          input.id='input'+i;
          input.classList.add("food-number", "nv");
          inum.innerText=sto.getItem(i);
          ides.innerText=" x "+getItems(i);
          pa.append(inum);
          pa.append(input);
          pa.append(ides);

          // Define buttons
          but1.id= 'but'+(i+1)+'-1';
          but1.innerText = "Modify";
          but1.href='#';
          but1.classList.add('but');
          but2.id= 'but'+(i+1)+'-2';
          but2.href='#';
          but2.innerText = "Delete";
          but2.classList.add('but');
          but3.id= 'but'+(i+1)+'-3';
          but3.href='#';
          but3.classList.add('nv');
          but3.classList.add('but');
          but3.innerText = "Confirm";
          but3.classList.add('nv');

          // Add elements to list
          li.append(pa);
          li.append(but1);
          li.append(but2);
          li.append(but3);
          document.querySelector('#review').append(li);


          // add event listeners
          document.querySelector('#'+but1.id).addEventListener('click', function(e){
            // modify number====console.log(e.target.parentNode.firstChild.firstChild.innerText);
            console.log(e.target.parentNode.firstChild);
            e.target.parentNode.firstChild.firstChild.classList.toggle('nv');
            e.target.parentNode.firstChild.childNodes[1].classList.toggle('nv');
            e.target.parentNode.childNodes[1].classList.toggle('nv');
            e.target.parentNode.childNodes[2].classList.toggle('nv');
            e.target.parentNode.childNodes[3].classList.toggle('nv');
          });
          document.querySelector('#'+but2.id).addEventListener('click', function(e){
            // delete entire parent
            e.target.parentNode.remove();
            setquantity(e.target.parentNode.id, null);
            console.log(e.target.parentNode.id, null);

          });
          document.querySelector('#'+but3.id).addEventListener('click', function(e){
            // delete entire parent
            var value =document.querySelector('#input'+e.target.parentNode.id).value;
            console.log(e.target.parentNode.id, value);
            setquantity(e.target.parentNode.id, value);
            e.target.parentNode.firstChild.firstChild.classList.toggle('nv');
            e.target.parentNode.firstChild.childNodes[1].classList.toggle('nv');
            e.target.parentNode.firstChild.firstChild.innerText=value;
            e.target.parentNode.childNodes[1].classList.toggle('nv');
            e.target.parentNode.childNodes[2].classList.toggle('nv');
            e.target.parentNode.childNodes[3].classList.toggle('nv');
          });

        }
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
