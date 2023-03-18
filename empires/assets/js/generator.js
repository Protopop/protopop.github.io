// PROCEDURAL ALGORITHM
// ------------------------------------------------------------------
var seed = 8;
var worldSeed = seed;
worldSeed = 22;

var landmarkId = 0;

var CustomRandom = function(max, min) {
    max = max || 1;
    min = min || 0;

    seed = ((seed) * 9301 + 49297) % 233280;
    var rnd = seed / 233280;

    return min + rnd * (max - min);
}


var pointArray = [];
var minWidthSlice = 5;

var squeezeFactor = 0.85;
var distanceFromOrigin = 2;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];



var chance1 = new Chance(worldSeed);




// GLOBAL VARS
// ------------------------------------------------------------------

var numberOfLandmarksInProvince = 5;
numberOfLandmarksInProvince = 5;

var landmarkDensity = 3;
var dontDuplicate = [];

// LOAD CUSTOM WORLD VALUES
// ------------------------------------------------------------------




//
//if(localStorage.getItem('worldSeed') != null){
//	var retrievedObjecta = localStorage.getItem('worldSeed');
//	worldSeed = JSON.parse(retrievedObjecta);
//	//worldSeed = localStorage.getItem('worldSeed');
//}
//
//if(localStorage.getItem('allowProceduralCitizenValues') != null){
//	var retrievedObjectb = localStorage.getItem('allowProceduralCitizenValues');
//	allowProceduralCitizenValues = JSON.parse(retrievedObjectb);
//	
//	//var tp = localStorage.getItem('allowProceduralCitizenValues');
//	//tp=="true"?allowProceduralCitizenValues = true:allowProceduralCitizenValues = false;
//}
//




// GLOBAL PLACEHOLDER VARIABLES - TEMPORARY
// ------------------------------------------------------------------

// Agent
var agentPath = "";
var agentGender = "";
var agentSpecies = "";
var agentCareer = "";
var agentAlignment = "";
var agentName = "";
var agentMethodHostile = "";
var agentMethodFriendly = "";

var landmarkType = "";

var currentContinent = "";

//var currentRegion = "";
var currentProvince = "";
var currentCity = {};
var currentAgent = "";
var currentCitizen = {};
var landmarkLevel = 1;




var targetTypeNow = "";
var masterAction = "";


// THESE WILL BE OBJECTS - PERSISTENT
// ------------------------------------------------------------------

var cityStats = "";
var locationContent = "";
var description = "";

var continents = "<br>Continents: <br>";
var countries = "<br>Countries: <br>";
var regions = "<br>Regions: <br>";
var provinces = "<br>Provinves: <br>";
var cities = "<br>Cities: <br>";
var landmarks = "<br>Landmarks: <br>";
var agents = "<br>Agents: <br>";




// INITIALIZE
// ------------------------------------------------------------------

createWorld();




// FUNCTIONS
// ------------------------------------------------------------------

function setSeed() {

    seed = parseInt(document.getElementById('seed')
        .value);
}




// CONTINENTS (ex. NIMIA, USAKA)
// ------------------------------------------------------------------

function createWorld() {

    clearDescription();
    //setSeed();
    var numberOfContinents = ril.continents.length;

    for (var i = 0; i < numberOfContinents; i++) {

        currentContinent = ril.continents[i];
        createCountries(currentContinent);
        continents += currentContinent.name + ", ";
        var desc = "";
        if (currentContinent.description) {
            desc = currentContinent.description;
        }
        // ADD CONTINENT ICON TO MAP
        if (currentContinent.position) {
            currentContinent.icon = newLabel(currentContinent.position[0], currentContinent.position[1], currentContinent.name, removeSpaces(currentContinent.name.toLowerCase()) + ".jpg", desc, 'continentLabel', 'neutral', 'neutral');
            //locationArray.push(currentContinent.icon.name);
        }
    }
    //alert(locationArray);
    document.getElementById("describe")
        .innerHTML += continents + "<br>" + countries + "<br>" + regions + "<br>" + provinces + "<br>" + cities + "<br>" + agents + "<br>" + landmarks;
}




// COUNTRIES (ex. OPEN COAST, SAVAR)
// ------------------------------------------------------------------

function createCountries(currentContinent) {

    if (currentContinent.countries) {

        var numberOfCountries = currentContinent.countries.length;

        for (var i = 0; i < numberOfCountries; i++) {
            currentCountry = currentContinent.countries[i];
            createRegions(currentCountry);
            countries += currentCountry.name + ", ";
            var desc = "Its people are often described as frivolous, and perhaps rightly so. ";
            if (currentCountry.description) {
                desc = currentCountry.description;
            }

            var countryAlignment = 'neutral';
            countryAlignment = setAlignment(alignment);
            if (currentCountry.alignment) {
                countryAlignment = currentCountry.alignment;
            }
            countryAlignment += " Nation : " + calculateOutlook('politics', countryAlignment) + ", " + calculateOutlook('religion', countryAlignment) + " and " + calculateOutlook('economy', countryAlignment);

            // ADD COUNTRY ICON TO MAP
            if (currentCountry.position) {
                currentCountry.icon = newLabel(currentCountry.position[0], currentCountry.position[1], currentCountry.name, removeSpaces(currentCountry.name.toLowerCase()) + ".jpg", desc, "countryLabel", countryAlignment, countryAlignment);
                //locationArray.push(currentCountry.icon.name);
            }
        }
    }
}




// REGIONS (ex. NINJISULU, ZEA)
// ------------------------------------------------------------------

function createRegions(currentCountry) {

    if (currentCountry.regions) {

        var numberOfRegions = currentCountry.regions.length;

        for (var i = 0; i < numberOfRegions; i++) {
            currentRegion = currentCountry.regions[i];
            createProvinces(currentRegion);
            regions += currentRegion.name + ", ";
            var desc = "";
            if (currentRegion.description) {
                desc = currentRegion.description;
            }

            var countryAlignment = 'neutral';
            countryAlignment = setAlignment(alignment);
            //console.log(currentCountry.name+" : "+countryAlignment);
            if (currentCountry.alignment) {
                countryAlignment = currentCountry.alignment;
            }
            //var sphereType = setSphere(sphere);
            var sphereType = sphere[(i + 1) % 3];
            if (currentRegion.sphere) {
                sphereType = currentRegion.sphere;
            }
            //countryAlignment = countryAlignment + " " + sphereType;

            // ADD REGION ICON TO MAP
            if (currentRegion.position) {
                var currentReg = newLabel(currentRegion.position[0], currentRegion.position[1], currentRegion.name, removeSpaces(currentRegion.name.toLowerCase()) + ".jpg", desc, 'regionLabel', currentRegion.alignment, countryAlignment);

                currentReg.alignment = countryAlignment;

                currentReg.sphere = sphereType;

                regionArray.push(currentReg);
            }
        }
    }
}




// PROVINCES (ex. EASTFIELDS, TOMBWOOD)
// ------------------------------------------------------------------

function createProvinces(currentRegion) {

    if (currentRegion.provinces) {

        var numberOfProvinces = currentRegion.provinces.length;

        for (var i = 0; i < numberOfProvinces; i++) {
            currentProvince = currentRegion.provinces[i];
            createLandmarks(currentProvince);
            provinces += currentProvince.name + ", ";
            var desc = "";
            if (currentProvince.description) {
                desc = currentProvince.description;
            }
            // ADD PROVINCE ICON TO MAP
            if (currentProvince.position) {
                var level = currentProvince.level;
                newLabel(currentProvince.position[0], currentProvince.position[1], currentProvince.name, removeSpaces(currentProvince.name.toLowerCase()) + ".jpg", desc, 'provinceLabel', level, currentProvince.alignment, null);
            }
        }
    }
}



function isPointInPoly(poly, pt) {
    for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1] < poly[i][1])) && (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0]) && (c = !c);
    return c;
}



function createPointArray(bottom, top, left, right) {



    var xnum = landmarkDensity;
    var ynum = landmarkDensity;


    var width = Math.abs(left - right).toFixed(2);
    var height = Math.abs(top - bottom).toFixed(2);
    //alert("width: "+width+"     height: "+height);
    var widthSlice = Math.abs(width * squeezeFactor / xnum).toFixed(2);
    var heightSlice = Math.abs(height * squeezeFactor / ynum).toFixed(2);
    //alert(widthSlice);
    if (widthSlice < minWidthSlice) {
        widthSlice = minWidthSlice;
    }

    pointArray = [];
    //alert(pointArray);
    for (var i = 0; i < xnum; i++) {
        for (var j = 0; j < ynum; j++) {
            var xx = (left + widthSlice * (i + 1)).toFixed(2);
            var yy = (top - heightSlice * (j + 1)).toFixed(2);
            var tArray = [yy, xx];

            if (isPointInPoly(currentProvince.mapArea, tArray)) {
                pointArray.push(tArray);
            }
        }

    }

    // create shuffler
    //alert(pointArray.length);
    var shuffler = [];
    for (var i = 0; i < pointArray.length; i++) {
        shuffler.push(i);

    }
    //alert(shuffler);
    shuffler = chance1.shuffle(shuffler);
    //alert(shuffler);
    //alert(pointArray);

    pointArray = chance1.shuffle(pointArray);
    //	alert(pointArray);


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




// LANDMARKS
// ------------------------------------------------------------------
function createLandmarks(currentProvince) {



    if (!currentProvince.locationGrid) {
        currentProvince.locationGrid = [];
    }
    if (currentProvince.locationGrid) {
        var currentNumberOfLandmarksInProvince = numberOfLandmarksInProvince;
        var locationGridLength = currentProvince.locationGrid.length;

        if (currentProvince.mapArea) {


            var leftBound = currentProvince.mapArea[0][1];
            var rightBound = currentProvince.mapArea[0][1];
            var topBound = currentProvince.mapArea[0][0];
            var bottomBound = -currentProvince.mapArea[0][0];


            for (var ii = 0; ii < currentProvince.mapArea.length; ii++) {

                if (currentProvince.mapArea[ii][0] < bottomBound) {
                    bottomBound = currentProvince.mapArea[ii][0];
                }
                if (currentProvince.mapArea[ii][0] > topBound) {
                    topBound = currentProvince.mapArea[ii][0];
                }

                if (currentProvince.mapArea[ii][1] < leftBound) {
                    leftBound = currentProvince.mapArea[ii][1];
                }
                if (currentProvince.mapArea[ii][1] > rightBound) {
                    rightBound = currentProvince.mapArea[ii][1];
                }

            }

            //	alert("bottom: "+ bottomBound + "    top: "+ topBound +"    left: "+ leftBound +"    right: "+ rightBound);

            createPointArray(bottomBound, topBound, leftBound, rightBound);
            //alert(currentProvince.locationGrid);
            currentProvince.locationGrid = [];
            // shuffle(pointArray);


            //pointArray.length = numberOfLandmarksInProvince;

            currentProvince.locationGrid = pointArray;
            //xxxxxxxxxx

            //alert(currentProvince.locationGrid);
            currentNumberOfLandmarksInProvince = pointArray.length;



            if (currentNumberOfLandmarksInProvince > numberOfLandmarksInProvince) {
                currentNumberOfLandmarksInProvince = numberOfLandmarksInProvince
            }


            locationGridLength = pointArray.length;

            //	var poly1 = L.polygon([
            //    currentProvince.mapArea
            //]).addTo(map);

        }


        //alert(currentProvince.name +"    "+currentProvince.locationGrid.length);

        //alert(('0.'+Math.sin(1).toString().substr(6)));

        if (locationGridLength < numberOfLandmarksInProvince) {
            currentNumberOfLandmarksInProvince = locationGridLength;
        }

        // OVERIDE max landmarks
        if (currentProvince.maxLandmarks) {
            //alert(currentProvince.maxLandmarks);
            currentNumberOfLandmarksInProvince = currentProvince.maxLandmarks;
        }
        //alert( currentNumberOfLandmarksInProvince+" "+currentProvince. name);

        for (var i = 0; i < currentNumberOfLandmarksInProvince; i++) {

            var citizenArray = [];


            //var pf = Math.round(CustomRandom(0, currentNumberOfLandmarksInProvince));
            //alert(pf);


            fetchLandmark(landmarkKind);
            landmarks += currentProvince.name + ": " + landmarkType + "   <br>";
            var landmarkName = landmarkType;
            var prefixIndex = Math.round(CustomRandom(0, landmarkPrefix[landmarkType.toLowerCase()].length) - 1);
            var suffixIndex = Math.round(CustomRandom(0, landmarkSuffix[landmarkType.toLowerCase()].length) - 1);
            var nm = landmarkPrefix[landmarkType.toLowerCase()][prefixIndex];
            var nm2 = landmarkSuffix[landmarkType.toLowerCase()][suffixIndex];


            //			//// CHECK IF BASE NAME ALREADY EXISTS
            ////			
            //var baseName = capitaliseFirstLetter(nm) + capitaliseFirstLetter(nm2);
            ////			var uniqueSuffix = "";
            //////			
            //		for (var g = 0; g < doubleNames.length; g++) {
            ////				
            ////				//alert(capitaliseFirstLetter(nm) + capitaliseFirstLetter(nm2)+"   "+doubleNames);
            //			 if (containsObject(baseName, doubleNames)) {
            //					 alert(baseName+" already exists in "+currentProvince.name);
            //////					// alert(capitaliseFirstLetter(nm) + capitaliseFirstLetter(nm2));
            //				// uniqueSuffix = "Bree";
            ////					 baseName+=uniqueSuffix;
            //		 } else {
            //			 
            //			 doubleNames.push(baseName);
            //		 }
            ////				
            //		}

            //			//alert(doubleNames);


            landmarkName = capitaliseFirstLetter(nm) + capitaliseFirstLetter(nm2) + i;
            //uniqueSuffix = "";
            //alert(landmarkName);

            var alignmentType = setAlignment(alignment);
            var sphereType = setSphere(sphere);
            //capitaliseFirstLetter(landmarkSuffix.woods[suffixIndex])).toString();
            //alert(nm+nm2);
            //fetchLevel();
            landmarkLevel = currentProvince.level;
            var music = "";
            if (currentProvince.music) {
                music = currentProvince.music;
            } else {
                music = "fairy";
            }

            var desc = "A " + alignmentType + " " + landmarkType + " located in the heart of " + currentProvince.name;
            var desc = "Draw 1 " + landmarkType + " card";

            //var randomX = distanceFromOrigin;

            //var randomX = (Math.random() * (distanceFromOrigin) - (distanceFromOrigin * 0.5)).toFixed(2);
            //var randomY = ((Math.random() * (distanceFromOrigin) - (distanceFromOrigin * 0.5)).toFixed(2))*0.2;

            var randomX = chance1.floating({
                min: 0,
                max: distanceFromOrigin
            }) - (distanceFromOrigin * 0.5);
            var randomY = (chance1.floating({
                min: 0,
                max: distanceFromOrigin
            }) - (distanceFromOrigin * 0.5)) * 0.2;
            //randomY = 0;

            //	alert(parseFloat(+currentProvince.locationGrid[i][0])+parseFloat(randomY) + "     "+currentProvince.locationGrid[i][0]);
            var locationX = parseFloat(+currentProvince.locationGrid[i][1]) + parseFloat(randomX);
            var locationY = parseFloat(+currentProvince.locationGrid[i][0]) + parseFloat(randomY);

            //locationX = parseFloat(+currentProvince.locationGrid[i][1]);
            //locationY = parseFloat(+currentProvince.locationGrid[i][0]);

            randomY = distanceFromOrigin;

            // OVERRIDE FOR URBAN
            if (currentProvince.urban) {
                var numberOfCities = currentProvince.urban.length;
                //console.log(numberOfCities +" cities in "+ currentProvince.name);

                if (i < numberOfCities) {

                    var currentCityCitizens = {};


                    currentCity.name = currentProvince.urban[i];
                    currentCityType = currentProvince.urbanTypes[i];
                    //currentCity.alignment = "rebel";

                    //alert(currentCityCitizens[0].name);
                    //alert(currentCity.name);
                    //console.log(citizenArray);
                    //						console.log(citizenArray[0]);
                    //						console.log(citizenArray[1]);
                    //						console.log(citizenArray[2]);

                    citizenArray.push(returnAgent());
                    citizenArray.push(returnAgent());
                    citizenArray.push(returnAgent());

                    allCitizens.push(returnAgent());
                    allCitizens.push(returnAgent());
                    allCitizens.push(returnAgent());
					
					

                    // MUTATE ALIGNMENTS

                    //citizenArray[0].alignment = alignmentType;
                    //					citizenArray[1].alignment = alignmentType;
                    //					citizenArray[2].alignment = alignmentType;


                    // MUTATE SPHERE
                    //citizenArray[0].sphere = sphereType;
                    citizenArray[1].sphere = sphereType;
                    citizenArray[2].sphere = sphereType;
                    var valueDominant = false;

                    if (valueDominant == true) {
                        citizenArray[0].sphere = "Politics";
                        citizenArray[1].sphere = "Religion";
                        citizenArray[2].sphere = "Economy";
                    }



                    if (currentProvince.citizens) {


                        for (var f = 0; f < currentProvince.citizens[0].length; f++) {


                            //alert("citizen");
                            citizenArray[f].name = currentProvince.citizens[0][f].name;
                            citizenArray[f].path = currentProvince.citizens[0][f].path;
                            if (allowProceduralCitizenValues == false) {
                                citizenArray[f].alignment = currentProvince.citizens[0][f].alignment;
                            }
                            citizenArray[f].career = currentProvince.citizens[0][f].career;

                            if (currentProvince.citizens[0][f].karma) {
                                citizenArray[f].karma = citizenArray[f].karma + currentProvince.citizens[0][f].karma;
                            }
                            citizenArray[f].description = currentProvince.citizens[0][f].description;
                            citizenArray[f].img = currentProvince.citizens[0][f].img;
                            if (allowProceduralCitizenValues == false) {
                                citizenArray[f].sphere = currentProvince.citizens[0][f].sphere;
                            }


                           // var cArray = eval('mainMethod.' + citizenArray[f].alignment.toLowerCase() + '[0]');
//                            var cArray2 = eval('mainMethod.' + citizenArray[f].alignment.toLowerCase() + '[1]');
//
//
//
//                            var itemIndex = chance1.natural({
//                                min: 0,
//                                max: cArray.length - 1
//                            });
//                            var itemIndex2 = chance1.natural({
//                                min: 0,
//                                max: cArray2.length - 1
//                            });
                            // alert(itemIndex);
                            //var itemIndex = Math.round(CustomRandom(0, mainMethod.length) - 1);
                            //agentMethod  = mainMethod[itemIndex];
                            // agentMethod  = mainMethod[itemIndex];

                            // agentMethodHostile = eval('mainMethod.'+agentAlignment.toLowerCase()+'[0][itemIndex]');
                            // agentMethodFriendly = eval('mainMethod.'+agentAlignment.toLowerCase()+'[1][itemIndex2]');
//
//                            agentMethodHostile = cArray[itemIndex];
//                            agentMethodFriendly = cArray2[itemIndex2];
//
//                            citizenArray[f].method = cArray[itemIndex];
//                            citizenArray[f].methodFriendly = cArray2[itemIndex2];
//
//
//
//                            if (currentProvince.citizens[0][f].method) {
//                                citizenArray[f].method = currentProvince.citizens[0][f].method;
//                                //citizenArray[f].methodFriendly = currentProvince.citizens[0][f].method;
//                                //alert("boo  "+citizenArray[f].name+"   "+citizenArray[f].methodFriendly.type);
//                            };
//                            if (currentProvince.citizens[0][f].methodFriendly) {
//                                //alert("method friendly exists");
//                                //citizenArray[f].method = currentProvince.citizens[0][f].method;
//                                citizenArray[f].methodFriendly = currentProvince.citizens[0][f].methodFriendly;
//                                //alert("boo  "+citizenArray[f].name+"   "+citizenArray[f].methodFriendly.type);
//                            };
//							
							
							
							
							if(!containsObject(citizenArray[f].name, dontDuplicate)){
								dontDuplicate.push(citizenArray[f].name);
								
								var tempO = [];
								tempO = citizenArray[f];
								tempO.origin = currentCity.name;
								
							fullCitizens.push(tempO);
							//console.log(citizenArray[f].name);
							//console.log(tempO.origin);
							}
							
							
                            //alert(citizenArray[f].career);

                            //alert( citizenArray[f].name+"  "+ citizenArray[f].alignment);
                            //alert( "   "+citizenArray[f].method.type);
                            //alert( "   "+currentProvince.citizens[0][f].method.type+"   "+currentProvince.citizens[0][f].methodFriendly.type);

                        }


                    }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					//// ALL CITIZENS REDUNDANT
//					
//					
//					if (currentProvince.citizens) {
//
//
//                        for (var f = 0; f < currentProvince.citizens[0].length; f++) {
//
//
//                            //alert("citizen");
//                            allCitizens[f].name = currentProvince.citizens[0][f].name;
//							console.log("all citizens "+allCitizens[f].name);
//                            allCitizens[f].path = currentProvince.citizens[0][f].path;
//                            if (allowProceduralCitizenValues == false) {
//                                allCitizens[f].alignment = currentProvince.citizens[0][f].alignment;
//                            }
//                            allCitizens[f].career = currentProvince.citizens[0][f].career;
//
//                            if (currentProvince.citizens[0][f].karma) {
//                                allCitizens[f].karma = allCitizens[f].karma + currentProvince.citizens[0][f].karma;
//                            }
//                            allCitizens[f].description = currentProvince.citizens[0][f].description;
//                            allCitizens[f].img = currentProvince.citizens[0][f].img;
//                            if (allowProceduralCitizenValues == false) {
//                                allCitizens[f].sphere = currentProvince.citizens[0][f].sphere;
//                            }
//
//
//                            var cArray = eval('mainMethod.' + allCitizens[f].alignment.toLowerCase() + '[0]');
//                            var cArray2 = eval('mainMethod.' + allCitizens[f].alignment.toLowerCase() + '[1]');
//
//
//
//                            var itemIndex = chance1.natural({
//                                min: 0,
//                                max: cArray.length - 1
//                            });
//                            var itemIndex2 = chance1.natural({
//                                min: 0,
//                                max: cArray2.length - 1
//                            });
//                            // alert(itemIndex);
//                            //var itemIndex = Math.round(CustomRandom(0, mainMethod.length) - 1);
//                            //agentMethod  = mainMethod[itemIndex];
//                            // agentMethod  = mainMethod[itemIndex];
//
//                            // agentMethodHostile = eval('mainMethod.'+agentAlignment.toLowerCase()+'[0][itemIndex]');
//                            // agentMethodFriendly = eval('mainMethod.'+agentAlignment.toLowerCase()+'[1][itemIndex2]');
//
//                            agentMethodHostile = cArray[itemIndex];
//                            agentMethodFriendly = cArray2[itemIndex2];
//
//                            allCitizens[f].method = cArray[itemIndex];
//                            allCitizens[f].methodFriendly = cArray2[itemIndex2];
//
//
//
//                            if (currentProvince.citizens[0][f].method) {
//                                allCitizens[f].method = currentProvince.citizens[0][f].method;
//                                //allCitizens[f].methodFriendly = currentProvince.citizens[0][f].method;
//                                //alert("boo  "+allCitizens[f].name+"   "+allCitizens[f].methodFriendly.type);
//                            };
//                            if (currentProvince.citizens[0][f].methodFriendly) {
//                                //alert("method friendly exists");
//                                //allCitizens[f].method = currentProvince.citizens[0][f].method;
//                                allCitizens[f].methodFriendly = currentProvince.citizens[0][f].methodFriendly;
//                                //alert("boo  "+citizenArray[f].name+"   "+citizenArray[f].methodFriendly.type);
//                            };
//                            //alert(citizenArray[f].career);
//
//                            //alert( citizenArray[f].name+"  "+ citizenArray[f].alignment);
//                            //alert( "   "+citizenArray[f].method.type);
//                            //alert( "   "+currentProvince.citizens[0][f].method.type+"   "+currentProvince.citizens[0][f].methodFriendly.type);
//
//                        }
//
//
//                    }
//					
					
						
					// ALL CITIZENS REDUNDANT
					
					
					
					
					//console.log(allCitizens);
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
                    //console.log(citizenArray[0]);



                    ////createAgents(currentCity.name);
                    //createAgents(currentCity.name);
                    //createAgents(currentCity.name);
                    //console.log(currentCitizen);
                    //console.log(citizenArray);
                    //						console.log(citizenArray[0]);
                    //						console.log(citizenArray[1]);
                    //						console.log(citizenArray[2]);
                    var desc = 'Buy items and speak with citizens in the ' + currentCityType;
                    currentCityType == "Church" ? desc = 'Visit Churches to heal your hero' : null;
                    currentCityType == "Guild" ? desc = 'Customize your character in Guilds' : null;
                    currentCityType == "Dungeon" ? desc = 'Draw a level ' + (currentProvince.level + 1) + ' beast card' : null;
                    currentCityType == "Council" ? desc = 'Convene the Council of Nations' : null;
                    landmarkType = currentCityType;
                    landmarkName = currentCity.name + i;

                    landmarkId++;
                    var uniqueId = landmarkId;

                    if (currentProvince.urbanDescription) {
                        if (currentProvince.urbanDescription[i]) {
                            desc = currentProvince.urbanDescription[i];
                        }
                    }
                }

                //createAgents(currentCity.name);

            }



            //currentCitizen.path = agentPath;
            //currentCitizen.species = agentSpecies;
            //currentCitizen.gender = agentGender;
            //currentCitizen.career = agentCareer;
            //currentCitizen.alignment = agentAlignment;
            //currentCitizen.name = agentName;


            //citizenArray.push(currentCitizen);

            //console.log(citizenArray);

            //	
            //	var currentObject = newMarker(locationY, locationX, mapIcon, landmarkType, 'Spiritual Center in Decine', 3, 'Nex Imperio', "assets/img/alignment/" + alignmentType.toLowerCase() + ".png", desc, 8, 1, 10, 'assets/img/landscapes/' + landmarkType.toLowerCase() + ".png", 'bresk_map', nm + nm2 + i, 'landmarkCard', landmarkLevel,alignment,music);

            var currentObject = newMarker(locationY, locationX, mapIcon, landmarkType, 'Spiritual Center in Decine', 3, 'Nex Imperio', "assets/img/alignment/" + alignmentType.toLowerCase() + ".png", desc, 8, 1, 10, 'assets/img/landscapes/' + landmarkType.toLowerCase() + ".png", 'bresk_map', landmarkName, 'landmarkCard', landmarkLevel, alignment, music, uniqueId);

            //var currentObject = newMarker(currentProvince.locationGrid[i][0]+randomY, currentProvince.locationGrid[i][1]+randomX, mapIcon, landmarkType, 'Spiritual Center in Decine', 3, 'Nex Imperio', "assets/img/alignment/" + alignmentType.toLowerCase() + ".png", desc, 8, 1, 10, 'assets/img/landscapes/' + landmarkType.toLowerCase() + ".png", 'bresk_map', nm + nm2 + i, 'landmarkCard', landmarkLevel,alignment,music);
            //console.log(currentCitizen);
            currentObject.citizens = citizenArray;

            currentObject.province = currentProvince.name;
            currentObject.region = currentRegion.name;
            currentObject.alignment = currentCountry.alignment;
            // console.log(landmarkName);
            // console.log(citizenArray);
            //alert(JSON.stringify(currentCitizen));
            locationArray.push(currentObject);

            //citizenArray.length = 0;

            //console.log(citizenArray[0]);
            //console.log(citizenArray[1]);
            //console.log(citizenArray[2]);
        }
    }
}




function createAgent() {

    fetchPath(paths);
    fetchSpecies(species);
    fetchGender(gender);
    fetchCareer(career);
    fetchAlignment(alignment);
    fetchName(agentNames);

    //var cArray = eval('mainMethod.' + agentAlignment.toLowerCase() + '[0]');
//    var cArray2 = eval('mainMethod.' + agentAlignment.toLowerCase() + '[1]');
//
//
//
//    var itemIndex = chance1.natural({
//        min: 0,
//        max: cArray.length - 1
//    });
//    var itemIndex2 = chance1.natural({
//        min: 0,
//        max: cArray2.length - 1
//    });
//
//
//    agentMethodHostile = cArray[itemIndex];
//    agentMethodFriendly = cArray2[itemIndex2];




}

function returnAgent() {

    createAgent();

    var cs = {};
    cs.path = agentPath;
    cs.species = agentSpecies;
    cs.gender = agentGender;
    cs.career = agentCareer;
    //cs.alignment = agentAlignment;
    cs.alignment = setAlignment(alignment);
    cs.name = agentName;

    cs.description = "";
    cs.sphere = setSphere(sphere);
    //cs.method = agentMethodHostile;
    //alert(agentMethodHostile+"   "+agentMethodFriendly);
    //cs.methodFriendly = agentMethodFriendly;


    cs.level = currentProvince.level;
    cs.karma = Math.floor((cs.level * 2) + 3);

    cs.specialAbilities = ['Thunderous Crush: Damagex2 on roll of 12 '];
    cs.type = 'Hero',
        cs.location = ["Dungeon", "Swamp", "Forest", "Plains", "Ruins", "Desert", "Altar"];

    cs.sound = 'monster1';
    cs.health = (+cs.level * 3 * citizenDifficulty) + (cs.level * citizenDifficulty);
    cs.maxHealth = cs.health;

    cs.specialAttack = [beastHeal, beastPoison];



    return cs;
}

// FETCH

function fetchPath(arr) {
    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    agentPath = arr[itemIndex]; // + " ";
}

function fetchSpecies(arr) {
    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    agentSpecies = arr[itemIndex]; // + " ";
}

function fetchGender(arr) {
    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    agentGender = arr[itemIndex]; // + " ";
}

function fetchCareer(arr) {
    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    agentCareer = arr[itemIndex]; // + " ";
}

function fetchAlignment(arr) {
    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    agentAlignment = arr[itemIndex];
}

function fetchLevel() {
    var itemIndex = Math.round(CustomRandom(1, levelSpread));
    landmarkLevel = itemIndex;
}

function fetchName(obj) {
    var loc = agentAlignment.toLowerCase();
    var itemIndex = Math.round(CustomRandom(0, obj[loc].length) - 1);
    agentName = obj[loc][itemIndex];
}

//function setAlignment(arr) {
//	var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
//	return arr[itemIndex];
//}

function setAlignment(arr) {
    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    var mutationAmount = Math.round(CustomRandom(0, mutation) - 2);
    //console.log(mutationAmount);
    var ii = itemIndex;
    ii += mutationAmount;
    itemIndex = ii % 8;
    if (itemIndex < 0) {
        itemIndex = 8;
    }
    if (itemIndex > 7) {
        itemIndex = 8;
    }
    return arr[itemIndex];
}

function setSphere(arr) {

    var itemIndex = Math.round(CustomRandom(0, arr.length) - 1);
    //itemIndex = chance.unique(arr, 3);
    return arr[itemIndex];
}


function fetchLandmark(obj) {
    var loc = currentProvince.terrain.toLowerCase();
    //alert(loc);
    var itemIndex = Math.round(CustomRandom(0, obj[loc].length) - 1);
    //alert(itemIndex);
    landmarkType = obj[loc][itemIndex];

}

function clearDescription() {
    document.getElementById("describe")
        .innerHTML = " ";
    continents = "<br>Continents: ";
    countries = "<br>Countries: ";
    regions = "<br>Regions: ";
    provinces = "<br>Provinves: ";
    cities = "<br>Cities: ";
    agents = "<br>Agents: ";
    landmarks = "<br>Landmarks: <br>";
}

function chooseAdventure(nation, sphere) {

    var ol = calculateOutlook(sphere, nation);
    //alert(nation+"  "+sphere);

    setTimeout(function() {
            // popMessage("A vast world full of adventure. Click labels to learn about the world, or landmarks to travel across the map.", "Welcome to Nimia");

            //popMessage(currentAdventure.adventureDescription, currentAdventure.title);

        }, 1000)
        //setTimeout(showScrollBox,1000);
}

function setAdventure(region) {


    for (var i = 0; i < regionArray.length; i++) {

        //console.log("region "+i+": "+locationArray[i].name);
        if (regionArray[i].name) {

            //console.log("region "+i+": "+regionArray[i].name+"   match "+region);

            if (capitaliseFirstLetter(regionArray[i].name).indexOf(capitaliseFirstLetter(region)) > -1) {
                //alert(regionArray[i].name+"   "+regionArray[i].alignment+"   "+regionArray[i].sphere);
                currentAdventure = {};

                currentAdventure.region = regionArray[i].name;
                currentAdventure.alignment = regionArray[i].alignment;
                currentAdventure.sphere = regionArray[i].sphere;

                var ol = calculateOutlook(currentAdventure.sphere, currentAdventure.alignment);
                currentAdventure.outlook = ol;

                currentAdventure.title = ol;

                var lc = region.toLowerCase();

                if (eval(lc)) {
                    //alert(eval(lc));

                    if (eval(lc).adventure) {
                        //alert(eval(lc).adventure);

                        currentAdventure.title = eval(lc).adventure
                    }

                    if (eval(lc).adventureDescription) {
                        //alert(eval(lc).adventure);

                        currentAdventure.adventureDescription = eval(lc).adventureDescription
                    }

                    if (eval(lc).votesNeeded) {
                        //alert(eval(lc).adventure);

                        currentAdventure.votesNeeded = eval(lc).votesNeeded
                    }

                    if (eval(lc).opposed) {
                        //alert(eval(lc).adventure);

                        currentAdventure.opposed = eval(lc).opposed
                    }
                    //alert(eval(lc).supported);
                    if (eval(lc).supported) {


                        currentAdventure.supported = eval(lc).supported
                    }

                    //if(eval(lc).quest){
                    //							//alert(eval(lc).adventure);
                    //							
                    //							currentAdventure.quest = eval(lc).adventureDescription
                    //							
                    //							currentQuest = currentAdventure.quest;
                    //						}




                }

            }




        }


    }
    saveGame();
}

function calculateOutlook(sphere, ali) {

    var ot = "";

    if (sphere.toLowerCase() == "politics") {

        ali == 'Imperial' ? ot = 'Miltary Rule' : null;
        ali == 'Honorable' ? ot = 'Law and Order' : null;
        ali == 'Noble' ? ot = 'Diplomacy' : null;
        ali == 'Humane' ? ot = 'Transparency' : null;
        ali == 'Rebel' ? ot = 'Independence' : null;
        ali == 'Anarchic' ? ot = 'Anarchy' : null;
        ali == 'Bloodthirsty' ? ot = 'Assasination' : null;
        ali == 'Coldblooded' ? ot = 'Espionage' : null;
        ali == 'Neutral' ? ot = 'Neutral' : null;


    }

    if (sphere.toLowerCase() == "economy") {

        ali == 'Imperial' ? ot = 'Slavery' : null;
        ali == 'Honorable' ? ot = 'Taxes' : null;
        ali == 'Noble' ? ot = 'Social Welfare' : null;
        ali == 'Humane' ? ot = 'Charity' : null;
        ali == 'Rebel' ? ot = 'Abolition' : null;
        ali == 'Anarchic' ? ot = 'The Black Market' : null;
        ali == 'Bloodthirsty' ? ot = 'The Exploitation Economy' : null;
        ali == 'Coldblooded' ? ot = 'Pure Profit' : null;
        ali == 'Neutral' ? ot = 'Neutral' : null;



    }

    if (sphere.toLowerCase() == "religion") {

        // ali == 'Imperial' ? ot = 'Religious Rule' : null;
        //  ali == 'Honorable' ? ot = 'Crusade' : null;
        ali == 'Imperial' ? ot = 'Crusades' : null;
        ali == 'Honorable' ? ot = 'Preaching Faith' : null;
        ali == 'Noble' ? ot = 'Curing the plague' : null;
        ali == 'Humane' ? ot = 'Caring for the sick' : null;
        ali == 'Rebel' ? ot = 'Religious freedom' : null;
        ali == 'Anarchic' ? ot = 'Freedom from religion' : null;
        ali == 'Bloodthirsty' ? ot = 'Burning the sick' : null;
        ali == 'Coldblooded' ? ot = 'Heal the Rich' : null;
        ali == 'Neutral' ? ot = 'Neutral' : null;

    }



    return ot;
}




// ----------------------------------------------------------------------------------------
// PLAYER
// ----------------------------------------------------------------------------------------
var playerHTML = "<div class='playerShield'></div>";




playerHTML = "<div class='playerShield'></div><div class='flipCard' id='cardSet5'><div class='splat'></div><div class='scratch'></div><div class='damaged'></div><div class='damagedExtra'></div><div class='card cardFront smooth'><div class='miss'></div><div class='cardHeart'>15</div><img class='cardClan' height='40' src='assets/img/alignment/honorable.png' width='40'><img class='cardPath' height='40' src='assets/img/paths/spirit.png' width='40'><div class='damageBar'></div><div class='playerName'>Peasant</div><div class='cardSubTitle'><span class='playerCardAlignment'>ColdBlooded</span> <span class='playerCardCareer'>Swipe</span></div><div class='cardSubTitleClick' style='top:400px;left:0px;z-index:99999;display:none;'><a style='color:#FFFFFF;text-decoration:none;display:none;' href='#'  onMouseDown='flipPlayerCard(5);' >Customize</a></div><div class='powerDisplay'><div class='powerUps'><img class='activeSkill as01' height='80' onMouseDown='attackBeast(0);' src='assets/img/alignment/noble.png' width='80'> <img class='activeSkill as02' height='80' onMouseDown='attackBeast(1);' src='assets/img/alignment/imperial.png' width='80'> <img class='activeSkill as03' height='256' onMouseDown='attackBeast(2);' src='assets/img/blank.png' width='256'></div></div><img class='portrait' height='400' src='assets/img/portrait/kyndi/rookfemale.png' width='320'> </div><div class='card cardBack smooth'><div class='cardTitle itemTitle'>Inventory</div><div class='cardSubTitle itemSubTitle' style='top:60px;'>Drag items down to the<br>Battle Bar to Equip them</div><div class='cardSubTitle' style='top:265px;'>Battle Bar (Equipped Items)</div><div class='cardSubTitleClick' style='top:400px;left:0px;'><a href='#' style='color:#FFFFFF;text-decoration:none;'  onMouseDown='flipPlayerCardBack(5);' >Done</a></div><div class='sellItemBar'>Or Drop items here to sell them</div><div class='powerDisplay'><div class='powerUps'><img class='activeSkill as01' id='as01' height='256' src='assets/img/blank.png' width='256'> <img  id='as02' class='activeSkill as02' height='80' src='assets/img/paths/strength.png' width='80'> <img class='activeSkill as03'  id='as03'  height='80' src='assets/img/paths/strength.png' width='80'></div></div><div class='inventoryGrid'><a class='inventory inventory1'  href='javascript:void(0);'><span id='draggable0' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory2' href='javascript:void(0);'><span id='draggable1' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory3' href='javascript:void(0);'><span id='draggable2' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory4' href='javascript:void(0);'><span id='draggable3' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory5' href='javascript:void(0);'><span id='draggable4' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory6' href='javascript:void(0);'><span id='draggable5' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory7' href='javascript:void(0);'><span id='draggable6' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a><a class='inventory inventory8' href='javascript:void(0);'><span id='draggable7' style='width:64px;height:64px;display:block;'><img height='64'    src='assets/img/blank.png' width='64'></span></a></div></div></div>";




var player = new L.Marker(new L.LatLng(-77.75, 67.85), {
    icon: new mapIcon({
        labelText: " ",
        iconUrl: 'assets/img/popups/popplayer.png',
        className: 'playerIcon'
    })
}).addTo(map);

$('.smoother').parent().addClass("smoothMove");


//currentLocation = $.grep(locationArray, function(e) {
//	return e.name == locationArray[7].name;
//})[0];
//alert(currentLocationIndex);

if (localStorage.getItem('currentLocationIndex') != null) {
    currentLocationIndex = localStorage.getItem('currentLocationIndex');
    //alert("getting currentLocationIndex");
}
//alert(currentLocationIndex);	
//alert("localStorage.getItem('currentLocationIndex') = "+localStorage.getItem('currentLocationIndex'));	
currentLocation = $.grep(locationArray, function(e) {
    return e.name == locationArray[currentLocationIndex].name;
})[0];




//alert("set"+currentLocation.name);
//travel(currentLocation);
playerLocation(currentLocation);
//alert(currentLocation.type);
//reachedLocation();



map.setView(currentLocation.getLatLng());


//centerIcon(currentLocation);




// ADD DEFAULT WEAPON TO PLAYER ARRAY
//alert( weapons[0].img);
//        // ADD MATCHING LEVEL BEASTS TO NEW ARRAY
// if (perks[i].name == level) {

// }
//  }


// ADD ICON TO WEAPON BAR

function clearWeaponArrayIcons() {

    $('.as01').attr("src", "assets/img/blank.png");
    $('.as02').attr("src", "assets/img/blank.png");
    $('.as03').attr("src", "assets/img/blank.png");



}


function populateAttackBar() {
    clearWeaponArrayIcons();

    if (deckArray[0]) {
        $('.playerCard .as01').attr("src", 'assets/img/' + deckArray[0].folder + '/' + removeSpaces(deckArray[0].type.toLowerCase() + deckArray[0].level) + '.png');

    }
    if (deckArray[1]) {
        $('.playerCard .as02').attr("src", 'assets/img/' + deckArray[1].folder + '/' + removeSpaces(deckArray[1].type.toLowerCase() + deckArray[1].level) + '.png');

    }

    if (deckArray[2]) {
        $('.playerCard .as03').attr("src", 'assets/img/' + deckArray[2].folder + '/' + removeSpaces(deckArray[2].type.toLowerCase() + deckArray[2].level) + '.png');

    }

    // OVERIDE
    $('.playerCard .as01').attr("src", 'assets/img/paths/' + playerPath + '.png');
    $('.playerCard .as03').attr("src", 'assets/img/paths/' + 'strength' + '.png');
    $('.playerCard .as02').attr("src", 'assets/img/clans/' + 'neximperio' + '.png');

    setMaxHp();

}



startKarma();
updateStats();



hideMarker(timer1);
hideMarker(timer2);
hideMarker(timer3);
hideMarker(timer4);

addBasicWeapon();
	
var heroArray = [];
heroArray[0] = heroPeasant;
heroArray[0] = heroRook;

function addBasicWeapon() {
    //deckArray.push(weapons[0]);
    var randomChance = new Chance();
    var basicWeapon = generateObject(1, 'weapon', randomChance.natural({
        min: 0,
        max: 2
    }));
    basicWeapon.currentStoreType = "weapons";
	// basicWeapon.level = 0;
    //deckArray.push(basicWeapon);

    deckArray.push(basicWeapon);


    playerInventory[0] = basicWeapon;
}