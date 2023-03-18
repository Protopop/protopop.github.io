



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
	
	
var undead =[

	
	zomby= {
        name: 'Zomby',
      health:5,
		damage:4,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'bloodthirsty',
		specialAttack:[beastHeal]
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

	






zomby= {
        name: 'Minor Zomby',
       health:2,
		damage:3,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'bloodthirsty',
		specialAttack:[beastHeal]
    },





zomby= {
        name: 'Major Zomby',
       health:7,
		damage:6,
        skills: ' ',
        type: 'Undead',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'bloodthirsty',
		specialAttack:[beastHeal]
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
	


];

