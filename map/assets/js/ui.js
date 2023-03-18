// Interface

//
//var elemt = document.querySelector('#dragCard1');
//var draggie2 = new Draggabilly(elemt, {
//	containment: '#cardSet4'
//});
//draggie2.on('dragMove', function(draggieInstance, event, pointer) {
//	//itemY = draggieInstance.position.y;
//	//itemX = draggieInstance.position.x;
//	
//	//selectedInventoryIndex = 2;
//});
//draggie2.on('dragStart', function(draggieInstance, event, pointer) {
//			//popSellBar();
//	//$('#draggable2 img').addClass('bigInventory');
//	//$('.nullObject').copyCSS('#draggable2');  // copy all styles
//	playSound(bubble,1);
//	//currentItem = playerInventory[2];
//	//itemInfo();
//});
//draggie2.on('dragEnd', function(draggieInstance, event, pointer) {
//	//$('#draggable2 img').removeClass('bigInventory');
//	//$('#draggable2').copyCSS('.nullObject');
//	//checkDrop(-160,0);
//});

//$('.leaflet-top.leaflet-right').addClass('draggable');


// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing demo
  window.dragMoveListener = dragMoveListener;
  
  
  
 // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//  // tasks to do if it is a Mobile Device
// $('.b01').click(function() {
// popCard(1);
//});
//$('.b02').click(function() {
// popCard(2);
//});
//$('.b03').click(function() {
// popCard(3);
//});
//
//
//
// 
//} else {
//	
//	
//	
//	$('.b01').mouseover(function() {
// cardUp(this);
//});
//
//$('.b01').mouseout(function() {
// cardDown(this);
//});
//
//$('.b02').mouseover(function() {
// cardUp(this);
//});
//
//$('.b02').mouseout(function() {
// cardDown(this);
//});
//
//$('.b03').mouseover(function() {
// cardUp(this);
//});
//
//$('.b03').mouseout(function() {
// cardDown(this);
//});
//
//
//
//
//	
//}

clickCardToView();


	

function clickCardToView(){
	
for (var j = 0; j < 9; j++) {

        var nm = j+1;
 eval("$('.b0' + ("+nm+")).off()");
       eval("$('.b0' + ("+nm+")).click(function() {popCard("+nm+");})");
		//eval("$('.b0' + ("+nm+")).mousedown(function() {popCard("+nm+");})");
		
		//alert('.b0' + (j + 1));
    }
	
}
//mouseOverCardToView();

function mouseOverCardToView(){
	
for (var j = 0; j < 9; j++) {

        var nm = j+1;
 eval("$('.b0' + ("+nm+")).off()");
        eval("$('.b0' + ("+nm+")).mouseover(function() {cardUp(this);})");
		eval("$('.b0' + ("+nm+")).mouseout(function() {cardDown(this);})");
		
		//alert('.b0' + (j + 1));
    }
	
}



function dragCards(){
	
for (var j = 0; j < 9; j++) {

        var nm = j+1;
 eval("$('.b0' + ("+nm+")).off()");
 
 //eval("$('.b0' + ("+nm+")).click(function() {popCard("+nm+");})");
 
  eval("$('.b0' + ("+nm+")).css('-webkit-transition-property','none')");
   eval("$('.b0' + ("+nm+")).css('transition-property','none')");
   
   
  eval("$('.b0' + ("+nm+")).addClass('draggable')");
   eval("$('.b0' + ("+nm+")).click(function() {snapCards("+nm+")});");
 
       // eval("$('.b0' + ("+nm+")).mouseover(function() {cardUp(this);})");
		//eval("$('.b0' + ("+nm+")).mouseout(function() {cardDown(this);})");
		
		//alert('.b0' + (j + 1));
    }
	
}
	
	
	function snapCards(nm){
		
		 setTimeout(function() {
		enableAllCards();},400);
   
   // eval("$('.b0' + ("+nm+")).css('-webkit-transform','none !important')");
  // eval("$('.b0' + ("+nm+")).css('transform','none !important')");
   
  // arrangeCards();
 //  spreadCards();//},400
   
    eval("$('.b0' + ("+nm+")).css('-webkit-transition-property','all 400ms cubic-bezier(0.175,0.885,0.32,1.275)')");
   eval("$('.b0' + ("+nm+")).css('transition-property','all 400ms cubic-bezier(0.175,0.885,0.32,1.275)')");
   
   slamAndRefill(1,deckArray[0]);
   
   // slamCard(2, deckArray[1].name, deckArray[1]);
   
   //);
		
	}

