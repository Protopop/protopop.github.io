// JavaScript Document
function removeSpaces(str) {
	return str.replace(/ /g, '');
}

function loadOmnipediaItem(targetImagex, nm,arr) {
		//alert(nm);
		//playSound(sfxClicker, 1);
		//$('.pageStage').load(p + '.htm', function() {
			//alert(arr[1].name);
			var result = $.grep(arr, function(e){ return e.name == nm; });
			//alert(result[0].name);
		$('body').load('object.htm', function() {
			// openFullPageCards();
			//openStage();
			$('.mainItem').attr("src", removeSpaces("assets/img/"+currentArrayType+"/"+nm.toLowerCase()) + ".png");
			
			var lev = "";
			if( result[0].level){
			//var e = $('.stats');
			//alert(e);
			//e.clone().insertBefore(e);
			//e.text("Level "+ result[0].level);
			lev = " &#8226; Level "+result[0].level;
			$('.itemLevel').html("Level "+result[0].level);
			}
			lev="";
			if( result[0].location){
				var locArray = result[0].location;
				//alert(locArray.length);
				var e = $('.habitatIcon');
				e.hide();
				for (var i = 0; i < locArray.length; i++) {
					var fl = e.clone().insertBefore(e);
				fl.attr("src", removeSpaces("assets/img/icons/"+locArray[i].toLowerCase()) + ".png");
				fl.show();
				}
				
			} else {
				$('.habitats').hide();
			}
			
			$('.itemName').html(nm+lev);
			//alert(currentArrayType);
			var desc = result[0].description;
			$('.descriptor').text(desc);
			$('.bannerTitle').text(currentArrayType);
			
			$("a.bannerTitle").attr("href", currentArrayType.toLowerCase()+".htm");
			$("a.goBack").attr("href", currentArrayType.toLowerCase()+".htm");
			
			
		});
	}
	//$(document).ready(function() {

function populateOmnipedia(arr, dir) {
	$('.thumb').hide();
	var e = $('.thumb');
	$('.bannerTitle').text(dir);
	for (var i = 0; i < arr.length; i++) {
		var filename;
		if(arr[i].name != null){
		filename = removeSpaces(arr[i].name.toLowerCase());
		}
		if(arr[i].filename != null){
			filename = removeSpaces(arr[i].filename.toLowerCase());
		}
		var type = ".png";
		if(arr[i].jpeg != null){
			if(arr[i].jpeg == true){
			type=".jpg";
			}
			
		}
		
		var targetImage = "assets/img/" + dir + "/" + filename + type;
		var theName = arr[i].name;
		var flavor = arr[i].flavor;
		var skill = arr[i].skill;
		var health = arr[i].health;
		var damage = arr[i].damage;
		
		var cl = e.clone(false).attr('id', theName).insertBefore(e);
		
		if(damage != null){
		var level = Math.floor((damage*.82) + (health * .4));
		cl.find('.card-level').text(level);
		cl.find('.card-level').show();
		}
		
		// cl.name = arr[i].name;
		// alert(cl);
		// $(".thumbImage img").attr("src","assets/img/beasts/"+beasts[i].name.toLowerCase()+".png");
		//cl.find('.thumbImage img').attr("src", targetImage);
		cl.find('.thumbImage').css('background-image', 'url(' + targetImage + ')');
		cl.find('.card-title').text(theName);
		cl.find('.card-flavor').text(flavor);
		cl.find('.card-skill').text(skill);
		if(health>0){
			cl.find('.card-health').show();
			cl.find('.card-health').text(health);
		}
		if(damage>0){
		cl.find('.card-damage').text(damage);
		cl.find('.card-damage').show();
		
		}
		
		cl.find('.thumbImage img').click(function() {
			loadOmnipediaItem(targetImage,$(this).parent().parent().attr("id"),arr);
			//
			//
		});
		//alert( cl.attr('id'));
		cl.show();
		
		if(arr[i].pagelink != null){
		$(cl).find('.card-box').attr("href", arr[i].pagelink+".htm");
		}
		
		
		// cl=null;
		// $("#cardSet2 .img2").attr("src","assets/img/portrait/"+playerSpecies.toLowerCase()+"/seer"+playerGender.toLowerCase()+".png");
	}
	
	//alert(theName);
};



function ToggleStats(el){
	
	$( ".container" ).toggleClass( "plain" );
	$(el).toggleClass( "active" );
	
}
function ToggleSize(el){
	
	$( ".container" ).toggleClass( "big" );
	$(el).toggleClass( "active" );
	
}

function ToggleWide(){
	
	$( ".container" ).toggleClass( "full" );
	
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
