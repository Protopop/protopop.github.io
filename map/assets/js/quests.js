// JavaScript Document

// All locations are actually citizens, - provonces, etc

defaultQuest = {
	name:'DefaultQuest',
		location: 'Bresk',
		goalLocation: 'Bresk',
		//description:"<span class='underline'>Treaty of Zea</span>Explore the area near BRESK and find citizens for or against slavery",
		description:"Explore the area near BRESK and find citizens for or against slavery",
		boss: 'Nana Sinki'
	
	
}

crusadeQuest = {
		name:'Crusade Quest',
		location: 'Vandgels',
		goalLocation: 'Vandgels',
		description:"<span class='underline'>Empyre Crusades</span>Explore the area near VANDGELS and find citizens for or against the crusades",
		boss: 'Nana Sinki'
	}
	
	assasinQuest ={
		name:'Assasins Quest',
		location: 'Brundt',
		goalLocation: 'Brundt',
		description:"<span class='underline'>Path of the Assasina</span>Explore the area near BRUNDT and find supporters and opponents of the Assasina plan",
		boss: 'Nana Sinki'
	}
	
	simpleQuest = {
		name:'Basic Quest',
		location: 'Bresk',
		goalLocation: 'Bresk',
		//description:"<span class='underline'>Treaty of Zea</span>Explore the area near BRESK and find citizens for or against slavery",
		description:"Explore the area near BRESK and find citizens for or against slavery",
		boss: 'Nana Sinki'
	}

guildQuest = {
		name:'Guild Quest',
		location: 'NinHenge',
		goalLocation: 'NinHenge',
		description:"<span class='underline'>Start Here</span>This is a GUILD. Visit it to customize your character"
	}
	
	
	cityQuest = {
		name:'City Quest',
		location: 'Bresk',
		goalLocation: 'Bresk',
		description:'Visit CITIES to buy EQUIPMENT and speak to CITIZENS for quests'
	}

firstQuest = {
		name:'Green Bones',
		location: 'BasinWood',
		goalLocation: 'BasinWood',
		description:'Defeat Nana Sinki in BasinWood dungeon',
		boss: 'Nana Sinki'
		
	}
	
slaveQuest = {
		name:'Road to Freedom',
		location: 'Bresk',
		goalLocation: 'Bresk',
		description:'Convince Mer Paladine to sign the Treaty of Zea',
		boss: 'Nana Sinki'
		
	}	
	
	
	
	
bossDracotaur = {
		name:'Madness in the Deep',
		location: 'Nezerdad',
		goalLocation: 'Nezerdad',
		description:'Defeat the Mad Dracotaur in Nezerdad',
		boss: 'Dracotaur'
		
	}

currentQuest = guildQuest;





//
//var quests = [
//	sword01 = {
//		type:'sword',
//		name: 'Short Slice',
//		level: 1,
//		specialAbilities: ['Crushing Blow x2'],
//		location: ["City", "Village"],
//		damageType: ['slash'],
//		charges: 0,
//		cost: 0,
//		description: 'A well balanced blade made of sturdy Nindu Steel',
//		sound: 'sword',
//		price:0
//	},