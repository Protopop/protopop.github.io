// RUNES
var rewardCitizen = function() {
console.log("friend quest complete : "+currentQuest.name);
var mixName = currentQuest.giver+currentCitizen.name;
    if (!containsObject(mixName, friendlyCitizens)) {
		// if (!containsObject(currentCitizen.name, friendlyCitizens)) {
       
        //friendlyCitizens.push(currentCitizen.name);
		friendlyCitizens.push(currentQuest.giver+currentCitizen.name);
        saveGame();
		
		playQuestComplete();
    }


 currentQuest.completed = true;
    popMessage("Your have helped " + currentCitizen.name + ". Speak to " + currentQuest.citizen.name + " in " + currentQuest.location + ".", "Quest Complete");
    currentQuest.description = "Your have helped " + currentCitizen.name + ". Speak to " + currentQuest.citizen.name + " in " + currentQuest.location + ".";
    currentQuest.goalLocation = currentQuest.location;
console.log("friend quest complete : "+currentQuest.name);
    showQuests();
    map.closePopup();
    closeStage();
    saveGame();


}

var murderCitizen = function() {

    if (containsObject(currentCitizen.name, hostileCitizens)) {
        var nx = 1;
    } else {
        hostileCitizens.push(currentCitizen.name);

        saveGame();
    }

    openBattle();
   // popMessage("Use your cards to defeat your opponent.", "Hostile Action");
   $('.tipBubbleTarget').hide();
   $(".belowCard").fadeOut();
   
   setTimeout(function() {
       $('.openAdventure').hide();
            $('.cardButtonQuest').hide();
			 $('.appeaseButton').hide();
			 $('.openQuestAction').hide();
			 $('.openVote').hide();
			  
			 
			  var itemIndex = Math.round(CustomRandom(0, attackResponse.length) - 1);
    var saying = attackResponse[itemIndex]; // + " ";
	
	
		showSpeechBubble($('.citizen0' + globalCitizenIndex), saying, false, false);
slimSpeechBubble();

    }, 400)


}

var setCitizenHostile = function() {

    if (!containsObject(currentCitizen.name, hostileCitizens)) {
        hostileCitizens.push(currentCitizen.name);
currentQuest.completed = true;
        saveGame();
    }
	var mixName = currentQuest.giver+currentCitizen.name;
	if (!containsObject(mixName, hostileCitizens)) {
        hostileCitizens.push(mixName);
currentQuest.completed = true;
        saveGame();
    }



if(currentQuest.boss.name == currentCitizen.name){
    popMessage("This citizen is now hostile. Speak to " + currentQuest.citizen.name + " in " + currentQuest.location + ".", "Quest Complete");
	 currentQuest.description = currentQuest.boss.name+" is now hostile. Speak to " + currentQuest.citizen.name + " in " + currentQuest.location + ".";
    currentQuest.goalLocation = currentQuest.location;
	 showQuests();
} else {
	
	 popMessage("This citizen is now hostile." , "Hostile Action");
}
   
    closeStage();
    saveGame();
	
	playQuestComplete();


}


var sellCitizen = function() {

    if (containsObject(currentCitizen.name, friendlyCitizens)) {
        var nx = 1;
    } else {
        friendlyCitizens.push(currentCitizen.name);

        saveGame();
    }

    console.log("hostile citizens" + hostileCitizens);

    popMessage("The profits will help" + currentQuest.citizen.name + "'s cause", "Item Sold");
    
    closeStage();
    saveGame();


}

var stealCitizen = function() {

    if (containsObject(currentCitizen.name, hostileCitizens)) {
        var nx = 1;
    } else {
        hostileCitizens.push(currentCitizen.name);

        saveGame();
    }

    console.log("currentQuest " + currentQuest);

    
    popMessage("The profits will help" + currentQuest.citizen.name + "'s cause", "Item Sold");
   
    closeStage();
    saveGame();


}


var takeQuest = function() {
    closeStage();
    startQuest(citizenQuest);
   // addActionCard();
    saveGame();
}




var runes = [
    rook = {
        career: 'rook',
        path: 'strength',
        name: 'Rook',
        type: 'Battlecry',
        description: 'Honorable and skilled fighters unafraid to charge into battle',
        effectDescription: 'Rooks add their level to attack damage (ex. +5 at level 5) and gain 10 health per level',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword'
    },
    swipe = {
        career: 'swipe',
        path: 'speed',
        name: 'Swipe',
        type: 'Its a Steal',
        description: 'Curious adventurers who excels in getting out of sticky situations',
        effectDescription: 'Swipes have a chance to steal store items for free and gain 10 Health per level',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword'
    },
    seer = {
        career: 'seer',
        path: 'spirit',
        name: 'Seer',
        type: 'Divine Sight',
        description: 'Dedicated knowledge seekers with magical aspirations and social connections',
        effectDescription: 'Seers can draw 3 cards at every location instead of 1 and gain 10 Health per level',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword'
    },

    strength = {
        career: 'strength',
        path: 'strength',
        name: 'strength',
        type: 'Thick Skin',
        description: 'Strength increases health and damage',
        effectDescription: 'Health is Twice Normal ',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword'
    },
    speed = {
        career: 'speed',
        path: 'speed',
        name: 'speed',
        type: 'Fleet Foot',
        description: 'Speed helps in a fight - it allows you to dodge enemy attacks and take no damage',
        effectDescription: 'Reduce incoming damage by 1 point every 2 levels',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword'
    },
    spirit = {
        career: 'spirit',
        path: 'spirit',
        name: 'spirit',
        type: 'Grand Karma',
        description: 'Spirit powers magic and increases access to knowledge',
        effectDescription: 'Karma is Twice Normal',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword'
    },
]


// ACTIONS

var actions = {


     help: {
        career: 'strength',
        path: 'speed',
        name: 'Help',
        type: 'Thick Skin',
        description: 'Give a gold reward to a citizen',
        effectDescription: 'Give a gold reward to a citizen',
        effect: ['Crushing Blow x2'],
        charges: 0,
        cost: 0,
        sound: 'sword',
        cost: 20,
        effect: 'rewardCitizen'
    },
	kill: {
        career: 'strength',
        path: 'speed',
        name: 'Kill',
        type: 'Thick Skin',
        description: 'Give a gold reward to a citizen',
        effectDescription: 'Kill a citizen in cold blood',
        effect: ['Crushing Blow x2'],
        charges: 0,
        sound: 'sword',
        cost: 0,
        effect: 'murderCitizen'
    },
    harm: {
        career: 'strength',
        path: 'speed',
        name: 'Harm',
        type: 'Thick Skin',
        description: 'Pay 30 gold to this information card to BLACKMAIL a citizen',
        effectDescription: 'Give a gold reward to a citizen',
        effect: ['Crushing Blow x2'],
        cost: 15,
        charges: 0,
        sound: 'sword',

        effect: 'setCitizenHostile'
    }
	
	
	//acceptQuest: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Accept Quest',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Accept a quest offered by a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        sound: 'sword',
//        cost: 0,
//        effect: 'takeQuest'
//    },
//    donate: {
//        career: 'rook',
//        path: 'spirit',
//        name: 'Donate',
//        type: 'Action Card',
//        description: 'Honorable and skilled fighters unafraid to charge into battle',
//        effectDescription: 'Make a gold donation to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        cost: 0,
//        sound: 'sword',
//        cost: 400,
//        effect: 'rewardCitizen'
//    },
//    steal: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Steal',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Steal valuables from a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        sound: 'sword',
//        cost: -60,
//        effect: 'stealCitizen'
//    },
//    provide: {
//        career: 'seer',
//        path: 'spirit',
//        name: 'Provide',
//        type: 'Action Card',
//        description: 'Dedicated knowledge seekers with magical aspirations and social connections',
//        effectDescription: 'Seers can draw 3 cards at every location instead of 1 and gain 10 Health per level',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        cost: 0,
//        sound: 'sword'
//    },
//
//    reward: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Reward',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        cost: 0,
//        sound: 'sword',
//        cost: 60,
//        effect: 'rewardCitizen'
//    },
//	
//
//    bribe: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Bribe',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        cost: 0,
//        sound: 'sword',
//        cost: 80,
//        effect: 'rewardCitizen'
//    },
//
//    murder: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Murder',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        sound: 'sword',
//        cost: 0,
//        effect: 'murderCitizen'
//    },
//    execute: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Execute',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        sound: 'sword',
//        cost: 0,
//        effect: 'murderCitizen'
//    },
//    assasinate: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Assasinate',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Kill a citizen in cold blood',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        sound: 'sword',
//        cost: 0,
//        effect: 'murderCitizen'
//    },
//    
//	 blackmail: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Blackmail',
//        type: 'Thick Skin',
//        description: 'Pay 30 gold to this information card to BLACKMAIL a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        cost: 30,
//        charges: 0,
//        sound: 'sword',
//
//        effect: 'setCitizenHostile'
//    },
//    sell: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Sell',
//        type: 'Thick Skin',
//        description: 'Sell this card item to a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        sound: 'sword',
//        cost: -100,
//        effect: 'sellCitizen'
//    },
//    deliver: {
//        career: 'strength',
//        path: 'speed',
//        name: 'Deliver',
//        type: 'Thick Skin',
//        description: 'Give a gold reward to a citizen',
//        effectDescription: 'Give a gold reward to a citizen',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        cost: 0,
//        sound: 'sword',
//        cost: 60,
//        effect: 'rewardCitizen'
//    },
//    give: {
//        career: 'spirit',
//        path: 'spirit',
//        name: 'Give',
//        type: 'Grand Karma',
//        description: 'Spirit powers magic and increases access to knowledge',
//        effectDescription: 'Karma is Twice Normal',
//        effect: ['Crushing Blow x2'],
//        charges: 0,
//        cost: 0,
//        sound: 'sword'
   // }
}