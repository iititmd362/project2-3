(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }
  // Da Dom offers you a favor you cant refuse
  document.addEventListener('DOMContentLoaded', function(){
    // Make this top of everything!
    
    // Declare variables
    var form=document.querySelector('#form');
  });
  // toggle function for focus css
  function focus(){
    // console.log('yeah they click me!');
    if (document.querySelector('.focus')!==null){// this is to throw out error when no focus
      document.querySelector('.focus').classList.toggle('focus');}
    this.classList.toggle('focus');
    }
})();
