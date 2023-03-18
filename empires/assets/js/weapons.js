//----------------------------------------------------------------------------------------
// WEAPONS

 var baseWeaponPrice = 50;
 
var weapons = [
	sword01 = {
		type:'sword',
		name: 'Short Slice',
		level: 1,
		specialAbilities: ['Crushing Blow x2'],
		location: ["City", "Village"],
		damageType: ['slash'],
		charges: 0,
		cost: 0,
		description: 'A well balanced blade made of sturdy Nindu Steel',
		sound: 'sword',
		price:0
	},
	dagger01 = {
		type:'dagger',
		name: 'Cutwhip Dagger',
		level: 1,
		location: ["City", "Village"],
		damageType: ['slash'],
		charges: 0,
		cost: 0,
		description: 'Light Niji ore makes this quick and deadly dagger a favorite for swipes',
		sound: 'sword'
	},
	bow01 = {
		type:'bow',
		name: 'Assasina Bow',
		description: 'Deadly craftmanship perfected a generation ago by the Assasina Clan, sworn enemies of Emperoro Mortelle',
		level: 1,
		
		damageType: 'pierce',
		charges: 50,
		sound: 'bow',
		location: ["City", "Village"]
	},
	sword02 = {
		type:'sword',
		name: 'Wind Cleaver',
		description: 'A hollow but sturdy handle of cured bettlerwood makes for a light yet deadly weapon',
		level: 1,
		damageType: 'pierce',
		maxCharges: 0,
		charges: 0,
		career: ['rook', 'swipe'],
		sound: 'sword',
		location: ["City", "Village"]
	},
	staff01 = {
		type:'staff',
		name: 'Seer Staff',
		description: 'The signature weapon of the Seer. A fine crafted staff of rare resistant Yew wood',
		level: 2,
		damageType: 'blunt',
		charges: 0,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	hammer01 = {
		type:'hammer',
		name: 'War Hammer',
		description: 'Solid Igri hammer built to last',
		level: 2,
		
		damageType: 'blunt',
		maxCharges: 25,
		charges: 25,
		career: ['rook', 'swipe'],
		sound: 'crunch',
		location: ["City", "Village"]
	},
	mace01 = {
		type:'mace',
		name: 'Silver Mace',
		description: 'A blunt smashing weapon that is the bane of the Undead and a favorite of Priests',
		level: 3,
		
		damageType: 'blunt',
		charges: 0,
		career: ['rook', 'swipe'],
		sound: 'crunch',
		location: ["City", "Village"]
	},
	staff02 = {
		type:'sword',
		name: 'Blightwood Staff',
		description: 'Rare, flexible handcrafted from Blightwood makes an excellent battle staff for Seers',
		level: 3,
		damageType: 'blunt',
		charges: 0,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	sword02 = {
		type:'sword',
		name: 'Shadow Sword',
		description: 'A fast sword of dark metal that cuts through flesh and bone with ease',
		level: 4,
		damageType: 'pierce',
		charges: 0,
		sound: 'sword',
		career: ['rook'],
		location: ["City", "Village"]
	},
	axe01 = {
		type:'axe',
		name: 'Iron Chopper',
		description: 'A cleaving Axe traditonally used in the frozen wastelands of the south',
		level: 4,
		damageType: 'pierce',
		charges: 0,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	sword04 = {
		type:'sword',
		name: 'Blood Throat',
		description: 'Goblins of ll sizes fear this sword, fine-tuned to slice through scaly skin',
		level: 5,
		damageType: 'pierce',
		charges: 0,
		sound: 'sword',
		location: ["City", "Village"]
	},
	sword05 = {
		name: 'Quake Cleaver',
		description: 'A heavr 2 handed cleaver designed to damage thick armors',
		level: 5,
		damageType: 'pierce',
		charges: 30,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	sword06 = {
		type:'sword',
		name: 'Holy Blade',
		description: 'Lightweight Sword',
		level: 6,
		damageType: 'slash',
		charges: 30,
		sound: 'sword',
		location: ["City", "Village"]
	},
	staff03 = {
		type:'staff',
		name: 'Shillelagh',
		description: 'A weapon native to Bryn. Deadly blunt damage in the right hands',
		level: 6,
		damageType: 'slash',
		charges: 30,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	axe02 = {
		type:'axe',
		name: 'Battle Axe',
		description: 'Throwbacks to the days of Physsian rule - a heavy, stone ground axe of molten metal',
		level: 7,
		damageType: 'slash',
		charges: 30,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	sword06 = {
		type:'sword',
		name: 'Necrotic Blade',
		description: 'Used by Blood Cultists for decades and causes a speedy death',
		level: 7,
		damageType: 'slash',
		charges: 30,
		sound: 'sword',
		location: ["City", "Village"]
	},
	mace02 = {
		type:'mace',
		name: 'Spine Cracker',
		description: 'A crushing mace with a large head that effectively breaks bone',
		level: 8,
		damageType: 'slash',
		charges: 30,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	axe03 = {
		type:'axe',
		name: 'Skull Splitter',
		description: 'Prohibited in Byria for the extreme damage caused by its harsh, rough hewn adges',
		level: 8,
		damageType: 'slash',
		charges: 30,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	staff04 = {
		type:'staff',
		name: 'Battle Staff',
		description: 'A must for Priests and Battleseers, a sturdy thick staff that causes heavy damage without magic',
		level: 9,
		damageType: 'slash',
		charges: 12,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	hammer05 = {
		type:'hammer',
		name: 'Storm Hammer',
		description: 'A two handed very heavy hammer wielded only by the strongest of warriors',
		level: 9,
		damageType: 'pierce',
		charges: 16,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	hammer06 = {
		type:'axe',
		name: 'Golden Axe',
		description: 'A two handed very heavy hammer wielded only by the strongest of warriors',
		level: 9,
		damageType: 'pierce',
		charges: 16,
		sound: 'crunch',
		location: ["City", "Village"]
	},
	driDoost = {
		type:'firepipe',
		name: 'Dri Doost',
		description: 'Rusty but sharp blade <br>  6 Damage / 2 Speed',
		level: 10,
		damageType: 'ranged',
		charges: 5,
		sound: 'crunch',
		location: ["City", "Village"]
	}
];



// PROCEDURAL ELEMENTS

 for (var i = 0; i < weapons.length; i++) {
	var curWeapon =  weapons[i];
	
	curWeapon.folder = "weapons";
	// add price to items that don't have one
	 if(!curWeapon.price){
		
		 
		 var basePrice = baseWeaponPrice * curWeapon.level;
		 var priceModifier = Math.floor(Math.random() *50) -25;
		 curWeapon.price = basePrice + priceModifier;
	 } 
	 
	 // add maxCharge
	 if(curWeapon.charges){
		 curWeapon.maxCharges = curWeapon.charges;
		 //alert(curWeapon.maxCharges);
	 }
	 
	 // ADD DAMAGE TYPES
	curWeapon.type == 'firepipe'? curWeapon.damageType = 'pierce':null;
		curWeapon.type == 'bow'? curWeapon.damageType = 'pierce':null;
	curWeapon.type == 'axe'? curWeapon.damageType = 'slash':null;
	curWeapon.type == 'hammer'? curWeapon.damageType = 'blunt':null;
	curWeapon.type == 'sword'? curWeapon.damageType = 'slash':null;
	curWeapon.type == 'dagger'? curWeapon.damageType = 'pierce':null;
	curWeapon.type == 'staff'? curWeapon.damageType = 'blunt':null;
		curWeapon.type == 'mace'? curWeapon.damageType = 'blunt':null;
 }