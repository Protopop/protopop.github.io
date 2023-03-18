



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
	
	
var beliefs =[

	// LEVEL 1
	// ----------------------------------------------------------------------------------------	

	
	 frostDaemon= {
        name: 'Froosklann',
		filename: 'Froosklann',
		
		flavor:'Lawful order of northern paladins'
     
    },
	
	tombSnatch= {
        name: 'The Assasina',
		filename: 'assasina',
        level: 1,
       
		flavor:'Anti Empyre Activists',
		
    },
	
	gobline= {
        name: 'The Olde Faith',
		filename: 'weavers',
     
		flavor:'Ancient and original world faith',
       skill:'Cold Immunity',
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"]
		
    },
	
	gobline= {
        name: 'Grim Brude',
		filename: 'grimbrude',
       
		flavor:'Violent Crusaders',
       skill:'Cold Immunity',
        type: 'Beast',
		location: ["Dungeon", "Swamp", "Forest", "Plains","Ruins","Desert","Altar"]
    },
	
	 rudeDrunk= {
        name: 'Imperial Doctrine',
		filename: 'neximperio',
         
		flavor:'Adherents of Imperial Doctrine',
       skill:'Cold Immunity',
        type: 'Beast',
		
		location: [ "City", "Village", "Forest", "Plains"]
	
    },
	
    zomby= {
        name: 'Drcozidians',
		filename: 'kleretica',
       flavor:'Pure Neutrality',
		location: ["Dungeon", "Swamp","Ruins","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'bloodthirsty'
    },
	
    skulleton= {
        name: 'Root Striders',
		filename: 'rootstriders',
       flavor:'A rising nature based religion',
		location: ["Dungeon", "Swamp","Ruins","Desert","Snow","Mountain"],
		path:'Spirit',
		sound: 'monster1',
		alignment :'coldblooded'
    },
	redPuffer= {
        name: 'Skull Ferum',
		filename: 'skullferum',
        level: 1,
        skills: ' ',
        type: 'Plant',
		location: ["Dungeon","Ruins"],
		path:'Strength',
		sound: 'monster1',
		alignment :'neutral',
		flavor:'Followers of the Blood Plague'
    },
	
	pickpocket= {
        name: 'Colde Bone',
		filename: 'koldebone',
		flavor:'Anti Machinists',
        level: 1,
        skills: ' ',
        type: 'Hero',
		location: ["City", "Village"],
		path:'Speed',
		sound: 'monster1',
		alignment :'anarchic'
    }
	
	]
