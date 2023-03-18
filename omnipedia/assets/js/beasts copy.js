



beastPoison= {
       
		

    }
	
	beastHeal= {
       
    }

   
	
	
	fullHeal= {
       

    }
	
immuneCold = {
	name:'Cold Immunity'
	};
	
	
// ----------------------------------------------------------------------------------------
// BEASTS
// ----------------------------------------------------------------------------------------	
	
	
var beasts =[

	// LEVEL 1
	// ----------------------------------------------------------------------------------------	

	
	 frostDaemon= {
        name: 'Frost Fiend',
		health:5,
		damage:4,
		flavor:'Loyal Gaurdians of the Icy Deep',
       skill:'Cold Immunity',
        type: 'Arcane',
		location: ["Mountain","Snow"]
    },
	
	tombSnatch= {
        name: 'Tomb Snatch',
        level: 1,
        skills: ' ',
        type: 'Plant',
		flavor:'Carnivorous plants with a jellyfish sting',
		location: ["Dungeon"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral'
    },
	
	gobline= {
        name: 'Gobline',
      health:2,
		damage:1,
		flavor:'Thugs of the Woods',
       skill:'Cold Immunity',
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"]
		
    },
	
	gobline= {
        name: 'Killvereen',
         health:4,
		damage:1,
		flavor:'Attack in Packs',
       skill:'Cold Immunity',
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"]
    },
	
	
	gobline= {
        name: 'Ferrits',
         health:4,
		damage:1,
		flavor:'Attack in Packs',
       skill:'Cold Immunity',
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"]
    },
	
	 rudeDrunk= {
        name: 'Rude Drunk',
         health:6,
		damage:1,
		flavor:'Keeps on tickin',
       skill:'Cold Immunity',
        type: 'Beast',
		
		location: [ "City", "Village", "Forest", "Plains"]
	
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
	
	  cityGuards= {
        name: 'City Guards',
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		// LEVEL 3
	// ----------------------------------------------------------------------------------------	
	
	
	
	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// LEVEL 5
	// ----------------------------------------------------------------------------------------	
	
	
	
	
	
	
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

   
   
   
   
   
   
   

		// LEVEL 8
	// ----------------------------------------------------------------------------------------	
	
	
	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// BOSSES
	// ----------------------------------------------------------------------------------------	
	
     
	
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
