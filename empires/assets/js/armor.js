//----------------------------------------------------------------------------------------
// ARMOR

var armor = [];


armor = [
      //  'armor',
   // basic = {
//        img: '',
//		weight : 'light',
//        defense: 0,
//        hp: 0,
//        price: 0,
//        skill: "speed",
//        inventory: true,
//        img: 'assets/img/armor/shield01.png',
//        name: 'empty',
//        description: '',
//        type: 'armor'
//
//    },
    shield01 = {
        type: 'armor',
		weight : 'light',
        name: "Wood Shield",
        img: 'assets/img/armor/shield01.png',
        defense: 1,
        hp: 40,
        price: 10,
        skill: "speed",
        level: 1,
        description: 'Sturdy White Oak Shield<br>Defense +1',
        history: 'A favorite of the older kingdoms, this Sturdy White Oak Shield is a handcrafted symbol of ancient independence',
        inventory: true,
				career: ['rook','swipe'],
				subType:'shield'

    },
    shield02 = {
        type: 'armor',
		weight : 'light',
        name: "Ebon Shield",
        img: 'assets/img/armor/shield02.png',
        defense: 2,
        hp: 40,
        price: 25,
        skill: "speed",
        level: 2,
        description: 'Olde Empyre Shielding <br>Defense +1',
        history: 'A symbol of the Olde Empyre, Ebon shields have been traditional among Empyre Guards for centuries',
        inventory: true,
			career: ['rook'],
				subType:'shield'

    },
    shield03 = {
        type: 'armor',
		weight : 'light',
        name: "Stone Shield",
        img: 'assets/img/armor/shield03.png',
        defense: 3,
        hp: 40,
        price: 50,
        skill: "speed",
        history: '',
        level: 3,
        description: 'Igri stone carved',
        inventory: true,
			career: ['rook'],
				subType:'shield'

    },
    shield04 = {
        type: 'armor',
		weight : 'light',
        name: "Brazen Shield",
        img: 'assets/img/armor/shield04.png',
        defense: 4,
        hp: 40,
        price: 75,
        skill: "speed",
        history: '',
        level: 4,
        description: 'Light metal shielding',
        inventory: true,
			career: ['rook'],
				subType:'shield'

    },
    leather = {
        type: 'armor',
		weight : 'light',
		name: 'Leather Suit',
        img: 'assets/img/armor/leather.png',
        defense: 1,
        hp: 40,
        price: 100,
        skill: "speed",
        history: '',
        level: 1,
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
			career: ['rook','swipe'],
				subType:'torso'

    },
    ironHelm = {
        type: 'armor',
		weight : 'light',
		name: 'Iron Helm',
        img: 'assets/img/armor/ironhelm.png',
        defense: 1,
        level: 1,
        hp: 20,
        price: 150,
        skill: "speed",
        history: '',
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
			career: ['rook','swipe'],
				subType:'helm'

    },
    gildedHelm = {
        type: 'armor',
		weight : 'light',
        name: "Gilded Helm",
        description: "protective runes shield the body <br> +2 defense",
        img: 'assets/img/armor/gildedhelm.png',
        defense: 2,
        level: 2,
        hp: 20,
        price: 200,
        history: '',
        skill: "speed",
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
			career: ['rook'],
				subType:'helm'
    },
    imperialArmor = {
        type: 'armor',
		weight : 'light',
        name: "Imperial Armor",
        description: "+1 Defense",
        img: 'assets/img/armor/imperialarmor.png',
        defense: 3,
		 level: 3,
        hp: 100,
        history: '',
        price: 250,
        skill: "speed",
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
		career: ['rook'],
				subType:'torso'
    },
    bronzeArmor = {
        type: 'armor',
		weight : 'heavy',
        name: "Bronze Armor",
        description: "+1 Defense, -1 speed",
        img: 'assets/img/armor/bronzeplate.png',
        defense: 3,
        level: 4,
        hp: 100,
        price: 320,
        skill: "speed",
        strength: 0,
        history: '',
        speed: -1,
        spirit: 0,
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
		career: ['rook'],
				subType:'torso'

    },
    ironArmor = {
        type: 'armor',
		weight : 'heavy',
        name: "Iron Armor",
        description: "+1 Defense, +1 speed",
        img: 'assets/img/armor/ironplate.png',
        defense: 3,
        level: 5,
        hp: 100,
        price: 380,
        skill: "speed",
        strength: 0,
        speed: 1,
        history: '',
        spirit: 0,
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
		career: ['rook'],
				subType:'torso'
    },
    paddedChain = {
        type: 'armor',
		weight : 'heavy',
        name: " Padded Chain",
        description: "+1 Defense",
        img: 'assets/img/armor/paddedchain.png',
        defense: 4,
        level: 6,
        hp: 100,
        price: 430,
        skill: "speed",
        strength: 0,
        speed: 0,
        history: '',
        spirit: 0,
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
		career: ['rook'],
				subType:'torso'
    },
    bearHide = {
        type: 'armor',
		weight : 'light',
        name: "Bear Hide",
        description: "+1 Defense<br> +2 defense against ice damage",
        img: 'assets/img/armor/bearhide.png',
        defense: 4,
        level: 5,
        defenseType: 'ice',
        bonus: 1,
        history: '',
        hp: 50,
        price: 450,
        skill: "speed",
        description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
        inventory: true,
				subType:'torso'
    },
    sigilGuard = {
        type: 'armor',
		weight : 'light',
        name: "Sigil Guard",
        description: "+1 defense per 2 karma spent",
        img: 'assets/img/armor/sigilguard.png',
        level: 7,
        defense: 4,
        karma: 2,
        history: '',
        hp: 100,
        price: 600,
        skill: "speed",
        inventory: true,
		career: ['rook'],
				subType:'magic'
    },

    iceGauntlet = {
        type: 'armor',
		weight : 'light',
        name: "Ice Gauntlet",
        img: 'assets/img/armor/icegauntlet.png',
        defense: 5,
        hp: 40,
        price: 720,
        skill: "speed",
        level: 8,
        description: 'Shield of Nobility <br>Defense +1',
        history: 'A Nobles shield at a fraction of the price. This beautiful piece has likely been poached from someone of means',
        inventory: true,
		career: ['rook'],
				subType:'hands'

    },
	

    dracozidScales = {
        type: 'armor',
		weight : 'light',
        name: "Dracozid Scales",
        img: 'assets/img/armor/dracozidscales.png',
        defense: 5,
        hp: 40,
        price: 1000,
        skill: "speed",
        level: 9,
        description: 'Shield of Nobility <br>Defense +1',
        history: 'A Nobles shield at a fraction of the price. This beautiful piece has likely been poached from someone of means',
        inventory: true,
				subType:'torso'

    }




];

