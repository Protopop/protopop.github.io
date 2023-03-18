// ----------------------------------------------------------------------------------------
// BEASTS
// ----------------------------------------------------------------------------------------	
var healingRoot = function() {
	alert("heal");
	playerHp = maxHp;
	setUI();
}



var perks = [];

perks = [



	// LEVEL 1
	// ----------------------------------------------------------------------------------------	


	perk1 = {
		name: 'Healing Root',
		level: 1,

		skills: 'healingRoot',
		flavor: 'Giant creatures from an age past - both gaurdians and destroyers',
		type: 'Beast',
		frequency: 'Common',
		description: 'Come back from the brink of death - heal all your wounds',
		attackSpeed: 2,
		location: ["Dungeon", "Swamp", "Forest", "Plains", "Ruins", "Desert"],
		healthBonus: 0,
		path: 'Spirit',
		effect: function() {
			//alert("perk1");
			if (playerHp >= maxHp) {
				//alert("You already have full health")
			} else {
				playerHp = maxHp;
				updateStats();
			}
			//removeCard();
		}
	},

	perk2 = {
		name: 'Dri Doost',
		level: 1,
battle:true,
		skills: 'healingRoot',
		flavor: 'Held hostage by the Blood acolytes',
		type: 'Hero',
		frequency: 'Uncommon',
		description: 'Explosive Niji-Made powder burns your foes skin',
		attackSpeed: 4,
		location: ["City", "Village", "Forest", "Plains"],
		healthBonus: 0,
		path: 'Strength',
		effect: function() {
			
			hitBeast(10,5);
		}
	},



	perk3 = {
		name: 'Karma Kindle',
		level: 1,

		skills: ' ',
		flavor: 'Their skittish laughs haunt their foes long after their fetid hides are gone',
		type: 'Undead',
		frequency: 'Common',
		description: 'Replenish your Karma to full Strength',
		attackSpeed: 3,
		location: ["Dungeon", "Swamp", "Ruins", "Snow", "Mountain"],
		healthBonus: 0,
		path: 'Spirit',
		effect: function() {
			//alert("perk3");
			fillKarma();
			updateStats();
		}
	},

	perk4 = {
		name: 'Assasins Drip',
		level: 1,
battle:true,
		skills: ' ',
		flavor: 'Their skittish laughs haunt their foes long after their fetid hides are gone',
		type: 'Undead',
		frequency: 'Common',
		description: 'Poison slowly kills ypur foe each round',
		attackSpeed: 3,
		location: ["Dungeon", "Swamp", "Ruins", "Desert", "Snow", "Mountain"],
		healthBonus: 0,
		path: 'Speed',
		effect: function() {
			enemyEffects.poisoned = true;
			poisonBeast();
			playerHp = maxHp;
			updateStats();
		}
	},

	perk5 = {
		name: 'Barbaric Frenzy',
		level: 1,

		skills: ' ',
		flavor: 'Their skittish laughs haunt their foes long after their fetid hides are gone',
		type: 'Undead',
		frequency: 'Common',
		description: 'Double your health for 1 battle',
		attackSpeed: 3,
		location: ["Dungeon", "Swamp", "Ruins", "Desert", "Snow", "Mountain"],
		healthBonus: 0,
		path: 'Strength',
		effect: function() {
			maxHpBonus = maxHp;
			setMaxHp();
			fullHealth();
			updateStats();
		}
	}


];