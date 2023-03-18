function organizeCitizens() {

    console.log("Friendly: " + friendlyCitizens);
    console.log("Hostile: " + hostileCitizens);
    console.log("Dead: " + deadAgents);
    console.log("Completed: " + completedQuests);
    console.log("Appeased: " + appeasedCitizens);
    console.log("========    completeQuests    ========");
    console.table(completeQuests);



}

function appease() {

    if (playerGold > appeasePrice) {
        playSound(coins, 1);
        playerGold -= appeasePrice;


        for (var j = 0, k = hostileCitizens.length; j < k; j++) {
            if (currentCitizen.name == hostileCitizens[j]) {
                hostileCitizens.splice(j, 1);
            }
        }
        if (!containsObject(currentCitizen.name, appeasedCitizens)) {
            appeasedCitizens.push(currentCitizen.name);
        }
        closeStage();
        saveGame();


    } else {
        popMessage("You need " + appeasePrice + " gold.  Earn gold by defeating beasts in the wild, completing quests or selling items.", "Not enough gold");

    }

}

function agentIsDead(agentName) {

    var isDead = false;

    for (var j = 0, k = deadAgents.length; j < k; j++) {
        if (agentName == deadAgents[j]) {
            isDead = true;
        }
    }

    return isDead;
}

function agentIsHostile(agentName) {

    var isHostile = false;

    for (var j = 0, k = hostileCitizens.length; j < k; j++) {
        if (agentName == hostileCitizens[j]) {
            isHostile = true;
        }
    }

    return isHostile;
}




function defaultQuest() {

    if (currentAdventure.quest) {
        var cit = currentQuest.citizen;
        var giv = currentQuest.giver;
        currentQuest = {};
        currentQuest = currentAdventure.quest;
        currentQuest = defaultQuest;
        currentQuest.citizen = cit;
        currentQuest.giver = giv;


    }
    $('.tipBubble').hide();
    saveGame();
}

function landmarksInRegion() {

    var currentProvince = currentLocation;
    var landmarksInCurrentRegion = [];

    for (var i = 0; i < locationArray.length; i++) {


        if (locationArray[i].region == currentLocation.region) {


            if (locationArray[i].type.toLowerCase() != 'church' && locationArray[i].type.toLowerCase() != 'city' && locationArray[i].type.toLowerCase() != 'village' && locationArray[i].type.toLowerCase() != 'prison' && locationArray[i].type.toLowerCase() != 'guild') {
                landmarksInCurrentRegion.push(locationArray[i]);



            }
        }


    }
    return landmarksInCurrentRegion;

}



function landmarksInProvince() {

    var currentProvince = currentLocation;
    var landmarksInCurrentProvince = [];

    for (var i = 0; i < locationArray.length; i++) {


        if (locationArray[i].province == currentLocation.province) {


            landmarksInCurrentProvince.push(locationArray[i]);


        }


    }
    return landmarksInCurrentProvince;

}

function convertNameToNumber(nm) {

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    var totalValue = 1;

    for (var i = 0, len = nm.length; i < len; i++) {


        var letter = nm[i];
        var letterPosition = alphabet.indexOf(letter) + 1;
        totalValue += letterPosition;
    }

    console.log(" value of citizen name is " + totalValue);


    return totalValue;

}

function chooseLandmarkInRegion() {

    var nameAsNumber = convertNameToNumber(currentCitizen.name);
    var my_seeded_chance = new Chance(nameAsNumber + currentLocation.level); // +playerLevel added for unique seed



    var landmarksInAreaArray = landmarksInRegion();

    var landIndex = my_seeded_chance.natural({
        min: 0,
        max: landmarksInAreaArray.length - 1
    });


    var chosenLandmark = landmarksInAreaArray[landIndex];


    return chosenLandmark;

}




function beastByLevelAndLocation(level, locationType) {

    if (level > maxBeastLevel) {
        level = maxBeastLevel;
    }

    var nameAsNumber = convertNameToNumber(currentCitizen.name);


    var my_seeded_chance = new Chance(nameAsNumber);


    var landmarksInAreaArray = landmarksInRegion();

    var landIndex = my_seeded_chance.natural({
        min: 0,
        max: landmarksInAreaArray.length - 1
    });


    var chosenLandmark = landmarksInAreaArray[landIndex];

    console.log("chosen landmark is " + chosenLandmark.name);

    var beastByLocation = [];
    var fallbackBeasts = [];

    for (var i = 0; i < beasts.length; i++) {

        // ADD MATCHING LEVEL BEASTS TO NEW ARRAY
        if (beasts[i].level == level) {
            fallbackBeasts.push(beasts[i]);

            if (containsObject(locationType, beasts[i].location)) {

                beastByLocation.push(beasts[i]);

                console.log("beasts in location array is " + beasts[i].name);

            }
        }
    }

    if (beastByLocation.length == 0) {

        beastByLocation.push(fallbackBeasts[0]);
    }

    var newIndex = my_seeded_chance.natural({
        min: 0,
        max: beastByLocation.length - 1
    });


    return beastByLocation[newIndex];


}




function showSitchCitizensButton(c) {
    $("#cardSet" + c + " .belowCard").fadeIn();

}




function fadeInPlayerDialogueCard(c) {


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // CURRENT CITIZEN
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 
    console.log("current quest : " + currentQuest.name);

    var citizen = currentLocation.citizens[c - 1];
    currentCitizen = citizen;
    var outlook = calculateOutlook(citizen.sphere, citizen.alignment);


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // CITIZEN INTERFACE
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    showSitchCitizensButton(c);
    $('.appeaseButton').hide();
    $('.openVote').hide();

    if (currentQuest.boss) {
        if (currentQuest.boss.name == citizen.name && currentQuest.completed != true) {


            $('.openQuestAction').show();

        } else {
            $('.openQuestAction').hide();
        }
    }

    inBattle = true;
    setCardToAttack();

    if (currentQuest.boss) {
        if (currentQuest.boss.name == citizen.name) {
            if (firstQuestTarget == false) {
                popMessage("This citizen is the target of your current quest. You can ACCEPT their quest or choose an ACTION.", "Quest Target");
                firstQuestTarget = true;
            }
        }
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // CITIZEN RELATIONSHIPS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    var citizenEnemies = [];
    var citizenFriends = [];
    var enemyArray = eval('enemyAlignment.' + citizen.alignment.toLowerCase());
    var friendArray = eval('allyAlignment.' + citizen.alignment.toLowerCase());
    var currentCitizenAlignment = citizen.alignment.toLowerCase();


    if (remoteSearch == true) {

        // FIND CITIZEN ENEMIES
        for (var i = 0, l = fullCitizens.length; i < l; i++) {
            for (var j = 0, k = enemyArray.length; j < k; j++) {

                if (fullCitizens[i].alignment.toLowerCase() == enemyArray[j].toLowerCase()) {
                    citizenEnemies.push(fullCitizens[i]); // 
                }
            }
        }


        // FIND CITIZEN FRIENDS
        for (var i = 0, l = fullCitizens.length; i < l; i++) {


            for (var j = 0, k = friendArray.length; j < k; j++) {

                if (fullCitizens[i].alignment.toLowerCase() == friendArray[j].toLowerCase()) {

                    if (fullCitizens[i].name.toLowerCase() != currentCitizen.name.toLowerCase()) {
                        citizenFriends.push(fullCitizens[i]);
                    }
                }
            }
        }
    } else {

        // FIND CITIZEN ENEMIES
        for (var i = 0, l = currentLocation.citizens.length; i < l; i++) {
            for (var j = 0, k = enemyArray.length; j < k; j++) {

                if (currentLocation.citizens[i].alignment.toLowerCase() == enemyArray[j].toLowerCase()) {
                    citizenEnemies.push(currentLocation.citizens[i]); // 
                }
            }
        }

        // FIND CITIZEN FRIENDS
        for (var i = 0, l = currentLocation.citizens.length; i < l; i++) {
            for (var j = 0, k = friendArray.length; j < k; j++) {

                if (currentLocation.citizens[i].alignment.toLowerCase() == friendArray[j].toLowerCase()) {

                    if (currentLocation.citizens[i].name.toLowerCase() != currentCitizen.name.toLowerCase()) {
                        citizenFriends.push(currentLocation.citizens[i]);
                    }
                }
            }
        }

    }

    // for (var i = 0, l = allCitizens.length; i < l; i++) {
    //        // Compare each citizen alignment to the array of enemy alignments
    //
    //        for (var j = 0, k = enemyArray.length; j < k; j++) {
    //            if (allCitizens[i].alignment.toLowerCase() == enemyArray[j].toLowerCase()) {
    //                citizenEnemies.push(allCitizens[i]); // add the enemy to the array of citizen enemies
    //                console.log("enemies " + allCitizens[i].name);
    //            }
    //        }
    //    }



    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // CREATE QUESTS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    var currentCitizenQuests = [];
    var temperment = "";


    var enemyMethod = eval('harmQuest.' + citizen.alignment.toLowerCase());
    var friendlyMethod = eval('helpQuest.' + citizen.alignment.toLowerCase());


    var friendAction = citizen.mainAction;
    var enemyAction = citizen.mainAction;
    var harmWord = "kill";
    var deadFriendText = "";


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // QUESTS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 



    var questArray = [];
    var helpQuests = [];
    var harmQuests = [];
    var killQuests = [];


    var citizenIsPeaceful = false;

    if (isPeaceful(currentCitizenAlignment)) {
        citizenIsPeaceful = true;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // HELP FRIENDS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 

    var citizenIsAppeased = containsObject(citizen.name, appeasedCitizens);
    //alert(citizenIsAppeased);

    if (citizenFriends.length > 0) {

        for (var i = 0, l = citizenFriends.length; i < l; i++) {

            var friendIsdead = agentIsDead(citizenFriends[i].name);


            // Generate a friendly quest for this friend
            var thisCitizen = citizenFriends[i];
            tempQuest = {};
			tempQuest.targetType = 'citizen';
            tempQuest.actionName = friendlyMethod;
            tempQuest.action = 'help';
            tempQuest.giver = citizen.name;
            tempQuest.boss = thisCitizen;
            tempQuest.bossName = thisCitizen.name;
            tempQuest.citizen = citizen;
            tempQuest.type = 'help';
            tempQuest.location = currentLocation.name.substring(0, currentLocation.name.length - 1);
            if (remoteSearch == false) {
                tempQuest.goalLocation = currentLocation.name.substring(0, currentLocation.name.length - 1);
            } else {
                /////////// replace with location of teh target citizen x3
                tempQuest.goalLocation = thisCitizen.origin;
            }

          //  tempQuest.speechText = temperment + "This is a Help friends quest. I believe in " + outlook + ".   " + thisCitizen.name + " supports " + outlook + " and is a friend. " + friendlyMethod + " " + thisCitizen.name;






// REFACTOR
// GRAMMAR ENGINE

 var olx = praiseOutlook(citizen.sphere, citizen.alignment)
            var but = syn('but');



            var iSupportTheCause = "";
            if (citizen.sphere == currentAdventure.sphere && citizen.alignment == currentAdventure.alignment) {
                iSupportTheCause = currentAdventure.title + " is most important. ";
            }

            var spend = ". "
            if (eval("actions." + tempQuest.type + ".cost") > 0) {
                spend = ". Spend " + (eval("actions." + tempQuest.type + ".cost") * thisCitizen.level) + " gold and ";
            }
			
			var connect = eval('helpQuestConnect.' + citizen.alignment.toLowerCase());

            var posText = outlook + " " + olx
            var negText = thisCitizen.name + "'s love of  " + calculateOutlook(thisCitizen.sphere, thisCitizen.alignment) + " " + praiseOutlook(thisCitizen.sphere, thisCitizen.alignment)
            var goalText = spend + "<span class='emphasize'>"+friendlyMethod.toString().toUpperCase() + " "+connect+" " + thisCitizen.name.toUpperCase() + "</span>. " + eval('sloganFriendly.' + citizen.alignment.toLowerCase());


            if (randomNumber(2) == 2) {
                tempQuest.speechText = iSupportTheCause + " " + posText + ", " + "and" + " " + negText + goalText;
            } else {

                tempQuest.speechText = negText + ", " + "and" + " I believe " + posText + goalText + " " + iSupportTheCause;
            }
			
			
			
// REFACTOR
// GRAMMAR ENGINE			
			


tempQuest.description = "<span class='underline'>" + citizen.name + " </span></br>" + friendlyMethod + " " + thisCitizen.name + " in " + tempQuest.goalLocation + " and support " + outlook;





            if (friendIsdead == false) {

                helpQuests.push(tempQuest);

            }

            if (friendIsdead == true) {
                deadFriendText = "you killed  " + citizenFriends[i].name + ". They were my ally. You are ruthless.";

                if (!containsObject(citizen.name, hostileCitizens) && citizenIsAppeased == false) {
                    hostileCitizens.push(citizen.name);
                }
            }

        }

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // HARM ENEMIES
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 

    if (citizenEnemies.length > 0) {

        for (var i = 0, l = citizenEnemies.length; i < l; i++) {

            var thisCitizen = citizenEnemies[i];
            tempQuest = {};
			tempQuest.targetType = 'citizen';
            tempQuest.actionName = enemyMethod;
            tempQuest.action = 'harm';
            tempQuest.giver = citizen.name;
            tempQuest.type = 'harm';
            tempQuest.citizen = citizen;
            tempQuest.location = currentLocation.name.substring(0, currentLocation.name.length - 1);
            tempQuest.goalLocation = currentLocation.name.substring(0, currentLocation.name.length - 1);
            tempQuest.boss = thisCitizen;
            tempQuest.bossName = thisCitizen.name;



            // MUTATE
            // HONORABLE DONT BLACKMIAL< THEY KILL
            var currentCitizenAlignment = citizen.alignment.toLowerCase();
            if (currentCitizenAlignment == 'honorable' || currentCitizenAlignment.toLowerCase() == 'imperial' || currentCitizenAlignment.toLowerCase() == 'bloodthirsty' || currentCitizenAlignment.toLowerCase() == 'coldblooded') {
                //alert("boo");
                var harmWord = eval('killQuest.' + citizen.alignment.toLowerCase());


                tempQuest.action = "kill";
                tempQuest.actionName = harmWord;

                tempQuest.type = 'kill';
                enemyMethod = harmWord;

            }


// REFACTOR
// GRAMMAR ENGINE

            var olx = praiseOutlook(citizen.sphere, citizen.alignment);
            var but = syn('but');



            var iSupportTheCause = "";
            if (citizen.sphere == currentAdventure.sphere && citizen.alignment == currentAdventure.alignment) {
                iSupportTheCause = currentAdventure.title + " is most important. ";
            }

            var spend = ". "
            if (eval("actions." + tempQuest.type + ".cost") > 0) {
                spend = ". Spend " + (eval("actions." + tempQuest.type + ".cost") * thisCitizen.level) + " gold to learn " + thisCitizen.name + "'s weakness, and ";
            }

            var posText = outlook + " " + olx
            var negText = citizenEnemies[i].name + "'s love of  " + calculateOutlook(citizenEnemies[i].sphere, citizenEnemies[i].alignment) + " " + insultOutlook(citizenEnemies[i].sphere, citizenEnemies[i].alignment)
            var goalText = spend + "<span class='emphasize'>"+enemyMethod.toString().toUpperCase() + " " + thisCitizen.name.toUpperCase() + "</span>. " + eval('slogan.' + citizen.alignment.toLowerCase());


            if (randomNumber(2) == 2) {
                tempQuest.speechText = iSupportTheCause + " " + posText + ", " + but + " " + negText + goalText;
            } else {

                tempQuest.speechText = negText + ", " + but + " I believe " + posText + goalText + " " + iSupportTheCause;
            }



// REFACTOR
// GRAMMAR ENGINE




            tempQuest.description = "<span class='underline'>" + citizen.name + " </span></br>" + enemyMethod + " " + thisCitizen.name + " in " + tempQuest.goalLocation + " and support " + outlook;


            if (!containsObject(thisCitizen.name, deadAgents)) {
                harmQuests.push(tempQuest);
            }


        }

    }


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // EXTERNAL KILL
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    var externalEnemies = [];

    if (citizen.alignment.toLowerCase() == 'honorable' || citizen.alignment.toLowerCase() == 'imperial' || citizen.alignment.toLowerCase() == 'bloodthirsty') {


        // ADD KILL Quest External QUEST
        harmWord = eval('killQuest.' + citizen.alignment.toLowerCase());

        tempQuest = {};
		tempQuest.targetType = 'beast';
        tempQuest.action = "kill";
        tempQuest.actionName = harmWord;
        tempQuest.giver = citizen.name;
        tempQuest.type = 'kill';
        tempQuest.citizen = citizen;
        tempQuest.location = currentLocation.name.substring(0, currentLocation.name.length - 1);

        var questLocation = chooseLandmarkInRegion();
        tempQuest.goalLocation = questLocation.name.slice(0, -1);
        // tempQuest.boss = beastByLevelAndLocation(playerLevel + 1, questLocation.type);
        tempQuest.boss = beastByLevelAndLocation(questLocation.level, questLocation.type);
        tempQuest.bossName = tempQuest.boss.name;


var olx = praiseOutlook(citizen.sphere, citizen.alignment)

        tempQuest.speechText = externalKillSetup(citizen.sphere, citizen.alignment)+". I believe " + outlook + " "+olx+". " + tempQuest.boss.name + " "+targetIsObstacle(citizen.sphere, citizen.alignment)+". <span class='emphasize'>" + harmWord.toString().toUpperCase() + " " + tempQuest.boss.name.toUpperCase() + "</span> in the " + questLocation.type + " of " + tempQuest.goalLocation;
        tempQuest.description = "<span class='underline'>" + citizen.name + " </span></br>" + harmWord + " " + tempQuest.boss.name + " in " + tempQuest.goalLocation + " and support " + outlook;


        killQuests.push(tempQuest);

        externalEnemies.push(tempQuest.boss.name);



    }



    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // SORT QUESTS BY VALUES
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 

    var currentCitizenAlignment = citizen.alignment.toLowerCase();

    currentCitizenAlignment == 'noble' ? questArray = helpQuests.concat(harmQuests, killQuests) : null;

    currentCitizenAlignment == 'humane' ? questArray = helpQuests.concat(harmQuests) : null;

    currentCitizenAlignment == 'rebel' ? questArray = harmQuests.concat(helpQuests, killQuests) : null;

    currentCitizenAlignment == 'anarchic' ? questArray = harmQuests.concat(killQuests, helpQuests) : null;

    currentCitizenAlignment == 'bloodthirsty' ? questArray = killQuests.concat(harmQuests) : null;

    currentCitizenAlignment == 'coldblooded' ? questArray = killQuests.concat(harmQuests, helpQuests) : null;

    currentCitizenAlignment == 'imperial' ? questArray = killQuests.concat(helpQuests, harmQuests) : null;

    currentCitizenAlignment == 'honorable' ? questArray = killQuests.concat(helpQuests, harmQuests) : null;

    currentCitizenAlignment == 'neutral' ? questArray = helpQuests.concat(harmQuests, killQuests) : null;




    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // CHECK COMPLETED QUESTS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    var questNum = 0;
    var thankYouText = "";

    for (var m = 0, n = questArray.length; m < n; m++) {
        if (questArray[m].type.toLowerCase() == "kill") {
            for (var j = 0, k = deadAgents.length; j < k; j++) {

                var mixName = citizen.name + questArray[m].boss.name;


                if (mixName == deadAgents[j]) {

                    questArray[m].complete = true;
                    console.log(deadAgents);
                    questNum++;
                    console.log("plus 1 kill");
                    thankYouText = "Thank you for getting rid of " + questArray[m].boss.name + ". " + gladTheyAreGone(citizen.sphere, citizen.alignment) + ". ";
                }
            }
        }

        if (questArray[m].type.toLowerCase() == 'harm') {

            var mixName = questArray[m].giver + questArray[m].boss.name

            if (containsObject(mixName, hostileCitizens)) {
                for (var j = 0, k = hostileCitizens.length; j < k; j++) {
                    if (mixName == hostileCitizens[j]) {
                        questArray[m].complete = true;
                        console.log("hostileCitizens   " + hostileCitizens);
                        questNum++;
                        console.log("plus 1 harm");
                        thankYouText = "Thank you for intimidating " + questArray[m].boss.name + ". " + gladTheyAreGone(citizen.sphere, citizen.alignment);
                    }
                }
            } else if (containsObject(questArray[m].boss.name, deadAgents)) {

                for (var j = 0, k = deadAgents.length; j < k; j++) {
                    if (questArray[m].boss.name == deadAgents[j]) {
                        questArray[m].complete = true;
                        console.log(deadAgents);
                        questNum++;
                        console.log("plus 1");
                        thankYouText = "I said harm not kill " + questArray[m].boss.name + ".";
                    }
                }
            }



        }
        if (questArray[m].type.toLowerCase() == 'help') {


            for (var j = 0, k = friendlyCitizens.length; j < k; j++) {

                var mixName = questArray[m].giver + questArray[m].boss.name;
                if (mixName == friendlyCitizens[j]) {
                    questArray[m].complete = true;

                    questNum++;
                    console.log("plus 1 help");

                    //thankYouText = "Thank you for helping " + questArray[m].boss.name + ". They " + syn('understand') + " ";
					 thankYouText = "Thank you for helping " + questArray[m].boss.name +". ";
                }
            }
        }

    }


    var speechText = "";




    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // SET FRIENDLINESS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    var numberOfCitizenQuests = questArray.length;
    var friendPercentage = questNum / numberOfCitizenQuests;
    var friendHeight = Math.floor(450 * friendPercentage);
    $("#cardSet" + c + " .friendBar").css('height', friendHeight + 'px');


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // CHECK IF ALL QUESTS COMPLETED
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 


    if (questNum < questArray.length) {
        speechText = thankYouText + questArray[questNum].speechText;

        citizenQuest = questArray[questNum];
        $('.openAdventure').hide();
		var pp = citizenQuest.actionName+" "+citizenQuest.bossName;
		//alert(citizenQuest.name);
		if(playerCreated == true){
		$('.questNom').html(pp);
		}
		
        $('.cardButtonQuest').show();
		
		



    } else {
        speechText = thankYouText + " I have no more quests for you, but you have my vote.";
        questNum = 0;
        if (citizen.name == currentQuest.giver) {
            defaultQuest();
        }
        $('.openAdventure').show();
        $('.openAdventure').hide();
        $('.cardButtonQuest').hide();
        $('.openVote').show();


        if (!containsObject(citizen, completedQuests)) {
            completedQuests.push(citizen);
            saveGame();
        }


    }




    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // GIVE QUEST
    //
    //////////////////////////////////////////////////////////////////////////////////////////////// 



    currentMonster = citizen;
    speakingWithCitizen = true;



    for (var j = 0, k = hostileCitizens.length; j < k; j++) {
        if (citizen.name == hostileCitizens[j]) {

            appeasePrice = citizen.level * 25;
            speechText = "Slime!</br></br>...but business is business. I'll need " + appeasePrice + " gold from you to return to my good graces.";

            $('.openAdventure').hide();
            $('.cardButtonQuest').hide();
            $('.appeaseButton').show();
            $('.appeaseButton').html("pay " + appeasePrice + " gold");


        }
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////// 

    if (playerCreated == false) {
        speechText = "Come back and see me after you've registered at NinHenge guild";
        currentQuest = guildQuest;

    }




    setTimeout(function() {
        showSpeechBubble($('.citizen0' + c), deadFriendText + speechText, false, false);


    }, 400)

    $('.dialogueBar').fadeIn(400);
    $("#cardSet4").css("marginRight", '-500px');
    $("#cardSet4").css("right", '50%');
    $('#cardSet4').fadeIn(400, function() {




        updateStats();



    });


    console.log("current quest end fade : " + currentQuest.name);

}