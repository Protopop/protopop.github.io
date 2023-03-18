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
		var targetImage = "assets/img/" + dir + "/" + removeSpaces(arr[i].name.toLowerCase()) + ".png";
		var theName = arr[i].name;
		var cl = e.clone(false).attr('id', theName).insertBefore(e);
		// cl.name = arr[i].name;
		// alert(cl);
		// $(".thumbImage img").attr("src","assets/img/beasts/"+beasts[i].name.toLowerCase()+".png");
		cl.find('.thumbImage img').attr("src", targetImage);
		cl.find('.thumbCaption').text(theName);
		cl.find('.thumbImage img').click(function() {
			loadOmnipediaItem(targetImage,$(this).parent().parent().attr("id"),arr);
			//
			//
		});
		//alert( cl.attr('id'));
		cl.show();
		// cl=null;
		// $("#cardSet2 .img2").attr("src","assets/img/portrait/"+playerSpecies.toLowerCase()+"/seer"+playerGender.toLowerCase()+".png");
	}
	
	//alert(theName);
};