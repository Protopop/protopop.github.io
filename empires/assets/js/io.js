// VARIABLES

// GAMEOBJECT HOLDS ALL GAME VARS

var gameObject = {

    playerCareer: 'swipe',
    playerGender: 'female'

}

var variableList = [

    'playerCareer',
    'playerGender',
    'playerPath',
    'playerSpecies',
    'playerLevel',
    'playerXp',
    'playerGold',
    'healingPotions',
    'currentQuest',
    'playerChaos',
    'playerEvil',
    'playerAlignment',
    'firstCareer',
    'firstSpecies',
    'firstGender',
    'firstPath',
    'runeDeckArray',
    'strengthMultiplier',
    'spiritMultiplier',
    'speedMultiplier',
    'playerHp',
    'maxKarma',
    'maxKarmaBonus',
    'weaponArray',
    'playerCreated',
    'perkDeckArray',
    'deadAgents',
    'completedQuests',
    'friendlyCitizens',
    'hostileCitizens',
    'externalThreats',
    'firstCitizen',
    'firstAction',
    'currentAdventure',
    'firstQuestTarget',
    'appeasedCitizens',
	'deckArray',
	'currentQuest',
	'firstCity',
	'firstGuild',
	'firstDungeon',
	'firstChurch',
	'firstCause',
	'firstUser'
    



]

var loadedObject = {};


		
		loadGame();

		
			
		


// FUNCTIONS

function saveGame() {
	
	if(cheatActive == false || cheatSave == true){

    addVarToGameObject();

    // Put the object into storage
    localStorage.setItem('gameObject', JSON.stringify(gameObject));

    // CUSTOM
    localStorage.setItem('currentLocationIndex', currentLocationIndex);
	localStorage.setItem('version', version);
	
	}

}

function addVarToGameObject() {
    for (var i = 0; i < variableList.length; i++) {
        gameObject[variableList[i]] = window[variableList[i]];
    }

}

function checkForSaveProperty(pro) {
    if (loadedObject != null) {
        if (loadedObject.hasOwnProperty(pro)) {
            window[pro] = loadedObject[pro];
        }
    }
}



function loadGame() {

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('gameObject');

    loadedObject = JSON.parse(retrievedObject);

    for (var i = 0; i < variableList.length; i++) {

        checkForSaveProperty(variableList[i]);

    }

   


}