var version = 106;
var remoteSearch = false;
var globalCitizenIndex = 1;
//remoteSearch = true;

var cheatSave = false;
var cheatActive = false;
// ----------------------------------------------------------------------------------------
// NOT FOR SAVING
// ----------------------------------------------------------------------------------------	

// CHEATS
var oneHitKill = false;

var localSearch = false;

var appeasePrice = 0;

var doubleNames = ['landmarks'];
var maxBeastLevel = 10;

var alignmentScreenShowing = false;
var currentMonsterMaxHp = 15;
var gameStarted = false;
var extraBossKarma = 4;
var extraBeastKarma = 0;
var numBeastAttacks = 0;

var allowProceduralCitizenValues = false;

var fadeSpeed = 200; //400

 var speechText = "";
 var questNum = 0;
 
	var iconName ="";
    var cityHTML = "";
    var prisonHTML ="";
    var guildHTML ="";
	var speakingWithCitizen = false;
	
	var citizenDifficulty = 3;
	
	var smoothCollect = true;
	
	var playerShielded = false;
	
	var externalThreat = [];
	
	var cheatDamage = 100;


var regionArray = [];
var currentNationGoal = "Undecided";

var correctLocation = false;


// ----------------------------------------------------------------------------------------
// SYSTEM SETTINGS
// ----------------------------------------------------------------------------------------	

var toolTipTime = 7000;
var playMusic = true;

var cardScaleMultiplier = .03;
cardScaleMultiplier = .05;

var popCardsOnMouseOver = false;


// ----------------------------------------------------------------------------------------
// VARIABLES TO SAVE
// ----------------------------------------------------------------------------------------	

var deckArray = [];

var deadAgents = [];
var friendlyCitizens = [];
var hostileCitizens = [];
var completedQuests = [];
var externalThreats = [];
var appeasedCitizens = [];

var playerLevel = 1;
var playerXp = 0;
var playerGold = 100;
var healingPotions = 12;

var playerSpecies = "igri";
var playerGender = "androgyne";
var playerPath = "spirit";
var playerCareer = "peasant";

var currentQuest = {};
var tempQuest = {};
var currentAdventure = {};

var completeQuests = {};

var playerChaos = 0;
var playerEvil = 0;

var playerAlignment = 'Neutral';



var strengthMultiplier = 1;
var spiritMultiplier = 1;
var speedMultiplier = 1;

var maxHp = 15;
maxHp = 5;
var playerHp = maxHp;

//

var karmaModifier = .15;
var travelModifier = .3;
var maxKarma = Math.ceil(30 * karmaModifier);

var karma = maxKarma;
var maxKarmaBonus = 0;

//
var nextBoss={};

var currentLocation;

var currentLocationIndex = 8;
 currentLocationIndex = 3;

// DECKS

var firstCareer = false;
var firstSpecies = false;
var firstGender = false;
var firstPath = false;


var perkDeckArray = [];
var weaponArray = [];
var runeDeckArray = [];

// FIRSTS

var firstUser = false;
var firstCause = false;
var firstAction = false;
var playMusic = true;
var firstCity = false;
var firstGuild = false;

var firstChurch = false;
var firstWelcome = false;
var firstDungeon = false;


var firstDraw = false;
var firstPerk = false;
var firstDanger = false;

var firstBattle = false;
var firstQuestTarget = false;

var firstTravelPopup = false;
var firstBattleToolTip = false;

// TOOLTIPS

var startToolTip = false;
var healToolTip = false;

var firstCitizen = false;



// ----------------------------------------------------------------------------------------
// STATIC VARIABLES
// ----------------------------------------------------------------------------------------	

var playerChanceToHit = 95;
var originalBeastChanceToHit = 95;
var beastChanceToHit = originalBeastChanceToHit;
var swipeDodgeChanceTohit = 60;
var baseWeaponDamage = 3; //2
baseWeaponDamage = 1; 

// KARMA LOOP
var karmaFrequency = 3000; // expressed in miliseconds
var karmaInterval = 0;
var healingPotionStrength = 20;

var attackType = 'Bite';
var mutation = 2;
var saleMultiplier = .5;

// ----------------------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------------------	




// ----------------------------------------------------------------------------------------
// DIFFICULTY
// ----------------------------------------------------------------------------------------	


var rewardMultiplier = 1; // 1 default, .5 low, 2 high




// ----------------------------------------------------------------------------------------
// GLOBAL VARIABLES
// ----------------------------------------------------------------------------------------	

var instantPerk = true; // Multiple perks per round?

var xpTotal = 0;
var unlimitedFlips = false;

var cardLimit = 1;
var priceAdjustment = .3;
var damageReduction = 0;
var storeRandomness = 1; // 0 is always the same 5 is a lot
var healingStrength = 5; // 5 is normal, 1 is weak, 20 is high
var regenerate = false; // JavaScript Document
var powerLevel = 1;
var cardNumber = 0;
var plusDamage = 0;
var perkStrength = 5;//2; // how much bonus weapon special powers have eg +2 health

var distanceTravelled = 0; // increases with travel

var currentCityType;
var difficulty = 2;
difficulty = 2;
var currentRegion = "";
var currentCountry = "";


var levelUpSpeed = 1;

var markerHTML = "";

var cardsFlipped = 0;
var maxCards = 1;


var currentQuestDestination;


var playerHitDice = 15;

var selectedInventoryIndex = 0;
var augur = false;



var globalCurrentCardNumber = 1;
var refill = false; // TRUE AS A POWER

var activeDeck = "battle";

var playerCreated = false;

var currentBattleBarHover = 0;

var inBattle = false;



var rookDamageBonus = 0;

var karmaCost = 0;
var enemyEffects = {};
var currentItem = {};

var continentMarkersArray = [];
var provinceLabelArray = [];
var regionLabelArray = [];
var nationLabelArray = [];
var locationArray = [];
var gridArray = [];
var travelTimer;
var walkSpeed = 0.1;

var travelPath = [];
var originalScanDistance = 50;
var scanDistance = originalScanDistance;
var thisStop;
var nextStop;
var stuckInLoop = false;



var power = 9;
var maxHpBonus = 0;

var playerDefense = 1;
var gender = 'male';

var currentLocationLevel = 1;
var currentLocationType = "Forest"



var travelCost = 0;
var ii = 0;
var travelSpeed = 1000 // to 600	
travelSpeed = 600; // swipe
var mapSpeed = 3.0;
var distanceToTarget = 1;
var levelSpread = 10;
var currentPerkHTML = "";







// ----------------------------------------------------------------------------------------
// ARRAYS & OBJECTS
// ----------------------------------------------------------------------------------------	

// OBJECTS

var currentPerk = {};
var currentMonster = {};

// ARRAYS


var playerInventory = [];
//var locationTimers = [];

// CURRENT

var weaponStoreStock = [];
var currentStoreType = "weapons"; //weapons, items or magic
var currentWeapon = {};



// ----------------------------------------------------------------------------------------
// XP CHART
// ----------------------------------------------------------------------------------------	

var levelProgression = 20; // 1 for fast standard is 100
var levelXpChart = [];
var levelCap = 40;
createXpChart();
var xpGained = 0; // xp gained
var nextLevelXp = 0;
nextLevelXp = levelXpChart[playerLevel];

function createXpChart() {
	for (var f = 0; f < levelCap; f++) {
		var xpNum = Math.round(((f * 1000 + (f * 500) * (f / 3.14)) / 100)) * levelProgression;
		levelXpChart.push(xpNum);
	}

}
