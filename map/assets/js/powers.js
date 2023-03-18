// Hero powers

var heroPeasant = {
		name: 'Stormslaught',
		description: 'Lightning damage targets your enemies +3 damage',
		img: 'assets/img/magic/stormslaught.png',
		level: 4,
		type: "magic",
		damageType: 'pierce',
		//damage: 0,
		skill: "strength",
		attackSpeed: 2,
		cost: 1,
		charges: 20,
		career: ['seer'],
		sound: 'spell',
				effect:healWeapon
	}
	
	var heroRook = {
		name: 'Rooks Stryke',
		specialAbilities:['Rooks Strike'],
		description: 'Lightning damage targets your enemies +3 damage',
		img: 'assets/img/magic/stormslaught.png',
		level: 4,
		type: "magic",
		damageType: 'pierce',
		damage: 1,
		skill: "strength",
		attackSpeed: 2,
		cost: 1,
		charges: 20,
		career: ['seer'],
		sound: 'spell',
				effect:strikeHit
	}
	
	
	var strikeHit = function() {
  // alert("heal");
 // playSound('spell',1);
		playerHp += 3;
		//limitHp();
       // playerHp = maxHp;
        updateStats();
   
}