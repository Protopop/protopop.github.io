

// CHUNK SIZE
// EVIL ACTS 3 in chunk = 30
// CHAOS = 60

function calculateAlignment() {
	var templignment = playerAlignment;
		if (playerEvil < -90) {
			//good
			if (playerChaos < -180) {
				// Law
				playerAlignment = "Noble";
			} else if (playerChaos > 180) {
				// choas
				playerAlignment = "Rebel";
			} else {
				//neutral
				playerAlignment = "Humane";
			}
		} else if (playerEvil > 90) {
			//evil
			if (playerChaos < -180) {
				// Law
				playerAlignment = "Imperial";
			} else if (playerChaos > 180) {
				// choas
				playerAlignment = "Bloodthirsty";
			} else {
				//neutral
				playerAlignment = "Coldblooded";
			}
		} else {
			//neutral
			if (playerChaos < -180) {
				// Law
				playerAlignment = "Honorable";
			} else if (playerChaos > 180) {
				// chaos
				playerAlignment = "Anarchic";
			} else {
				//neutral
				playerAlignment = "Neutral";
			}
		}
		if(templignment != playerAlignment){
			popMessage("Your actions have changed your values. People will react differently towards you depending on your beliefs.","You are "+playerAlignment);
		$('.alg').text(playerAlignment);
		templignment = playerAlignment;
		}
		
}
// ALIGNMENT

function noble(n,mess) {
	changeAlignment('noble', n,mess);
};

function humane(n,mess) {
	changeAlignment('humane', n,mess);
};

function rebel(n,mess) {
	changeAlignment('rebel', n,mess);
};

function honorable(n,mess) {
	changeAlignment('honorable', n,mess);
};

function neutral(n,mess) {
	changeAlignment('neutral', n,mess);
};

function anarchic(n,mess) {
	changeAlignment('anarchic', n,mess);
};

function imperial(n,mess) {
	changeAlignment('imperial', n,mess);
};

function coldblooded(n,mess) {
	changeAlignment('coldblooded', n,mess);
};

function bloodthirsty(n,mess) {
	changeAlignment('bloodthirsty', n,mess);
};

function changeAlignment(alg, intensity,mess) {
	//alert("calc");
	// DEFAULT INTENSITY IS 100
	//playSound('alignment', 1);
	if (alg == "noble") {
		playerChaos -= intensity;
		playerEvil -= intensity;
	};
	if (alg == "humane") {
		playerChaos *= .625;
		playerEvil -= intensity;
	};
	if (alg == "rebel") {
		playerChaos += intensity;
		playerEvil -= intensity;
	};
	if (alg == "honorable") {
		playerChaos -= intensity;
		playerEvil *= .625;
	};
	if (alg == "neutral") {
		playerChaos += 0;
		playerEvil += 0;
	};
	if (alg == "anarchic") {
		playerChaos += intensity;
		playerEvil *= .625;
	};
	if (alg == "imperial") {
		playerChaos -= intensity;
		playerEvil += intensity;
	};
	if (alg == "coldblooded") {
		playerChaos *= .625;
		playerEvil += intensity;
	};
	if (alg == "bloodthirsty") {
		playerChaos += intensity;
		playerEvil += intensity;
	};
	
	
	
	
	$('.alignmentBanner .alignmentBannerPre').text(mess);
	
		$('.alignmentBanner .alignmentBannerTitle').text(alg);
		$('.alignmentBanner').fadeIn(600);
		shake($('.alignmentBanner'))
	setTimeout(function() {
		$('.alignmentBanner').fadeOut(600);

	}, 10000)
	
	

	//fadeMessage(alg, goal);
	calculateAlignment();
	//saveAll(false);
}









function shrinkProvinceLabel(){
	$(".provinceLabel").css("font-size","14px"); 
	
}

function growProvinceLabel(){
	$(".provinceLabel").css("font-size","20px"); 
	
}



var landmarkLayer = L.layerGroup(continentMarkersArray).addTo(map);
var provinceLayer = L.layerGroup(provinceLabelArray).addTo(map);
var regionLayer = L.layerGroup(regionLabelArray).addTo(map);
var nationLayer = L.layerGroup(nationLabelArray).addTo(map);

//function HideMapIcons(){
//	if (map.hasLayer(landmarkLayer) == true) {
//            map.removeLayer(landmarkLayer);
//		}
//		
//          
//		   shrinkProvinceLabel(); 
//	
//}
//


map.on('zoomend', function() {

    if (map.getZoom() <5 ) {
		
       // if (map.hasLayer(races) == false) {
          //  map.addLayer(races);
      //  }
	  $('.tipBubble').hide();
	  $('.dock').append($('.tipBubble')); 
	  
        if (map.hasLayer(landmarkLayer) == true) {
            map.removeLayer(landmarkLayer);
		}
		
          
		   shrinkProvinceLabel();
		 hideCards();
		$('.iconStats').hide();
		//$('.emptyCard').hide();
		
	}
	
	if (map.getZoom() >4) {
		
       // if (map.hasLayer(races) == false) {
          //  map.addLayer(races);
      //  }
        if (map.hasLayer(landmarkLayer) == false) {
            map.addLayer(landmarkLayer);
		}
		
            
			growProvinceLabel();
			showCards();
			$('.iconStats').show();
			//$('.emotyCard').show();
		
		 
	}
	
	if (map.getZoom() <4 ) {
		
      
        if (map.hasLayer(regionLayer) == true) {
            map.removeLayer(regionLayer);
		}
		
		if (map.hasLayer(provinceLayer) == true) {
           map.removeLayer(provinceLayer);
		  
		}
	}
	
	if (map.getZoom() >3) {
		
      
        if (map.hasLayer(regionLayer) == false) {
            map.addLayer(regionLayer);
		}
		
		if (map.hasLayer(provinceLayer) == false) {
            map.addLayer(provinceLayer);
			 shrinkProvinceLabel();
			
		}
	}
	
	if (map.getZoom() <3 ) {
		
      
        if (map.hasLayer(nationLayer) == true) {
            map.removeLayer(nationLayer);
		}
	}
	
	
	if (map.getZoom() >2) {
		
      
        if (map.hasLayer(nationLayer) == false) {
            map.addLayer(nationLayer);
		}
	}
	
	
	});