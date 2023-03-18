// ----------------------------------------------------------------------------------------
// BEASTS SPECIAL ATTACKS
// ----------------------------------------------------------------------------------------	




beastPoison= {
        name: 'Poison',
        cost: 1,
		damage: 2,
		description : "2 points poison damage",
		sound: 'monster1'

    }
	
	beastHeal= {
        name: 'Heal',
        cost: 1,
		//damage: 0,
		description : "Restores enemy health",
		sound: 'healingpotion',
		effect: function () {
      //  alert(currentMonster.health +"     "+ currentMonsterMaxHp);
	currentMonster.health < currentMonsterMaxHp?currentMonster.health++:null;
	$('.beastCard .cardHeart').text(currentMonster.health);
	var healthPercent = currentMonster.health / currentMonster.maxHealth;
	var healthHeight = 450 - (450 * healthPercent);
	$('.beastCard .damageBar').css('height', healthHeight);
	playSound(healingpotion, 1);
    }

    }
	
	
	fullHeal= {
        name: 'Heal',
        cost: 1,
		//damage: 0,
		description : "Restores enemy health",
		sound: 'healingpotion',
		effect: function () {
      //  alert(currentMonster.health +"     "+ currentMonsterMaxHp);
	currentMonster.health = currentMonsterMaxHp;
	$('.beastCard .cardHeart').text(currentMonster.health);
	var healthPercent = currentMonster.health / currentMonster.maxHealth;
	var healthHeight = 450 - (450 * healthPercent);
	$('.beastCard .damageBar').css('height', healthHeight);
    }

    }
	

	
	
// ----------------------------------------------------------------------------------------
// BEASTS
// ----------------------------------------------------------------------------------------	
	
	
var beasts =[

	// LEVEL 1
	// ----------------------------------------------------------------------------------------	

	 gobline= {
        name: 'Gobline',
        level: 1,
       specialAbilities: ['Thunderous Crush: Damagex2 on roll of 12 '],
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'anarchic'
    },
	
	gobline= {
        name: 'Ferrits',
        level: 1,
       specialAbilities: ['Thunderous Crush: Damagex2 on roll of 12 '],
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"],
		path:'Speed',
		sound: 'monster1',
		description: "Dangerous in groups, these speedy demons kill quickly. Beware.",
		alignment :'anarchic'
    },
	
	 rudeDrunk= {
        name: 'Rude Drunk',
        level: 1,
        skills: 'DEATH to Emperoro Mortelle. Slavery shall end.',
        type: 'Hero',
		location: [ "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'rebel'
    },
	
    zomby= {
        name: 'Minor Zomby',
        level: 1,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'bloodthirsty'
    },
	
    skulleton= {
        name: 'Skulleton',
        level: 1,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Desert","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	redPuffer= {
        name: 'Red Puffer',
        level: 1,
        skills: ' ',
        type: 'Plant',
		location: ["Dungeon","Ruins"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	tombSnatch= {
        name: 'Tomb Snatch',
        level: 1,
        skills: ' ',
        type: 'Plant',
		location: ["Dungeon"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	pickpocket= {
        name: 'Pickpocket',
        level: 1,
        skills: ' ',
        type: 'Hero',
		location: ["City", "Village"],
		path:'Speed',
		sound: 'monster1',
		alignment :'anarchic'
    },


	
	
	
	
	
	
	
	
	// LEVEL 2
	// ----------------------------------------------------------------------------------------	
	
	  rebelGuards= {
        name: 'Rebel Guards',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Hero',
		location: ["City", "Village"],
		path:'Strength',
		sound: 'monster1',
		alignment :'imperial'
    },
	
	  mantys= {
        name: 'Mantys',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Mythic',
		location: ["Dungeon", "Forest","Ruins"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'neutral',
		specialAttack:[beastHeal]
    },
	zomby= {
        name: 'Zomby',
        level: 2,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'bloodthirsty',
		specialAttack:[beastHeal]
    },
	
	  bandit= {
        name: 'Bandit',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Hero',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert"],
		sound: 'sword',
		alignment :'anarchic'
    },
	
	 frostGargunt= {
        name: 'Frost Gargunt',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Mountain","Snow"],
		path:'Strength',
		sound: 'monster1',
		alignment :'honorable'
    },
	 frostDaemon= {
        name: 'Frost Daemon',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Arcane',
		location: ["Mountain","Snow"],
		path:'Strength',
		sound: 'monster1',
		alignment :'bloodthirsty'
    },
	 snowGoul= {
        name: 'Snow Goul',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Undead',
		location: ["Mountain","Snow"],
		path:'Strength',
		sound: 'monster1',
		alignment :'bloodthirsty'
    },
	
	  boneWitch= {
        name: 'Bone Witch',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Mythic',
		location: ["Swamp","Desert","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	
	  forestTrull= {
        name: 'Forest Trull',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: [ "Forest"],
		path:'Strength',
		sound: 'monster1',
		alignment :'rebel'
    },
	
	
	  madVermin= {
        name: 'Mad Vermin',
        level: 2,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: [ "Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert"],
		path:'Speed',
		sound: 'monster1',
		alignment :'anarchic'
    },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		// LEVEL 3
	// ----------------------------------------------------------------------------------------	
	
	
	zomby= {
        name: 'Ice Zomby',
        level: 3,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	
	 rachinoid= {
        name: 'Rachinoid',
        level: 3,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Animal',
		location: ["Dungeon", "Swamp","Graves","Ruins","Mountain","Altar"],
		path:'Speed',
		sound: 'monster1',
		alignment :'neutral'
    },
	
	 woodThugs= {
        name: 'Wood Thugs',
        level: 3,
        skills: 'Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Hero',
		location: ["Forest"],
		path:'Strength',
		sound: 'bow',
		alignment :'coldblooded'
    },
	
	 assasinas= {
        name: 'Assasinas',
        level: 3,
        skills: 'DEATH to Emperoro Mortelle. Slavery shall end.',
        type: 'Hero',
		location: ["City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'sword',
		alignment :'anarchic'
    },

	
	
	
    rottenskuldt= {
        name: 'Rottenskuldt',
        level: 3,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon","Ruins"],
		path:'Strength',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	
	
	
	 bloodAcolyte= {
        name: 'Blood Acolyte',
        level: 3,
        skills: 'Powerful seers who believe the old abandoned ways of sacrifice ',
        type: 'Hero',
		location: ["Dungeon", "Swamp", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'coldblooded'
    },

   // behemoos= {
//        name: 'Behemoos',
//        level: 100,
//        skills: 'Immune to fire damage ',
//        type: 'Behemoos',
//		location: ["Water"],
//		path:'Strength',
//		sound: 'monster1'
//    },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		// LEVEL 4
	// ----------------------------------------------------------------------------------------	
	
	// riverSkrall= {
//        name: 'River Skrall',
//        level: 4,
//        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12',
//        type: 'Animal',
//		location: ["Forest", "Plains"],
//		path:'Strength',
//		sound: 'monster1'
//    },

    streetFighter= {
        name: 'Street Fighter',
        level: 4,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Hero',
		location: [ "City", "Village"],
		path:'Strength',
		sound: 'monster1',
		alignment :'rebel'
    },
	
	stoneGolem= {
        name: 'Stone Golem',
        level: 4,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Arcane',
		location: ["Dungeon", "Forest","Desert","Altar","Crypt","Cemetary"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	
	 necrypt= {
        name: 'Necrypt',
        level: 4,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Undead',
		location: ["Dungeon",  "City", "Village","Ruins","Crypt","Cemetary"],
		path:'Strength',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	
	 mantys= {
        name: 'Philopet',
        level: 4,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Plant',
		location: ["Dungeon", "Forest","Ruins"],
		path:'Spirit',
		sound: 'monster1',
		description:"Nasty plant that's spread from the ocean depths to land. It's stingers have a deadly bite.",
		alignment :'neutral'
    },
	
	majorZomby= {
        name: 'Major Zomby',
        level: 4,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain","Crypt","Cemetary"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	
	saphireGrindylo= {
        name: 'Saphire Grindylo',
        level: 4,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain","Crypt","Cemetary"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded',
		specialAttack:[beastHeal]
    },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// LEVEL 5
	// ----------------------------------------------------------------------------------------	
	
	 lesserDracozid= {
        name: 'Lesser Dracozid',
        level: 5,
        flavor: 'Their skittish laughs haunt their foes long after their fetid hides are gone',
        frequency: 'Common',
		location: ["Dungeon", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'humane'
    },
	
	
	
	
	 baedil= {
        name: 'Baedil',
        level: 5,
        skills: 'Rage : double damage if children are attacked<br> Thunderous Crush: Damagex2 on roll of 12',
        type: 'Animal',
		location: ["Dungeon", "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	
	 woodTroll= {
        name: 'Wood Troll',
        level: 5,
        skills: ' ',
        type: 'Beast',
		location: ["Dungeon", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'rebel'
    },

	rubyGrindylo= {
        name: 'Ruby Grindylo',
        level: 5,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain","Crypt","Cemetary"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded',
		specialAttack:[beastHeal]
    },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		// LEVEL 6
	// ----------------------------------------------------------------------------------------	
	
	
	
	 merPaladines= {
        name: 'Mer Paladine',
        level: 20,
        skills: 'Imperial Spy',
        type: 'Hero',
		location: ["Dungeon", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'honorable'
    },

    mortelle= {
        name: 'Mortelle',
        level: 10,
        skills: 'Law will prevail. Your terror ends here.',
        type: 'Hero',
		location: ["Dungeon",  "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'imperial'
    },
	
	
	//
//	 sandskrall= {
//        name: 'Sandskrall',
//        level: 6,
//        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12',
//        type: 'Animal',
//		location: ["Dungeon",  "Forest", "Plains"],
//		path:'Strength',
//		sound: 'monster1'
//
//    },
//	
	 dracozid= {
        name: 'Dracozid',
        level: 6,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Animal',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'humane'
    },

 bloodAcolyte= {
        name: 'Ice Acolyte',
        level: 6,
        skills: 'FrostBlast',
        type: 'Hero',
		location: ["Snow","Mountains","Dungeon", "Swamp", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'coldblooded'
    },























	// LEVEL 7
	// ----------------------------------------------------------------------------------------	
	
	 riverTicks= {
        name: 'River Ticks',
        level: 7,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Animal',
		location: ["Dungeon",   "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },

	

    bloodGuardian= {
        name: 'Blood Guardian',
        level: 7,
        skills: ' Fanatic believers and the last line of defense for the Dracotaur',
        type: 'Hero',
		location: ["Dungeon",  "Forest", "Plains","Desert","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'bloodthirsty'
    },

    sourGirl= {
        name: 'Sour Girl',
        level: 7,
        skills: ' My mothers down below.Tell her I say hello',
        type: 'Undead',
		location: ["Dungeon",  "Forest", "Plains","Ruins"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },

    cityGuard= {
        name: 'City Guard',
        level: 7,
        skills: 'Do NOT mess with the Law!',
        type: 'Hero',
		location: [ "City", "Village"],
		path:'Strength',
		sound: 'monster1',
		alignment :'imperial'
    },

   


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

		// LEVEL 8
	// ----------------------------------------------------------------------------------------	
	
	 titanicSandskrall= {
        name: 'Titanic Sandskrall',
        level: 9,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Animal',
		location: ["Dungeon", "Swamp",   "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	 spinderella= {
        name: 'Spinderella',
        level: 8,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Animal',
		location: ["Dungeon",   "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	 imperialGobline= {
        name: 'Imperial Gobline',
        level: 8,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'coldblooded'

    },
	
	
	 thornSnatcher= {
        name: 'Thorn Snatcher',
        level: 8,
        skills: 'Flight & Bury: -2 to Attack rolls<br> Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Plant',
		location: ["Dungeon", "Forest","Ruins"],
		path:'Spirit',
		sound: 'monster1',
		description:"Nasty plant that's spread from the ocean depths to land. It's stingers have a deadly bite.",
		alignment :'neutral'
    },
	
	witchlyn= {
        name: 'Witchlyn',
        level: 8,
        skills: ' Mamas gonna get you... ',
        type: 'Mythic',
		location: ["Dungeon", "Swamp", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'rebel'
    },
	
	merette= {
        name: 'Merette',
        level: 5,
        skills: ' Mamas gonna get you... ',
        type: 'Mythic',
		location: ["Dungeon", "Swamp", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'humane'
    },
	
	pasantVillagers= {
        name: 'Pasant Villagers',
        level: 1,
        skills: ' Mamas gonna get you... ',
        type: 'Mythic',
		location: ["Dungeon", "Swamp", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'humane'
    },
	
	impyrialGuard= {
        name: 'Impyrial Guard',
        level: 3,
        skills: 'Do NOT mess with the Law!',
        type: 'Hero',
		location: [ "City", "Village"],
		path:'Strength',
		sound: 'monster1',
		alignment :'imperial'
    },
	
	
	
	
	
	// Level 9
	// ----------------------------------------------------------------------------------------	
	
	
	 gargunt= {
        name: 'Burnt Gargunt',
        level: 9,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	gargunt2= {
        name: 'Burnt Gargunt',
        level: 10,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	gargunt3= {
        name: 'Burnt Gargunt',
        level: 11,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	 gargunt= {
        name: 'Burnt Gargunt',
        level: 12,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	gargunt2= {
        name: 'Burnt Gargunt',
        level: 13,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	gargunt3= {
        name: 'Master Gargunt',
        level: 14,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	 gargunt= {
        name: 'Giant Gargunt',
        level: 15,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	gargunt2= {
        name: 'Titanic Gargunt',
        level: 16,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	gargunt3= {
        name: 'Colossal Gargunt',
        level: 17,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon",  "Forest", "Plains","Altar"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'

    },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// BOSSES
	// ----------------------------------------------------------------------------------------	
	
       barbedDracozid= {
        name: 'Barbed Dracozid',
        level: 5,
        skills: 'Resistant to fire',
        type: 'Animal',
		location: ["Dungeon",  "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	
	dracotaur= {
        name: 'Dracotaur',
        level: 4,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		specialAttack:[beastPoison,beastPoison],
		alignment :'bloodthirsty'

    },
	
	nanaSinki= {
        name: 'Nana Sinki',
        level: 2,
        skills: ' Mamas gonna get you... ',
        type: 'Undead',
		location: ["Dungeon"],
		path:'Strength',
		sound: 'monster1',
		specialAttack:[beastHeal,beastPoison],
		alignment :'coldblooded'
		//specialAttack:[beastHeal,beastPoison]
    },
	
	goreGunt= {
        name: 'goreGunt',
        level: 5,
        skills: ' Mamas gonna get you... ',
        type: 'Undead',
		location: ["Forest"],
		path:'Strength',
		sound: 'monster1',
		alignment :'anarchic'
    },
	
	
	
	
	
	
	//
//	actor= {
//        name: 'Actor',
//        level: 1,
//       specialAbilities: ['Poetic Justice'],
//        type: 'Beast',
//		location: ["City","Village"],
//		path:'Strength',
//		sound: 'monster1'
//    }
//	
//	
	
	
	
	// BOSSES
	
	nanaSinki= {
        name: 'Nana Sinki',
        level: 2,
        skills: ' Mamas gonna get you... ',
        type: 'Undead',
		location: ["Dungeon"],
		path:'Strength',
		sound: 'monster1',
		specialAttack:[beastHeal,beastPoison],
		alignment :'coldblooded'
		//specialAttack:[beastHeal,beastPoison]
    }
	
	
	
	
	
	
	
	
	
	// BEHEMOOS
	// ----------------------------------------------------------------------------------------	
	//
//       drig= {
//        name: 'Drig',
//        level: 24,
//        skills: 'Resistant to fire',
//        type: 'Behemoos',
//		location: ["Dungeon", "Swamp", "City", "Village", "Forest", "Plains"],
//		path:'Strength',
//		sound: 'monster1'
//    }


];

var bosses =[
	
	
	 barbedDracozid= {
        name: 'Barbed Dracozid',
        level: 5,
        skills: 'Resistant to fire',
        type: 'Animal',
		location: ["Dungeon",  "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	
	nanaSinki= {
        name: 'Nana Sinki',
        level: 2,
        skills: ' Mamas gonna get you... ',
        type: 'Undead',
		location: ["Dungeon"],
		path:'Strength',
		sound: 'monster1',
		specialAttack:[beastHeal,beastPoison],
		alignment :'coldblooded'
		//specialAttack:[beastHeal,beastPoison]
    },
	
	dracotaur= {
        name: 'Dracotaur',
        level: 4,
        skills: ' Thunderous Crush: Damagex2 on roll of 12 ',
        type: 'Beast',
		location: ["Dungeon", "City", "Village", "Forest", "Plains"],
		path:'Strength',
		sound: 'monster1',
		specialAttack:[beastPoison,beastPoison],
		alignment :'bloodthirsty'

    }
	
	]
