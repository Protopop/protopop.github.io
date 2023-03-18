var playerObject = {

}
var allCitizens = [];
var fullCitizens = [];
var worldObject = {

}

var perkDeck = [


]

var currentMusic = "morning";
currentMusic = "fairy";
var switchMusic = currentMusic;
var soundtrack;

$(document).ready(function() {
    //lowLag.init({
//        'audioTagTimeToLive': 200000
//    });
//    lowLag.load("assets/audio/fairy.mp3");
//    lowLag.load("assets/audio/sfx/cardflip.mp3");
//    lowLag.load("assets/audio/sfx/miss.mp3");
//
//    lowLag.load("assets/audio/sfx/good.mp3");
//    lowLag.load("assets/audio/sfx/good2.mp3");
//    lowLag.load("assets/audio/sfx/menu.mp3");
//    lowLag.load("assets/audio/sfx/scroll.mp3");
//    lowLag.load("assets/audio/sfx/clicker.mp3");
//    lowLag.load("assets/audio/sfx/sword.mp3");
//    lowLag.load("assets/audio/sfx/bow.mp3");
//    lowLag.load("assets/audio/sfx/monster1.mp3");
//    lowLag.load("assets/audio/sfx/monster2.mp3");
//
//    lowLag.load("assets/audio/sfx/quest1.mp3");
//    lowLag.load("assets/audio/sfx/lose.mp3");
//    lowLag.load("assets/audio/sfx/victory.mp3");
//    lowLag.load("assets/audio/sfx/healingpotion.mp3");
//    lowLag.load("assets/audio/sfx/spell.mp3");
//    lowLag.load("assets/audio/sfx/winfanfare.mp3");
//
//    lowLag.load("assets/audio/sfx/success.mp3");
//    lowLag.load("assets/audio/sfx/coins.mp3");
//    lowLag.load("assets/audio/sfx/slam.mp3");
//    lowLag.load("assets/audio/sfx/poison.mp3");
//    lowLag.load("assets/audio/sfx/crunch.mp3");
//    lowLag.load("assets/audio/sfx/shield.mp3");
//    lowLag.load("assets/audio/sfx/bubble.mp3");
//    lowLag.load("assets/audio/sfx/error.mp3");
//    lowLag.load("assets/audio/sfx/gain.mp3");
//    lowLag.load("assets/audio/eerie.mp3");
//    lowLag.load("assets/audio/theme.mp3");
//    lowLag.load("assets/audio/morning.mp3");
//    lowLag.load("assets/audio/spooky.mp3");
//    lowLag.load("assets/audio/sfx/alignment.mp3");
//    lowLag.load("assets/audio/sfx/shatter.mp3");
//	
//	lowLag.load("assets/audio/sfx/fanfare.mp3");
//    lowLag.load("assets/audio/sfx/fanfare2.mp3");
//    lowLag.load("assets/audio/sfx/wardrums.mp3");


//Tipped.create('.valueIcon', 'Some tooltip text');
Tipped.create('.voteIcon', 'Change Cause and See Votes');


var tipArray = [
//'Visit Cities and Villages to find Quests from Citizens',
//'Slavery has been legal in the Empyre for over 800 years',
//'Churches will heal your wounds',
//'Nimian Legends saves your progress automatically ',
//'Watch your actions. Citizens will remember your behaviour',
//'Patience. It only has to load the first time you visit',
//'Visit Guilds to choose a Career, Gender, Species and Path for your Hero',
//'Seers can flip 3 cards at every location instead of 1',
//'Perks are power cards that can only be used once',
//'Buy Armor, Weapons and Spells in Cities and Villages',
//'The Assasina Clan seek to assasinate Emperoro Mortelle',
//'Blud Plague is a dire problem for the Empyres Citizens',
//'The Open Coast is voting to seeceed from the Empyre',
//'Wytchcraft has been banned in most parts of the Empyre',
//'Some choices will block certain paths and open others. Choose wisely',
//'Earn enough votes for or against a Cause to pass it as law',

'Slavery has been legal in the Empyre for over 800 years',
'Churches will heal your wounds',

'Patience. It only has to load the first time you visit',

'The Assasina Clan seek to assasinate Emperoro Mortelle',
'Blud Plague is a dire problem for the Empyres Citizens',
'The Open Coast is voting to seeceed from the Empyre',
'Wytchcraft has been banned in most parts of the Empyre',

'Almost done...'


]

var tipNum = 0;
var loopTime = 0;

$('.rayLoadText').fadeIn(300);
$('.loadingText').fadeIn(300);

    var progressbar = $('#progressbar'),
        max = progressbar.attr('max'),
        time = (1000 / max) * 5,
        value = progressbar.val();

    var loading = function() {
        value += 0.1;
        addValue = progressbar.val(value);
		
		loopTime++;
		//console.log(loopTime);
		if(loopTime >100){
			
			tipNum ++;
			if(tipNum >= tipArray.length){
				tipNum = 0
				
				}
			loopTime = 0;
			switchTip(tipArray[tipNum]);
			
			
		}

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
            $('.rayLoadText').text('Almost Done...');
            $('#progressbar').fadeOut(300);
        }
    };

    var animate = setInterval(function() {
        loading();
    }, time);



    $(window).load(function() {
		
		var lastVersion = 10000;
		
		if(localStorage.getItem('version'))
		{
			
			 lastVersion = localStorage.getItem('version');
			
		}
			
			if (version > lastVersion ){
				
				var versionText = version.toString(); 
				var versionDot = 'Version '+versionText.charAt(0)+'.'+versionText.charAt(1)+'.'+versionText.charAt(2);
				
				var versionText2 = lastVersion.toString(); 
				var versionDot2 = 'Version '+versionText2.charAt(0)+'.'+versionText2.charAt(1)+'.'+versionText2.charAt(2);


				//alert("GAME UPDATE \n\nNimian Legends Empires has been updated to "+versionDot+ ". Your game save is version "+versionDot2+". \n\nIf you experience compatibility issue you can erase your saved game to fix it.\n\nClick the OPTIONS button and choose RESET then RESET GAME."  );
				$('.adminUpdate').show();
				$('.adminUpdate').html("<h2 style='margin: 0;color: #ffffff;'>GAME UPDATE</h2> Nimian Legends Empires has been updated to "+versionDot+ ". Your game save is version "+versionDot2+". The game might not play as expected. Resetting will erase your saved game but prevent any issues. " +"<h2><span class='grandTitle'><a href='javascript:void(0)' class='retreatButton' onclick='resetGame();'>Reset Game Now (erase saved game)</a></span></h2><h2><span class='grandTitle'><a href='#'  class='retreatButton' onclick=' resetLater();'>Continue Anyways</a></span></h2>" );
				
			} else {
				
			showSplash();
			}
			
		
		
		
       
    });



});


function switchTip(cc){
	
	$('.loadingText').fadeOut(300);
	setTimeout(function() {
		$('.loadingText').html(cc);
       $('.loadingText').fadeIn(300);


    }, 400)
	
}

function resetLater(){
	
	$('.adminUpdate').html("<h2 style='margin: 0;color: #ffffff;'>If you experience problems you can reset your game anytime by clicking the OPTIONS button, then selecting RESET.</h2> </br>" +"<h2><span class='grandTitle'><a href='#'  class='retreatButton' onclick=' showSplash();'>OK</a></span></h2>" );
}

function showSplash() {
$('.adminUpdate').hide();
    playCurrentSoundtrack();

    $('.rayLoadText').text("loaded");
    $('#raysDemoHolder').fadeOut(512, function() {

        $('#raysDemoHolder').remove();

        $('#map').css({
            "opacity": 1
        });
        //fadeInLogin();
		$('.splash').fadeOut(400);



    });
	
	map.removeLayer(landmarkLayer);
	shrinkProvinceLabel();




}




/*var sfxMiss = "assets/audio/sfx/miss.mp3";
var sfxCardFlip = "assets/audio/sfx/cardflip.mp3";
var sfxStart = "assets/audio/sfx/good.mp3";
var sfxStart2 = "assets/audio/sfx/good2.mp3";
var sfxFairy = "assets/audio/fairy.mp3";
var sfxScroll = "assets/audio/sfx/scroll.mp3";
var sfxClicker = "assets/audio/sfx/clicker.mp3";
var sfxMenu = "assets/audio/sfx/menu.mp3";

var sword = "assets/audio/sfx/sword.mp3";
var bow = "assets/audio/sfx/bow.mp3";

var monster1 = "assets/audio/sfx/monster1.mp3";
var monster2 = "assets/audio/sfx/monster2.mp3";

var quest1 = "assets/audio/sfx/quest1.mp3";

var lose = "assets/audio/sfx/lose.mp3";
var victory = "assets/audio/sfx/victory.mp3";
var healingpotion = "assets/audio/sfx/healingpotion.mp3";
var spell = "assets/audio/sfx/spell.mp3";
var winfanfare = "assets/audio/sfx/winfanfare.mp3";

var success = "assets/audio/sfx/success.mp3";
var coins = "assets/audio/sfx/coins.mp3";
var slam = "assets/audio/sfx/slam.mp3";
var poison = "assets/audio/sfx/poison.mp3";
var crunch = "assets/audio/sfx/crunch.mp3";
var shield = "assets/audio/sfx/shield.mp3";
var bubble = "assets/audio/sfx/bubble.mp3";
var error = "assets/audio/sfx/error.mp3";
var gain = "assets/audio/sfx/gain.mp3";
var alignment = "assets/audio/sfx/alignment.mp3";
var shatter2 = "assets/audio/sfx/shatter.mp3";
//var shield = "assets/audio/sfx/shield.mp3";

var fanfare = "assets/audio/sfx/fanfare.mp3";
var fanfare2 = "assets/audio/sfx/fanfare2.mp3";
var wardrums = "assets/audio/sfx/wardrums.mp3";*/


// ------------------------------------------------------------------------------
// NAMES
// ------------------------------------------------------------------------------



var paths = ["Strength", "Speed", "Spirit"];
var species = ["Igri", "Niji", "Kyndi"];
var gender = ["Male", "Androgyne", "Female"];
var career = ["Rook", "Swipe", "Seer"];
var alignment = ["Noble", "Humane", "Rebel", "Anarchic", "Bloodthirsty", "Coldblooded", "Imperial", "Honorable", "Neutral"];
var sphere = ["Religion", "Politics", "Economy"];

// NAMES SHOULD VARY BY SPECIES AND BY ALAIGNMENT

var seer = {
    name: 'Seer',
    hd: 6
}

var swipe = {
    name: 'Swipe',
    hd: 8
}

var rook = {
    name: 'Rook',
    hd: 10
}


var beastTypes = ['Arcane', 'Beast', 'Undead', 'Animal', 'Plant', 'Hero', 'Construct'];

var agentNames = {
    noble: ["Soma", "Piaget", "Fenryn", "Vermot", "Calendria", "Argasun", "Femetro", "Femo", "Ektor"],
    honorable: ["Goor", "Fundry", "Honos", "Cario", "Healios", "Embles", "Nikto", "Semper", "Fermet"],
    imperial: ["Maximus", "Mophet", "Lurisdan", "Ekto", "Nepto", "Suvika", "Philandro", "Anarchic", "Bloodthirsty"],
    humane: ["Soma", "Piaget", "Fenryn", "Vermot", "Calendria", "Argasun", "Femetro", "Femo", "Ektor"],
    neutral: ["Goor", "Fundry", "Honos", "Cario", "Healios", "Embles", "Nikto", "Semper", "Fermet"],
    coldblooded: ["Maximus", "Mophet", "Lurisdan", "Ekto", "Nepto", "Suvika", "Philandro", "Anarchic", "Bloodthirsty"],
    rebel: ["Soma", "Piaget", "Fenryn", "Vermot", "Calendria", "Argasun", "Femetro", "Femo", "Ektor"],
    anarchic: ["Goor", "Fundry", "Honos", "Cario", "Healios", "Embles", "Nikto", "Semper", "Fermet"],
    bloodthirsty: ["Maximus", "Mophet", "Lurisdan", "Ekto", "Nepto", "Suvika", "Philandro", "Anarchic", "Bloodthirsty"]
}


var landmarkKind = {
    forest: ["Forest", "Woods", "Plains"],
    //	plains: ["Plains", "Woods", "Marsh", "Swamp", "Cemetary", "Forest", "Woods", "Plains"],
    plains: ["Plains", "Woods", "Marsh", "Swamp", "Woods", "Forest", "Woods", "Plains"],

    swamp: ["Swamp", "Marsh", "Swamp", "Cemetary", "Crypt", "Woods", "Plains"],
    //mountains: ["Mountain", "Plinth", "Altar", "Tower", "Tomb", "Cemetary", "Crypt", "Tomb", "Tower"],
    mountains: ["Mountain", "Snow", "Mountain", "Snow", "Crypt"],
    snow: ["Snow", "Snow", "Mountain", "Snow"],
    hills: ["Forest", "Snow", "Marsh", "Swamp", "Cemetary", "Crypt", "Woods", "Plains"],
    desert: ["Desert", "Altar", "Crypt", "Cemetary", "Desert"]
}

var landmarkPrefix = {
    forest: ["tomb",
        "dark",
        "black",
        "bright",
        "brash",
        "light",
        "semper"
    ],
    woods: ["tomb",
        "dark",
        "black",
        "bright",
        "brash",
        "light",
        "semper"
    ],
    plains: ["Ashing", "Ton", "Still", "Ingle", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    altar: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    marsh: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril",'Sol'],
    swamp: ["Slay", "Bicker", "Rum", "Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    cemetary: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    crypt: ["Moonlight", "Dark", "Grim", "Fester", "Foul", "Rank", "Rotted", "Rotten", "Sour", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    dungeon: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Under", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    snow: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Under", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril",'Hinter','Winter','Ice'],
    tower: ["Mountain", "Dungeon", "Altar", "Tower", "Tomb", "Cemetary", "Crypt", "Tomb", "Tower", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    tomb: ["Hills", "Dungeon", "Altar", "Marsh", "Swamp", "Cemetary", "Crypt", "Woods", "Plains"],
    desert: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    hills: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    mountain: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    camp: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    tent: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel", "Broom", "Vender", "Ail", "Sou", "Weld", "Grum", "Ders", "Lunder", "Murc", "Sump", "Fril"],
    plinth: ["Plinth", "Henge"],
}


var landmarkSuffix = {
    forest: ["thicket",
        "wood",
        "copse",
        "grove",
        "weald",
        "woods",
        "forest",
        "leaf"
    ],
    woods: ["thicket",
        "wood",
        "copse",
        "grove",
        "weald",
        "woods",
        "forest",
        "orchard",
        "thicket", "leaf"
    ],
    plains: ["Cairn", "Shrine", "Tablo", "Altar", "Tomb", "Slab", "Rock", "Stone", "Temple"],
    altar: ["Cairn", "Shrine", "Tablo", "Altar", "Tomb", "Slab", "Rock", "Stone", "Temple"],
    marsh: ["Hills", "Dungeon", "Altar", "Marsh", "Swamp", "Cemetary", "Crypt", "Woods", "Plains"],
    //swamp: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    swamp: ["Swamp", "Marsh", "Marsh"],
    cemetary: ["Forest", "Woods", "Plains"],
    crypt: ["Carve", "Graveyard", "Tome", "Vault", "Ground", "Cemetary", "Catacombs", "Graves", "Grotto"],
    plinth: ["Plinth"],
    dungeon: ["Vault", "Dungeon", "Burrow", "Tower", "Crypt", "Din", "Dungeon", "Dungeon", "Wells"],
    tower: ["Mountain", "Dungeon", "Altar", "Tower", "Tomb", "Cemetary", "Crypt", "Tomb", "Tower"],
    tomb: ["Hills", "Dungeon", "Altar", "Marsh", "Swamp", "Cemetary", "Crypt", "Woods", "Plains"],
    desert: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    snow: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Under"],
    hills: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    mountain: ["Desert", "Dungeon", "Altar", "Camp", "Tent", "Cemetary", "Crypt", "Tomb", "Tower"],
    camp: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel"],
    tent: ["Bleak", "Blasted", "Dri", "Doos", "Feral", "Brex", "Tome", "Fire", "Effel"]
}








// QUEST TYPES

var killQuest = {
    type: 'kill',
    imperial: ['execute'],
    honorable: ['kill'],
    noble: ['kill'],
    humane: ['defeat'],
    rebel: ['kill'],
    anarchic: ['slaughter'],
    bloodthirsty: ['murder'],
    coldblooded: ['assasinate'],
    neutral: ['defeat']
}

var harmQuest = {
    type: 'blackmail',
    imperial: ['censor'],
    honorable: ['blackmail'],
    noble: ['campaign against'],
    humane: ['preach against'],
    rebel: ['protest'],
    //anarchic: ['sabotage'],
	anarchic : syn('sabotage'),
    bloodthirsty: ['smear'],
    coldblooded: ['blackmail'],
    neutral: ['blackmail']
}



var helpQuest = {
    type: 'gold',
    imperial: ['bribe'],
    honorable: ['reward'],
    noble: ['give welfare'],
    humane: ['donate'],
    rebel: ['give charity'],
    anarchic: ['bribe'],
    bloodthirsty: ['bribe'],
    coldblooded: ['bribe'],
    neutral: ['campaign']
}

var helpQuestConnect = {
    type: 'gold',
    imperial: [''],
    honorable: [''],
    noble: ['to'],
    humane: ['to'],
    rebel: ['to'],
    anarchic: [''],
    bloodthirsty: [''],
    coldblooded: [''],
    neutral: ['']
}



function syn(txt){
	 var rt = ""
	
	 var chanceText = new Chance(1);
	txt == "sabotage"?rt = chanceText.pick(['Sabotage', 'Smear', 'Blackmail']):null;
	txt == "but"?rt = chance1.pick(['but', 'while', 'yet']):null;
	txt == "understand"?rt = chance1.pick(['understand', 'realize', 'accept','comprehend','grasp that','get that','recognize','know','accept']):null;
	return rt;
}




//
//
//
//var harmQuesxxxt = {
//    type: 'harm',
//    imperial: ['intimidate'],
//    honorable: ['arrest'],
//    noble: ['intimidate'],
//    humane: ['convince'],
//    rebel: ['intimidate'],
//    anarchic: ['bully'],
//    bloodthirsty: ['terrorize'],
//    coldblooded: ['intimidate'],
//    neutral: ['intimidate']
//}
//
//
//
//
//var harmInformationQuest = {
//    type: 'blackmail',
//    imperial: ['censor'],
//    honorable: ['reveal truth'],
//    noble: ['campaign'],
//    humane: ['preach'],
//    rebel: ['blackmail'],
//    anarchic: ['extort'],
//    bloodthirsty: ['smear'],
//    coldblooded: ['blackmail'],
//    neutral: ['campaign']
//}
//
//
//
//var fetchQuest = {
//    type: 'fetch',
//    imperial: ['confiscate'],
//    honorable: ['buy'],
//    noble: ['take'],
//    humane: ['take'],
//    rebel: ['steal'],
//    anarchic: ['steal'],
//    bloodthirsty: ['steal'],
//    coldblooded: ['extort'],
//    neutral: ['get']
//}
//
//var giveQuest = {
//    mainAction: 'gold',
//    type: 'gold',
//    imperial: ['reward'],
//    honorable: ['reward'],
//    noble: ['donate'],
//    humane: ['aid'],
//    rebel: ['deliver'],
//    anarchic: ['give'],
//    bloodthirsty: ['sell'],
//    coldblooded: ['sell'],
//    neutral: ['give']
//}


// FOR THE [ITEM] TARGET




var targetType = ['supports ', 'opposes'];
var mAction = ['take ', 'take '];



//var mainMethod = {
//    // enemy quests,friendly quests
//    imperial: [
//        [killQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    honorable: [
//        [killQuest, fetchQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    noble: [
//        [fetchQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    humane: [
//        [fetchQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    rebel: [
//        [fetchQuest, harmInformationQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    anarchic: [
//        [killQuest, harmInformationQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    bloodthirsty: [
//        [killQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    coldblooded: [
//        [killQuest, harmInformationQuest, killQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//    neutral: [
//        [killQuest, fetchQuest, harmInformationQuest],
//        [giveGoldQuest, giveQuest]
//    ],
//}



var allyAlignment = {

    imperial: ['coldblooded', 'imperial', 'honorable'],
    honorable: ['noble', 'humane', 'honorable'],
    noble: ['humane', 'honorable', 'rebel', 'noble'],
    humane: ['noble', 'rebel', 'humane'],
    rebel: ['anarchic', 'humane', 'noble', 'rebel'],
    anarchic: ['rebel', 'bloodthirsty', 'coldblooded', 'anarchic'],
    bloodthirsty: ['anarchic', 'coldblooded', 'bloodthirsty'],
    coldblooded: ['bloodthirsty', 'imperial', 'coldblooded'],
    neutral: ['neutral']


}

var enemyAlignment = {

    imperial: ['bloodthirsty', 'humane', 'rebel', 'anarchic', 'noble'],
    honorable: ['anarchic', 'coldblooded', 'bloodthirsty', 'rebel'],
    noble: ['imperial', 'coldblooded', 'bloodthirsty', 'anarchic'],
    humane: ['imperial', 'coldblooded', 'bloodthirsty', 'anarchic'],
    rebel: ['imperial', 'coldblooded', 'bloodthirsty', 'honorable'],
    anarchic: ['imperial', 'honorable', 'noble', 'humane'],
    bloodthirsty: ['imperial', 'honorable', 'noble', 'humane', 'rebel'],
    coldblooded: ['honorable', 'noble', 'humane', 'rebel', 'anarchic'],
    neutral: ['bloodthirsty', 'noble']

}


function findAllies() {

}

function findEnemies(cit) {


}



var nationalGoalEconomy = {

    imperial: ['The Empyre Crusades'],
    honorable: ['Closing Dungfort Prison'],
    noble: ['The University of Byria'],
    humane: ['noble'],
    rebel: ['The Treaty of Zea'],
    anarchic: ['The Assasina Plot'],
    bloodthirsty: ['anarchic'],
    coldblooded: ['The Trade Route to Nindu'],
    neutral: ['neutral']


}

// add these after

var nationalGoalReligion = {

    imperial: ['coldblooded'],
    honorable: ['The Empyre Crusades'],
    noble: ['humane'],
    humane: ['noble'],
    rebel: ['The Treaty of Zea'],
    anarchic: ['rebel'],
    bloodthirsty: ['anarchic'],
    coldblooded: ['bloodthirsty'],
    neutral: ['neutral']


}

var nationalGoalPolitics = {

    imperial: ['coldblooded'],
    honorable: ['noble'],
    noble: ['humane'],
    humane: ['noble'],
    rebel: ['The Treaty of Zea'],
    anarchic: ['Assasination of Emperoro Mortelle'],
    bloodthirsty: ['anarchic'],
    coldblooded: ['bloodthirsty'],
    neutral: ['neutral']


}




// ------------------------------------------------------------------------------
// LEADERS
// ------------------------------------------------------------------------------
//
var merPaladine = {
    name: "Mer Paldine",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Honorable",
    career: "Rook",
    class: "Leader",
    karma: 5,
    description: "Strict and unyielding, Mer Paladine has been the fiercly loyal Mayor of Bresk for a generation",
    img: 'merpaladine',
    sphere: 'Politics'//,
   // method: killQuest
}
var fritzdandy = {
    name: "Fritz Dandy",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Rebel",
    career: "Swipe",
    class: "Leader",
    karma: 4,
    description: "With a flair for the arts and eyes for himself, Fritz Dandy is Bresk's most infamous poet",
    img: 'fritzdandy',
    sphere: 'Religion'
}
var saroo = {
    name: "Saroo",
    species: "Niji",
    gender: "Female",
    alignment: "Humane",
    career: "Seer",
    class: "Leader",
    karma: 4,
    description: "Humane and thoughtful Saroo thinks of others before herself, a testament to the devotion of Meradian ministers",
    img: 'saroo',
    sphere: 'Religion'
}

var noniaskosikot = {
    name: "Nonias Kosikot",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Bloodthirsty",
    career: "Swipe",
    class: "Leader",
    karma: 4,
    description: "The say ice runs through the veins of this inter regional arms dealer",
    img: 'noniaskosikot',
    sphere: 'Economy'
}


var wytchLyn = {
    name: "WytchLyn",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Noble",
    career: "Rook",
    class: "Leader",
    karma: 1,
    description: "A grim figure who backs Equality for Wytches",
    img: 'wytchlyn',
    sphere: 'Politics'
}

var roosvinder = {
    name: "Roos Vinder",
    path: "Strength",
    species: "Igri",
    gender: "Male",
    alignment: "Bloodthirsty",
    career: "Rook",
    class: "Leader",
    karma: 1,
    description: "A jack of all trades with a taste for blood and politics",
    img: 'roosvinder',
    sphere: 'Politics'
}

var fauvette = {
    name: "Fauvette",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Imperial",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Fauvetter works behind the scenes to further Imperial goals at any cost",
    img: 'fauvette',
    sphere: 'Economy'
}

var redmantle = {
    name: "Red Mantle",
    path: "Strength",
    species: "Niji",
    gender: "Male",
    alignment: "Honorable",
    career: "Rook",
    class: "Leader",
    karma: 1,
    description: "A cheerful blacksmith, dedicated to his work and the protection of others",
    img: 'redmantle',
    sphere: 'Politics'
}

var manta = {
    name: "Manis Manta",
    path: "Strength",
    species: "Igri",
    gender: "Male",
    alignment: "Coldblooded",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "A tireless collector of eccentric valuables and rare artifacts",
    img: 'manta',
    sphere: 'Economy'
}

var bovet = {
    name: "Bovet",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Rebel",
    career: "Rook",
    class: "Leader",
    karma: 1,
    description: "A former slave owner, now a supporter of abolition",
    img: 'bovet',
    sphere: 'Economy'
}




var cardinoovo = {
    name: "Cardino ovo",
    path: "Strength",
    species: "Niji",
    gender: "Male",
    alignment: "Imperial",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Highest memeber of Tiviscus ruling religious council and a proponent of religious crusades",
    img: 'cardinoovo',
    sphere: 'Religion'
}

var emprasuvika = {
    name: "Empra Suvika",
    path: "Strength",
    species: "Igri",
    gender: "Male",
    alignment: "Honorable",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "A lone figure seeking a return to greatness for her people",
    img: 'emprasuvika',
    sphere: 'Religion'
}

var crucibet = {
    name: "Crucibet",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Humane",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "A voice of reason in the otherwise imperial nation of Tiviscus",
    img: 'crucibet',
    sphere: 'Politics'
}

var emilybrightridge = {
    name: "Emily BrightRidge",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Coldblooded",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Emily has a burning desire for power, and the wealth and priviledge to back it up",
    img: 'emilybrightridge',
    sphere: 'Politics'
}

var wynncorette = {
    name: "Wynn Corette",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Bloodthirsty",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Jaunty, well dressed and charismatic Wynn will backstab anyone who gets in his way",
    img: 'wynncorette',
    sphere: 'Economy'
}


// DAEDREL

var viviettecuvier = {
    name: "Viviette Cuvier",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Imperial",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "A wealthy socialite originating from the city of Ookstergot, now very comfortable in the oplence of her new home",
    img: 'viviettecuvier',
    sphere: 'Religion'
}

var ambassadorgish = {
    name: "Ambassador Gish",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Bloodthirsty",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "An extremely well connected diplomat who serves as Emperoro's right hand man",
    img: 'ambassadorgish',
    sphere: 'Religion'
}

var peratorniflis = {
    name: "Perator Niflis",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Imperial",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Law and order are Perator's bread and butter, as long as they further Imperial goals",
    img: 'peratorniflis',
    sphere: 'Politics'
}

var bluette = {
    name: "Bluette",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Rebel",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Party girl with deep roots in ookstegots underground",
    img: 'bluette',
    sphere: 'Economy'
}

var captainfenrit = {
    name: "Captain fenrit",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Coldblooded",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Dedicated guard captain to the wealth families of Vels",
    img: 'captainfenrit',
    sphere: 'Politics'
}

var maximuswaxman = {
    name: "Maximus Waxman",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Coldblooded",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "The youngest of Vels corrupt ruling family",
    img: 'maximuswaxman',
    sphere: 'Economy'
}

var missbrindle = {
    name: "Miss Brindle",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Imperial",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Brindle is a seller of slaves, benefiting from Vels reputation as the gateway to the West",
    img: 'missbrindle',
    sphere: 'Economy'
}

var phishlepsy = {
    name: "Phish Lepsy",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Noble",
    career: "Seer",
    class: "Leader",
    karma: -5,
    description: "the antidote to the corrupt greed of the Open Coast",
    img: 'phishlepsy',
    sphere: 'Economy'
}

var booshootush = {
    name: "BooShoo Tush",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Humane",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Nimias foremost gossip has a heart of gold, caring for those around her",
    img: 'booshootush',
    sphere: 'Economy'
}

var merette = {
    name: "Merette",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Noble",
    career: "Seer",
    class: "Leader",
    karma: 50,
    description: "An advocate for legalizing Wytchery and a powerful Wytch herself",
    img: 'merette',
    sphere: 'Religion'
}



var nifline = {
    name: "Nifline",
    path: "Strength",
    species: "Kyndi",
    gender: "Female",
    alignment: "Anarchic",
    career: "Swipe",
    class: "Leader",
    karma: 1,
    description: "You will never see her coming. Nifline is a pre-eminent memeber of the Assasina clan",
    img: 'nifline',
    sphere: 'Politics'
}

var lordreas = {
    name: "Lord Reas",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Rebel",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Lord Reas has made her stronghold a center of support for the anti-imperial movement",
    img: 'lordreas',
    sphere: 'Economy'
}

var giska = {
    name: "Giska",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Anarchic",
    career: "Seer",
    class: "Leader",
    karma: 2,
    description: "An escaped slave and master of the snowy wilds she survived as a child",
    img: 'giska',
    sphere: 'Politics'
}

var viqbundy = {
    name: "Viq Bundy",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Anarchic",
    career: "Swipe",
    class: "Leader",
    karma: 1,
    description: "As free as Eastchurch is tight, Viq throws caution, and clothing, to the wind",
    img: 'viqbundy',
    sphere: 'Religion'
}

var skifftheoset = {
    name: "Skiff Theoset",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Honorable",
    career: "Seer",
    class: "Leader",
    karma: 1,
    description: "Surrounded by sin and skin, Skiff calmly grows her flock of loyal converts to cleanse Ebyr when the time is right",
    img: 'skifftheoset',
    sphere: 'Religion'
}

var pergunter = {
    name: "Per Gunter",
    path: "Strength",
    species: "Niji",
    gender: "Female",
    alignment: "Honorable",
    career: "Seer",
    class: "Leader",
    karma: 2,
    description: "Retired from the army Per brings his leadership skills and rusty diplomact to the citizens of Guerette",
    img: 'pergunter',
    sphere: 'politics'
}


var dimnunda = {
    name: "Dim Nunda",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Rebel",
    career: "Seer",
    class: "Leader",
    karma: 2,
    description: "Religious shackles don't fit people like Dim, and he's making up for lost time",
    img: 'dimnunda',
    sphere: 'Religion'
}

var octaviagoor = {
    name: "Octavia",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Noble",
    career: "Seer",
    class: "Leader",
    karma: 2,
    description: "Well travelled, well educated, and a member of Ookstergot's prestigious Goor family",
    img: 'octaviagoor',
    sphere: 'politics'
}

var prudette = {
    name: "Prudette",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Noble",
    career: "Seer",
    class: "Leader",
    karma: 2,
    description: "Religious shackles don't fit people like Prudette, and she's maiking up for lost time",
    img: 'prudette',
    sphere: 'politics'
}

var jackdaw = {
    name: "Jackdaw",
    path: "Strength",
    species: "Igri",
    gender: "Female",
    alignment: "Anarchic",
    career: "Seer",
    class: "Leader",
    karma: 2,
    description: "Sometimes collecting what's owed takes muscle. Jackdaw has it, and keeps the city coffers full",
    img: 'jackdaw',
    sphere: 'Economy'
}

var nanjaCitizens = [

mumberAndGudsnip,aylmerWidowprik,motherGangrene

]

var whalesburgCitizens = [

abbyGreentooth,sarandra,grimFroy

]

var breskCitizens = [

    merPaladine, fritzdandy, saroo

]

var hivreCitizens = [

    wytchLyn, merette, fauvette

]

var nizeanCitizens = [

    bovet, manta, redmantle

]

var vandgelsCitizens = [

    cardinoovo, emprasuvika, crucibet

]



var ookstergotCitizens = [

    noniaskosikot, emilybrightridge, bluette

]

var daedrelCitizens = [

    viviettecuvier, ambassadorgish, peratorniflis

]

var velsCitizens = [

    missbrindle, maximuswaxman, wynncorette

]

var mollydaleCitizens = [

    roosvinder, booshootush, phishlepsy

]

var gunperchCitizens = [

    nifline, lordreas, giska

]
gueretteCitizens = [

    octaviagoor, pergunter, jackdaw

]

var eastChurchCitizens = [

    viqbundy, skifftheoset, dimnunda

]




//var merNanja = {
//	name:"Mer nanja",
//	path: "Speed"
//}


var merAbbey = {
    name: "Mer Abbey",
    path: "Spirit",
    gender: "Androgyne",
    career: "Seer",
    alignment: "Noble"
}


//var merBejra = {
//	path: "Speed"
//}


var maximusWaxman = {
    name: "Maximus Waxman",
    path: "Speed"
}

// ------------------------------------------------------------------------------
// PROVINCES (SAVAR)
// ------------------------------------------------------------------------------

var movette = {
    name: "Movette",
    level: 7,
    type: "province",
    maxLandmarks: 4,
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Forest",
    music: 'theme',
    urban: ['Guerrette', 'SousTerre'],
    citizens: [gueretteCitizens],
    urbanDescription: ['The administrative gateway to The Open Coast'],
    urbanTypes: ['City', 'Dungeon'],
    citiesGrid: [
        [-64.53, 101.03]
    ],


    mapArea: [
        [-62.69, 90.31],
        [-62.12, 100.94],
        [-52.11, 97.03],
        [-51.01, 88.55],
        [-57.96, 86.22]

    ],
    position: [-56.07, 94.31],
    description: ""
};


// ------------------------------------------------------------------------------
// PROVINCES (TIVISCUS)
// ------------------------------------------------------------------------------



var silverWood = {
    name: "Silverwood",
    type: "province",
    maxLandmarks: 3,
    level: 6,
    alignment: "Imperial",
    species: "Niji",
    path: "Spirit",
    terrain: "Forest",
    urban: ['Vandgels', 'BickWater', 'GraceDeDame'],
    urbanTypes: ['City', 'Camp', 'Church'],
    urbanDescription: ['The crumbling religious center of Nimia'],
    citizens: [vandgelsCitizens],
    mapArea: [
        [-71.64, 0.83],
        [-68.75, 7.38],
        [-64.96, 2.90],
        [-66.28, -7.65],
        [-68.75, -13.71]
    ],
    citiesGrid: [
        [-71.39, -2.02],
        [-66.57, 0.44],
        [-69.01, 4.04]
    ],

    locationGrid: [
        [-64.77, 2.11],
        [-66.58, 6.37],
        [-66.98, -4.97],
        [-69.30, -1.19],
        [-71.58, 2.29]

    ],
    position: [-67.6, -0.6],
    description: "A visually spellbinding region with resource rich forests, flowering plains and titanic mountain ridges. It’s home to Vandgels - the orthodox capital of Tiviscus and the crowning jewel of the nation"
};

var humblePlains = {
    name: "HumblePlains",
    type: "province",
    alignment: "Honorable",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: "fairy",
    level: 4,

    urban: ['RevelAbbey'],
    urbanTypes: ['Church'],
    mapArea: [
        [-73.79, 2.86],
        [-71.58, 0.26],
        [-68.82, -14.06],
        [-70.90, -19.25],
        [-73.76, -11.03],
        [-75.19, -12.13],
        [-75.41, -6.42],
        [-74.59, -4.39]
    ],
    citiesGrid: [

        [-69.26, -5.36]
    ],
    locationGrid: [
        [-67.26, -10.11],
        [-69.78, -10.02],
        [-70.61, -15.29],
        [-75.19, -10.50],
        [-73.78, -2.59]

    ],
    position: [-71, -12],
    description: "Generations ago the Battle of Tiviscus was fought on the sweeping flatlands. Today its windswept beauty and view running up to the eastern mountains has all but erased the blood filled battle that took place here."
};

var doonBarrens = {
    name: "DoonBarrens",
    type: "province",
    alignment: "Anarchic",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: "spooky",
    level: 6,
    urban: ['DoonPillar'],
    urbanTypes: ['Dungeon'],
    citiesGrid: [
        [-55.53, -2.07]
    ],
    locationGrid: [
        [-56.17, -8.35],
        [-54.19, 2.46],
        [-55.03, 7.25],
        [-60.04, -0.70]

    ],
    mapArea: [
        [-63.05, -18.98],
        [-63.35, -13.71],
        [-60.31, 1.80],
        [-57.96, 4.13],
        [-57.33, 8.96],
        [-53.90, 10.46],
        [-51.15, 4.92],
        [-56.07, -10.59],
        [-59.76, -17.93],
        [-63.74, -19.34]
    ],
    position: [-56.6, -5],
    description: "It’s known as sacred land to the Tiviscans due to the Terrapin tower located in its centre - a religious icon that sees many pilgrims venture towards it never to return."
};

var eastuary = {
    name: "Eastuary",
    type: "province",
    level: 3,
    alignment: "Anarchic",
    species: "Niji",
    path: "Spirit",
    terrain: "Swamp",
    music: "eerie",
    urban: ['WytchMoor Prison'],
    urbanTypes: ['Prison'],
    urbanDescription: ['An Imperial prison for heretics and non-believers'],

    mapArea: [
        [-68.58, -14.02],
        [-65.93, -6.15],
        [-64.72, 3.34],
        [-61.50, 5.93],
        [-63.55, -13.67],
        [-63.33, -18.81],
        [-66.18, -18.15]
    ],
    citiesGrid: [

        [-65.33, -6.72]
    ],


    locationGrid: [
        [-66.79, -16.88],
        [-63.25, 1.54],
        [-62.96, -17.14],
        [-61.54, -10.94],
        [-59.47, -14.77]

    ],
    position: [-65, -15],
    description: " It is powerfully situated with direct sea routes to the prosperous Empyre of Nindu in the west and a home to many pirates, tricksters and other thick skinned traders."
};

var daemonsPass = {
    name: "DaemonsPass",
    type: "province",
    level: 4,
    alignment: "ColdBlooded",
    species: "Niji",
    path: "Strength",
    terrain: "Swamp",
    music: "spooky",
    // cities: [bejra, tavers, nuphet],
    urban: ['Daedrel', 'RakeTower'],
    urbanTypes: ['City', 'Dungeon'],
    urbanDescription: ['A growing stronghold for Imperial Forces'],
    citizens: [daedrelCitizens],
    citiesGrid: [
        [-58.59, 16.57],
        [-62.59, 23.77]
    ],
    mapArea: [
        [-60.52, 2.11],
        [-58.05, 4.17],
        [-56.66, 18.02],
        [-61.21, 25.27],
        [-65.60, 18.81],
        [-63.72, 13.32],
        [-62.04, 13.36],
        [-60.57, 8.31],
        [-60.69, 2.64]
    ],
    locationGrid: [
        [-60.00, 6.06],
        [-61.73, 16.30],
        [-57.81, 10.50],
        [-63.23, 9.98],
        [-63.31, 16.92]

    ],
    position: [-59.4, 10],
    description: " With the arid Doon Barrens to the west, the Dracozid kingdom of Nur Ela to the east, and the barbaric Visigo to the south, few people make to Daemons Pass, let alone through it"
};

var underMire = {
    name: "UnderMire",
    type: "province",
    level: 5,
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: "eerie",
    urban: ['Poisette'],
    urbanTypes: ['Village'],
    mapArea: [
        [-73.65, 3.16],
        [-73.12, 2.46],
        [-72.24, 7.69],
        [-70.52, 8.26],
        [-69.90, 5.27],
        [-68.67, 7.38],
        [-65.00, 3.43],
        [-65.69, 18.94],
        [-69.18, 19.47],
        [-70.71, 14.81],
        [-70.44, 12.17],
        [-71.40, 11.51],
        [-72.88, 14.37],
        [-73.79, 8.66]
    ],
    citiesGrid: [

        [-72.55, 16.44]
    ],
    locationGrid: [
        [-73.07, 9.01],
        [-70.44, 15.69],
        [-68.77, 12.83],
        [-67.66, 18.90],
        [-66.27, 12.70]

    ],
    position: [-67, 12],
    description: "the entire region has slowly been sinking into the sea, as villagers use what little wealth they have to prop home after home up on stilts or sticks in an attempt to preserve their sad way of life."
};




// ------------------------------------------------------------------------------
// PROVINCES (OPEN COAST)
// ------------------------------------------------------------------------------

var njivette = {
    name: "Njivette",
    level: 6,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Forest",
    music: "eerie",
    urban: ['Ookstergot', 'DungFort Prison'],
    urbanTypes: ['City', 'Prison'],
    citizens: [ookstergotCitizens],
    urbanDescription: ['A smoke-choked black market where anything is for sale', 'Mostly cheats, scoundrels and swindlers of riches'],
    citiesGrid: [
        [-66.60, 52.08],
        [-70.0, 25.5]
    ],
    mapArea: [
        [-70.95, 47.37],
        [-69.12, 47.72],
        [-67.51, 42.14],
        [-65.29, 44.56],
        [-66.09, 54.49],
        [-69.60, 56.38],
        [-70.80, 56.47],
    ],
    locationGrid: [
        [-70.47, 48.43],
        [-68.25, 48.56],
        [-66.62, 44.82]

    ],
    position: [-70.01, 56.69],
    description: ""
};

var iwin = {
    name: "Iwin",
    maxLandmarks: 3,
    level: 5,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Forest",
    music: 'theme',

    urban: ['MollyDale'],
    urbanTypes: ['Village'],
    citizens: [mollydaleCitizens],
    citiesGrid: [
        [-72.67, 82.27]
    ],
    locationGrid: [
        [-70.80, 87.89],
        [-70.51, 80.77]

    ],
    mapArea: [
        //[-72.71,79.50],[-70.13,80.02],[-70.13,86.35],[-70.61,90.97],[-71.59,88.77],[-72.44,92.20],[-73.20,90.57],
        [-75.67, 89.43],
        [-75.33, 80.07],
        [-73.00, 81.52],
        [-71.52, 81.08],
        [-70.13, 86.40],
        [-71.40, 88.55],
        [-72.51, 92.29],
        [-74.96, 89.52]
    ],
    position: [-70.96, 86.79],
    description: ""
};

var aidal = {
    level: 4,
    //maxLandmarks: 3,
    name: "Aidal",
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: 'theme',
    //mapArea : [
    //[-75.75,80.73],[-75.81,90.00],[-73.24,90.35],[-72.79,79.19],[-74.34,78.66]
    //],
    //cities: [bejra, tavers, nuphet],
    locationGrid: [
        [-75.14, 88.33],
        [-75.32, 81.65],
        [-73.84, 81.04],

    ],
    position: [-74.59, 83.94],
    description: ""
};

var verdur = {
    name: "Verdur",
    maxLandmarks: 3,
    level: 6,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: 'theme',
    urban: ['MistDeep', 'EastChurch'],
    urbanTypes: ['Dungeon', 'Village'],
    urbanDescription: ['Dangerous beasts below. Enter at your own risk.', 'Believer meets sinner in this polarized town'],
    citizens: [eastChurchCitizens],
    citiesGrid: [
        [-67.88, 97.34]
    ],
    mapArea: [
        //[-71.30,95.19],[-70.16,94.13],[-68.43,97.69],[-67.79,106.22],[-69.04,106.96],[-70.44,105.95],[-71.52,99.18]
        //[-70.14,94.57],[-68.64,97.38],[-68.14,94.79],[-66.57,95.19],[-66.46,98.83],[-64.66,99.71],[-64.53,105.38],[-66.37,107.93],[-67.29,105.91],[-68.91,107.05],[-70.30,105.82],[-70.58,100.81],[-71.44,100.02],[-71.30,95.76]
        [-70.11, 105.60],
        [-70.57, 100.85],
        [-71.46, 99.23],
        [-71.31, 95.80],
        [-70.19, 94.44],
        [-68.64, 97.51],
        [-68.02, 95.19],
        [-66.57, 95.36],
        [-66.34, 99.54],
        [-64.70, 99.80],
        [-64.53, 105.47],
        [-65.71, 107.71],
        [-66.71, 106.44],
        [-67.53, 101.03],
        [-69.44, 101.47],
        [-69.27, 106.79]
    ],
    locationGrid: [
        [-71.03, 97.21],
        [-69.46, 97.47]

    ],
    position: [-71.23, 98.92],
    description: ""
};

var elai = {
    name: "Elai",
    level: 7,
    //maxLandmarks: 3,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Forest",
    music: 'theme',
    //urban: ['EastChurch'],
    //urbanTypes:['Village'],
    citiesGrid: [
        [-64.53, 101.03]
    ],

    //mapArea:[
    //	[-68.45,97.56],[-68.07,95.05],[-66.46,94.70],[-66.00,98.75],[-64.32,99.98],[-63.94,105.86],[-66.05,108.11]
    //	],
    locationGrid: [
        [-64.77, 104.99],
        [-67.32, 102.39]

    ],
    position: [-67.29, 97.69],
    description: ""
};




// ------------------------------------------------------------------------------
// PROVINCES (NUJU)
// ------------------------------------------------------------------------------

var boneSea = {
    name: "Bone Sea",
    level: 4,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: "eerie",
    urban: ['Nezerdad'],
    urbanTypes: ['Dungeon'],
    citiesGrid: [
        [-73.02, 26.15]
    ],
    mapArea: [
        [-73.68, 25.00],
        [-72.10, 30.32],
        [-73.21, 43.73],
        [-74.54, 45.88],
        [-75.31, 40.47],
        [-75.07, 34.80],
        [-76.61, 33.84],
        [-76.54, 28.61],
        [-74.82, 28.17],
        [-74.15, 24.79]
    ],
    locationGrid: [
        [-74.28, 42.23],
        [-75.46, 30.63],
        [-73.55, 28.99],
        [-76.50, 32.52],
        [-73.23, 32.52]

    ],
    position: [-74.37851, 31.64063],
    description: ""
};


var froosRidge = {
    name: "FroosRidge",
    level: 3,
    type: "province",
    alignment: "Neutral",
    species: "Igri",
    path: "Spirit",
    terrain: "Snow",
    music: "eerie",
    urban: ['Nizean'],
    urbanTypes: ['Village'],
    citizens: [nizeanCitizens],
    citiesGrid: [
        [-68.96, 39.16]
    ],
    mapArea: [
        [-73.06, 43.81],
        [-69.87, 43.37],
        [-66.51, 41.40],
        [-66.44, 36.69],
        [-67.66, 32.26],
        [-71.94, 30.32],
        [-72.34, 35.24],
        [-68.88, 34.50],
        [-68.58, 38.06],
        [-70.93, 40.91],
        [-72.71, 39.51]
    ],
    locationGrid: [
        [-72.11, 36.77],
        [-70.60, 40.56],
        [-67.29, 36.98],
        [-68.91, 33.66],
        [-70.41, 32.04]
    ],
    position: [-69.71811, 34.14551],
    description: ""
};




var vileCoast = {
    name: "Vile Coast",
    level: 3,
    type: "province",
    alignment: "Rebel",
    species: "Niji",
    path: "Spirit",
    terrain: "Hills",
    music: "spooky",
    urban: ['VileDeep'],
    urbanTypes: ['IdolStrength'],
    citiesGrid: [
        [-76.99, 39.51]
    ],
    mapArea: [
        [-78.94, 41.70],
        [-78.94, 44.17],
        [-77.39, 53.13],
        [-74.45, 45.66],
        [-75.40, 40.47],
        [-76.99, 39.99],
        [-76.58, 33.66]
    ],
    locationGrid: [
        [-77.52, 35.55],
        [-78.43, 41.62],
        //[-76.78, 41.48],
        [-77.20, 47.94],
        [-75.92, 44.17]
    ],
    position: [-77.42782, 41.30859],
    description: ""
};

var koldeMarsh = {
    name: "Kolde Marsh",
    level: 2,
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Swamp",
    music: "spooky",
    urban: ['Hivre'],
    urbanTypes: ['Village'],
    urbanDescription: ['A friendly backwater fighting for independence'],
    citizens: [hivreCitizens],
    citiesGrid: [
        [-78.35, 23.64],
        [-78.16, 30.59],
        [-79.30, 22.41]
    ],
    mapArea: [
        [-78.91, 41.44],
        [-76.61, 33.62],
        [-76.61, 28.48],
        [-79.21, 21.93],
        [-79.94, 26.59],
        [-80.55, 28.52],
        [-80.60, 36.61],
        [-79.87, 38.89],
        [-79.29, 38.01]
    ],
    locationGrid: [
        [-77.66, 28.92],
        [-79.18, 27.38],
        [-80.35, 29.97],
        [-79.45, 34.94],
        [-80.23, 35.33]
    ],
    position: [-79.12169, 29.79492],
    description: ""
};


var eastFields = {
    name: "Eastfields",
    level: 1,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Plains",
    music: "morning",
    urban: ['Bresk', 'VenAbbey', 'BasinWood', 'BrightRidge'],
    urbanTypes: ['City', 'Church', 'Dungeon','Village'],
    urbanDescription: ['A friendly city and the largest port in Nuju','','','BrightRidge Inn has sheltered travellers for generations'],
    citizens: [breskCitizens],
    citiesGrid: [
        [-77.03, 55.38],
        [-75.60, 66.14],
        [-77.14, 60.16], 
		 [-77.14, 60.16]
		//,//[-75.08, 53.84],
		//[-70.43,65]
        //[-75.02, 53.83]




    ],
    mapArea: [
        [-77.24, 52.47],
        [-73.30, 61.61],
        [-75.39, 68.12],
        [-77.20, 76.38],
        [-78.22, 76.99],
        [-78.58, 71.37],
        [-77.27, 62.84],
        [-77.22, 52.91]
    ],
    locationGrid: [
        [-77.71, 71.37],
        [-77.29, 61.48],

        [-74.42, 63.02],
        [-77.03, 66.49],
        [-76.16, 61.48],

    ],
    position: [-76.87, 61.44],
    description: ""
};




var tombWood = {
    name: "TombWood",
    level: 2,
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Forest",
    music: "morning",
    urban: ['Nanja', 'NinHenge'],
    urbanTypes: ['Village', 'Guild'],
    citizens: [nanjaCitizens],
    citiesGrid: [

        [-73.34, 45.62],
        [-74.12, 59.33]
    ],
    mapArea: [
        [-77.24, 52.38],
        [-73.14, 43.77],
        [-71.54, 52.25],
        [-73.03, 58.40],
        [-73.81, 57.02],
        [-74.24, 58.65]
    ],
    locationGrid: [
        [-74.33, 46.89],
        [-73.25, 54.98],
        [-75, 57.48],
        [-76, 50.80],
        [-73.0, 50.49]
    ],
    position: [-74, 50.1953],
    description: "Don't be fooled by it's beauty. Among is moss lined trees dwell viscious trulls, trunk-cracking gunts and deadly scissorgreens."
};




// ------------------------------------------------------------------------------
// PROVINCES (ELDT)
// ------------------------------------------------------------------------------

var wildesil = {
    name: "Wildesil",
    level: 5,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: "spooky",
    urban: ['KuldeToom', 'Wuld'],
    urbanTypes: ['Dungeon', 'Village'],
    citiesGrid: [
        [-81.41, 39.42],
        [-83.13, 34]
    ],
    mapArea: [
        [-83.02, 30.37],
        [-82.31, 29.27],
        [-81.14, 30.50],
        [-81.04, 33.71],
        [-81.24, 37.09],
        [-80.42, 48.34],
        [-80.75, 50.58],
        [-82.40, 38.58],
        [-82.76, 39.42],
        [-83.23, 33.97],
        [-83.05, 30.32]
    ],
    locationGrid: [
        [-80.72, 47.90],
        [-81.53, 32.74],
        [-82.38, 31.99]

    ],
    position: [-81.71, 38.23],
    description: ""
};


var frostShelf = {
    level: 6,
    maxLandmarks: 3,
    name: "FrostShelf",
    type: "southCove",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Mountains",
    music: "spooky",
    //cities: [nizean, nosTour, tavers],
    locationGrid: [
        [-81.81, 15.73],
        [-83.13, 12.48],
        [-83.26, 17.89]
    ],
    mapArea: [
        [-83.04, 4.97],
        [-82.79, 12.48],
        [-81.68, 12.96],
        [-81.21, 19.03],
        [-82.02, 26.32],
        [-82.96, 28.87],
        [-83.77, 16.79],
        [-83.66, 12.66]
    ],
    position: [-82.50, 20.43],
    description: ""
};


var griski = {
    level: 5,
    name: "Griski",
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Mountains",
    music: "spooky",
    urban: ['Brundt', 'Underslaar'],
    urbanTypes: ['City', 'Dungeon'],
    citiesGrid: [
        [-82.98, -5.05],
        [-81.43, 5.23]
    ],
    locationGrid: [
        [-81.98, 6.46],
        [-82.68, 2.59],
        [-81.64, -12.30],
        [-80.94, -4.04]
    ],
    mapArea: [
        [-83.11, 4.70],
        [-82.44, 8.31],
        [-81.51, 10.33],
        [-80.21, 1.32],
        [-81.05, -10.06],
        [-82.78, -11.03],
        [-83.18, -1.36]
    ],
    position: [-81.90, -4.70],
    description: ""
};

var southCove = {
    name: "SouthCove",
    level: 4,
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    music: "spooky",
    terrain: "Swamp",
    urban: ['Urchard'],
    urbanTypes: ['Village'],
    citiesGrid: [
        [-79.58, 4.31]
    ],
    locationGrid: [
        //[-74.27, 73.48],
        [-77.87, 1.45],
        [-78.62, 6.46],
        [-78.96, 14.11],
        [-80.63, 11.87]
    ],
    mapArea: [
        [-77.77, 0.09],
        [-80.27, 1.76],
        [-81.72, 12.70],
        [-81.17, 19.25],
        [-80.12, 15.12],
        [-78.41, 16.74],
        [-77.80, 7.78]
    ],
    position: [-79.38, 8.35],
    description: ""
};


var carversPass = {
    name: "CarversPass",
    level: 5,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    music: "spooky",
    terrain: "Mountains",
    urban: ['BellowCairn'],
    urbanTypes: ['Dungeon'],
    citiesGrid: [
        [-80.30, -22.68]
    ],
    mapArea: [
        [-82.67, -25.53],
        [-81.80, -25.88],
        [-81.19, -22.85],
        [-80.61, -27.55],
        [-79.92, -16.92],
        [-79.46, -22.59],
        [-79.01, -22.06],
        [-77.80, -0.26],
        [-80.12, 1.14],
        [-79.99, -7.51],
        [-80.86, -13.67],
        [-81.19, -10.63],
        [-82.79, -11.47],
        [-82.29, -15.47],
        [-80.27, -14.02],
        [-80.20, -16.44],
        [-81.26, -15.82],
        [-82.01, -18.11],
        [-82.80, -23.12]
    ],
    locationGrid: [
        [-78.80, -16.35],
        [-78.47, -7.16],
        [-79.92, -14.50],
        [-79.91, -3.16],
        [-78.01, -12.66]
    ],
    position: [-79.15, -8.17],
    description: ""
};



var froosWood = {
    name: "FroosWood",
    level: 6,
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Forest",
    music: "eerie",
    urban: ['BraerMarch'],
    urbanTypes: ['Village'],
    citiesGrid: [
        [-75.40, 6.77]
    ],
    mapArea: [
        [-77.69, -0.13],
        [-76.20, 2.37],
        [-74.63, 8.48],
        [-73.86, 15.25],
        [-74.99, 19.60],
        [-77.73, 19.86],
        [-78.51, 16.92],
        [-77.67, 7.65]
    ],
    locationGrid: [
        [-74.56, 12.26],
        [-76.01, 10.90],
        [-77.80, 14.06],
        [-76.48, 4.66],
        [-77.14, -3.87]
    ],
    position: [-76.43, 12.39],
    description: ""
};

var froostuary = {
    level: 10,
    name: "Froostuary",
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Mountains",
    music: 'eerie',

    urban: ['Marscow', 'IceDeep', 'NovaGeld'],
    urbanTypes: ['Village', 'Dungeon', 'Guild'],
    citiesGrid: [
        [-78.94, -62.14],
        [-78.03, -52.34],
        [-77.85, -64.07]
    ],
    mapArea: [
        [-77.94, -75.98],
        [-78.71, -67.28],
        [-79.53, -69.83],
        [-79.84, -59.50],
        [-80.99, -57.92],
        [-81.51, -68.91],
        [-79.82, -75.59],
        [-79.27, -81.52],
        [-78.35, -81.08]
    ],
    locationGrid: [
        [-79.12, -72.42],
        [-80.26, -75.06],
        [-80.69, -63.85],
        [-78.90, -79.06],
        [-76.31, -65.65]
    ],
    position: [-78.21, -74.27],
    description: ""
};


var glaciavik = {
    name: "Glaciavik",
    level: 9,
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Mountains",
    music: 'theme',

    urban: ['Polunder', 'WhalesBurg', 'Savion'],
    urbanTypes: ['Dungeon', 'Village', 'Church'],
	citizens: [whalesburgCitizens],
    citiesGrid: [
        [-82.16, -53.13],
        [-83.29, -30.76],
        [-79.15, -30.28]
    ],
    mapArea: [
        [-80.28, -43.37],
        [-80.60, -31.73],
        [-81.42, -29.93],
        [-82.14, -34.94],
        [-80.99, -40.96],
        [-81.38, -45.00],
        [-83.64, -54.93],
        [-83.33, -59.02],
        [-82.85, -59.50],
        [-81.49, -48.78],
        [-80.46, -46.49]
    ],
    locationGrid: [
        [-80.96, -32.26],
        [-82.53, -23.51],
        [-81.13, -44.47],
        [-83.28, -57.00],
        [-79.62, -52.08]
    ],
    position: [-82.38, -43.86],
    description: ""
};

var kokov = {
    name: "Kokov",
    level: 8,
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Swamp",
    music: 'theme',
    urban: ['BloodGund Prison'],
    urbanTypes: ['Prison'],
    urbanDescription: ['An inhumane frozen nightmare for the most violent offenders'],
    citiesGrid: [
        [-76.01, -62.57]
    ],
    mapArea: [
        [-73.26, -28.61],
        [-73.66, -35.11],
        [-73.74, -41.88],
        [-74.66, -45.40],
        [-75.19, -48.34],
        [-75.61, -43.07],
        [-76.14, -45.53],
        [-76.51, -49.92],
        [-75.54, -53.66],
        [-74.97, -49.00],
        [-74.02, -50.80],
        [-72.61, -44.17],
        [-71.66, -36.74],
        [-72.83, -35.64],
        [-71.92, -30.50]
    ],
    locationGrid: [
        [-73.42, -38.85],
        [-73.74, -45.31],
        [-76.14, -49.04]
    ],
    position: [-74.65, -50.36],
    description: ""
};


var hornsWaste = {
    level: 9,
    name: "HornsWaste",
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Desert",
    music: 'theme',
    mapArea: [
        [-75.49, -68.91],
        [-72.66, -55.50],
        [-71.73, -42.71],
        [-68.29, -56.47],
        [-68.07, -64.25],
        [-68.86, -72.82],
        [-70.73, -77.61],
        [-73.98, -74.31]
    ],
    urban: ['Vels', 'Krakatom', 'WestChurch'],
    urbanTypes: ['City', 'Dungeon', 'Church'],
    citizens: [velsCitizens],
    urbanDescription: ['Ruled by a ruthless family of bankers corrupt with Old Money'],

    citiesGrid: [
        [-68.27, -62.45],
        [-72.97, -56.25],
        [-70.90, -75.67]
    ],
    locationGrid: [
        [-69.85, -65.92],
        [-70.71, -55.85],
        [-72.98, -51.64],
        [-73.80, -64.20],
        [-72.83, -74.75]
    ],
    position: [-69.81, -63.02],
    description: ""
};

var vanderFeld = {
    level: 5,
    name: "VanderFeld",
    type: "province",
    alignment: "Honorable",
    species: "Igri",
    path: "Spirit",
    terrain: "Forest",
    music: 'theme',
    urban: ['Vestpoort'],
    urbanTypes: ['Village'],
    citiesGrid: [
        [-72.88, -22.85]
    ],
    mapArea: [
        [-77.48, 0.09],
        [-77.15, -11.03],
        [-77.72, -19.56],
        [-75.69, -27.33],
        [-74.27, -33.05],
        [-73.52, -23.60],
        [-72.63, -24.13],
        [-72.85, -19.69],
        [-74.50, -16.52],
        [-75.74, -9.89],
        [-75.50, -5.23],
        [-76.14, 2.37]
    ],
    locationGrid: [
        [-74.38, -19.78],
        [-75.43, -15.82],
        [-77.11, -19.60],
        [-75.94, -5.10],
        [-75.61, -16.79]
    ],
    position: [-76.39, -13.89],
    description: ""
};


var runder = {
    level: 4,
    name: "Runder",
    type: "province",
    alignment: "Humane",
    species: "Niji",
    path: "Spirit",
    terrain: "Mountains",
    //cities: [suTour],
    music: 'theme',
    urban: ['GunPerch'],
    urbanTypes: ['Village'],
    citizens: [gunperchCitizens],
    citiesGrid: [
        [-77.49, -32]
    ],
    mapArea: [
        [-77.47, -20.79],
        [-76.69, -23.64],
        [-77.12, -32.78],
        [-76.52, -34.32],
        [-75.89, -26.85],
        [-75.07, -30.06],
        [-74.95, -37.57],
        [-76.07, -44.78],
        [-76.34, -37.35],
        [-76.76, -37.88],
        [-76.50, -45.62],
        [-77.08, -46.93],
        [-77.57, -41.40],
        [-77.00, -35.42],
        [-78.11, -30.10]
    ],
    locationGrid: [
        [-78.62, -41.35],
        [-77.20, -43.77],
        [-75.74, -36.52],
        [-75.08, -28.56],
        [-77.68, -28.30]
    ],
    position: [-76.18, -37.57],
    description: ""
};


// ----------------------------------------------------------------------------------------	
// REGIONS
// ----------------------------------------------------------------------------------------	




// ------------------------------------------------------------------------------
// REGIONS (BAEVET)
// ------------------------------------------------------------------------------

var napal = {
    name: "napal",
    type: "region",
    // provinces: [njivette],
    position: [-37.24997, 18.69922],
    description: "priests and scribes  luxuriate among temples and palaces that house the grand leaders of Physsys. protected by an indoctrinated and brutal army the plutocracy rules from on high, with little eye towards change."
};




// ------------------------------------------------------------------------------
// REGIONS (PHYSSUS)
// ------------------------------------------------------------------------------


var cipri = {
    name: "cipri",
    type: "region",
    //  provinces: [njivette],
    position: [-9.27562, -14.58984],
    description: "A booming centre for trade in foreign slaves, Cipri receives and delivers slaves to many around the world. Most of the poor rural population are nearly slaves themselves, relying on the warm dry climate for comfort."
};

var idrita = {
    name: "idrita",
    type: "region",
    // provinces: [njivette],
    position: [-11.1784, 31.99219],
    description: "A wealthy island with far reaching influence and many cultural centres in and out of its grand jewel - the city of Residi. A seafaring society that fear little."
};




var odino = {
    name: "odino",
    type: "region",
    // provinces: [njivette],
    position: [-12.21118, 6.67969],
    description: "fishing and farming in a climate most call 'the nimian jewel' yield deliciously fresh fruit, meats and cheeses. Philosophy, theatre and the arts abound as odinans enjoy simple pleasures."
};


// ------------------------------------------------------------------------------
// REGIONS (ELDT)
// ------------------------------------------------------------------------------


var mynik = {
    name: "mynik",
    type: "region",
    provinces: [froosWood, carversPass],
    position: [-78.34941, -3.33984],
    description: "Warm comfortable summers and thrilling winters keep the inhabitants on their toes. The university of Mynik is the southern most place of learning devoted to the sciences and is on par with the universtity of Byria.",
    adventure: 'Path of the Assasina',
    adventureDescription: 'The frozen mountains of Eldt are the perfect hiding place for the anti-empyre Assasina clan. Ferret out the traitors, or join their fight to kill an Emperor.',
    opposed: 'Support for the Empyre and Emperoro Mortelle has reached an all time high, and the armies of the Empyre are swelling with new recruits. Invasion is imminent',
    supported: 'Widespread rebellion against Emperoro Mortelle has taken root. Nearby nations are encouraged to leave the Empyre while the Assasina prepare an assault on Emperoro Mortelles life.',
    votesNeeded: 11
};

var tundt = {
    name: "tundt",
    type: "region",
    provinces: [griski, southCove],
    position: [-81.97243, 8.08594],
    description: "Long ago they were warriors bent on expansion of their empire. As their land grew stronger warriors became explorers, bringing back varied and exciting discoveries from their travels, and enhancing all of Eldt in the process."
};

var neim = {
    name: "neim",
    type: "region",
    provinces: [wildesil, frostShelf],
    position: [-82, 38],
    description: "The most determined mariners in Nimia hail from Neim. Their ships are built to handle the toughest weather and explorers from Tundt make good use of them."
};




// ------------------------------------------------------------------------------
// REGIONS (RSKA)
// ------------------------------------------------------------------------------

var kokovx = {
    name: "kokov",
    type: "region",
    // provinces: [vekrin],
    position: [-75.00494, -49.74609],
    description: "Kokov has been the seat of power for Rska for centuries, but that is giving way to the merchant fortunes of the more progressive Milev. "
};


var njemitzexpanse = {
    name: "njemitzexpanse",
    type: "region",
    provinces: [froostuary, glaciavik],
    position: [-79.8743, -52.91016],
    description: "A frozen mountainous region that holds its share of unique species and invigorating adventure for those who brave its icy peaks"
};

var milev = {
    name: "milev",
    type: "region",
    provinces: [kokov, hornsWaste],
    position: [-71.13099, -67.85156],
    description: "Milev's strong mercantile families have kept the city as a trading powerhouse. Unafraid of immigration and trade with the superpower of Nindu, Milev has prospered where the rest of Rska has failed."
};

var nyetgard = {
    name: "nyetgard",
    type: "region",
    provinces: [vanderFeld, runder],
    position: [-75.09563, -25.66406],
    description: "Its only the legendary strength and fortitude of Nyetgard gaurds and citizens that keep them from succumning to the corruption and failing leadership that is consuming the rest of Rska"
};

// ------------------------------------------------------------------------------
// REGIONS (BYRIA)
// ------------------------------------------------------------------------------


var nairu = {
    name: "nairu",
    type: "region",
    //  provinces: [njivette],
    position: [-20.63278, 117.48828],
    description: "The most idependent of the four Byrian states, perhaps due to it's strong trade with wealthy Luxu. Nairu has incoporated many different cultures into it's mix and is a strong proponent of exploration to the unknown East"
};

var tigal = {
    name: "tigal",
    type: "region",
    //  provinces: [njivette],
    position: [-44.02, 130.21],
    description: "Steaming hot dishes are the specialty of this seaside society, rich in traditional culture and curiosity"
};

var baseen = {
    name: "baseen",
    type: "region",
    //  provinces: [njivette],
    position: [-44.21, 107.67],
    description: "The enormous Byrian Estuary dominates the landscape of Baseen, with its worn out citizens tirelessly working amid the muck"
};



// ------------------------------------------------------------------------------
// REGIONS (COASTALINA)
// ------------------------------------------------------------------------------

var vin = {
    name: "vin",
    type: "region",
    // provinces: [njivette],
    position: [-36.59789, 79.27734],
    description: "Rich soils and moist sea air make this the land of vineyards, ripe fruits and fresh meats. But its festive atmosphere is reigned in by rigid councils ruling from decaying castles, resistant to change that flows from bouyant neighbour Byria."
};

var corzo = {
    name: "corzo",
    type: "region",
    // provinces: [njivette],
    position: [-16.80454, 56.60156],
    description: "Inhabitants are a superstitious bunch with a strong oral tradition that keeps the stories of the old ones alive across Coastalina"
};


var holloes = {
    name: "holloes",
    type: "region",
    //  provinces: [njivette],
    position: [-42.81152, 43.76953],
    description: "Holloes swamps and forests house great mystery, with many stories of travellers dissapearing without a trace. Small wonder many use the well tread sea routes of Coastalina instead."
};




// ------------------------------------------------------------------------------
// REGIONS (SAVAR)
// ------------------------------------------------------------------------------

var cotin = {
    name: "cotin",
    type: "region",
    // provinces: [njivette],
    position: [-59.58697, 60.89844],
    description: "A seafaring culture inhabiting a grassy windswept isle of great beauty. More lawful than its neghbour Antjmark and perhaps more inviting, its wealth almost as large as those of the Open Coast"
};

var somet = {
    name: "somet",
    type: "region",
    // provinces: [njivette],
    position: [-48.34165, 72.37891],
    description: "Today the palace of Somet, the highest muntain in Nimia, looks over the landscape of unified tribes that differ culturally yet share a great love for nature and her power"
};

var amyen = {
    name: "amyen",
    type: "region",
    // provinces: [njivette],
    position: [-57.13624, 86.83594],
    description: "Farms and livestock are the backbone of Amyen, a people unafraid of the sea but who prefer the comfort of solid ground. Expert farmers, they specialize in drinking, dancing and hard work."
};

var visigo = {
    name: "visigo",
    type: "region",
    // provinces: [njivette],
    position: [-57.8915, 19.16016],
    description: "Visigans are independent minded and fierce warriors. The can hold their own against Tiviscus and the mysterious Dracozids of Nurela. They make their home on the grassy fields beneath Mur, the ancient grand wall that divided the East and West of Nimia"
};

var nurela = {
    name: "nurela",
    type: "region",
    // provinces: [njivette],
    position: [-51.6998, 14.22656],
    description: "Dracozids were little more than enslaved mounts for centuries. Until a leader Salamond led them to the colossal forests of Nurela. Intelligent and cunning, few cultures have diplomatic relations with the Dracozids, and anyone calling one a dragon is usually eaten in one bite."
};




// ------------------------------------------------------------------------------
// REGIONS (THE OPEN COAST)
// ------------------------------------------------------------------------------


var antjmark = {
    name: "Antjmark",
    type: "region",
    provinces: [njivette],
    position: [-68.40, 53.17],
    description: "Antjmark has very strict laws - it's ust that no one follows them. Its divesre people, great wealth, and grand port in Ookstergot make it the cultural center of The Open Coast. "
};

var brin = {
    name: "Brin",
    type: "region",
    provinces: [iwin, aidal],
    position: [-73.65, 80.86],
    description: "Advances in smithing, coal and metallurgy and resource demands from Antjmark have resulted in a miniature industrial revolution that has devasated the island."
};

var ebyr = {
    name: "Ebyr",
    type: "region",
    provinces: [verdur, elai, movette],
    position: [-68.3019, 99.75586],
    description: "A land of beautiful waterfalls and green rock, transluscent pools and wild weather storms. Sparsely populated but a great source of resources like stone and wood."
};




// ------------------------------------------------------------------------------
// REGIONS (TIVISCUS)
// ------------------------------------------------------------------------------


var mur = {
    name: "Mur",
    type: "region",
    provinces: [underMire, daemonsPass],
    position: [-65, 12],
    sphere: 'politics',
    description: "The desert tribes of Mur live in the shadow of the great wall, a colossal divide that is the largest architecture in Nimia. People here live in careful balance with the desrt ecosystem and make the most of the land's resources."
};

var polez = {
    name: "Polez",
    type: "region",
    provinces: [humblePlains, silverWood],
    position: [-71.91089, -8.26172],
    sphere: 'religion',


    description: "A mountainous region where the Nofril inahbit the prebuilt stone palaces built by the Igri who used to inhabit these hills. Deeply spiritual people who value law above all else",
    adventure: 'The Empyre Crusades',
    adventureDescription: 'The crumbling religious nation of Tiviscus seeks to expand its reach, and its borders. Build support for the crusades or stop them in their tracks.',
    supported: 'The Empyre Crusades have received national support. An religious crusade is preparing to enter the nation of Nuju',
    opposed: 'Support for the Empyre Crusades has crumbled. In response the ruling council has declared minority religions illegal in the Nation of Tiviscus',
    quest: crusadeQuest,
    votesNeeded: 7
};

var aspia = {
    name: "Aspia",
    type: "region",
    sphere: 'economy',
    provinces: [eastuary, doonBarrens],
    position: [-59.26588, -10.01953],
    description: "Deeply religious, The brutal Aspia has the most formidable army in Tiviscus. Were it not for the Dracozids of Nurela and spartans of Visigo they would likely have invaded inner Nimia long ago. "
};




// ------------------------------------------------------------------------------
// REGIONS (NUJU)
// ------------------------------------------------------------------------------

var ninjisulu = {
    name: "NinjiSulu",
    type: "region",
    provinces: [eastFields, tombWood],
    position: [-75.62863, 57.39258],
    description: "Its people are often described as friendly and frivolous, and perhaps rightly so. But their goal to abolish slavery is serious, and has put them at odds with the Empyre. Imperial agents have infiltrated Eastfields to make sure the resolution never passes.",
    descriptionPositive: "",
    descriptionNegative: ""
};

var zea = {
    name: "Zea",
    type: "region",
    provinces: [boneSea, froosRidge],
    position: [-72.89, 34.76],
    description: "The barren deserts and cold mounatins of Zea have bred a culture of fighters. Zea's ruling class is pushing to ratify the historic Treaty of Zea, which will declare independence from the Empyre for all countries in Nuju.",
    descriptionPositive: "",
    descriptionNegative: "",
    adventure: 'The Treaty of Zea',
    adventureDescription: 'The seaside nation of Nuju seeks to abolish slavery with the Treaty of Zea. Gather allies to support the treaty, or use treachery to ensure its defeat.',
    opposed: 'The Treaty of Zea has collapsed. Slavery continues to be legal in the Nation of Nuju',
    supported: 'The Treaty of Zea has been ratified. Slavery has been abolished in the nation of Nuju',
    votesNeeded: 3
};

var nueja = {
    name: "Nueja",
    type: "region",
    provinces: [vileCoast, koldeMarsh],
    position: [-77.23, 35.38],
    description: "Many Wytches call the dank, twisted swamps of Nueja home. They seek an end to the WytchHunts ordered with increasing frequency by Emperor Mortelle, and religious equality for all Wytches inside its borders",
    descriptionPositive: "",
    descriptionNegative: ""
};




// ------------------------------------------------------------------------------
// COUNTRIES (NIMIA)
// ------------------------------------------------------------------------------


// SOUTHERN NIMIA


var nuju = {
    name: "Nuju",
    type: "country",
    regions: [ninjisulu, zea, nueja],
    position: [-75.68, 39.11],
    description: "Independence is the goal of Nuju citizens. The country of NinjiSulu seeks to abolish slavery, while Nueja debates a ban on Wytch Hunting.",
    descriptionPositive: "",
    descriptionNegative: "",
    alignment: 'Rebel',
	level:1
};

var theOpenCoast = {
    name: "The Open Coast",
    type: "country",
    regions: [antjmark, brin, ebyr],
    position: [-67, 61],
    description: "The Open Coast's black markets and daring straights provide all manner of pleasures, and the lawstruck markets of Savar and Eldt provide an endless stream of ready customers.",
    alignment: 'Honorable',
	level:3
};

var eldt = {
    name: "Eldt",
    type: "country",
    regions: [neim, tundt, mynik],
    position: [-80.357, 0.87891],
    description: " Ruined long ago their brilliant advances are being unearthed once again, and the hardened proud people of Eldt are set to reclaim their empyre.",
    alignment: 'Anarchic',
	level:7
};

var tiviscus = {
    name: "Tiviscus",
    type: "country",
    regions: [mur, polez, aspia],
    position: [-62.5, -11],
    description: "My people have built these towers in the rock and stone that run through this land. They fall into ruin an I will not allow this. An iron spirit and adherence to the laws of our true gods will see my people through.",
    alignment: 'Imperial',
	level:5
};

var rska = {
    name: "Rska",
    type: "country",
    regions: [nyetgard, milev, njemitzexpanse],
    position: [-76.05851, -56.77734],
    description: "The ruling class sees little need to change the power structure, clinging to fiercly to the ways of the past as a self sustaining kingdom cut off from the increasingly trade oriented world",
    alignment: 'Coldblooded',
	level:9
};


// NORTHERN NIMIA

var savar = {
    name: "Savar",
    type: "country",
    regions: [visigo, nurela, amyen, somet, cotin],
    position: [-54.26522, 66.09375],
    description: "I've rarely seen people so optimistic. Even as they slave and toil amid kow dung and cut grass, they seem able to smile and down more than a gallon of two of delicious ale.",
    alignment: 'Humane',
	level:1
};

var baevet = {
    name: "Baevet",
    type: "country",
    // regions: [],
    position: [-39.77477, -8.61328],
    description: "A solitary tower that burn in flames night and day calls to those who lose their way. Ive seen the encampments of thousands who wait at it's edge. A few determined souls journey into it's fires never to be seen again.",
    alignment: 'Bloodthirsty'
};

var physsus = {
    name: "Physsus",
    type: "country",
    regions: [napal, odino, cipri],
    position: [-29.9944, 14.875],
    description: "Heart of the ancient Empyre. Each of the many city states of Physsus has colossal architecture that dwarf even the palaces of Tiviscus, constructed by a stable of foreign slaves who make up nearly half the republic.",
    alignment: 'Imperial'
};

var coastalina = {
    name: "Coastalina",
    type: "country",
    regions: [idrita, corzo, holloes, vin],
    position: [-24.84657, 58.88672],
    description: "The grand ancient city of Residi unifies these coastal city-states and rules over a far reaching trade empire manned by hearty mariners rich with gold. ",
    alignment: 'Anarchic'
};

var byria = {
    name: "Byria",
    type: "country",
    regions: [nairu, tigal, baseen],
    position: [-37.16032, 117.24609],
    description: "Byria has moved forward into an enlightenment with universities and a democratic ruling council that dividers land and laws fairly and with compassion. It has long seceded from the Empyre's grip.",
    alignment: 'Noble'
};





// ------------------------------------------------------------------------------
// COUNTRIES (JAAL)
// ------------------------------------------------------------------------------

var nindu = {
    name: "nindu",
    type: "country",
    //  regions: [ninjisulu, zea, nueja],
    position: [-15.96133, -72.42187],
    description: "The most expansive empire on the planet"
};

var nusantara = {
    name: "nusantara",
    type: "country",
    // regions: [antjmark, brin, ebyr],
    position: [72.60712, -63.80859],
    description: "The Shaking Earth"
};

var gilipilago = {
    name: "gilipilago",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [55.07837, -130.07812],
    description: "The Culture of the Thousand Seas"
};

var ku = {
    name: "ku",
    type: "country",
    //regions: [ninjisulu, zea, nueja],
    position: [21.1255, -143.35937],
    description: "Militaristic Ku is a land of extreme rule and sacrifice"
};

var xersia = {
    name: "xersia",
    type: "country",
    //regions: [ninjisulu, zea, nueja],
    position: [-10.83331, -139.74609],
    description: "The Dead Lands"
};

var nutaq = {
    name: "nutaq",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [-59.44508, -136.75781],
    description: "The Animal Speakers"
};


// ------------------------------------------------------------------------------
// COUNTRIES (USAKA)
// ------------------------------------------------------------------------------

var ghatt = {
    name: "ghatt",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [29.38218, 65.91797],
    description: "The Ancient Desert"
};

var mazelle = {
    name: "mazelle",
    type: "country",
    //  regions: [antjmark, brin, ebyr],
    position: [63.70472, 10.72266],
    description: "Arde soto quale bou liasa"
};

var bembashona = {
    name: "bembashona",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [67.06743, 81.38672],
    description: "The Burnt Lands"
};

var peninsulu = {
    name: "peninsulu",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [81.77364, 44.12109],
    description: "The Cradle of Life"
};

var bizae = {
    name: "bizae",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [40.31304, 125.33203],
    description: "Land of the Bizarre"
};

var segara = {
    name: "segara",
    type: "country",
    // regions: [ninjisulu, zea, nueja],
    position: [82.58611, -30.41016],
    description: "A deep mystery waiting to be explored"
};



// ------------------------------------------------------------------------------
// CONTINENT
// ------------------------------------------------------------------------------

var nimia = {
    name: "Nimia",
    type: "continent",
    countries: [nuju, theOpenCoast, eldt, savar, tiviscus, baevet, physsus, coastalina, byria, rska],
    //countries: [nuju],
    position: [-40, 30.57],
    description: "Nimia is a continent in the beginnings of a renaissance as regions pull away from the religious confines of the past and move towards an idustrial evolution."

};

var jaal = {
    name: "Jaal",
    type: "continent",
    position: [-15.11, -111.27],
    countries: [nindu, nusantara, gilipilago, ku, xersia, nutaq],
    description: "Jall houses the rising Empyre of Nindu as well as several developing civilizations. They are at peace with much of Nimia due to profitable trade agreements and excellent diplomatic ties between most of the countries."
};

var usaka = {
    name: "Usaka",
    type: "continent",
    position: [53.505, 42.57],
    countries: [ghatt, mazelle, bembashona, peninsulu, bizae, segara],
    description: "usaka boasts the oldest civilization in the Eastern Hemisphere. A warm continent with arid deserts teeming with life, and forbidding jungles and wetlands in the north."
};


// PLANET

var ril = {
    name: "Ril",
    type: "planet",
    continents: [nimia, jaal, usaka],
    description: ""

};



//var battleIcon = L.Icon.Label.extend({
//    options: {
//        iconUrl: 'assets/img/icons/village.png',
//        shadowUrl: null,
//        iconSize: new L.Point(80, 80),
//        iconAnchor: new L.Point(-40, -40),
//        popupAnchor: [-15, -80], // point from which the popup should open relative to the iconAnchor
//        labelAnchor: new L.Point(-40, 20),
//        wrapperAnchor: new L.Point(25, 60),
//        className: 'toHideX'
//    }
//});

var strengthIcon = "assets/img/strengthicon.png";