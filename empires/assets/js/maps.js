
function fadeShield() {
    $('.playerShield').css("background-image", "url(assets/img/shieldshatter.png)").delay(500).fadeOut(300);
    playerShielded = false;
    playSound(shatter2, 1);

}

for (var i = 0; i < citizens.length; i++) {
    if (citizens[i].name == "Actor") {
        currentMonster = citizens[i];
        var beastLevel = currentMonster.level;
        currentMonster.health = beastLevel * ((Math.floor((Math.random() * 8))) + 1 + (beastLevel * difficulty));
        currentMonster.maxHealth = currentMonster.health;
    }
}




// -#detection
// ==================================================  
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var retina = window.devicePixelRatio > 1;
if (isiPad) {
    var viewport = document.querySelector("meta[name=viewport]");
    if (retina) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0, minimal-ui');
    } else {
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0, minimal-ui');
        alert("Non-Retina Dsiplay");
    }
}
var iPhoneDevice = false;
iPhoneDevice = isiPhone();

function isiPhone() {
    return (
        //Detect iPhone
        (navigator.platform.indexOf("iPhone") != -1) ||
        //Detect iPod
        (navigator.platform.indexOf("iPod") != -1));
}

function doOnOrientationChange() {
    switch (window.orientation) {
        case -90:
        case 90:

            document.body.scrollTop = document.documentElement.scrollTop = 0;

            break;
        default:
            if (iPhoneDevice || isAndroid) {

            }
            break;
    }
}
window.addEventListener('orientationchange', doOnOrientationChange);
// Initial execution if needed
doOnOrientationChange();
var invincibility = false;

function isLocalStorageNameSupported() {
    var testKey = 'test',
        storage = window.sessionStorage;
    try {
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return false;
    } catch (error) {
        return true;
    }
}
var privateBrowsing = isLocalStorageNameSupported();
if (privateBrowsing == true) {
    alert("You have Private Browsing enabled. You can still play the game, but it won't be able to save anything unless you turn Private Browsing off");
}


var mZoom = 4;
var extraZoom = false;
extraZoom = isiPhone();
extraZoom ? mZoom = 6 : mZoom = 6;


// CREATE MAP
// ------------------------------------------------------------------

var map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false
}).setView([-75, 50], 5)

// TILE LAYER
var terrainTiles = L.tileLayer('assets/tiles/{z}/{x}/jpg/{y}.jpg', {
    minZoom: 2,
    maxZoom: 5,
    maxNativeZoom: 5
}).addTo(map);


new L.Control.Zoom({
    position: 'topright'
}).addTo(map);

L.control.attribution({
    position: 'bottomleft'
}).addTo(map);




// ICON CONSTRUCTOR
// ------------------------------------------------------------------

var mapIcon = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/popups/city.png',
        shadowUrl: null,
        iconSize: new L.Point(80, 80),
        iconAnchor: new L.Point(0, 0),
        popupAnchor: [-23, -100],
        // point from which the popup should open relative to the iconAnchor
        labelAnchor: new L.Point(0, 60),
        wrapperAnchor: new L.Point(40, 60),
        labelClassName: 'smoother' // add if player
            // className: 'toHide' // add if player
    }
});



var timerIcon1 = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/pie1.png',
        shadowUrl: null,
        iconSize: new L.Point(128, 128),
        iconAnchor: new L.Point(-32, -24),
        popupAnchor: [-22, -90],
        // point from which the popup should open relative to the iconAnchor
        labelAnchor: new L.Point(-35, 35),
        wrapperAnchor: new L.Point(25, 60),
        className: 'toHide'
    }
});

// SIGNS
var signEmptyIcon = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/icons/sign00.png',
        shadowUrl: null,
        iconSize: new L.Point(80, 80),
        iconAnchor: new L.Point(-40, -40),
        popupAnchor: [-23, -100],
        labelAnchor: new L.Point(-35, 35),
        wrapperAnchor: new L.Point(25, 60),
        className: 'toHide'
    }
});
var sign01Icon = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/icons/sign01.png',
        shadowUrl: null,
        iconSize: new L.Point(80, 80),
        iconAnchor: new L.Point(-40, -40),
        popupAnchor: [-23, -70],
        labelAnchor: new L.Point(-35, 35),
        wrapperAnchor: new L.Point(25, 60),
        className: 'toHide'
    }
});
var sign02Icon = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/icons/sign02.png',
        shadowUrl: null,
        iconSize: new L.Point(80, 80),
        iconAnchor: new L.Point(-40, -40),
        popupAnchor: [-23, -70],
        // point from which the popup should open relative to the iconAnchor
        labelAnchor: new L.Point(-35, 35),
        wrapperAnchor: new L.Point(25, 60),
        className: 'toHide'
    }
});
var sign03Icon = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/icons/sign03.png',
        shadowUrl: null,
        iconSize: new L.Point(80, 80),
        iconAnchor: new L.Point(-40, -40),
        popupAnchor: [-23, -70],
        labelAnchor: new L.Point(-35, 35),
        wrapperAnchor: new L.Point(25, 60),
        className: 'toHide'
    }
});
var boardIcon = L.Icon.Label.extend({
    options: {
        iconUrl: 'assets/img/icons/board.png',
        shadowUrl: null,
        iconSize: new L.Point(80, 80),
        iconAnchor: new L.Point(0, 0),
        popupAnchor: [-23, -100],
        labelAnchor: new L.Point(0, 60),
        wrapperAnchor: new L.Point(40, 60),
        className: 'toHide'
    }
});

var timer1 = new L.Marker(new L.LatLng(-77.29, 61.48), {
    icon: new timerIcon1({
        labelText: " ",
        iconUrl: 'assets/img/pie1.png'
    })
}).bindPopup("<img src='assets/img/pie1.png' width='330' height='330' /><div style='color:#ffffff;display:block;padding:20px;font-size:18px;text-align:center;'>You need to wait a while before you can explore this area further</div>", {
    minWidth: 330,
    maxHeight: 120,
    className: 'smallPop'
}).setZIndexOffset(10000).addTo(map);
timer1.setZIndexOffset(10000);

var timer2 = new L.Marker(new L.LatLng(-78.29, 61.48), {
    icon: new timerIcon1({
        labelText: " ",
        iconUrl: 'assets/img/pie2.png'

    })
}).bindPopup("<img src='assets/img/pie2.png' width='330' height='330' /><div style='color:#ffffff;display:block;padding:20px;font-size:18px;text-align:center;'>You need to wait a while before you can explore this area further</div>", {
    minWidth: 330,
    maxHeight: 440,
    className: 'smallPop'
}).addTo(map);
timer2.setZIndexOffset(1000);


var timer3 = new L.Marker(new L.LatLng(-79.29, 61.48), {
    icon: new timerIcon1({
        labelText: " ",
        iconUrl: 'assets/img/pie3.png'

    })
}).bindPopup("<img src='assets/img/pie3.png' width='330' height='330' /><div style='color:#ffffff;display:block;padding:20px;font-size:18px;text-align:center;'>You need to wait a bit before you can explore this area further</div>", {
    minWidth: 330,
    maxHeight: 440,
    className: 'smallPop'
}).addTo(map);
timer3.setZIndexOffset(1000);


var timer4 = new L.Marker(new L.LatLng(-80.29, 61.48), {
    icon: new timerIcon1({
        labelText: " ",
        iconUrl: 'assets/img/pie4.png'

    })
}).bindPopup("<img src='assets/img/pie4.png' width='330' height='330' /><div style='color:#ffffff;display:block;padding:20px;font-size:18px;text-align:center;'>This area is almost ready to be explored</div>", {
    minWidth: 330,
    maxHeight: 440,
    className: 'smallPop'
}).addTo(map);
timer4.setZIndexOffset(1000);




function newPoster(x, y, mname, micon, clanimage, bg, targetPage, cardnum, region, pic, questCardNum, signName) {
    var nmk = new L.Marker(new L.LatLng(x, y), {
        icon: new micon({
            labelText: mname
        }),
        title: signName
    }).addTo(map).on('click', function(e) {
        loadFullPageCards(targetPage);
    });
    nmk.cardNum = 7;
    regionLabelArray.push(nmk);
    return nmk;
}

function newDeck(x, y, mname, micon, clanimage, bg, targetPage, cardnum, region, pic, questCardNum, signName, episodeNumber) {
    var nmk = new L.Marker(new L.LatLng(x, y), {
        icon: new micon({
            labelText: mname
        }),
        title: signName
    }).addTo(map).bindPopup("<div id='cardContent' class=" + bg + "></div><a class='centerCardButton begin'  href='#'  onClick='loadFullPageCards(&quot;" + targetPage + "&quot;);'>Episode " + episodeNumber + "</a><div class='cardLocked " + bg + "Locked'><div class='numberOfCards'></div></div></div><div class='cardUnlocked rotate1'></div><div class='cardUnlocked rotate2'></div><div class='cardUnlocked rotate3'></div><div class='cardUnlocked rotate4'>", {
        minWidth: 330,
        maxHeight: 460,
        className: bg
    }).on('click', function(e) {
        unlockdeck(region, pic);
    });
    nmk.cardNum = 7;
    regionLabelArray.push(nmk);
    return nmk;
}



var antjmarkBoard = newPoster(-65.66, 50.71, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/antjmark', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");
var ninjisuluBoard = newPoster(-78.03, 75.98, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/ninjisulu', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");
var zeaBoard2 = newPoster(-66.83, 38.94, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/zea', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");
var nuejaBoard = newPoster(-79.20, 22.28, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/koldemarsh', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");

var nuejaBoard = newPoster(-69.81, -10.99, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/polez', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");
var nuejaBoard = newPoster(-77.28, -20.26, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/runder', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");
var nuejaBoard = newPoster(-66.79, -28.83, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/nyetgard', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");
var nuejaBoard = newPoster(-58.52, 81.65, " ", boardIcon, "assets/img/landscapes/shrine.png", 'deckPolez', 'pages/history/amyen', 8, "BoneSea", "decks/souloftheseer.jpg", 2, "signPolez");




// ONLOAD
// ------------------------------------------------------------------

map.on('click', onMapClick);
map.on('click', unPopCards);
map.on('click', hidePlayerCard);


// FUNCTIONS
// ------------------------------------------------------------------


// CLICK FOR COORDINATES
var popup = L.popup();

function onMapClick(e) {

    gridArray += "[" + e.latlng.lat.toFixed(2).toString() + "," + e.latlng.lng.toFixed(2).toString() + "],";
	console.log(gridArray);
}


function showMarker(m) {
    m._icon.style.display = "block";
}


function hideMarker(m) {
    m._icon.style.display = "none";
}


// CREATE MAP MARKERS AND LABELS

function updateCardKarmaCost() {
    setTimeout(function() {
        $('.howMuch').text(karmaCost);
    }, 100);
}

function hideCurrentTravel(dist) {

    setTimeout(function() {


        if (dist == 0) {

            $('.trav .inspect').hide();
            $('.bottomBlockCity').hide();
            $('.landscapeCity img').css('margin-top', '40px');
			//alert(currentLocation.type);
            if (currentLocation.type != 'Guild') {
				//  if (currentLocation.type == 'Dungeon') {
                $('.trav .inspect').html('Enter');
                $('.trav .inspect').replaceWith("<a style='display: block;' class='inspect' href='#' onmousedown='showMask()'>Enter</a>");
                $('.trav .inspect').show();

            }
			
			
            if (currentLocation.type == 'City' || currentLocation.type == 'Village') {

                setCurrentLocationCard()
                newCardContent(cityHTML);
            }

        }

    }, 1);
}

function calculateKarmaCost(dist) {
    karmaCost = Math.ceil(+(dist * walkSpeed).toFixed(0) * travelModifier);

}

function calculateTravelCost(dist) {
    travelCost = Math.ceil(+(dist * walkSpeed * travelModifier).toFixed(0));


}

function checkAdventure() {

    if (jQuery.isEmptyObject(currentAdventure)) {
        loadFullPageCards('pages/core/adventures');
    } else {
        loadFullPageCards('pages/core/status');


    }

}

function newMarker(x, y, micon, mname, mtag, minfluence, clanname, clanimage, clandescription, w, r, a, landscape, mp, landmarkName, cardType, level, alignment, music, uniqueId) {
    var displayName = landmarkName.substring(0, landmarkName.length - 1);
    var displayNameCapitalized = capitaliseFirstLetter(displayName);
    var nanjaImage = 'assets/img/landscapes/nanja.jpg';
    if (mname == "Dungeon") {
        level += 1;
    }


    markerHTML = "<div class='cardPadding'><div class='cardKarma'><span class='howMuch'>0</span></div><div class='cardLevels'><span class='locationLevel'>" + level + "</span></div><div class='cardTitle'>" + displayName + "</div><div class='cardSubTitle'>" + currentRegion.name + " ● " + mname + "</div></div></div><div class='wrap'><div class='cityMap'><div class='landscapeCity'><img class='cardImage' src=" + landscape + " width='640' height='auto' /></div><div class='topBlock'></div><div class='bottomBlockCity'><b>" + clandescription + "</b></p></div></div><div class='trav'><a class='inspect'  href='#'  onmousedown='changeLocation(&quot;" + landmarkName + "&quot;)'>Travel here</a><span class='travel'> </span></div></div>";

  //  currentCityType == "Council" ? markerHTML = "<div class='cardPadding'><div class='cardTitle'>" + displayName + "</div></div></div><div class='wrap'><div class='cityMap'><div class='landscapeCity'><img class='cardImage' src=" + landscape + " width='640' height='auto' /></div><div class='topBlock'></div><div class='bottomBlockCity'><b>" + clandescription + "</b></p></div></div><div class='trav'><a class='inspect'  href='#'  onmousedown='conveneCouncil(&quot;" + landmarkName + "&quot;)'>Convene the Council</div></div>" : null;

    var nmk = new L.Marker(new L.LatLng(x, y), {
        icon: new micon({
            riseOnHover: true,
            className: 'landMark ' + displayNameCapitalized,
            labelText: landmarkName.substring(0, landmarkName.length - 1),
            iconUrl: 'assets/img/icons/' + mname.toString().toLowerCase() + '.png',
        })
    }).addTo(map).bindPopup(markerHTML, {
        minWidth: 640,
        maxHeight: 460,
        className: cardType
    }).on('click', function(e) {

        setTimeout(setPathText, 100);
        var x = e.target.getLatLng();
        var y = player.getLatLng();
        var dist = Math.round(x.distanceTo(y) * .0002);
        calculateKarmaCost(dist);
        calculateTravelCost(dist);


        $('.howMuch').text(karmaCost);
        updateCardKarmaCost();
        hideCurrentTravel(dist);

        currentLocationType = mname;
        currentLocationLevel = level;

        playSound(sfxCardFlip, 1);


    });

    nmk.type = mname;
    nmk.popHTML = markerHTML;
    nmk.name = landmarkName;
    nmk.displayName = displayName;
    nmk.adjacent2 = [];
    nmk.locationType = "Village";
    nmk.music = music;
    nmk.currentCountry = currentCountry;
    nmk.level = level;
    nmk.uniqueId = uniqueId;
    continentMarkersArray.push(nmk);
    return nmk;
}

function newLabel(x, y, name, img, desc, classNm, level, alignment, music) {

    var nmk = L.marker([x, y], {
        icon: L.divIcon({
            className: classNm,
            html: name,
            popupAnchor: [60, -30]
        })
    }).addTo(map).bindPopup("<div class='cardPadding'><h2 class='locationTitle'>" + name + "</h2><div class='bigAlignment'> " + alignment + " </div></div>><div class='wrap'><div class='cityMap'><div class='landscape'><img src='assets/img/landscapes/" + img + "' width='auto' height='460' /></div><div class='topBlock'></div><div class='bottomBlock'>" + desc + "</p></div></div></div>", {
        minWidth: 640,
        maxHeight: 460,
        className: 'area'
    });

    nmk.name = name;
    nmk.level = level;


    if (classNm == "provinceLabel") {
        provinceLabelArray.push(nmk);
    }
    if (classNm == "regionLabel") {
        regionLabelArray.push(nmk);
    }
    if (classNm == "countryLabel") {
        nationLabelArray.push(nmk);
    }



    return nmk;
}


function stoper() {
    clearTimeout(travelTimer);
}


function nextStep(nextLocation) {

    playerLocation(nextLocation);
    travel(nextLocation);
}



function travel(l) {
    playerLocation(l);
    var x = l.getLatLng().lat;
    var y = l.getLatLng().lng;
    map.panTo(new L.LatLng(x, y), {
        animate: true,
        duration: mapSpeed
    });
    l.closePopup();

}

function playerLocation(cl) {
    var x = cl.getLatLng().lat;
    var y = cl.getLatLng().lng;
    player.setLatLng(new L.LatLng(x, y));
}

function isPlaying(audelem) {
    return !audelem.paused;
}

function fadeAudio(au) {

    au.volume = 0;




}

function stopSoundtracks() {
    var audioPlayer = document.getElementsByTagName("audio");
    for (var i = 0; i < audioPlayer.length; i++) {
        audioPlayer[i].pause();




    }
}

function playCurrentSoundtrack() {


    /*soundtrack = document.getElementById(currentMusic);

    // LOOP SOUNDTRACK
    soundtrack.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


    setTimeout(function() {
        soundtrack.play();
    }, 500);*/


}

function changeLocation(v) {


    // INITIALIZE
    // ------------------------------------------------------------------

    var startLocation = currentLocation;
    var endLocation = $.grep(locationArray, function(e) {
        return e.name == v;
    })[0];

    currentLocationIndex = locationArray.indexOf(endLocation);
    //saveGame();
   

    var x = player.getLatLng();
    var y = endLocation.getLatLng();

    var dist = Math.round(x.distanceTo(y) * .0002);
    calculateKarmaCost(dist);
    calculateTravelCost(dist);

    if (karmaCost > karma) {
        endLocation.closePopup();
        popMessage("You need <div class='cardKarma' style='display: inline-block;position:relative;top:0;margin-left:20px;'>" + karmaCost + "</div>Karma to travel here. Karma regenerates over time and your Maximum Karma increases as your Hero levels up.", "Not enough Karma");
    } else {

        saveGame();

        karma -= karmaCost;
        playerXp += karmaCost;
		checkLevel();
        distanceTravelled += karmaCost;

        updateStats();

        var iconName = "." + currentLocation.name.substring(0, currentLocation.name.length - 1);

        if (endLocation.music) {
            currentMusic = endLocation.music;
        }
        if (startLocation.type == "City" || startLocation.type == "Village" || startLocation.type == "Prison") {

            startLocation.unbindPopup();
            startLocation.bindPopup(startLocation.popHTML, {
               
                className: 'landmarkCard'
            });

        }


        if (switchMusic != currentMusic) {
            stopSoundtracks();
            if (playMusic == true) {
                playCurrentSoundtrack();
            }




            switchMusic = currentMusic;
        }

        var farthestObject = endLocation;
        var distanceToFarthestObject = Math.round(startLocation.getLatLng().distanceTo(endLocation.getLatLng()) * .0002);
        distanceToTarget = distanceToFarthestObject;
        var lf = startLocation.getLatLng().lng - endLocation.getLatLng().lng;
        var closestLocation = {};
        var distanceToNode = 50000;
        var tempPath = [];
        tempPath.length = 0;
        travelPath.length = 0;
		travelPath = [];
        //travelPath.push(startLocation.name);
		//travelPath.push(startLocation);
		travelPath.push(endLocation);
        var shortestDistance = distanceToFarthestObject;

        stoper();
        endLocation.closePopup();

        var smallestDistanceToTarget = 100000000;


var ld=[];

var actualPath=[];

        // DETERMINE THE TRAVEL PATH
        // ------------------------------------------------------------------
        var validLandmarks = [];
        validLandmarks.length = 0;

        // TEST EVERY LOCATION IN THE MAP
        for (var i = 0; i < locationArray.length; i++) {

            var testLandmark = locationArray[i];

            var x = testLandmark.getLatLng();
            var y = endLocation.getLatLng();
            var distanceFromNextToLast = Math.round(x.distanceTo(y) * .0002);

            if (distanceFromNextToLast < distanceToFarthestObject) {

             


                if (distanceFromNextToLast < shortestDistance) {
                   

                    if (distanceFromNextToLast < Math.round(startLocation.getLatLng().distanceTo(y) * .0002)) {
                        // legacy 
                        if (travelCost > 10) {
                            shortestDistance = distanceFromNextToLast;
                        }

                        nextStop = testLandmark;
                        nextStop.distance = shortestDistance;
                        // legacy nextStop.distance = distanceFromNextToLast;

                        // DONT ADD IF DISTANCE IS FARTHER THAN GOAL
                        //nextStop.distance = Math.round(nextStop.getLatLng().distanceTo(startLocation.getLatLng()) * .0002);
						nextStop.distance = nextStop.getLatLng().distanceTo(startLocation.getLatLng()) * .0002;

                        if (nextStop.distance <= distanceToFarthestObject) {
                            travelPath.push(nextStop);
							actualPath.push(nextStop.name);
							//ld.push(nextStop.name);

                        }

                        currentLocation = testLandmark;
                    }
                }
            }
        }
        travelPath = sortByKey(travelPath, "distance");
		 actualPath = sortByKey(actualPath, "distance");
        for (var i = 0; i < travelPath.length; i++) {

            tempPath.push(travelPath[i].name + " : " + travelPath[i].distance + "      /      ");
			//ld.push(travelPath[i].name);
        }

        currentCountry = endLocation.currentCountry;

console.log("travelpath array is : "+travelPath);
console.log("actualPath array is : "+actualPath);
console.log("tempPath array is : "+tempPath);
        // MOVE ALONG THE PATH
        // ------------------------------------------------------------------

       // var f = 1;
		 var f = 0;
        l = travelPath.length;
console.table(ld);
        (function iterator() {

            destination = travelPath[f];
			console.log("travelPath: "+destination.name);
            playSound(sfxClicker, 1);


            nextDestinationDistance = Math.round(destination.getLatLng().distanceTo(player.getLatLng()) * .0002);

            if (travelPath[f + 1]) {
                var destination2 = travelPath[f + 1]; // ALSO CHECK 2 LOCATIONS AHEAD

                var nextDestinationDistance2 = Math.round(destination2.getLatLng().distanceTo(player.getLatLng()) * .0002);

                if (nextDestinationDistance2 < nextDestinationDistance) {
                    destination = destination2;
                    f += 1;
                }
            }

            var distanceToEnd = Math.round(destination.getLatLng().distanceTo(endLocation.getLatLng()) * .0002);

            if (distanceToEnd > smallestDistanceToTarget) {
                f += 1;
                destination = travelPath[f];
                iterator();
            } else {

                if (distanceToEnd < smallestDistanceToTarget) {
                    smallestDistanceToTarget = distanceToEnd;
                }


                travel(destination);
                playerLocation(destination);
				
				//ld.push(travelPath[i].name);

                if (++f < l) {
                    travelTimer = setTimeout(iterator, travelSpeed);
                } else {
                    setTimeout(reachedLocation, 1024);
                    currentLocation = endLocation;
                }
            }
        })();
    }

    if (firstDanger == false && endLocation.level > playerLevel + 1) {

        firstDanger = true;
        popMessage("Level " + endLocation.level + " beasts live in this area. Proceed with caution, your hero is only level " + playerLevel, "Dangerous Territory");
        return;
    }
    if (distanceTravelled > 10 && firstTravelPopup == false) {


        popMessage("You gain experience points for exploring locations. the further you travel the more experience you receive", "Travel Experience");
        firstTravelPopup = true;

    }

    //saveGame();
}



function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}



function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function removeSpaces(str) {
    str = str.replace(/'/g, '');
    return str.replace(/ /g, '');
}

function hungarianNotation(str) {
    var cardName = toTitleCase(str);
    var monsterVariableName = removeSpaces(cardName);
    var monsterVariable = capitaliseFirstLetter(monsterVariableName);
    return monsterVariable;
}

function stoper() {
    clearTimeout(travelTimer);
}

function saveSpeechBubble() {
    $('.speechBubble').hide();
    $('.dock').append($('.speechBubble'));
}

function closeStage() {
	
	
    saveSpeechBubble();
    speakingWithCitizen = false;
    $('.stage').fadeOut(fadeSpeed);
    $('.mask').css('display', 'none');
    enableBattleBar();
    inBattle = false;
    $('.hideInBattle').removeClass('freeze');

    enableAllCards();
    $('.cardBarTop').fadeOut();

  


    // cancel effects
    cardLimit = maxCards;
    augur = false;
    regenerate = false;
    maxHpBonus = 0;
    updateStats();
    hidePlayerCard();
    enemyEffects = {}; // reset enemy effects
    switchOffAlignmentButton();

    arrangeCards();
	
	if(gameStarted){
		showCards();
		switchDeck.call();
	}
    

}

function openStage() {
    $('.stage').fadeIn(fadeSpeed, function() {});

}

function switchOffAlignmentButton() {
    alignmentScreenShowing = false;
    $('.alignmentButton').attr("src", "assets/img/uivalues.png");
}

function showAlignment() {
    if (alignmentScreenShowing == false) {
        playSound(sfxClicker, 1);
        $('.mask').fadeIn(400, function() {


            loadFullPageCards('pages/core/alignment');

        });
        alignmentScreenShowing = true;
        $('.alignmentButton').attr("src", "assets/img/uivalueson.png");
    } else {

        switchOffAlignmentButton();
        closeStage();
    }
}

function centerIcon(v) {
    

    var endLocation = $.grep(locationArray, function(e) {
        return e.name == v + '0';
    })[0];



    for (var j = 0; j < locationArray.length; j++) {
        var str = locationArray[j].name;
        var substr = v;
        var result = str.indexOf(substr) > -1;
        if (result == true) {
            endLocation = locationArray[j];
            break;
        }

    }




    var y = endLocation.getLatLng();

    map.setView(y);

}

function centerIconx(v) {

    var ln = [];
    for (i = 0; i < locationArray.length; i++) {
        ln.push(locationArray[i].name);
    }
    alert(ln);
    var endLocation = $.grep(locationArray, function(e) {
        return e.name == v + '0';
    })[0];

    
    var y = endLocation.getLatLng();

    map.setView(y);

}


function showQuests() {
	console.log(currentQuest.name);
	  if (playerCreated == true) {
		 if(currentQuest.name == "Guild Quest"){
			 currentQuest = defaultQuest;
		 }
		  
	  }
//alert(currentQuest.name);

if(currentQuest == defaultQuest){
	popMessage("Find citizens in <div class='cardCity' style='display: inline-block;position:relative;top:0;margin-left:20px;'></div> cities  and <div class='cardVillage' style='display: inline-block;position:relative;top:0;margin-left:20px;'></div>villages  and earn their vote for your cause.","Earn Citizen Votes");
	centerPlayer(player);
} else {
	
    if (playerCreated == false) {


        currentQuest = guildQuest
    }

    if ($('.tipBubbleTextUI').html() == 'Click the QUEST ICON to see your CURRENT QUEST') {
        $('.tipBubbleUI').hide();
    }

    playSound(sfxClicker, 1);
	//showToolTip($('.' + currentQuest.goalLocation), currentQuest.description, false, true);
	
	
	if(currentQuest.boss){
	var ht = currentQuest.actionName+" "+currentQuest.boss.name;
	
	var image = 'assets/img/beasts/' + removeSpaces(currentQuest.boss.name).toLowerCase() + ".png";
	if(currentQuest.targetType == 'citizen'){
	image = 'assets/img/portrait/citizen/' + removeSpaces(currentQuest.boss.name).toLowerCase() + ".png";
	
	}
	
	if(currentQuest.completed == true){
		image = 'assets/img/portrait/citizen/' + removeSpaces(currentQuest.giver).toLowerCase() + ".png";
		ht = "Speak to "+currentQuest.giver;
	}
    showToolTip($('.' + currentQuest.goalLocation), "<div class='bubbleAction' style='white-space:nowrap;z-index: 2; display: block; position: absolute; bottom: 10px; text-align: center; width: 100%; padding: 0px; left: 0px; color: rgb(51, 51, 51) ! important; font-size: 20px; text-transform: uppercase; letter-spacing: -1px;'>"+ht+"</div><img src='"+image+"' width='100%' height='auto' />", false, true);
	} else {
		  showToolTip($('.' + currentQuest.goalLocation), currentQuest.description, false, true);
	}
    centerIcon(currentQuest.goalLocation);
//console.log(currentQuest.name);
}

}



function showSettings() {
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {


        loadFullPageCards('pages/core/settings');

    });
}

function showBrightRidge(){
	
	 $('.mask').fadeIn(400, function() {


        loadFullPageCards('pages/core/brightridge');

    });
	
}

function showMask() {
    $('.mask').fadeIn(400, function() {


        loadFullPageCards('pages/core/draw');

    });
}

function showCitizens() {
	hidePlayerCard();
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {
        loadFullPageCards('pages/core/citizens');
    });
}

//function conveneCouncil() {
//    playSound(sfxClicker, 1);
//    $('.mask').fadeIn(400, function() {
//        loadFullPageCards('pages/core/council');
//    });
//}


function openGender() {
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {
        loadFullPageCards('pages/core/gender');
    });
}


function openSpecies() {
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {
        loadFullPageCards('pages/core/species');
    });
}


function openPath() {
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {
        loadFullPageCards('pages/core/path');
    });
}


function openCareer() {
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {
        loadFullPageCards('pages/core/career');
    });
}

function openShop(t) {
	hidePlayerCard();
    playSound(sfxClicker, 1);
    $('.mask').fadeIn(400, function() {

        currentStoreType = t;
        loadFullPageCards('pages/core/shop');

    });
}

function setCurrentLocationCard() {
	var glowIt = "";
	console.table(currentQuest);
	if(currentQuest != defaultQuest && currentQuest.name != "Guild Quest"){
		glowIt = " glow slimButton";
	}
		
    iconName = "." + currentLocation.name.substring(0, currentLocation.name.length - 1);
    cityHTML = "<div class='cardTitle' style='height:60px;display:block;'>" + currentLocation.name.substring(0, currentLocation.name.length - 1) + "</div><div class='cardSubTitle' style='top: 50px;'>Level " + currentLocation.level + " " + currentLocation.type + "</div><a class='inspect pt citizensButton red"+glowIt+"'  style='margin-top: 80px !important;' href='#'  onmousedown='showCitizens();'>Citizens</a><a class='inspect pt'  href='#'  onmousedown='openShop(&quot;weapons&quot;);'>Weapons</a><a class='inspect pt'  href='#'  onmousedown='openShop(&quot;magic&quot;);'>Magic</a><a class='inspect pt'  href='#'  onmousedown='openShop(&quot;armor&quot;);'>Armor</a><a class='inspect pt'  href='#'  onmousedown='openShop(&quot;items&quot;);'>Items</a>";
    prisonHTML = "<div class='cardTitle' style='height:60px;display:block;'>" + currentLocation.name.substring(0, currentLocation.name.length - 1) + "</div><div class='cardSubTitle'>Level " + currentLocation.level + " " + currentLocation.type + "</div><div class='bottomBlockCity'>Burly guards block the gate. You cannot enter.</div>";
    guildHTML = "<div class='cardTitle' style='height:60px;display:block;'>" + currentLocation.name.substring(0, currentLocation.name.length - 1) + "</div><div class='cardSubTitle' style='height:60px;display:block;'>Hello Traveller, and welcome to the realm. What kind of person are you?</div><a class='inspect pt titPath'  style='margin-top: 120px !important;' href='#'  onmousedown='openPath();'>Choose Path</a><a class='inspect pt titSpecies'  href='#'  onmousedown='openSpecies();'>Choose Species</a><a class='inspect pt titGender'   href='#'  onmousedown='openGender();'>Choose Gender</a><a class='inspect pt titCareer'  href='#'  onmousedown='openCareer();'>Choose Career</a>";

}

function newCardContent(txt) {
    setCurrentLocationCard();
    currentLocation.unbindPopup();
    currentLocation.bindPopup(txt, {
        className: 'landmarkCard'
    }).openPopup();
}




function reachedLocation() {

    setCurrentLocationCard();

    if (currentLocation.type == "Dungeon") {
        if (firstDungeon == false) {
            popMessage("Dungeons contain beasts that are stronger than those in the surrounding countryside. Proceed with caution.", "You've Discovered a Dungeon!");
            firstDungeon = true;
            playSound(gain, 1);
        }
    }

    if (currentLocation.type == "City" || currentLocation.type == "Village") {
        if (firstCity == false) {
            popMessage("You can buy weapons, armor, magic and items in Villages and Cities. You can also find Quests by speaking to citizens.", "You've Discovered a " + currentLocation.type + "!");
            firstCity = true;
            playSound(gain, 1);
        }
        currentLocation.unbindPopup();
        currentLocation.bindPopup(cityHTML, {
            className: 'landmarkCard'
        }).openPopup();


    } else if (currentLocation.type == "Prison") {
        if (firstCity == false) {
            popMessage("Home to the lost souls and black hearted among us. They cannot be entered at this time.", "You've Discovered a " + currentLocation.type + "!");
            firstCity = true;
            playSound(gain, 1);
        }
        currentLocation.unbindPopup();
        currentLocation.bindPopup(prisonHTML, {
            className: 'landmarkCard'
        }).openPopup();


    } else if (currentLocation.type == "Guild") {
        if (firstGuild == false) {
            playSound(gain, 1);
            popMessage("You can upgrade your Path, Species, Gender and Career at any nearby guild. Try it now.", "You've Discovered a Guild!");
            firstGuild = true;
        }
setTimeout(setPathText, 100);
        currentLocation.unbindPopup();
        currentLocation.bindPopup(guildHTML, {
            className: 'landmarkCard'
        }).openPopup();


    } else if (currentLocation.type == "Church") {
        if (firstChurch == false) {
            playSound(gain, 1);
            popMessage("Churches heal all wounds (and let you draw a Healing Perk for the road)", "You've Discovered a Church!");
            firstChurch = true;
            playerHp = maxHp + maxHpBonus;
            updateStats();
        }
        showMask();


    } else {
        currentLocation.unbindPopup();
        currentLocation.bindPopup(currentLocation.popHTML, {
            className: 'landmarkCard'
        });
        showMask();
    }

}




function loadFullPageCards(p) {
    playSound(sfxClicker, 1);
    $('.stage').load(p + '.htm', function() {
        openStage();

    });

}

function loadSideBarPage(p) {
    playSound(sfxClicker, 1);
    $('.sideBar .sideContent').load('pages/'+p + '.htm', function() {
       // openStage();

    });

}


function openFullPageCards() {
    $(".fullPageTitle").css("textAlign", "center");
    $("#fullPage").animate({
        top: "50%",
    }, 350, function() {
        $('#cardSet1').css("transform", "rotate(-5deg)");
        $('#cardSet1').css("webkitTransform", "rotate(-5deg)");
        $('#cardSet1').css("left", 40);
        $('#cardSet3').css("transform", "rotate(5deg)");
        $('#cardSet3').css("webkitTransform", "rotate(5deg)");
        $('#cardSet3').css("left", 660);
    });
    $('.copyright').fadeOut(200);
    $('.stage').fadeIn(1000, function() {});
}



function centerPlayer(t) {



  
    showToolTip($('.playerIcon'), 'Here I am!', false, true);


    map.setView(player.getLatLng());
   
}


$('.flipCard').click(function() {
    $(this).toggleClass('active');
});

function flipCards(c) {

    // if this is the last clickabel card

    chooseCard(c);

    unflipCards();
    $('.fullPageTitle').hide();
    $('#cardSet' + c).addClass('spin');
    playSound(sfxCardFlip, 1);


}

function flipCardLoot(c) {

    // if this is the last clickabel card
    $('.fullPageTitle').hide();
    drawLoot(c, 1);
    unflipCards();
    $('#cardSet' + c).addClass('spin');
    playSound(sfxCardFlip, 1);

}

function flipCardsPlain(c) {

    // if this is the last clickabel card
  
    unflipCards();
    $('#cardSet' + c).addClass('spin');
    playSound(sfxCardFlip, 1);

}





function switchToRuneDeck() {

    if (activeDeck != 'rune') {

        activeDeck = 'rune';

        $(".deckButton").removeClass("selected");
        $(".runeDeck.deckButton").addClass("selected");

    }
    switchDeck.call();

}

function nameContains(v) {
    var str = v;
    //alert(currentQuest.goalLocation);
    var substr = currentQuest.goalLocation;
    var result = str.indexOf(substr) > -1;
    return result;
}

function chooseCard(cardNum) {
    correctLocation = nameContains(currentLocation.name);

    if (currentLocationType == "Church") {
        drawPerk(cardNum, currentLocationLevel, 6);
    } else if (currentLocationType == "Dungeon") {
        
        //if (Object.keys(nextBoss).length > 0 && correctLocation == true) {
        if (correctLocation == true) {

            drawBoss(nextBoss.name, cardNum);
        } else {
            
            // if (Object.keys(nextBoss).length > 0){

            //}
            drawBeast(cardNum, currentLocationLevel + 0);
        }


    } else {
        //   if (Object.keys(nextBoss).length > 0 && correctLocation == true) {
        if (correctLocation == true) {
            drawBoss(nextBoss.name, cardNum);
        } else {

            // RANDOM NUMBER 1 - 10
            var carRand = Math.floor((Math.random() * 100)) + 1;
            // 1 - 4 PERK
            if (carRand < 50) {
                drawPerk(cardNum, currentLocationLevel, 1000);

            };
            // 5 - 8 BEAST
            if (carRand >= 50 && cardNum <= 131) {
                drawBeast(cardNum, currentLocationLevel);
            };
            // 9 - 10 EVENT
            if (carRand >= 132) {
                drawLoot(cardNum, 1);
            };
        }
    }



    if (cardsFlipped == cardLimit && unlimitedFlips == false) {

        shrinkCards(cardNum);


    }
}


function popCard(c) {

    playSound(sfxCardFlip, 1);
    if ($('.b0' + c).hasClass("pop")) {
        unPopCards();

    } else {
        unPopCards();
        $('.b0' + c).addClass('pop');
        currentItem = playerInventory[c];
    }

}

function popCardTop(c) {

    playSound(sfxCardFlip, 1);
    if ($('.e0' + c).hasClass("pop")) {
        unPopCards();

    } else {
        unPopCards();
        $('.e0' + c).addClass('pop');
    }

}

function flipPlayerCard(c) {
    playSound(sfxCardFlip, 1);
    $('#cardSet' + c).addClass('spin');

}

function flipPlayerCardBack(c) {
    playSound(sfxCardFlip, 1);
    $('#cardSet' + c).removeClass('spin');

}

function unPopCards() {
    $('.bottom').removeClass('pop');
    $('.top').removeClass('pop');
}

function unflipCards() {
    playSound(sfxCardFlip, 1);
    $('.flipCard').removeClass('spin');
}


function showBattleBanner(txt) {
    $('.battleBanner').text(txt);
    $('.battleBanner').addClass('alive');
    setTimeout(hideBattleBanner, 2000);

}


//function showStatusBanner (txt) {
//    $('.statusBanner').text(txt);
//    $('.statusBanner').addClass('alive');
//    setTimeout(hideStatusBanner, 3000);
//
//}



function hideBattleBanner() {
    $('.battleBanner').removeClass('alive');

}

//function hideStatusBanner() {
//    $('.statusBanner').removeClass('alive');
//
//}

function showToolTip(target, txt, beside, marker) {

    

setPointerBelow();

    var heightOffset = 0;

    if (marker == true) {


        $('.tipBubbleText').html("");
        $('.tipBubbleText').html(txt);

        $('.tipBubble').fadeIn(600);

        heightOffset = target.parent().height();



        $('.leaflet-popup-pane').append($('.tipBubble'));
        $('.tipBubble').css('transform', target.parent().css("transform"));
        $('.tipBubble').css('-webkit-transform', target.parent().css("-webkit-transform"));

        $('.tipBubble').css('bottom', +heightOffset + 80);
        $('.tipBubble').css('left', (target.parent().width() * 0.5) - 150);
		//



    } else {

        $('.tipBubbleTextUI').html("");
        $('.tipBubbleTextUI').html(txt);

        $('.tipBubbleUI').fadeIn(600);

        heightOffset = target.height();
        target.append($('.tipBubbleUI'));

        $('.tipBubbleUI').css('transform', 'none');
        $('.tipBubbleUI').css('-webkit-transform', 'none');


        $('.tipBubbleUI').css('bottom', +heightOffset + 40);
        $('.tipBubbleUI').css('left', (target.width() * 0.5) - 130);

       

    }

}

function setPointerRight(){
	$('.tipBubblePointer').css('left','auto');
		$('.tipBubblePointer').css('right','-10px');
		$('.tipBubblePointer').css('bottom','40px');
}

function setPointerBelow(){
	$('.tipBubblePointer').css('left','50%');
		$('.tipBubblePointer').css('right','auto');
		$('.tipBubblePointer').css('bottom','-9px');
}


function showToolTipClone(target, txt, beside, marker, fade,pos) {

   setPointerBelow();
   
    var newTip = $('.tipBubble').clone(true);


    newTip.find(('.tipBubbleText')).html("");
    newTip.find(('.tipBubbleText')).html(txt);



    var heightOffset = 0;

    if (marker == true) {



        newTip.fadeIn(600);

        heightOffset = target.parent().height();



        $('.leaflet-popup-pane').append(newTip);
        newTip.css('transform', target.parent().css("transform"));
        newTip.css('-webkit-transform', target.parent().css("-webkit-transform"));

        newTip.css('bottom', +heightOffset + 80);
        newTip.css('left', (target.parent().width() * 0.5) - 150);



    } else {

       

        newTip.fadeIn(600);

        heightOffset = target.height();
        target.append(newTip);

        newTip.css('transform', 'none');
        newTip.css('-webkit-transform', 'none');
if(pos == 'left'){
	
	newTip.css('bottom', -+heightOffset + 40);
        newTip.css('left', 0 - 300);
		
		setPointerRight();
	
	

} else {

        newTip.css('bottom', +heightOffset + 40);
        newTip.css('left', (target.width() * 0.5) - 130);
		
		setPointerBelow();
}



    }



    if (fade == true) {

        setTimeout(function() {
            newTip.fadeOut(600);

        }, toolTipTime)

    }

}




function showToolTipTarget(target, txt, beside, marker) {

   
setPointerBelow();


    var heightOffset = 0;



    $('.tipBubbleTextTarget').html("");
    $('.tipBubbleTextTarget').html(txt);

    $('.tipBubbleTarget').fadeIn(600);

    heightOffset = target.height();
    target.append($('.tipBubbleTarget'));

    $('.tipBubbleTarget').css('transform', 'none');
    $('.tipBubbleTarget').css('-webkit-transform', 'none');


    $('.tipBubbleTarget').css('bottom', +heightOffset + 40);
    $('.tipBubbleTarget').css('left', (target.width() * 0.5) - 130);

   



}

function resetSpeechBubbleSize(){
	
	$('.speechBubble').css('width','256px');
//$('.speechBubble').css('bottom','300px');
$('.speechBubble').css('padding','20px');
}

function slimSpeechBubble(){
	
	$('.speechBubble').css('width','180px');
$('.speechBubble').css('bottom','360px');
$('.speechBubble').css('padding','20px');
}


function showSpeechBubble(target, txt, beside, marker) {


resetSpeechBubbleSize();


    $('.speechBubbleText').html("");
    $('.speechBubbleText').html(txt);


    $('.speechBubble').show();


    var heightOffset = 0;

    if (marker == true) {
        heightOffset = target.parent().height();
        target.parent().append($('.speechBubble'));


        $('.speechBubble').css('bottom', +heightOffset + 40);
        $('.speechBubble').css('left', (target.parent().width() * 0.5) - 90);

    } else {
        heightOffset = target.height();
        target.append($('.speechBubble'));
        $('.speechBubble').css('bottom', +heightOffset - 360);
        $('.speechBubble').css('left', 280);

    }


  
}



function setPlayerCardHeart() {
    $('.playerCard .cardHeart').text(playerHp);
}

function setCardToAttack() {

    if (inBattle == true) {
		
		for (var j = 0; j < deckArray.length; j++) {

        if(deckArray[j].category != 'armor'){

        $('.b0' + (j + 1)+' .perkButtonHTML').html("<a class='cardButton' onMouseDown='useCard("+(j+1)+")'>USE</a>");
		} else {
			
			 $('.b0' + (j + 1)+' .perkButtonHTML').html("<a class='cardButton'>EQUIPPED</a>");
		}
    }
	
	
      //  $('.b01 .perkButtonHTML').html("<a class='cardButton' onMouseDown='useCard(1)'>USE</a>");
      //  $('.b02 .perkButtonHTML').html("<a class='cardButton' onMouseDown='useCard(2)'>USE</a>");
      //  $('.b03 .perkButtonHTML').html("<a class='cardButton' onMouseDown='useCard(3)'>USE</a>");
        
    }

}




function showBattleTooltip() {
    if (inBattle == true) {


        if (activeDeck != "battle") {

            showToolTip($('.battleDeck'), 'Switch to your BATTLE DECK to attack', false, false);
        } else {

            if (firstBattleToolTip == false) {
                firstBattleToolTip = true;
                showToolTip($('.cardBar .b01'), 'Im a BATTLE CARD. Click me to make an attack', false, false);
            }




        }



    }

}

function currentMonsterAttackType() {

    if (currentMonster.type) {
        if (currentMonster.type == 'Hero') {
            attackType = 'Attack';
        }
        if (currentMonster.type == 'Undead') {
            attackType = 'Claw';
        }
        if (currentMonster.type == 'Mythic') {
            attackType = 'Charge';
        }
        if (currentMonster.type == 'Arcane') {
            attackType = 'Slash';
        }
    }

}

function openBattle(c) {

$('.card').removeClass('glow');
showCards();
    fillKarma();

    saveSpeechBubble();

    $('.closeStage').text("X");



    if (playerInventory.length == 0) {
        addBasicWeapon();
        populateAttackBar();

    }
    currentMonsterMaxHp = currentMonster.health;
    $('.beastCard .cardHeart').text(currentMonster.health);

    playSound(quest1, 1);
    enableAllCards();
    inBattle = true;
    $('.hideInBattle').addClass('freeze');

    $('.cardBarTop .e01').hide();
    $('.cardBarTop .e02').hide();
    $('.cardBarTop .e03').hide();


    $('.cardBarTop .e01').show();

    currentMonsterAttackType();

    $('.cardBarTop .e01 .cardTitle').html(currentMonster.name + ' ' + attackType);
    $('.cardBarTop .e01 .cardDamage').html(currentMonster.level + 1);

    if (currentMonster.specialAttack) {

        if (currentMonster.specialAttack.length == 1) {
            $('.cardBarTop .e02').show();
            $('.cardBarTop .e02 .cardTitle').html(currentMonster.specialAttack[0].name);
            $('.cardBarTop .e02 .cardPerkDescription').html(currentMonster.specialAttack[0].description);
            $('.cardBarTop .e02 .cardKarma').html(currentMonster.specialAttack[0].cost);
        }
        if (currentMonster.specialAttack.length > 1) {
            $('.cardBarTop .e02').show();
            $('.cardBarTop .e02 .cardTitle').html(currentMonster.specialAttack[0].name);
            $('.cardBarTop .e02 .cardPerkDescription').html(currentMonster.specialAttack[0].description);
            $('.cardBarTop .e02 .cardKarma').html(currentMonster.specialAttack[0].cost);

            $('.cardBarTop .e03').show();
            $('.cardBarTop .e03 .cardTitle').html(currentMonster.specialAttack[1].name);
            $('.cardBarTop .e03 .cardKarma').html(currentMonster.specialAttack[1].cost);
            $('.cardBarTop .e03 .cardPerkDescription').html(currentMonster.specialAttack[1].description);
        }

    }

    fadeInTopBar();

    if (firstBattle == false) {
        showBattleTooltip();
        firstBattle = true;
    }



  

    setCardToAttack();

    showBattleBanner("Battle!");

    $(' .damageBar').css('height', 0);
    setPlayerDamageBar();
    setPlayerCardHeart();

    $(".beastCard .cardButton").css("display", "none");
    if (c == 1) {
        $("#cardSet" + 2).css("display", "none");
        $("#cardSet" + 3).css("display", "none");
    }

    if (c == 2) {
        $("#cardSet" + 1).css("display", "none");
        $("#cardSet" + 3).css("display", "none");
    }

    if (c == 3) {
        $("#cardSet" + 1).css("display", "none");
        $("#cardSet" + 2).css("display", "none");
    }

    $("#cardSet" + c).css("transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');
    $("#cardSet" + c).css("-webkit-transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');

    $("#cardSet" + c).css("marginRight", '100px');
    $("#cardSet" + c).css("marginBottom", '-230px');
    $("#cardSet4").css("marginRight", '-420px');
    $("#cardSet4").css("right", '50%');
    enableAllCards();
    setTimeout(showPlayerCard, 600);
	
	var gaBattle = 'Open Battle ' + currentMonster.name
	ga('send', 'event', 'Button', 'Click', gaBattle);

}

function openDialogue(c) {

globalCitizenIndex = c;


    setPlayerDamageBar();
    setPlayerCardHeart();




    $("#cardSet" + c + " .cardButton").css("display", "none");
    if (c == 1) {


        $("#cardSet" + 2).hide();
        $("#cardSet" + 3).hide();
    }

    if (c == 2) {


        $("#cardSet" + 1).hide();
        $("#cardSet" + 3).hide();
    }

    if (c == 3) {


        $("#cardSet" + 2).hide();
        $("#cardSet" + 1).hide();
    }

    $("#cardSet" + c).css("transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');
    $("#cardSet" + c).css("-webkit-transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');

    $("#cardSet" + c).css("marginRight", '100px');
    $("#cardSet" + c).css("marginBottom", '-230px');
    $("#cardSet4").css("marginRight", '-420px');
    $("#cardSet4").css("right", '50%');
    enableAllCards();

    setTimeout(fadeInPlayerDialogueCard(c), 600);


    $('.hideInBattle').addClass('freeze');

    $('.cardBarTop .e01').hide();
    $('.cardBarTop .e02').hide();
    $('.cardBarTop .e03').hide();


    $('.cardBarTop .e01').show();

    currentMonsterAttackType();

    $('.cardBarTop .e01 .cardTitle').html(currentMonster.name + ' ' + attackType);
    $('.cardBarTop .e01 .cardDamage').html(currentMonster.level + 1);

    if (currentMonster.specialAttack) {

        if (currentMonster.specialAttack.length == 1) {
            $('.cardBarTop .e02').show();
            $('.cardBarTop .e02 .cardTitle').html(currentMonster.specialAttack[0].name);
            $('.cardBarTop .e02 .cardPerkDescription').html(currentMonster.specialAttack[0].description);
            $('.cardBarTop .e02 .cardKarma').html(currentMonster.specialAttack[0].cost);
        }
        if (currentMonster.specialAttack.length > 1) {
            $('.cardBarTop .e02').show();
            $('.cardBarTop .e02 .cardTitle').html(currentMonster.specialAttack[0].name);
            $('.cardBarTop .e02 .cardPerkDescription').html(currentMonster.specialAttack[0].description);
            $('.cardBarTop .e02 .cardKarma').html(currentMonster.specialAttack[0].cost);

            $('.cardBarTop .e03').show();
            $('.cardBarTop .e03 .cardTitle').html(currentMonster.specialAttack[1].name);
            $('.cardBarTop .e03 .cardKarma').html(currentMonster.specialAttack[1].cost);
            $('.cardBarTop .e03 .cardPerkDescription').html(currentMonster.specialAttack[1].description);
        }

    }




}

function closeDialogue(c) {

    speakingWithCitizen = false;
    saveSpeechBubble();

    setPlayerDamageBar();
    setPlayerCardHeart();

    inBattle = false;

    $("#cardSet" + c + " .cardButton").css("display", "block");

    $("#cardSet" + 1).css("transform", 'rotate(-5deg) scale(1) skew(0deg) translate(0px)');
    $("#cardSet" + 1).css("-webkit-transform", 'rotate(-5deg) scale(1) skew(0deg) translate(0px)');

    $("#cardSet" + 2).css("transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');
    $("#cardSet" + 2).css("-webkit-transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');

    $("#cardSet" + 3).css("transform", 'rotate(5deg) scale(1) skew(0deg) translate(0px)');
    $("#cardSet" + 3).css("-webkit-transform", 'rotate(5deg) scale(1) skew(0deg) translate(0px)');


    if (c == 1) {

        $("#cardSet" + 2).show();
        $("#cardSet" + 3).show();




        $("#cardSet" + c).css("marginRight", '175px');
        $("#cardSet" + c).css("marginBottom", '-220px');


    }

    if (c == 2) {
        $("#cardSet" + 1).show();
        $("#cardSet" + 3).show();



        $("#cardSet" + c).css("marginRight", '-165px');
        $("#cardSet" + c).css("marginBottom", '-200px');
    }

    if (c == 3) {

        $("#cardSet" + 2).show();
        $("#cardSet" + 1).show();

        $("#cardSet" + c).css("marginRight", '-505px');
        $("#cardSet" + c).css("marginBottom", '-220px');
    }


    $("#cardSet4").hide();
    $("#cardSet" + c + " .belowCard").fadeOut();
    saveSpeechBubble();

    $('.dialogueBar').hide();


  

}



function openQuest(c) {




    $(' .damageBar').css('height', 0);
    setPlayerDamageBar();
    setPlayerCardHeart();

    $("#cardSet" + c + " .cardButton").css("display", "none");
    if (c == 1) {
        $("#cardSet" + 2).css("display", "none");
        $("#cardSet" + 3).css("display", "none");
    }

    if (c == 2) {
        $("#cardSet" + 1).css("display", "none");
        $("#cardSet" + 3).css("display", "none");
    }

    if (c == 3) {
        $("#cardSet" + 1).css("display", "none");
        $("#cardSet" + 2).css("display", "none");
    }

    $("#cardSet" + c).css("transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');
    $("#cardSet" + c).css("-webkit-transform", 'rotate(0deg) scale(1) skew(0deg) translate(0px)');

    $("#cardSet" + c).css("marginRight", '100px');
    $("#cardSet" + c).css("marginBottom", '-230px');
    $("#cardSet4").css("marginRight", '-420px');
    $("#cardSet4").css("right", '50%');

}

function hidePlayerCard() {
    $('#cardSet4').hide();
}

function setPlayerImage() {
    $("#cardSet4 .cardFront img.portrait").attr("src", "assets/img/portrait/" + playerSpecies.toLowerCase() + "/" + playerCareer.toLowerCase() + playerGender.toLowerCase() + ".png");
}

function anchorPlayerCard() {

    $("#cardSet4").css("marginRight", '-80px');
    $("#cardSet4").css("right", '150px');


}

function hidePlayerCard() {

    $('#cardSet4').hide();

}

function togglePlayerCard() {

    if ($('#cardSet4').is(":visible")) {
        hidePlayerCard();
    } else {
        showPlayerCard();
    }

}

function fadeInPlayerBattleCard() {
    populateAttackBar();
    setPlayerImage();
    playSound(sfxClicker, 1);
    togglePlayerCard();
}

function showPlayerCard() {
    populateAttackBar();
    setPlayerImage();
    $('#cardSet4').fadeIn(400, function() {
        updateStats();
    });

}









function isPeaceful(al) {
    var bl = true;
    if (al == 'bloodthirsty' || al == 'coldblooded' || al == 'imperial' || al == 'honorable' || al == 'anarchic') {
        bl = false;
    }
    return bl;


}








// ----------------------------------------------------------------
// DRAW LOOT
// ----------------------------------------------------------------




function drawLoot(c, level) {

    playSound(success, .2);
    playSound(coins, 1);
    var level = 1;
    var name = "";
    var card = {};
    var cardgold = 0;
    var extext = "";


    if (inBattle == true) {
        level = currentMonster.level;
    } else {
        level = currentLocationLevel;
    }

    var beastXp = beastXpValue(level);

    // NEW ARRAY TO HOLD LEVEL MATCHING TREASURE
    var treasureFilteredByLevel = [];
    treasureFilteredByLevel.length = 0;

    for (var i = 0; i < treasure.length; i++) {
        // ADD MATCHING LEVEL BEASTS TO NEW ARRAY
        if (treasure[i].level == level) {
            card = treasure[i];
            var tName = Math.floor((Math.random() * card.name.length));
            name = card.name[tName];
            var image = card.image;
            var treasureValueSpread = 0.5;
            var g = Math.floor((Math.random() * (+card.gold * treasureValueSpread)));
            cardgold = Math.ceil((+card.gold + g) * rewardMultiplier);
            extext = "";

        }
    }

    var btext = "Close";

    var newHTML = "<span class='beastCard'> <div class='cardTitle'>" + name + "</div><div class='cardSubTitle' style='color:#fff'>Value: " + cardgold + " gold" + extext + "</div><div class='experienceGained'>+ " + xpGained + " Experience</div><a class='cardButton' onClick='closeStage();'>Collect</a><img src=" + image + " width='320' height='400' class='portrait'/></div></span>"

    $("#cardSet" + c + " .cardBack").html(newHTML);

    playerGold += cardgold;
    updateStats();

    saveGame();

   


}


function drawBoss(nm, c) {


    for (var i = 0; i < beasts.length; i++) {
        // ADD MATCHING LEVEL BEASTS TO NEW ARRAY
        if (beasts[i].name == nm) {

            currentMonster = beasts[i];

        }

    }




    var name = currentMonster.name;
    var image = 'assets/img/beasts/' + removeSpaces(currentMonster.name).toLowerCase() + ".png";
    var beastLevel = currentMonster.level;
    currentMonster.karma = beastLevel + extraBossKarma;
    currentMonster.health = beastLevel * ((Math.floor((Math.random() * 8))) + 1 + (beastLevel * difficulty));
    currentMonster.maxHealth = currentMonster.health;

    var karmaDisplay = "";
    if (currentMonster.specialAttack) {

        karmaDisplay = "<div class='cardKarma'>" + currentMonster.karma + "</div>";
    }

    var newHTML = "<span class='beastCard'><div class='miss'></div><div class='splat'></div><div class='scratch'></div><div class='damaged'></div><div class='damagedExtra'></div><div class='damageBar'></div><div class='cardHeart'>" + currentMonster.health + "</div>" + karmaDisplay + "<div class='cardTitle'>" + name + "</div><div class='cardSubTitle'>Level " + beastLevel + " " + capitaliseFirstLetter(currentMonster.alignment) + " " + currentMonster.type + "</div><div class='powerDisplay'><img class='cardPath' src='assets/img/paths/" + currentMonster.path + ".png' width='40' height='40' /><div class='powerUps'><img class='activeSkill as01' src='assets/img/blank.png' width='256' height='256' /><img class='activeSkill as02' src='assets/img/paths/strength.png' width='80' height='80' /><img class='activeSkill as03' src='assets/img/paths/spirit.png' width='80' height='80' /></div></div><a class='cardButton' onClick='openBattle(" + c + ");'>Battle</a><img src=" + image + " width='320' height='400' class='portrait'/></div></span>";

    $("#cardSet" + c + " .cardBack").html(newHTML);

}


function drawBeast(c, level) {


//level>10?level = 10:null;
    // NEW ARRAY TO HOLD LEVEL MATCHING BEASTS
    var beastArrayLevel = [];
    beastArrayLevel.length = 0;

    var tempBeast = [];
    for (var i = 0; i < beasts.length; i++) {
        // ADD MATCHING LEVEL BEASTS TO NEW ARRAY
        if (beasts[i].level == level) {
            tempBeast.push(beasts[i]);
            if (containsObject(currentLocation.type, beasts[i].location)) {

                beastArrayLevel.push(beasts[i]);

            }
        }
    }

    // FAILSAFE
    if (beastArrayLevel.length == 0) {
        var randomIndex = Math.floor(Math.random() * tempBeast.length);
        beastArrayLevel.push(tempBeast[randomIndex]);

    }


    var cardNumber = Math.floor((Math.random() * beastArrayLevel.length));
    currentMonster = beastArrayLevel[cardNumber];
    var name = currentMonster.name;
    var image = 'assets/img/beasts/' + removeSpaces(currentMonster.name).toLowerCase() + ".png";
    var beastLevel = currentMonster.level;
    currentMonster.karma = beastLevel + extraBeastKarma;
    currentMonster.health = beastLevel * ((Math.floor((Math.random() * 8))) + 1 + (beastLevel * difficulty));
    currentMonster.health = (beastLevel * 3) + 1;
    currentMonster.maxHealth = currentMonster.health;
    var karmaDisplay = "";
    if (currentMonster.specialAttack) {

        karmaDisplay = "<div class='cardKarma'>" + currentMonster.karma + "</div>";
    }

    var newHTML = "<span class='beastCard'><div class='miss'></div><div class='splat'></div><div class='scratch'></div><div class='damaged'></div><div class='damagedExtra'></div><div class='damageBar'></div><div class='cardHeart'>" + currentMonster.health + "</div>" + karmaDisplay + "<div class='cardTitle'>" + name + "</div><div class='cardSubTitle'>Level " + beastLevel + " " + capitaliseFirstLetter(currentMonster.alignment) + " " + currentMonster.type + "</div><div class='powerDisplay'><img class='cardPath' src='assets/img/paths/" + currentMonster.path + ".png' width='40' height='40' /><div class='powerUps'><img class='activeSkill as01' src='assets/img/blank.png' width='256' height='256' /><img class='activeSkill as02' src='assets/img/paths/strength.png' width='80' height='80' /><img class='activeSkill as03' src='assets/img/paths/spirit.png' width='80' height='80' /></div></div><a class='cardButton' onClick='openBattle(" + c + ");'>Battle</a><img src=" + image + " width='320' height='400' class='portrait'/></div></span>";

    $("#cardSet" + c + " .cardBack").html(newHTML);
    $('.beastCard .damageBar').css('height', 0);
}

function drawHeal(c, level) {
    //draw defensive instant perk

    // NEW ARRAY TO HOLD LEVEL MATCHING BEASTS
    var perkArrayLevel = [];
    perkArrayLevel.length = 0;

    for (var i = 0; i < perks.length; i++) {
        // ADD MATCHING LEVEL BEASTS TO NEW ARRAY
        if (perks[i].healing) {
            perkArrayLevel.push(perks[i]);
        }
    }
    var cardNumber = Math.floor((Math.random() * perkArrayLevel.length));
    currentPerk = perkArrayLevel[cardNumber];
    var name = currentPerk.name;
    var image = 'assets/img/perks/' + removeSpaces(currentPerk.name).toLowerCase() + ".png";
    var beastLevel = currentPerk.level;
    currentPerk.health = beastLevel * (Math.floor((Math.random() * 3)) + 3);

    currentPerkHTML = "<div class='cardTitle'>" + name + "</div><img class='cardPath' src='assets/img/paths/" + currentPerk.path + ".png' width='40' height='40' /><div class='cardSubTitle'>" + currentPerk.description + "</div><div class='powerDisplay'></div><span class='perkButtonHTML'><a class='cardButton' onClick='collectPerk(" + c + ");'>Collect</a></span><img src=" + image + " width='320' height='400' class='portrait'/></div>";

    $("#cardSet" + c + " .cardBack").html(currentPerkHTML);

}





function collectPerk(c) {
    if (firstPerk == false) {
        firstPerk = true;
        popMessage("PERK CARDS give your hero special abilities, but they can only be used once and cost KARMA to use.", "You Collected a PERK CARD");

    }



    deckArray.push(currentPerk);

   


    $("#cardSet" + c).css("marginBottom", '-500px');
    $("#cardSet" + c).css("bottom", 0);


    fadeCards(c);
   
    setTimeout(function() {
            switchDeck.call();
        }, 300)

    setTimeout(function() {
        $('.stage').hide();
        $('.mask').fadeOut(600);
    }, 800)

    hideLeaveButton();
    cardLimit = maxCards;
    augur = false;
    regenerate = false;

}

function hideAllCards(){
	
	 hideCard(1);
    hideCard(2);
    hideCard(3);
    hideCard(4);
    hideCard(5);
    hideCard(6);
    hideCard(7);
    hideCard(8);
    hideCard(9);
	
}

function hideCard(c) {

    $('.b0' + c).show();
    $('.b0' + c).addClass('show');
}

function refillCard(c) {
	
    $('.b0' + c).show();
    $('.b0' + c).addClass('show');

    setTimeout(function() {
        $('.b0' + c).removeClass('show');


    }, 400)

    $('.b0' + c).show();
    $('.b0' + c).addClass('show');


}

function fadeCards(c) {

    if (c == 1) {
        $("#cardSet" + 2).css("display", "none");
        $("#cardSet" + 3).css("display", "none");

    }

    if (c == 2) {
        $("#cardSet" + 1).css("display", "none");
        $("#cardSet" + 3).css("display", "none");
    }

    if (c == 3) {
        $("#cardSet" + 1).css("display", "none");
        $("#cardSet" + 2).css("display", "none");
    }

}

function shrinkCards(c) {

    if (c == 1) {
        $('#cardSet' + 2).addClass('fadeOut');
        $('#cardSet' + 3).addClass('fadeOut');

    }

    if (c == 2) {
        $('#cardSet' + 1).addClass('fadeOut');
        $('#cardSet' + 3).addClass('fadeOut');
    }

    if (c == 3) {
        $('#cardSet' + 2).addClass('fadeOut');
        $('#cardSet' + 1).addClass('fadeOut');
    }

}

function hideLeaveButton() {
    $('.closeStage').hide();
}

function disableCard(c) {
    $('.cardBar .b0' + c).addClass('disable');
}

function enableCard(c) {
    $('.cardBar .b0' + c).removeClass('disable');
}


function slamCard(c, nm, pk) {

    // DISABLE CARD for DOUBLE CLICK
    numBeastAttacks = 0;
    disableCard(c);
	
	disableAllCards();

    manageToolTip();


    playSound(sfxCardFlip, 1);
    $('.b0' + c).removeClass('pop');
    $('.b0' + c).addClass('slam');
    setTimeout(function() {
        $('.b0' + c).removeClass('slam');
        $('.b0' + c).addClass('slamDown');
        setTimeout(function() {
            playSound(slam, 1);
			
            if (pk.category != 'perk') {
				//alert(pk.category);//bing
                attackBeast(c - 1);
            } else {
               

                powerLevel = pk.level;
                if (pk.effect) {
                    eval(pk.effect + "()");
                }


            }
            $('.b0' + c).hide();
			$('.b0' + c).removeClass('slamDown');
			 $('.b0' + c).removeClass('pop');
            showBattleBanner(nm);
			//arrangeCards();
			//spreadCards();

          
            setTimeout(function() {
                if (instantPerk == false) {
                    attackPlayer();
                }
               // $('.b0' + c).removeClass('slamDown');
                



            }, 400)

        }, 400)
    }, 400)

}






function slamCardAction(c, nm, pk) {

    playSound(slam, 1);
           // if (activeDeck == 'battle') {
            //    attackBeast(c - 1);
           // } else {
               
                if (pk.effect) {
                    eval(pk.effect + "()");
                }

               // $(".belowCard").fadeOut();



           // }
            //$('.b0' + c).hide();
            showBattleBanner(nm);
			//playQuestComplete();
}

function playQuestComplete(){
playSound(winfanfare,1);
}

function voteComplete(){
playSound(fanfare2,1);
$('.causeButton').show();
}

function disableCards() {
    $('.cardBar .cardButton').css('opacity', 0.2);
    $('.cardBar .cardButton').css('pointer-events', 'none');
}

function enableAllCards() {
    $('.cardBar .b01').removeClass('disable');
    $('.cardBar .b02').removeClass('disable');
    $('.cardBar .b03').removeClass('disable');
	 $('.cardBar .b04').removeClass('disable');
    $('.cardBar .b05').removeClass('disable');
    $('.cardBar .b06').removeClass('disable');
	 $('.cardBar .b07').removeClass('disable');
    $('.cardBar .b08').removeClass('disable');
    $('.cardBar .b09').removeClass('disable');
}

function disableAllCards(){
	$('.cardBar .b01').addClass('disable');
    $('.cardBar .b02').addClass('disable');
    $('.cardBar .b03').addClass('disable');
	 $('.cardBar .b04').addClass('disable');
    $('.cardBar .b05').addClass('disable');
    $('.cardBar .b06').addClass('disable');
	 $('.cardBar .b07').addClass('disable');
    $('.cardBar .b08').addClass('disable');
    $('.cardBar .b09').addClass('disable');
	
}

function slamCardEnemy(c, nm) {

    // DISABLE CARD for DOUBLE CLICK
    $('.cardBar .b01').addClass('disable');
    $('.cardBar .b01').addClass('disable');
    $('.cardBar .b01').addClass('disable');

    setTimeout(function() {

        playSound(sfxCardFlip, 1);
        $('.e0' + c).removeClass('pop');
        $('.e0' + c).addClass('slam');
        setTimeout(function() {
            $('.e0' + c).removeClass('slam');
            $('.e0' + c).addClass('slamDown');
            setTimeout(function() {
                playSound(slam, 1);

                $('.e0' + c).hide();

                attackType = 'Bite';

                currentMonsterAttackType();
                // SPECIAL ATTACKS
                var refill = true;
                if (currentMonster.specialAttack && c != 1) {
                    attackType = currentMonster.specialAttack[c - 2].name;
                    currentMonster.karma -= currentMonster.specialAttack[c - 2].cost;
                    currentMonster.karma < 0 ? currentMonster.karma = 0 : null;
                    $('.beastCard .cardKarma').html(currentMonster.karma);
                    if (currentMonster.specialAttack[c - 2].effect) {
                        currentMonster.specialAttack[c - 2].effect();
                    }

                    if (currentMonster.specialAttack[c - 2].damage) {
                      


                        playerHp -= +currentMonster.specialAttack[c - 2].damage;
                        shakePlayer();




                        $('.playerCard .cardHeart').text(playerHp);

                        setPlayerDamageBar();

                        playCurrentWeaponSound(currentMonster);

                        updateStats();

                        resetScratch('.playerCard');
                        showDamageEffect('.playerCard', +currentMonster.specialAttack[c - 2].damage);
                        showSpecialEffect('.playerCard', currentMonster);



                    }


                    var ref = currentMonster.specialAttack[c - 2].cost;
                    if (ref > currentMonster.karma)

                    {
                        refill = false;
                    }

                }
                showBattleBanner(currentMonster.name + ' ' + attackType);

                setTimeout(function() {
                    $('.e0' + c).removeClass('slamDown');
                    if (refill == true) {

                        $('.e0' + c).show();
                        if (activeDeck == "battle" || refill == true) {
                            //refillCard(c);
                        }
                    }

                }, 400)

            }, 400)
        }, 400)



    }, 400)

}



function errorSound() {

    playSound(error, 1);

}


function useCard(c) {

    var thisPerk = deckArray[c - 1];

    if (thisPerk.level > karma && thisPerk.category != 'weapon' && thisPerk.category != 'magic') {
        popMessage("You need <div class='cardKarma' style='display: inline-block;position:relative;top:0;margin-left:20px;'>" + thisPerk.level + "</div>Karma to use this perk. Karma regenerates outside of battles and your Maximum Karma increases as your Hero levels up.", "Not enough Karma");
   
    } else {
		
        if (thisPerk.worksIn) {
			
            if (thisPerk.worksIn == 'battle') {
                if (!inBattle) {
                    errorSound();
                    popMessage(thisPerk.name + " can only be used in battle. You can battle beasts hiding in landmarks and dungeons, or attack Citizens when speaking with them.", "BATTLE CARD");
                } else {
                    // REMOVE THE PERK
                    if (thisPerk.category != 'weapon'  && thisPerk.category != 'magic') {
                        karma -= thisPerk.level;
                    }
                    updateStats();
                   slamAndRefill(c,thisPerk);
                }
            }
       
	    } else {
			
            if (playerHp >= maxHp && thisPerk.type == 'healing') {
                playSound(error, 1);
                popMessage("", "You already have full health")
            } else {
                // REMOVE THE PERK
				 if (thisPerk.category != 'weapon'  && thisPerk.category != 'magic') {
                karma -= thisPerk.level;
				 }
                updateStats();
               slamAndRefill(c,thisPerk);
            }
        }
    }
}




function slamAndRefill(c,thisPerk){
	
	 slamCard(c, deckArray[c - 1].name, deckArray[c - 1]);
                if (refill == false && thisPerk.category != 'weapon' && thisPerk.category != 'magic') {
					
					
					
					setTimeout(function() {
                deckArray.splice(c - 1, 1);
				hideAllCards();
                    arrangeCards();
                   spreadCards();



            }, 1600)
			
			
			
                   

                }
	
}





function popUpCard(c) {

    $('.b0' + c).show();
    $('.b0' + c).addClass('show');
    $('.b0' + c + ' .cardContent').html("<div class='card-close-button'>×</div>" + currentPerkHTML);
	
    if (inBattle) {
		
		if (deckArray[c - 1]) {
			console.log("category "+(c-1)+"   "+deckArray[c - 1].category);
			if(deckArray[c - 1].category != 'armor'){
            //$('.b0' + c + ' .perkButtonHTML').html("<a class='cardButton' onMouseDown='useCard(" + c + ")'>Use</a>");
			}
		}
       
    } else {
        if (deckArray[c - 1]) {
			if(deckArray[c - 1].category != 'perk'){
            $('.b0' + (c) + ' .perkButtonHTML').html("<a class='cardButton' onMouseDown='sellItem(" + c + ")'>Sell for " + Math.floor(deckArray[c - 1].price * saleMultiplier) + " </a>");
			}
		
        }
    }

    setTimeout(function() {
        $('.b0' + c).removeClass('show');
    }, 0)
}




var itemX = 0;
var itemY = 0;
var oPos = '';


function itemInfo() {

    $('.playerCard .cardBack .itemTitle').text(currentItem.name);
    var spec = "";
    if (currentItem.specialPower) {
        spec = currentItem.specialPower;
    }
    if (currentItem.type == 'armor' || currentItem.type == 'helmet' || currentItem.type == 'shield') {
        $('.playerCard .cardBack .itemSubTitle').html(currentItem.description);
    } else {
        $('.playerCard .cardBack .itemSubTitle').html("Level " + currentItem.level + " " + currentItem.type + " Damage " + (currentItem.level * baseWeaponDamage + 1) + spec); //+" "+currentItem.description);
    }

}


function popSellBar() {
    $('.sellItemBar').css('bottom', '5px');
    $('.cardSubTitleClick').hide();
}

function hideSellBar() {
    $('.sellItemBar').css('bottom', '-60px');
    $('.cardSubTitleClick').show();
}


// FIRST INVENTORY ROW
//
//var elem = document.querySelector('#draggable0');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 0;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable0 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable0'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[0];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable0 img').removeClass('bigInventory');
//    $('#draggable0').copyCSS('.nullObject');
//   // checkDrop(0, 0);
//});
//
//var elem = document.querySelector('#draggable1');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 1;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable1 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable1'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[1];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable1 img').removeClass('bigInventory');
//    $('#draggable1').copyCSS('.nullObject');
//   // checkDrop(-80, 0);
//});
//
//
//var elem = document.querySelector('#draggable2');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 2;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable2 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable2'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[2];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable2 img').removeClass('bigInventory');
//    $('#draggable2').copyCSS('.nullObject');
//    //checkDrop(-160, 0);
//});
//
//
//var elem = document.querySelector('#draggable3');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 3;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable3 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable3'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[3];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable3 img').removeClass('bigInventory');
//    $('#draggable3').copyCSS('.nullObject');
//   // checkDrop(-240, 0);
//});
//
//
//
//// SECOND INVENTORY ROW
//
//
//var elem = document.querySelector('#draggable4');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 4;
//
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable4 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable4'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[4];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable4 img').removeClass('bigInventory');
//    $('#draggable4').copyCSS('.nullObject');
//    //checkDrop(0, 80);
//});
//
//
//
//
//var elem = document.querySelector('#draggable5');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 5;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable5 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable5'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[5];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable5 img').removeClass('bigInventory');
//    $('#draggable5').copyCSS('.nullObject');
//   // checkDrop(-80, 80);
//});
//
//
//var elem = document.querySelector('#draggable6');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//
//    selectedInventoryIndex = 6;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable6 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable6'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[6];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable6 img').removeClass('bigInventory');
//    $('#draggable6').copyCSS('.nullObject');
//    //checkDrop(-160, 80);
//});
//
//
//var elem = document.querySelector('#draggable7');
//var draggie = new Draggabilly(elem, {
//    containment: '#cardSet4'
//});
//draggie.on('dragMove', function(draggieInstance, event, pointer) {
//    itemY = draggieInstance.position.y;
//    itemX = draggieInstance.position.x;
//    selectedInventoryIndex = 7;
//});
//draggie.on('dragStart', function(draggieInstance, event, pointer) {
//    popSellBar();
//    $('#draggable7 img').addClass('bigInventory');
//    $('.nullObject').copyCSS('#draggable7'); // copy all styles
//    playSound(bubble, 1);
//    currentItem = playerInventory[7];
//    itemInfo();
//});
//draggie.on('dragEnd', function(draggieInstance, event, pointer) {
//    $('#draggable7 img').removeClass('bigInventory');
//    $('#draggable7').copyCSS('.nullObject');
//    //checkDrop(-240, 80);
//});
//
//
//
//
//function checkDropBakxxx(os, oy) {
//
//    hideSellBar();
//
//    var matching = false;
//
//    for (var i = 0; i < deckArray.length; i++) {
//        if (deckArray[i].name == currentItem.name) {
//
//            matching = true;
//        }
//
//    }
//
//
//    if (itemY > 160 - oy) {
//
//        if (itemY > 280 - oy) { // && itemX>230+os){
//
//            sellCurrentItem();
//
//
//
//
//        } else {
//            if (matching == false) {
//
//                if (itemX > -20 + os && itemX < 40 + os) {
//                    playCurrentWeaponSound(currentItem);
//                    deckArray.splice(0, 1, currentItem);
//                    populateAttackBar();
//                    shake($('.playerCard .as01'));
//                    playSound(slam, 1);
//
//                } else if (itemX > 80 + os && itemX < 150 + os) {
//                    playCurrentWeaponSound(currentItem);
//                    deckArray.splice(1, 1, currentItem);
//                    populateAttackBar();
//                    shake($('.playerCard .as02'));
//                    playSound(slam, 1);
//                } else if (itemX > 180 + os && itemX < 250 + os) {
//                    playCurrentWeaponSound(currentItem);
//                    deckArray.splice(2, 1, currentItem);
//                    populateAttackBar();
//                    shake($('.playerCard .as03'));
//                    playSound(slam, 1);
//                }
//            }
//
//        }
//
//
//
//    }
//
//
//
//}
//



function sellItem(c) {
    globalCurrentCardNumber = c;
    loadFullPageCards('pages/core/confirmsell');




}

function makeSale(c) {

    // SELL ITEM
    disableCard(c);
    currentItem = deckArray[c - 1];


    //	playerInventory.splice(selectedInventoryIndex, 1);
    playerGold += Math.floor(currentItem.price * saleMultiplier);
    playSound(coins, 1);
    updateStats();
    //saveGame();
    popMessage("Your " + currentItem.name + " has been sold for " + (Math.floor(currentItem.price * saleMultiplier)) + " Gold", currentItem.name + " Sold")

    if (deckArray[0]) {
        if (deckArray[0].name == currentItem.name) {
            deckArray.splice(0, 1);
        }
    }

    if (deckArray[1]) {
        if (deckArray[1].name == currentItem.name) {
            deckArray.splice(1, 1);
        }
    }

    if (deckArray[2]) {
        if (deckArray[2].name == currentItem.name) {
            deckArray.splice(2, 1);
        }
    }
	
	if (deckArray[3]) {
        if (deckArray[3].name == currentItem.name) {
            deckArray.splice(3, 1);
        }
    }

    if (deckArray[4]) {
        if (deckArray[4].name == currentItem.name) {
            deckArray.splice(4, 1);
        }
    }

    if (deckArray[5]) {
        if (deckArray[5].name == currentItem.name) {
            deckArray.splice(5, 1);
        }
    }
	
	if (deckArray[6]) {
        if (deckArray[6].name == currentItem.name) {
            deckArray.splice(6, 1);
        }
    }

    if (deckArray[7]) {
        if (deckArray[7].name == currentItem.name) {
            deckArray.splice(7, 1);
        }
    }

    if (deckArray[8]) {
        if (deckArray[8].name == currentItem.name) {
            deckArray.splice(8, 1);
        }
    }

    switchDeck.call();
    //populateAttackBar();

}

function sellCurrentItem() {
    // SELL ITEM



    playerInventory.splice(selectedInventoryIndex, 1);
    playerGold += currentItem.price;
    playSound(coins, 1);
    updateStats();
    //saveGame();
    popMessage("Your " + currentItem.name + " has been sold for " + currentItem.price + " Gold", currentItem.name + " Sold")

    if (deckArray[0]) {
        if (deckArray[0].name == currentItem.name) {
            deckArray.splice(0, 1);
        }
    }

    if (deckArray[1]) {
        if (deckArray[1].name == currentItem.name) {
            deckArray.splice(1, 1);
        }
    }

    if (deckArray[2]) {
        if (deckArray[2].name == currentItem.name) {
            deckArray.splice(2, 1);
        }
    }

    switchDeck.call();

    populateAttackBar();


}

function resetItem() {
    //$('.nullObject').copyCSS('#draggable1');  // copy all styles
   // $('#draggable0').copyCSS('.nullObject'); // copy all styles
    //$('#draggable1 img').css('transform',oPos);
}

function useGear(c) {

}


function showSpecialEffect(targetCard, currentAttacker) {
    //alert(currentAttacker.specialAbilities);
    if (currentAttacker.specialAbilities) {

        $(targetCard + ' .damagedExtra').text(currentAttacker.specialAbilities[0]);
        $(targetCard + ' .damagedExtra').show();
        $(targetCard + ' .damagedExtra').css('opacity', 1);
        $(targetCard + ' .damagedExtra').delay(1500).animate({
            opacity: 0,
        }, 200)
    }

}

function showDamageEffect(targetCard, damage, effect) {
    if (!effect) {
        effect = "";
    }
    var dodgeText = "</br><span style='font-size:32px;'>(" + damage + "-" + damageReduction + " Dodge)</span>";
    if (damageReduction == 0) {
        dodgeText = "";
    }
    if (targetCard != '.playerCard') {
        dodgeText = "";
        damageReduction = 0;
    }


    if (rookDamageBonus > 0 && targetCard != '.playerCard') {
        $(targetCard + ' .damaged').html((effect + (damage - rookDamageBonus)) + " + " + rookDamageBonus + dodgeText);


    } else {
        var displayDamage = damage - damageReduction;
        if (displayDamage < 1) {
            displayDamage = 1;
        }
        $(targetCard + ' .damaged').html(effect + (displayDamage) + dodgeText);
    }

    // $(targetCard + ' .damagedExtra').show();
    //  $('.damagedExtra').text(extraText + 'armor absorbs ' + Math.round(reduction) + '% (' + Math.round(percentReduction) + ' hp)');




    $(targetCard + ' .damaged').animate({
        top: '65px',
    }, 400)
    $(targetCard + ' .damaged').delay(600).animate({
        opacity: 0,
    }, 200)

    $(targetCard + ' .splat').css({
        "opacity": 1
    });
    // ANIMATE
    $(targetCard + ' .scratch').animate({
            height: "313px",
        }, 150, 'swing', // the type of easing

        function() { // the callback
            $(targetCard + ' .scratch').delay(600).animate({
                opacity: 0,
            }, 150)
        });
    $(targetCard + ' .splat').delay(600).animate({
        opacity: 0,
    }, 500);

}

function checkCards() {


    if (deckArray[0]) {
        $('.b01').is(":visible") ? null : refillCard(1);
    }

    if (deckArray[1]) {
        $('.b02').is(":visible") ? null : refillCard(2);

    }

    if (deckArray[2]) {
        $('.b03').is(":visible") ? null : refillCard(3);
    }

    if (deckArray[3]) {
        $('.b04').is(":visible") ? null : refillCard(4);
    }

    if (deckArray[4]) {
        $('.b05').is(":visible") ? null : refillCard(5);

    }

    if (deckArray[5]) {
        $('.b06').is(":visible") ? null : refillCard(6);
    }

    if (deckArray[6]) {
        $('.b07').is(":visible") ? null : refillCard(7);
    }

    if (deckArray[7]) {
        $('.b08').is(":visible") ? null : refillCard(8);

    }

    if (deckArray[8]) {
        $('.b09').is(":visible") ? null : refillCard(9);
    }



}

function attackPlayer(basicAttack) {


if(inBattle == true){

    var attackRoll = Math.floor((Math.random() * 100) + 1);


    var dodgeBonus = 0;



    for (var i = 0; i < deckArray.length; i++) {

        deckArray[i].type == 'shield' ? dodgeBonus += (4 + (deckArray[i].level * 1)) : null;




    }


    if (attackRoll < beastChanceToHit - dodgeBonus) {

        var attackNumber = 1;
        var specialAttacks;
        if (currentMonster.specialAttack) {



            var attackLength = currentMonster.specialAttack.length;
            attackNumber = randomNumber(attackLength);
           

            attackNumber += 1;
            if (currentMonster.karma < currentMonster.specialAttack[attackNumber - 2].cost) {
                attackNumber = 1;
            }
        }
        if (basicAttack) {
            if (basicAttack == true) {
                attackNumber = 1;
            }
        }
        slamCardEnemy(attackNumber, deckArray[0].name);


        setTimeout(function() {

            if (currentMonster.karma <= 0) {
                $('.cardBarTop .e02').fadeOut();
                $('.cardBarTop .e03').fadeOut();
            }

           
            var weaponLevel = currentMonster.level;
            var damage = weaponLevel * randomNumber(6);
            damage = randomNumber(currentMonster.level); //xxxxxxxx
            if (damage < Math.floor(currentMonster.level * .5)) {
                damage = Math.floor(currentMonster.level * .5);
            }
            if (playerPath == "speed") {
                damageReduction = Math.ceil(playerLevel * 0.5);
            }
            var masterDamage = damage - damageReduction;
            if (masterDamage < 1) {
                masterDamage = 1;
            }
           
            if (attackNumber == 1) {

                if (playerShielded == false) {
                    playerHp -= masterDamage;
                    shakePlayer();
                } else {

                    fadeShield();
                    masterDamage = 0;

                }

              



                $('.playerCard .cardHeart').text(playerHp);

                setPlayerDamageBar();

                playCurrentWeaponSound(currentMonster);

                updateStats();

                resetScratch('.playerCard');
                showDamageEffect('.playerCard', damage);
                showSpecialEffect('.playerCard', currentMonster);

            }

            if (healToolTip == false && playerHp < maxHp) {
                if (healingPotions > 0) {
                    healToolTip = true;
                   showToolTipClone($('.healIcon'), 'Youre hurt. Click the POTION to heal', false, false,false,'left');
                }


            }
            numBeastAttacks++;
            if (playerHp <= 0) {
                killPlayer();
            } else {
                if (attackNumber > 1 && numBeastAttacks < 2) {
                    setTimeout(attackPlayer(true), 2600);
                    return;
                }
                checkCards();
                setTimeout(enableAllCards(), 1600);
                setTimeout(poisonBeast, 1400);
            }


        }, 1200)


    } else {
        checkCards();
        enableAllCards();
        playSound(sfxMiss, 1);
        $('.playerCard .miss').css({
            "opacity": 1
        });
        $(".playerCard .miss").delay(600).animate({
            opacity: 0,
        }, 500);

    }

}

}

function poisonBeast() {
    if (enemyEffects.poisoned == true) {


        currentMonster.health -= powerLevel;
        lowerLimitBeastHealth();
        $('.beastCard .cardHeart').text(currentMonster.health);
        var healthPercent = currentMonster.health / currentMonster.maxHealth;
        var healthHeight = 450 - (450 * healthPercent);
        $('.beastCard .damageBar').css('height', healthHeight);
        updateStats();
        shakeBeast();
        playSound(poison, 1);
        resetScratch('.drawCard');
        showDamageEffect('.drawCard', -powerLevel, "Poison");

        if (currentMonster.health <= 0) {
            killBeast();
        }


    }

}

function shakeBeast() {
    $('#cardSet1').is(":visible") ? shake($('#cardSet1')) : null;
    $('#cardSet2').is(":visible") ? shake($('#cardSet2')) : null;
    $('#cardSet3').is(":visible") ? shake($('#cardSet3')) : null;
}

function shakePlayer() {
    shake($('#cardSet4'));

}

function randomNumber(n) {
    var rn = Math.floor(n * Math.random()) + 1;
    return rn;
}

function lowerLimitBeastHealth() {
    currentMonster.health < 0 ? currentMonster.health = 0 : null;
}

function fadeInTopBar() {

    $('.cardBarTop').fadeIn();
}

function attackBeast(n) {

    $("#cardSet4").css("marginRight", '-420px');
    $("#cardSet4").css("right", '50%');
    fadeInTopBar();


    if (deckArray[n]) {



        currentWeapon = deckArray[n];

    }
    if (currentWeapon.type == 'armor' || currentWeapon.type == 'helmet' || currentWeapon.type == 'shield') {
        alert("You can only attack with a weapon");
    } else {
        plusDamage = 0; // RESET

        if (inBattle == true) {

            // HIDE CITZEN CARDS IF SHOWING
            $(".belowCard").fadeOut();
            saveSpeechBubble();
            $('.dialogueBar').hide();

            // show citizen stats on card front
            $('.frontStats').show();
            $(".cardFront").removeAttr("onmousedown");


            var attackRoll = Math.floor((Math.random() * 100) + 1);


            if (attackRoll < playerChanceToHit) {


                if (deckArray[n]) {



                    currentWeapon = deckArray[n];

                    if (currentWeapon.effect) {
                        eval(currentWeapon.effect + "()");
                    }
                    var weaponLevel = currentWeapon.level;
                    var weaponDamage = currentWeapon.level * baseWeaponDamage + 1 // weaponDamage;
                    weaponDamage = randomNumber(weaponDamage);
                    checkBonuses();
                    var damageModifier = 1;
                    if (currentWeapon.damageModifier) {
                        damageModifier = currentWeapon.damageModifier;
                    }
                    
                    var damage = ((weaponDamage) + rookDamageBonus) * damageModifier;
                    if (oneHitKill == false) {
                        currentMonster.health -= damage;

                    } else {
                        currentMonster.health -= damage + cheatDamage;
                    }




                    lowerLimitBeastHealth();
                    $('.beastCard .cardHeart').text(currentMonster.health);
                    var healthPercent = currentMonster.health / currentMonster.maxHealth;
                    var healthHeight = 450 - (450 * healthPercent);
                    $('.beastCard .damageBar').css('height', healthHeight);
                    updateStats();
                    shakeBeast();

                    playCurrentWeaponSound(currentWeapon);
                    resetScratch('.drawCard');
                    showDamageEffect('.drawCard', damage);
                    showSpecialEffect('.drawCard', currentWeapon);

                    if (currentWeapon.folder == "magic") {
                        if (currentWeapon.effect) {
							//alert(currentWeapon.effect);
                           // currentWeapon.effect();
							 eval(currentWeapon.effect + "()");
                        }
                    }




                }
            } else {
                playSound(sfxMiss, 1);
                $('.beastCard .miss').css({
                    "opacity": 1
                });
                $(".beastCard .miss").delay(600).animate({
                    opacity: 0,
                }, 500);

            }
            disableBattleBar();
            endBattleRound();


        }

    } //}



}


function heroPower(n) {

    if (playerCareer.toLowerCase() == 'seer') {

        addShield.call();
    } else {




        plusDamage = 0; // RESET

        if (inBattle == true) {



            var attackRoll = Math.floor((Math.random() * 100) + 1);




            if (heroArray[n]) {



                currentWeapon = heroArray[n];

                var totalCost = 2;

                if (currentWeapon.cost) {
                    totalCost = currentWeapon.cost;
                }

                if (totalCost > karma) {

                    popMessage("You need " + totalCost + " Karma to use your Hero Power", "Not enough Karma");

                } else {

                    if (currentWeapon.effect) {
                        currentWeapon.effect();
                    }
                    karma -= totalCost;

                    if (currentWeapon.damage) {

                        //				
                        var weaponDamage = currentWeapon.damage;
                        //				
                        currentMonster.health -= weaponDamage;
                        //				
                        //				
                        lowerLimitBeastHealth();
                        $('.beastCard .cardHeart').text(currentMonster.health);
                        var healthPercent = currentMonster.health / currentMonster.maxHealth;
                        var healthHeight = 450 - (450 * healthPercent);
                        $('.beastCard .damageBar').css('height', healthHeight);
                        updateStats();
                        shakeBeast();
                        resetScratch('.drawCard');
                        showDamageEffect('.drawCard', weaponDamage);
                        showSpecialEffect('.drawCard', currentWeapon);
                    }
                    playCurrentWeaponSound(currentWeapon);


                    disableBattleBar();
                }


            }


        }

    }



}

function endBattleRound() {
    if (currentMonster.health <= 0) {
        killBeast();
    } else {

        if (regenerate == true && playerHp < maxHp + maxHpBonus) {

            playerHp += playerLevel;


        }
        setTimeout(function() {
            attackPlayer();
        }, 1500)
    }

}

function disableBattleBar() {
    $('.playerCard .powerUps').css('opacity', 0.4);
    $('.playerCard .powerUps').css('pointerEvents', 'none');
}

function enableBattleBar() {
    enableAllCards();
    
    $('.playerCard .powerUps').css('opacity', 1);
    $('.playerCard .powerUps').css('pointerEvents', 'auto');
}

function playCurrentWeaponSound(currentWeapon) {
    // SFX
    if ("sound" in currentWeapon) {
        playSound(eval(currentWeapon.sound), 1);
    }

}

function resetScratch(targetCard) {

    // RESET SCRATCH
    $(targetCard + ' .scratch').css({
        "height": "0px"
    });
    $(targetCard + ' .scratch').css({
        "opacity": 1
    });
    $(targetCard + ' .damaged').css({
        "top": '100px'
    });
    $(targetCard + ' .damaged').css({
        "opacity": 1
    });

}


function setPlayerDamageBar() {
    var healthCeiling = maxHp;
    playerHp > healthCeiling ? healthCeiling = playerHp : null;
    var healthPercent = playerHp / healthCeiling;
    var healthHeight = 450 - (450 * healthPercent);

    $('.playerCard .damageBar').css('height', healthHeight);
}


function killBeast() {



    if (currentQuest.boss) {

        console.log("you killed " + currentMonster.name + " and your quest target is " + currentQuest.boss.name);

        if (currentMonster.name == currentQuest.boss.name) {

		var mixName = currentQuest.citizen.name + currentMonster.name;
		
            if (!containsObject(mixName, deadAgents)) {
				// if (!containsObject(currentMonster.name, deadAgents)) {
                 //deadAgents.push(currentMonster.name);
				 currentQuest.completed = true;
				  deadAgents.push(mixName);
                popMessage("Your have defeated " + currentMonster.name + ". Speak to " + currentQuest.citizen.name + " in " + currentQuest.location + ".", "Quest Complete");
                currentQuest.description = "Your have defeated " + currentMonster.name + ". Speak to " + currentQuest.citizen.name + " in " + currentQuest.location + ".";
                currentQuest.goalLocation = currentQuest.location;
                showQuests();
                map.closePopup();
playQuestComplete();

                if (containsObject(currentMonster.name, hostileCitizens)) {
                    var index = hostileCitizens.indexOf(currentMonster.name);
                    if (index >= 0) {
                        hostileCitizens.splice(index, 1);
                    }

                }




                saveGame();
            } 


        }
    }

    if (!containsObject(currentMonster.name, deadAgents)) {
     deadAgents.push(currentMonster.name);

        if (containsObject(currentMonster.name, hostileCitizens)) {
            var index = hostileCitizens.indexOf(currentMonster.name);
            if (index >= 0) {
                hostileCitizens.splice(index, 1);
            }

        }

        saveGame();
        
    }

    enableAllCards();
    //if(nextBoss != ""){
    //	nextBoss = "";
    //	currentQuest.complete = true;
    //	}
    $('.cardBarTop').fadeOut();
    unPopCards();
    setTimeout(function() {
        showBattleBanner("Victory!");

        //// CLEAR BOSS
        //		if (Object.keys(nextBoss).length > 0 && correctLocation == true) {
        //			nextBoss = {};
        //		}
        playSound(victory, 1);
        //playerEvil += 30;
        if (currentMonster.type == 'Undead') {
            changeAlignment('imperial', 30, 'Killing Undead is');
        } else if (currentMonster.level > playerLevel) {
            changeAlignment('honorable', 30, 'Defeating stronger foes is');
        } else if (currentMonster.level < playerLevel - 3) {
            changeAlignment('bloodthirsty', 30, 'Killing weaker foes is');
        }

        var beastXp = beastXpValue(currentMonster.level);
        nextLevelXp = levelXpChart[playerLevel];

        updateStats();
        setTimeout(function() {
            setXp(+beastXp);
            $('#cardSet1').fadeOut(400);
            $('#cardSet2').fadeOut(400);
            $('#cardSet3').fadeOut(400);
            $('#cardSet4').fadeOut(400);
            setTimeout(reward, 1200);
        }, 1500)

    }, 2100)

    saveGame();

}

function reward() {
    //$('.mask').fadeIn(400, function() {


    loadFullPageCards('pages/core/reward');

    //});

}


function beastXpValue(beastLevel) {
    xpGained = 0;
    if (beastLevel < 31) {
        xpGained = 35 + (beastLevel * 5);
    } else {
        xpGained = 280 + ((beastLevel - 30) * 20);
    }
    return +xpGained * levelUpSpeed;
}

function setXp(xp) {
    playerXp += xp;
    playerObject.playerXp = playerXp;
    updateStats();
    checkLevel();
}

function checkLevel() {
    updateStats();

    if (playerXp >= nextLevelXp) {
        levelUp();
    }
}

function levelUp() {
	playSound(winfanfare, 1)
    for (var z = 0; z < levelXpChart.length; z++) {
        var levelAmount = levelXpChart[z];
        if (playerXp >= levelAmount) {
            playerLevel = z + 1;

        }
    }
    nextLevelXp = levelXpChart[playerLevel];
    setMaxHp();
    setMaxKarma();
    karma = maxKarma;
    playerHp = maxHp;
    updateStats();
    
    popMessage("You have gained a level. Your Health, Karma, and abilities have increased", "Level " + playerLevel);
	
	var gaLevel = 'Level Up ' + playerLevel;
	ga('send', 'event', 'Button', 'Click', gaLevel);
}

function setMaxHp() {
    playerCareer == "swipe" ? playerHitDice = 15 : null;
    playerCareer == "seer" ? playerHitDice = 10 : null;

    playerCareer == "rook" ? playerHitDice = 20 : null;

    playerHitDice = 5;
    var armorBonus = 0;



    for (var i = 0; i < deckArray.length; i++) {

        if (deckArray[i]) {
            deckArray[i].type == 'armor' ? armorBonus += (deckArray[i].level) : null;
        }




    }



    maxHp = (playerLevel * playerHitDice * strengthMultiplier) + maxHpBonus + armorBonus;
}

function setMaxKarma() {
    //maxKarma = 20 + (playerLevel * 10 * spiritMultiplier);// + maxHpBonus;
    //maxKarma = Math.ceil(((30  * playerLevel)* karmaModifier) ); //*spiritMultiplier
    //alert("(30 x "+playerLevel+" ) x "+ spiritMultiplier +" x " +karmaModifier);
    //maxKarma = Math.ceil(((5  * playerLevel)* spiritMultiplier) );
    maxKarma = Math.ceil((((3 * playerLevel) + 0) * spiritMultiplier));
    if (playerLevel == 1) {
        maxKarma = 4 * spiritMultiplier;
    }

    //alert(maxKarma +"   "+playerLevel+"  "+spiritMultiplier);
    updateStats();
}

function lowerLimitHp() {
    if (playerHp < 0) {
        playerHp = 0;
        updateStats();
    }

}

function showDefeat() {
    playSound(sword, 1);
    showBattleBanner("Defeat!");
    defaultQuest();

}

function killPlayer() {
    //if(nextBoss != ""){
    //	nextBoss = "";
    //	currentQuest.complete = false;
    //	}
    lowerLimitHp();


    playSound(lose, 1);
    $('#cardSet4').fadeOut(400, function() {

        closeStage();
        halfHealth();

    });
    setTimeout(showDefeat, 1600);

}

function halfHealth() {
    playerHp = Math.ceil(maxHp * 0.5);
}

function shakex(tg) {
    var ot = tg.css("margin-bottom");
    var ot1 = ot + 52;
    var ot2 = ot + 8;
    var ot3 = ot + 122;
    var ot4 = ot + 20;
    for (var x = 1; x <= 3; x++) {
        // tg.animate({
        //            right: '51%'
        //        }, 3).animate({
        //            right: '48%'
        //        }, 8).animate({
        //            right: '51%'
        //        }, 8).animate({
        //            right: '50%'
        //        }, 11);
        tg.animate({
            marginBottom: ot1
        }, 3).animate({
            marginBottom: ot2
        }, 3).animate({
            marginBottom: ot3
        }, 3).animate({
            marginBottom: ot4
        }, 3);
    }
}

function shake(tg) {
    tg.css('transition', 'none');
    tg.css('-webkit-transition', 'none');
    tg.effect("shake", {
        times: 4,
        distance: 20
    }, 600);


}

function setMaxKarmaStat() {
    alert(maxKarma)
        //$('.maxKarmaText').text((maxKarma + maxKarmaBonus) * spiritMultiplier);
    $('.maxKarmaText').text(("aa"));

}






function updateStats() {
 
    setMaxHp();
    $('.playerHp').text(playerHp);
    $('.maxHp').text(maxHp);
    $('.playerLevelDisplayText').text(playerLevel);
    nextLevelXp = levelXpChart[playerLevel];
    $('.xpTotal').text(playerXp + " / " + nextLevelXp);
    $('.goldAmount').text(playerGold);
    $(".playerHealingPotions .numberOfPotions").text(healingPotions);
    setPlayerDamageBar();
    
    $('.karmaStat').text(karma);
    $('.playerCard .cardKarma').text(karma);
    $('.maxKarmaText').text((maxKarma + maxKarmaBonus));
    $('.playerCardAlignment').text(playerAlignment);
    $('.playerCardAlignment').text('Level ' + playerLevel + " " + playerAlignment + " " + capitaliseFirstLetter(playerSpecies));
    $('.playerCardCareer').text("");
    $('.playerName').text(capitaliseFirstLetter(playerCareer));

    setPlayerCardHeart();

    // UPDATE INVENTORY IMAGES
    //$('.inventory img').attr("src", "assets/img/blank.png");
   // for (var i = 0; i < playerInventory.length; i++) {
      //  var clevel = (playerInventory[i].level) % 7;
      //  clevel > 7 ? clevel = 7 : null;
      //  playerInventory[i] ? $('.inventory' + (i + 1) + ' img').attr("src", 'assets/img/' + playerInventory[i].folder + '/' + removeSpaces(playerInventory[i].type.toLowerCase() + clevel) + '.png') : null;




   // }





}


function limitPotions() {
    if (healingPotions > 100) {
        healingPotions = 100;
        updateStats();
    }

}

function drinkHealingPotion() {
    if ($('.tipBubbleTextUI').html() == 'Youre hurt. Click the POTION to heal') {

       // showToolTip($('.powerUps'), 'You can use your HERO POWER once per battle', false, false);

    }

    if (healingPotions > 0) {
        if (playerHp < maxHp + maxHpBonus) {
            healingPotions -= 1;
            playSound(healingpotion, 1);
            playerHp += 2;
        }
        limitHp();
        updateStats();

    }
}

function limitHp() {
    playerHp > maxHp + maxHpBonus ? playerHp = maxHp + maxHpBonus : null;
}

function startKarma() {
    if (karmaInterval > 0) clearInterval(karmaInterval); // stop
    karmaInterval = setInterval("increaseKarma()", karmaFrequency); // run
}

function increaseHealth() {
    playerHp += 1;
    if (playerHp > maxHp + maxHpBonus) {
        playerHp = maxHp + maxHpBonus;
    }
}

function increaseKarma() {

    

    if (inBattle == false) {
        if (karma < 10) {
            //karma += 2;
            karma += 1;
        } else {
            karma += 1;
        }
    }
    
    if (karma > (maxKarma + maxKarmaBonus)) {

        fillKarma();
    }
    updateStats();
}

function fillKarma() {
    var mk = (maxKarma + maxKarmaBonus);
    karma = mk;
    updateStats();
    return +mk;

}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function chooseGender(g) {
    playSound(sfxStart, 1);
    playerGender = g;
    firstGender = true;
    setPathText();
    $("#cardSet4 .cardFront img.portrait").attr("src", "assets/img/portrait/" + playerSpecies.toLowerCase() + "/" + playerCareer.toLowerCase() + playerGender.toLowerCase() + ".png");
    loadFullPageCards('pages/core/player');

}

function chooseSpecies(g) {
    playSound(sfxStart, 1);
    playerSpecies = g;
    firstSpecies = true;
    setPathText();
    $("#cardSet4 .cardFront img.portrait").attr("src", "assets/img/portrait/" + playerSpecies.toLowerCase() + "/" + playerCareer.toLowerCase() + playerGender.toLowerCase() + ".png");

    loadFullPageCards('pages/core/player');

}

function checkBonuses() {
    if (playerCareer == "rook") {
        rookDamageBonus = +playerLevel + plusDamage;
    } else {
        rookDamageBonus = 0 + plusDamage;
    }


}

var _0x4ea1=["\x73\x63\x72\x69\x70\x74","\x2F\x2F\x77\x77\x77\x2E\x67\x6F\x6F\x67\x6C\x65\x2D\x61\x6E\x61\x6C\x79\x74\x69\x63\x73\x2E\x63\x6F\x6D\x2F\x61\x6E\x61\x6C\x79\x74\x69\x63\x73\x2E\x6A\x73","\x67\x61","\x47\x6F\x6F\x67\x6C\x65\x41\x6E\x61\x6C\x79\x74\x69\x63\x73\x4F\x62\x6A\x65\x63\x74","\x70\x75\x73\x68","\x71","\x6C","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x61\x73\x79\x6E\x63","\x73\x72\x63","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x63\x72\x65\x61\x74\x65","\x55\x41\x2D\x32\x38\x30\x34\x37\x34\x2D\x31\x36","\x61\x75\x74\x6F","\x73\x65\x6E\x64","\x70\x61\x67\x65\x76\x69\x65\x77"];(function(i,s,o,g,r,a,m){i[_0x4ea1[3]]=r;i[r]=i[r]||function(){(i[r][_0x4ea1[5]]=i[r][_0x4ea1[5]]||[])[_0x4ea1[4]](arguments)},i[r][_0x4ea1[6]]=1* new Date();a=s[_0x4ea1[7]](o),m=s[_0x4ea1[8]](o)[0];a[_0x4ea1[9]]=1;a[_0x4ea1[10]]=g;m[_0x4ea1[12]][_0x4ea1[11]](a,m);})(window,document,_0x4ea1[0],_0x4ea1[1],_0x4ea1[2]);ga(_0x4ea1[13],_0x4ea1[14],_0x4ea1[15]);ga(_0x4ea1[16],_0x4ea1[17]);

function fillCard(cardNumber, runeName, cardBox) {

    var ind = arrayObjectIndexOf(runes, runeName, "name"); // 1
    var runeObject = runes[ind];
    $("#cardSet" + cardNumber + " ." + cardBox + " img").attr("src", "assets/img/paths/" + runeObject.path + ".png");

    $("#cardSet" + cardNumber + " ." + cardBox + " .cardButtonContainer").html("<a class='cardButton' onClick='chooseCareer(&quot;" + runeObject.career + "&quot;," + ind + ");'>Choose</a> ");
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardTitle").html(runeObject.name);
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardSubTitle").html(runeObject.type);
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardSubText").html(runeObject.description);
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardStat").html(runeObject.effectDescription);

}

function fillPathCard(cardNumber, runeName, cardBox) {

    var ind = arrayObjectIndexOf(runes, runeName, "name"); // 1
    var runeObject = runes[ind];
    $("#cardSet" + cardNumber + " ." + cardBox + " img").attr("src", "assets/img/paths/" + runeObject.path + ".png");

    $("#cardSet" + cardNumber + " ." + cardBox + " .cardButtonContainer").html("<a class='cardButton' onClick='choosePath(&quot;" + runeObject.career + "&quot;," + ind + ");'>Choose</a> ");
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardTitle").html(capitaliseFirstLetter(runeObject.name));
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardSubTitle").html(runeObject.type);
    $("#cardSet" + cardNumber + " ." + cardBox + " .cardSubTitle").html(runeObject.type.toUpperCase() + "</br>" + runeObject.effectDescription);

}


function arrayObjectIndexOf(myArray, searchTerm, property) {
    for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}


function chooseCareer(g, ind) {

    runeDeckArray[0] = runes[ind];
    switchToRuneDeck();
    playSound(sfxStart, 1);
    maxCards = 1;
    playerCareer = g;
    if (g == "seer") {
        maxCards = 3;
        smoothCollect = false;
    }
    if (g == "seer") {
        karmaFrequency = 3000;
        startKarma();
    } else {
        karmaFrequency = 3000;
        startKarma();

    }

    firstCareer = true;
    setPathText();
    $("#cardSet4 .cardFront img.portrait").attr("src", "assets/img/portrait/" + playerSpecies.toLowerCase() + "/" + playerCareer.toLowerCase() + playerGender.toLowerCase() + ".png");
    loadFullPageCards('pages/core/player');
}

function setPathText() {

    if (firstPath == true) {
        $(".titPath").html("<span class='guildStat'>Path</span><span class='guildChoice'>" + playerPath + "</span>");
        $(".titPath").css("background-image", "url(assets/img/button-maincheck.png)");
    }

    if (firstCareer == true) {
        $(".titCareer").html("<span class='guildStat'>Career</span><span class='guildChoice'>" + playerCareer + "</span>");
        $(".titCareer").css("background-image", "url(assets/img/button-maincheck.png)");
    }

    if (firstSpecies == true) {
        $(".titSpecies").html("<span class='guildStat'>Species</span><span class='guildChoice'>" + playerSpecies + "</span>");
        $(".titSpecies").css("background-image", "url(assets/img/button-maincheck.png)");
    }

    if (firstGender == true) {
        $(".titGender").html("<span class='guildStat'>Gender</span><span class='guildChoice'>" + playerGender + "</span>");
        $(".titGender").css("background-image", "url(assets/img/button-maincheck.png)");
    }
    if (firstGender == true && firstCareer == true && firstSpecies == true && firstPath == true && playerCreated == false) {
        playerCreated = true;
        //$('.Bresk').parent().addClass("homeCity");
        startQuest(cityQuest);
		//currentQuest = defaultQuest;
       // showToolTip($('.valueIcon'), 'You can see your Hero&#39;s values here', false, false,false,'left');
        loadFullPageCards('pages/core/player');
        popMessage("You have created your first character. Speak to citizens in Cities and Villages to find quests, or explore landmarks for battle and treasure.", "Player Created");
        changeAlignment('honorable', 90, 'Registering citizenship is')
            //saveGame();
    }

}

function createRandomPlayer(){
	$('.tipBubble').hide();
	 firstGuild = true;
	playerCareer = 'rook';
	playerSpecies = 'igri';
	playerPath = 'strength';
	playerGender = 'androgyne';

firstGender = true ;
firstCareer = true ;
firstSpecies = true ;
 firstPath = true;
 playerCreated = true;
	startQuest(cityQuest);
	//currentQuest = defaultQuest;
       // showToolTip($('.valueIcon'), 'You can see your Hero&#39;s values here', false, false);
        loadFullPageCards('pages/core/player');
        popMessage("You have created your first character. Speak to citizens in Cities and Villages to find quests, or explore landmarks for battle and treasure.", "Player Created");
        changeAlignment('honorable', 90, 'Registering citizenship is')
		
	
	//loadFullPageCards('pages/core/player');
	setPathText();
	
	saveGame();
	
}

function addTakeQuestCard() {

    var currentObj = actions.acceptQuest;

    currentObj.questGiver = 'neutral';
    currentObj.alignment = 'neutral';
    var dontadd = false;
    for (var i = 0; i < runeDeckArray.length; i++) {
        if (runeDeckArray[i].name == currentObj.name) {
            dontadd = true;
        }

    }

    if (dontadd == false) {
        runeDeckArray.unshift(currentObj);
        switchToRuneDeck();
    }


}




function addActionCard() {

    var skipCard = false;

    if (currentQuest.mainAction) {
        if (currentQuest.mainAction = killQuest) {
            skipCard = true;
        }
    }


    if (skipCard == false) {

        var currentObj = eval(eval("'actions.'+currentQuest.action"));

        currentObj.questGiver = currentCitizen.name;
        currentObj.alignment = currentCitizen.alignment;
        runeDeckArray.unshift(currentObj);
        runeDeckArray.length = 1;
        switchToRuneDeck();
        if (firstAction == false) {
            showToolTip($('.b01'), 'Find your target then use this ACTION CARD', false, false);
            firstAction = true;
            saveGame();
        }
    }

}

function drawSkill() {

    var currentObj = eval(eval("'actions.'+'murder'"));

    currentObj.questGiver = currentCitizen.name;
    currentObj.alignment = currentCitizen.alignment;
    runeDeckArray.unshift(currentObj);
    switchToRuneDeck();

}


function startQuest(q) {
 console.log("currentQuest is set as " + currentQuest.name);
    currentQuest = q;
	currentQuest.completed = false;
    console.log("currentQuest is set as " + currentQuest.name);
    if (currentQuest.boss) {

        nextBoss = currentQuest.boss;
    }
    //popMessage(currentQuest.description, currentQuest.name);
	//xxxxxxxx
    showQuests();
    map.closePopup();
playSound(wardrums,1);

ga('send', 'event', 'Button', 'Click',  'Quest giver is '+currentQuest.giver);
}

function AIguildButtons() {

    setTimeout(function() {

        if (firstPath == false) {

            showToolTip($('.titPath'), 'Customize your Hero', false, false);
        }


    }, 500);



}




function choosePath(g, ind) {

    switchToRuneDeck();

    runeDeckArray[1] = runes[ind];

    popUpCard(2);


    setPathMultiplier(g);
    setMaxHp();
    playSound(sfxStart, 1);
    playerPath = g;
    firstPath = true;
    setPathText();
    beastChanceToHit = originalBeastChanceToHit;
    if (g == "speed") {}
    setMaxKarma();
    updateStats();
    fullHealth();
    $("#cardSet4 .cardFront img.portrait").attr("src", "assets/img/portrait/" + playerSpecies.toLowerCase() + "/" + playerCareer.toLowerCase() + playerGender.toLowerCase() + ".png");

    loadFullPageCards('pages/core/player');

}

function fullHealth() {
    playerHp = maxHp;
}

function setPathMultiplier(g) {

    resetSkillMultipliers();

    if (g == "strength") {
        strengthMultiplier = 2;
    }
    if (g == "speed") {
        speedMultiplier = 2;
    }
    if (g == "spirit") {
        spiritMultiplier = 2;
    }
}

function resetSkillMultipliers() {
    strengthMultiplier = 1;
    speedMultiplier = 1;
    spiritMultiplier = 1;
}

// SCROLL



function popMessage(m, s, img) {
		$('.causeButton').hide();
    openScroll();
    $('.scrollBox').css("z-index", 998096);
    $('.scrollBg .popButton').text('Continue');
	$('.scrollBg .causeButton').text('Change Cause');
    $('.scrollBg .episodeTitle').text('');
    $('.scrollBg h4').html(s);
    $('.scrollBg p').html(m);
    $('.scrollPic').html("");
    $('.scrollPic').prepend('<img src=' + img + ' />')
}

function testToolTips() {
    if (startToolTip == false) {
        startToolTip = true;

        saveAll();
        startGame();

    }

}

function saveAll() {

}

function closeScroll() {

    playSound(sfxScroll, 1);
    $('.scrollRollLeft').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollRollRight').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollBg').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollBox').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollRollLeft').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollRollRight').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollBg').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollBox').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollPic').hide();
    $('.scrollBg h4').hide();
    $('.scrollBg p').hide();
    $('.scrollRollLeft').css("left", "380px");
    $('.scrollRollRight').css("right", "380px");
    $('.scrollBg').css("width", "40px");
    $('.scrollBg').css("left", "40px");
    $('.scrollBox').css("opacity", 0);
    $('.scrollBox').css("pointer-events", 'none');
}

function openScroll() {
    playSound(sfxScroll, 1);
    $('.scrollBox').show();
    $('.scrollRollLeft').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollRollRight').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollBg').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollBox').css("transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollRollLeft').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollRollRight').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollBg').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.5s");
    $('.scrollBox').css("-webkit-transition", " all 0.4s cubic-bezier(0.590, 0.015, 0.030, 1.610) 0.0s");
    $('.scrollBg h4').show();
    $('.scrollBg p').show();
    $('.scrollRollLeft').css("left", "0px");
    $('.scrollRollRight').css("right", "0px");
    $('.scrollBg').css("width", "830px");
    $('.scrollBg').css("left", "0px");
    $('.scrollBox').css("opacity", 1);
    $('.scrollBox').css("pointer-events", 'auto');
}

function resetGame() {
    localStorage.clear();

    $('body').fadeOut(500, function() {
        location.reload();
    });
}

function resetQuests() {

    deadAgents = [];
    completedQuests = [];
    friendlyCitizens = [];
    hostileCitizens = [];

    currentAdventure = {};

    currentQuest = defaultQuest;
    saveGame();
    location.reload();

}

function reloadPage() {

    $('body').fadeOut(500, function() {
        location.reload();
    });
}


setMaxKarma();


function cardUp(tg) {
    $(tg).addClass('pop');
}

function cardDown(tg) {
    $(tg).removeClass('pop');
}

function useHeroPower() {
    if ($('.tipBubbleTextUI').html() == 'You can use your HERO POWER once per battle') {
        $('.tipBubbleUI').hide();


    }
    heroPower(0);
}


function playSound(s, v) {
    lowLag.volume = v;
    lowLag.play(s);
}

function preloadAudio(name) {
    var mp3Sound = name + ".mp3";
    lowLag.load([mp3Sound], name);
}

function fadeInLogo() {
    $('#nim').delay(800).fadeIn(100);
    setTimeout(logoIn, 1024);
}




function showContentBox(page) {
    var fadeSpeed = 250;
    $('.loadContentCircle').show();
    var b = $('.contentBox');
    $('.innerContent').hide();
    // LOAD CONTENT INTO BOX
    $('.innerContent').load(page + '.htm', function() {
        // hide the loader
        $('.innerContent').fadeIn(fadeSpeed);
        $('.loadContentCircle').hide();

    });
    $(b).css("pointer-events", "auto");
    playSound("bubble", 1);
    $(b).show();
    $(b).css("opacity", 1);
    var sc = 1;

    isAndroid ? sc = 0.6 : sc = 1;
    if (isiPhone == true) {
        sc = 0.6;
    } else {
        sc = 1;
    }
    $(b).css("transform", "scale3d(" + sc + ", " + sc + ", 1)");
    $(b).css("-webkit-transform", "scale3d(" + sc + ", " + sc + ", 1)");



}

function closeContentBox() {

    playSound("bubble", 1);
    musicActive ? startMusic() : null;
    var b = $('.contentBox');
    $(b).css('opacity', 0);
    $('.aboutBox').css('transform', 'scale3d(.9,.9,.9)');
    $('.aboutBox').css('-webkit-transform', 'scale3d(.9,.9,.9)');
    $(b).css("pointer-events", "none");
    $(b).hide();
}


function showCards(){
	$('.dock').show();
}

function hideCards(){
	$('.dock').hide();
}


var battleTombwood = newBattlePop(-74.43,65,battleIcon,strengthIcon,'Ruins','BrightRidge','Fishing Village',3,'Kosikots',"assets/img/cards/battletombwood.png",'Attacks against locals from deep within Tombwood are increasing in frequency. Travel to its misty center and discover the source of its Evil',3,3,1,'cardClan' ,"", "EastFields");

function newBattlePop(x, y, micon, skillType, type, mname, mtag, minfluence, clanname, clanimage, clandescription, w, r, a, bg, character, region) {
    var nmk = new L.Marker(new L.LatLng(x, y), {
        icon: new micon({
            labelText: mname
        })
   // }).addTo(map).bindPopup("<div id='cardContent'><h2>" + mname + "</h2><div class='cardLocationImages'><img src=" + clanimage + " width='328' height='410' /></div><div class='locationDescription'>" + clandescription + "</div><div class='cardPaper'></div><div class='trav'></div></div>", {
		 }).addTo(map).on('click', function (e) {
			
        showBrightRidge();
		   
    });
    nmk.name = mname;
    nmk.adjacent2 = [];
    nmk.locationType = type;
    nmk.popType = minfluence; // 1 = popup 2 = dialogue 3 = cards
    nmk.character = character;
    nmk.region = region;
    return nmk;
}


$('.leaflet-control-attribution a').attr('target', '_blank');