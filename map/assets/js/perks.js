// ----------------------------------------------------------------------------------------
// EFFECTS
// ----------------------------------------------------------------------------------------	
var addShield = function() {

    $('.playerShield').css("background-image", "url(assets/img/shield.png)").fadeIn(300);
    playerShielded = true;
    //var absorbAmountIndex = p.special.indexOf('absorb')+1;
    //absorbAmount = p.special[absorbAmountIndex];
    //if("sound" in p){
    playSound(shield, 1);
    //}
    // ENEMY ATTACK BACK
    //setTimeout(function () {
    //				nextBattleRound();
    //			}, 600);
}


var healingRoot = function() {

    playerHp += powerLevel * healingStrength;
    limitHp();
    // playerHp = maxHp;
    updateStats();

}

var xpBonus = function() {
    playerXp += playerLevel * 25;
    updateStats();
    checkLevel();
}

var healWeapon = function() {
    // alert("heal");
    // playSound('spell',1);
    playerHp += 3;
    limitHp();
    // playerHp = maxHp;
    updateStats();

}

var xpWeapon = function() {
    playerXp += perkStrength;
    updateStats();
    checkLevel();
}


var plusOne = function() {
    plusDamage = 1;
    //alert("+"+currentWeapon.name);
    updateStats();
}

var vsUndead = function() {
    //alert(currentMonster.type);
    if (currentMonster.type == "Undead") {
        plusDamage = 5;
    }
    //alert("+"+currentWeapon.name);
    updateStats();
}


var hitEnemy = function() {
    //alert("pow");
    hitBeast(0, powerLevel * 1);
    //if(speakingWithCitizen){
    //		speakingWithCitizen = false;
    //	endBattleRound();
    //	}
}

var boostKarma = function() {
    fillKarma();
    updateStats();
}

var poisonEnemy = function() {
    if (!enemyEffects.poisoned) {
        enemyEffects.poisoned = true;
        poisonBeast();
        // playerHp = maxHp;
        changeAlignment('coldblooded', 30, 'Using poison is');
        updateStats();
    }
}

var frenzy = function() {
    maxHpBonus = maxHp;
    setMaxHp();
    fullHealth();
    updateStats();
}

var divine = function() {
    augur = true;
    //alert("divine");
    updateStats();
}

var regen = function() {
    regenerate = true;
}

var chaosDraw = function() {
    setTimeout(function() {
		
		var cards = deckArray.length;
		//alert(cards);
		cards<9?addDeckCard():null;
		cards<8?addDeckCard():null;
		cards<7?addDeckCard():null;
		switchDeck.call();
		enableAllCards();
		//arrangeCards();
		//spreadcards();
		
       // drawPerk(1, powerLevel, 1000);
//        collectPerk(1);
//        drawPerk(2, powerLevel, 1000);
//        collectPerk(2);
//        drawPerk(3, powerLevel, 1000);
//        collectPerk(3);
        //$('.b01').show();
       // $('.b02').show();
       // $('.b03').show();
    }, 1000)
	//alert("collect");
}

function lateSwoosh() {
    setTimeout(function() {
        playSound(sfxMiss, 1);

    }, 100)
}

// TOOLTIP CHECKING FUNCTIONS

function manageToolTip() {

    //alert($('.tipBubbleText').html());

    if ($('.tipBubbleTextUI').html() == 'Im a BATTLE CARD. Click me to make an attack') {

        $('.tipBubbleUI').hide();

    }

}


var resizeId;
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
});


function doneResizing() {
    arrangeCards();
}



function arrangeCards() {

    var tiltArray = [];
    var tiltOffset = 10 / deckArray.length;
    var tiltTotal = (deckArray.length * tiltOffset) / 2

    for (var k = 0; k < deckArray.length; k++) {
        tiltArray.push((tiltOffset * k) - (tiltOffset / 1)); // - ( tiltOffset*2));
    }

    tiltArray.sort;

    var tiltSpread = tiltArray[tiltArray.length - 1] - tiltArray[0];

   // console.log(tiltSpread + "   tiltSpread");

    var firstX = -tiltSpread / 2;
    var increment = tiltSpread / (deckArray.length - 1);

    var fullTiltArray = [];

    for (var k = 0; k < deckArray.length; k++) {
        fullTiltArray.push((firstX + (increment * (k))));
    }
    fullTiltArray.sort;

    //console.log(fullTiltArray + "   fullTiltArray");

    var winWidth = $(document).width();
    var winPad = 350;
    winWidth -= winPad;
    var winWidth2 = 620 + (deckArray.length * 30);

    if (deckArray.length < 5) {
        winWidth = winWidth2;
    }

    if (deckArray.length < 3) {
        winWidth = 340;
    }

    if (deckArray.length < 2) {
        winWidth = 0;
        winPad = 0;
    }

    var offsetAmount = winWidth / (deckArray.length - 1);

    if (deckArray.length < 2) {
        offsetAmount = 0;
    }

    var cardScale = 1 - (deckArray.length * cardScaleMultiplier);

    if (deckArray.length < 4) {
        cardScale = 1;
    }

    var wid = (winWidth - winPad) / 2;

    if (deckArray.length < 2) {
        fullTiltArray = [0];
        wid = -175;
    }

    for (var j = 0; j < deckArray.length; j++) {

        var cardTilt = -5 + (j * tiltOffset);
        cardTilt = fullTiltArray[j];
		
		if(cardScale < 0.5){cardScale = 0.5;}

        $('.b0' + (j + 1)).css('margin-right', ((wid) - (offsetAmount * j)) + 'px');
        $('.b0' + (j + 1)).css('-webkit-transform', 'rotate(' + cardTilt + 'deg) scale(' + cardScale + ') skew(0deg) translate(0px)');
        $('.b0' + (j + 1)).css('transform', 'rotate(' + cardTilt + 'deg) scale(' + cardScale + ') skew(0deg) translate(0px)');
    }
	
	//var os = 50 - (deckArray.length * 10);
	//$('.card.bottom.show').css('top',os+'px');
	
	
}




function spreadCards() {

    for (var j = 0; j < deckArray.length; j++) {

        if (deckArray[j]) {

            fillCardUp(j + 1);
            popUpCard(j + 1);
            $('.cardBar .b0' + (j + 1)).removeClass('disable');
        }



    }

    enableAllCards();

}

var switchDeck = function() {


    unPopCards();



   hideAllCards();


    playSound(sfxClicker, 1);
    setTimeout(function() {


        activeDeck = "battle"

        if (activeDeck == "battle") {

           // console.log("DECK ARRAY");
           // console.table(deckArray);

            if ($('.tipBubbleTextUI').html() == 'Find your target then use this ACTION CARD') {
                $('.tipBubbleUI').hide();

            }



           spreadCards();




            if (deckArray.length != 0) {
                lateSwoosh();

            }


            arrangeCards();


            enableAllCards();

        } else if (activeDeck == "rune") {
            if ($('.tipBubbleTextUI').html() == 'Find your target then use this ACTION CARD') {
                $('.tipBubbleUI').show();

            }

           // if (runeDeckArray[0] != null) {
//                // fillBattleCard(1, powerLevel, 1000);
//                popUpRune(1);
//
//            }
//            if (runeDeckArray[1] != null) {
//                //fillBattleCard(2, powerLevel, 1000);
//                popUpRune(2);
//            }
//            if (runeDeckArray[2] != null) {
//                // fillBattleCard(3, powerLevel, 1000);
//                popUpRune(3);
//            }

            if (runeDeckArray.length != 0) {
                lateSwoosh();

            }

            enableAllCards();

        } else {
            if ($('.tipBubbleTextUI').html() == 'Find your target then use this ACTION CARD') {
                $('.tipBubbleUI').hide();

            }
            manageToolTip();

           // resetPerkDeck();
        }

    }, 200)
}






function useAction(c) {
console.log("use action : "+currentQuest.name);

		if (runeDeckArray[c - 1].cost*currentCitizen.level) {

            if (runeDeckArray[c - 1].cost*currentCitizen.level > playerGold) {
                warnGold(runeDeckArray[c - 1].cost*currentCitizen.level);

            } else {
                playerGold -= +(runeDeckArray[c - 1].cost*currentCitizen.level);
                updateStats();
                playSound(coins, 1);
                slamCardAction(c, runeDeckArray[c - 1].name, runeDeckArray[c - 1]);


            }
        } else {
           // playerGold -= +(runeDeckArray[c - 1].cost);
            updateStats();
           // playSound(coins, 1);
            slamCardAction(c, runeDeckArray[c - 1].name, runeDeckArray[c - 1]);
        }


}

function warnGold(cost) {
    popMessage('You need ' + cost + ' gold to use this card. Earn gold by defeating beasts in the wild, completing quests or selling items.', 'Not Enough Gold');
}

function sellGold(cost) {
    popMessage('Sell this item for ' + (-1 * cost) + ' gold', 'Make a Sale');
}


function popUpRune(c) {
    var runeObject = runeDeckArray[c - 1];
	$('.openQuestAction').html("<a class='cardButton' onClick='useAction(" + c + ")')> " + runeObject.alignment + " Action </a> </div>")
	
    alert("rune");


}




function hitBeast(a, b) {




    var damage = randomNumber(a) + b;
    currentMonster.health -= damage;
    lowerLimitBeastHealth();
    $('.beastCard .cardHeart').text(currentMonster.health);
    var healthPercent = currentMonster.health / currentMonster.maxHealth;
    var healthHeight = 450 - (450 * healthPercent);
    $('.beastCard .damageBar').css('height', healthHeight);
    updateStats();
    shakeBeast();

    resetScratch('.drawCard');
    showDamageEffect('.drawCard', damage);

    if (currentMonster.health <= 0) {
        killBeast();
    }
}



// ----------------------------------------------------------------------------------------
// BASE OBJECT TYPES
// ----------------------------------------------------------------------------------------	




// ----------------------------------------------------------------------------------------
// GENERATION FUNCTION
// ----------------------------------------------------------------------------------------	



function drawPerk(c, level, typ) {

    cardNumber = 0;
    currentPerk = generateObject(level, 'perk', typ);
    var name = currentPerk.name;
    var image = 'assets/img/perks/' + removeSpaces(currentPerk.type).toLowerCase() + ".png";


    //alert(currentPerk.karma);
    var cpl = currentPerk.level;
    if (currentPerk.karma) {
        cpl = currentPerk.karma;
    }


    currentPerkHTML = "<div class='cardTitle'>" + name + "</div><div class='cardKarma'>" + cpl + "</div><div class='cardSubTitle'>" + currentPerk.description + "</div><div class='perkLevel'>Level " + currentPerk.level + " Perk</div><div class='powerDisplay'></div><span class='perkButtonHTML'><a class='cardButton' onClick='collectPerk(" + c + ");'>Collect</a></span><img src=" + image + " width='320' height='400' class='portrait' style='bottom: 20px;'/></div>";


    $("#cardSet" + c + " .cardBack").html(currentPerkHTML);

    if (smoothCollect) {
        setTimeout(function() {
            $("#cardSet" + c).css("transform", "rotate(0deg) scale(1.2) skew(0deg) translate(0px)");
            $("#cardSet" + c).css("-webkit-transform", "rotate(0deg) scale(1.2) skew(0deg) translate(0px)");
            $("#cardSet" + c).css("transition", "all 1000ms cubic-bezier(0.000, 0.610, 0.000, 1.005)");
            $("#cardSet" + c).css("-webkit-transition", "all 1000ms cubic-bezier(0.000, 0.610, 0.000, 1.005)");


        }, 200)

        setTimeout(function() {
            $("#cardSet" + c).css("transform", "rotate(0deg) scale(0.9) skew(0deg) translate(0px)");
            $("#cardSet" + c).css("-webkit-transform", "rotate(0deg) scale(0.9) skew(0deg) translate(0px)");
            $("#cardSet" + c).css("transition", "all 300ms cubic-bezier(0.225, 0.025, 0.980, -0.015)");
            $("#cardSet" + c).css("-webkit-transition", "all 300ms cubic-bezier(0.225, 0.025, 0.980, -0.015)");
        }, 800)



        //collectPerk(" + c + ");
        setTimeout(function() {
            collectPerk(c);

        }, 1000)
    }
}




function fillCardUp(c) {

    cardNumber = 0;
    currentPerk = deckArray[c - 1];

    if (currentPerk.category != 'perk' ) {
        var name = currentPerk.name;
        var image = 'assets/img/' + removeSpaces(currentPerk.currentStoreType).toLowerCase() + '/' + removeSpaces(currentPerk.type).toLowerCase() + ".png";
		
        if (currentPerk.type == "sword" || currentPerk.type == "axe" || currentPerk.type == "bow") {
            image = 'assets/img/' + removeSpaces(currentPerk.currentStoreType).toLowerCase() + '/' + removeSpaces(currentPerk.type).toLowerCase() + currentPerk.level + ".png";
        }

        var whatItDoes = "";
        var spec = "";
		
        if (currentPerk.specialPower) {
            spec = currentPerk.specialPower;
        }
		
        if (currentPerk.type == 'armor' || currentPerk.type == 'helmet' || currentPerk.type == 'shield') {
            whatItDoes = currentPerk.description;
        } else {
            whatItDoes = spec;
        }

        var heartText = "<div class='cardDamage'>" + ((currentPerk.level * 1) + 1) + "</div>";
		
        if (currentPerk.type == 'armor' || currentPerk.type == 'shield' || currentPerk.type == 'helmet') {
            heartText = "";
        }


 //if(currentPerk.category != 'armor'){
        currentPerkHTML = heartText + "<div class='cardTitle'>" + name + "</div><div class='cardSubTitle'>" + whatItDoes + "</div><div class='perkLevel'>Level " + currentPerk.level + " " + currentPerk.type + "</div><div class='powerDisplay'></div><span class='perkButtonHTML'><a class='cardButton' onClick='useCard(" + c + ");'>Use</a></span><img src=" + image + " width='256' height='256' class='storeItem'/></div>";
 //}
 
 if(currentPerk.category == 'armor'){
        currentPerkHTML = heartText + "<div class='cardTitle'>" + name + "</div><div class='cardSubTitle'>" + whatItDoes + "</div><div class='perkLevel'>Level " + currentPerk.level + " " + currentPerk.type + "</div><div class='powerDisplay'></div><span class='perkButtonHTML'><a class='cardButton' >Equipped</a></span><img src=" + image + " width='256' height='256' class='storeItem'/></div>";
 }
		
		
		
		
		

    } else {
        var name = currentPerk.name;
        var image = 'assets/img/perks/' + removeSpaces(currentPerk.type).toLowerCase() + ".png";
        var beastLevel = currentPerk.level;
        currentPerk.health = beastLevel * (Math.floor((Math.random() * 3)) + 3);
        currentPerkHTML = "<div class='cardTitle'>" + name + "</div><div class='cardKarma'>" + currentPerk.level + "</div><img class='cardPath' src='assets/img/paths/" + currentPerk.path + ".png' width='40' height='40' /><div class='cardSubTitle'>" + currentPerk.description + "</div><div class='powerDisplay'></div><span class='perkButtonHTML'><a class='cardButton' onClick='useCard(" + c + ");'>Use</a></span><img src=" + image + " width='320' height='400' class='portrait'/></div>";
    }
}




function generateObject(level, kind, typ) {

    var perk = {};




    if (typ == "Church") {
        level = level + chance.natural({
            min: 0,
            max: 2
        });

    }
    perk.level = level;
    var currentPerkArray = [];

    var perkTypes = [

        {
            name: 'damage',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            effect: 'hitEnemy',
            names: damageNames,
            desc: 'Deal ' + (level) + ' damage to opponents'
        }, {
            name: 'poison',
            path: 'speed',
            charges: 0,
            endAfter: 'battle',
            worksIn: 'battle',
            effect: 'poisonEnemy',
            names: poisonNames,
            desc: 'Deal ' + level + ' poison damage each turn'
        }, {
            name: 'cardfill',
            path: 'speed',
            charges: 0,
            endAfter: 'instant',
            effect: 'chaosDraw',
            names: [
                ['Chaos Draw'],
                ['']
            ],
            desc: 'Draw 3 random level ' + level + ' perk cards',
            karma: 1
        }, {
            name: 'healthboost',
            path: 'spirit',
            charges: 0,
            endAfter: 'battle',
            effect: 'frenzy',
            names: healthBoostNames,
            desc: 'Health twice normal'
        }, {
            name: 'divination',
            path: 'spirit',
            charges: 0,
            endAfter: 'location',
            effect: 'divine',
            names: [
                ['Augurs Peek'],
                ['']
            ],
            desc: 'Draw 3 cards ',
            karma: 1
        }, {
            name: 'regeneration',
            path: 'spirit',
            charges: 0,
            endAfter: 'battle',
            effect: 'regen',
            names: regenNames,
            desc: 'Regenerate ' + (playerLevel) + ' health each turn ',
            karma: 1
        }, {
            name: 'healing',
            path: 'spirit',
            charges: 0,
            endAfter: 'instant',
            effect: 'healingRoot',
            names: healingNames,
            desc: 'heal ' + (level * 5) + ' health '
        }, {
            name: 'karma',
            path: 'spirit',
            charges: 0,
            endAfter: 'instant',
            effect: 'boostKarma',
            names: [
                ['Karma Kindle'],
                ['']
            ],
            desc: 'Regain full Karma',
            karma: 1
        }, {
            name: 'xpbonus',
            path: 'spirit',
            charges: 0,
            endAfter: 'instant',
            effect: 'xpBonus',
            names: xpNames,
            desc: 'Gain ' + (playerLevel * 25) + ' experience XP '
        }, {
            name: 'addShield',
            path: 'spirit',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            effect: 'addShield',
            names: addShieldNames,
            desc: 'Absorb damage from next enemy hit',
            karma: 1
        }


        // ----------------------------------------------------------------------------------------
        // UPCOMING PERKS
        // ----------------------------------------------------------------------------------------	

        //{name: 'slow',path: 'speed',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'proficiency',path: 'strength',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'immunity',path: 'speed',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'wildcard',path: 'speed',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'dodge',path: 'speed',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'reflect',path: 'speed',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'armor',path: 'strength',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'stun',path: 'strength',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'fear',path: 'strength',charges:0,endAfter:'instant',worksIn : 'store',effect:chaosDraw},
        //{name: 'multi attack',path: 'strength',charges:0,endAfter:'battle',worksIn : 'store',effect:chaosDraw},
        //{name: 'charm',path: 'spirit',charges:0,endAfter:'instant',worksIn : 'store',effect:chaosDraw},



    ]

    var weaponTypes = [

        {
            name: 'damage',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: swordNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'sword',
            damageType: ['slicing'],
            sound: 'sword'
        }, {
            name: 'damage',
            path: 'speed',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: bowNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'bow',
            damageType: ['piercing'],
            sound: 'bow'
        }, {
            name: 'damage',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: axeNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'axe',
            damageType: ['slicing'],
            sound: 'crunch'
        }
    ]

    var magicTypes = [{
            name: 'damage',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: fireNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'flame magic',
            damageType: ['fire'],
            sound: 'spell'
        }, {
            name: 'damage',
            path: 'speed',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: iceNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'ice magic',
            damageType: ['ice'],
            sound: 'spell'
        }, {
            name: 'damage',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: boneNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'bone magic',
            damageType: ['bone'],
            sound: 'spell'
        }, {
            name: 'damage',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: natureNames,
            desc: 'Deal ' + (level) + ' damage to opponents',
            price: 100,
            type: 'nature magic',
            damageType: ['nature'],
            sound: 'spell'
        }, {
            name: 'healing',
            path: 'spirit',
            charges: 0,
            endAfter: 'instant',
            effect: 'healingRoot',
            names: healingNames,
            desc: 'heal ' + (level) + ' health ',
            price: 100,
            type: 'nature magic',
            damageType: ['holy'],
            sound: 'spell'
        }
        //{name: 'damage',path: 'strength',charges:0,endAfter:'instant',worksIn : 'battle',effect:hitEnemy,names:damageNames,desc:'Deal '+(level*5)+' damage to opponents'},
        //{name: 'poison',path: 'speed',charges:0,endAfter:'battle',worksIn : 'battle',effect:poisonEnemy,names:poisonNames,desc:'Deal '+level+' poison damage each turn'},
        //	
        //	{name: 'healthboost',path: 'spirit',charges:0,endAfter:'battle',effect:frenzy,names:healthBoostNames,desc:'Health twice normal'},
        //	
        //	{name: 'healing',path: 'spirit',charges:0,endAfter:'instant',effect:healingRoot,names:healingNames,desc:'heal '+(level*5)+' health '},

    ]

    var armorTypes = [{
            name: 'armor',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: shieldNames,
            desc: (4 + (level * 1)) + '% chance to block attacks',
            price: 100,
            type: 'shield',
            sound: 'spell'
        }, {
            name: 'armor',
            path: 'speed',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: helmetNames,
            desc: 'Reduce incoming damage by ' + (level * 1),
            price: 100,
            type: 'helmet',
            sound: 'spell'
        }, {
            name: 'armor',
            path: 'strength',
            charges: 0,
            endAfter: 'instant',
            worksIn: 'battle',
            names: armorNames,
            desc: 'increase maximum health by ' + (level),
            price: 100,
            type: 'armor',
            sound: 'spell'
        }
        //{name: 'damage',path: 'strength',charges:0,endAfter:'instant',worksIn : 'battle',names:natureNames,desc:'Deal '+(level*5)+' damage to opponents',price:100,type:'gauntlets',damageType: ['nature'],sound: 'spell'}
        //{name: 'healing',path: 'spirit',charges:0,endAfter:'instant',effect:healingRoot,names:healingNames,desc:'heal '+(level*5)+' health ',price:100,type:'bootsc',damageType: ['holy'],sound: 'spell'}
        //{name: 'damage',path: 'strength',charges:0,endAfter:'instant',worksIn : 'battle',effect:hitEnemy,names:damageNames,desc:'Deal '+(level*5)+' damage to opponents'},
        //{name: 'poison',path: 'speed',charges:0,endAfter:'battle',worksIn : 'battle',effect:poisonEnemy,names:poisonNames,desc:'Deal '+level+' poison damage each turn'},
        //	
        //	{name: 'healthboost',path: 'spirit',charges:0,endAfter:'battle',effect:frenzy,names:healthBoostNames,desc:'Health twice normal'},
        //	
        //	{name: 'healing',path: 'spirit',charges:0,endAfter:'instant',effect:healingRoot,names:healingNames,desc:'heal '+(level*5)+' health '},

    ]


    if (kind == 'perk') {
        currentPerkArray = perkTypes.slice(0);
    }

    if (kind == 'weapon') {
        currentPerkArray = weaponTypes.slice(0);
        perk.folder = "weapons";
    }
    if (kind == 'magic') {
        currentPerkArray = magicTypes.slice(0);
        perk.folder = "magic";
        //alert(currentPerkArray[1].names);
    }
    if (kind == 'armor') {
        currentPerkArray = armorTypes.slice(0);
        perk.folder = "armor";
    }


    var randomChance = new Chance();
    var perkNumber = randomChance.natural({
        min: 0,
        max: currentPerkArray.length - 1
    });
    //var perkNumber = chance.natural({min: 0, max: currentPerkArray.length-1});


    if (typ != 1000) {
        perkNumber = typ;
        if (kind == 'magic') {
            perkNumber = (typ + currentLocation.uniqueId) % 5;
        }
    }
    currentPerkArray[perkNumber].sound ? perk.sound = currentPerkArray[perkNumber].sound : null;
    currentPerkArray[perkNumber].name ? perk.type = currentPerkArray[perkNumber].name : null;
    //currentPerkArray[perkNumber].price ? perk.price = Math.ceil(currentPerkArray[perkNumber].price * level * 2 * .1): null;
    //currentPerkArray[perkNumber].price ? perk.price = Math.ceil(currentPerkArray[perkNumber].price * level * 2 * priceAdjustment): null;
    perk.price = Math.ceil(currentPerkArray[perkNumber].price * level * 2 * priceAdjustment)

    currentPerkArray[perkNumber].type ? perk.type = currentPerkArray[perkNumber].type : null;
    currentPerkArray[perkNumber].damageType ? perk.damageType = currentPerkArray[perkNumber].damageType : null;
    currentPerkArray[perkNumber].effect ? perk.effect = currentPerkArray[perkNumber].effect : null;
    currentPerkArray[perkNumber].karma ? perk.karma = currentPerkArray[perkNumber].karma : null;


    perk.path = currentPerkArray[perkNumber].path;
    perk.endAfter = currentPerkArray[perkNumber].endAfter;
    //perk.effect = currentPerkArray[perkNumber].effect;
    perk.worksIn = currentPerkArray[perkNumber].worksIn;
    perk.level = level;
    perk.category = kind;



    var chancePerk = new Chance(level + (level * cardNumber * 100));
    // random
    //var chancePerk = new Chance( chance.natural({min: 0, max: storeRandomness}) );
    if (kind == 'weapon') {
        var magicItem = chancePerk.natural({
            min: 0,
            max: 5
        });
        if (magicItem == 0) {
            perk.effect = 'plusOne';
            perk.specialPower = "<br>+1 damage";
            perk.price = Math.floor(perk.price * 1.3);
        }
        if (magicItem == 1) {
            perk.effect = 'healWeapon';
            perk.specialPower = "<br>heals on hit";
            perk.price = Math.floor(perk.price * 1.7);
        }
        if (magicItem == 2) {
            perk.effect = 'xpWeapon';
            perk.specialPower = "<br>earn XP every hit";
            perk.price = Math.floor(perk.price * 1.5);
        }
        if (magicItem == 3) {
            perk.effect = 'vsUndead';
            perk.specialPower = "<br>+5 Damage against the Undead";
            perk.price = Math.floor(perk.price * 1.4);
        }
        if (magicItem == 4) {
            perk.effect = 'poisonEnemy';
            perk.specialPower = "<br>Poison enemies (coldblooded act)";
            perk.price = Math.floor(perk.price * 1.8);
        }


    }



    if (kind == 'magic') {
        var magicItem = chancePerk.natural({
            min: 0,
            max: 5
        });
        if (perk.damageType == 'ice') {
            perk.effect = 'plusOne';
            perk.specialPower = "<br>+1 damage";
            perk.price = Math.floor(perk.price * 1.3);
        }
        if (perk.damageType == 'holy') {
            perk.effect = 'healWeapon';
            perk.specialPower = "<br>heals on hit";
            perk.price = Math.floor(perk.price * 1.7);
        }

        if (perk.damageType == 'fire') {
            perk.effect = 'vsUndead';
            perk.specialPower = "<br>+5 Damage against the Undead";
            perk.price = Math.floor(perk.price * 1.4);
        }
        if (perk.damageType == 'bone') {
            perk.effect = 'poisonEnemy';
            perk.specialPower = "<br>Poison enemies (coldblooded act)";
            perk.price = Math.floor(perk.price * 1.8);
        }


    }



    var nameArray = currentPerkArray[perkNumber].names;
    var firstNm = nameArray[0][chancePerk.natural({
        min: 0,
        max: nameArray[0].length - 1
    })];
    var lastNm = nameArray[1][chancePerk.natural({
        min: 0,
        max: nameArray[1].length - 1
    })];

    perk.name = capitaliseFirstLetter(firstNm) + " " + capitaliseFirstLetter(lastNm);




    var descDuration = "";

    if (perk.endAfter == 'battle') {
        descDuration = 'in your next battle';
    }
    if (perk.endAfter == 'location') {
        descDuration = 'at your next location';
    }
    if (perk.endAfter == 'instant') {
        descDuration = "";
    }

    perk.description = currentPerkArray[perkNumber].desc + " " + descDuration;


    return perk;

}