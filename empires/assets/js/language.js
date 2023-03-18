function textOutlook(sphere, ali) {

    var ot = "";

    if (sphere.toLowerCase() == "politics") {

        ali == 'Imperial' ? ot = 'Miltary Rule' : null;
        ali == 'Honorable' ? ot = 'Law and Order' : null;
        ali == 'Noble' ? ot = 'Diplomacy' : null;
        ali == 'Humane' ? ot = 'Transparency' : null;
        ali == 'Rebel' ? ot = 'Independence' : null;
        ali == 'Anarchic' ? ot = 'Anarchy' : null;
        ali == 'Bloodthirsty' ? ot = 'Assasination' : null;
        ali == 'Coldblooded' ? ot = 'Espionage' : null;
        ali == 'Neutral' ? ot = 'Neutral' : null;


    }

    if (sphere.toLowerCase() == "economy") {

        ali == 'Imperial' ? ot = 'Slavery' : null;
        ali == 'Honorable' ? ot = 'Taxes' : null;
        ali == 'Noble' ? ot = 'Social Welfare' : null;
        ali == 'Humane' ? ot = 'Charity' : null;
        ali == 'Rebel' ? ot = 'Abolish Slavery' : null;
        ali == 'Anarchic' ? ot = 'The Black Market' : null;
        ali == 'Bloodthirsty' ? ot = 'The Exploitation Economy' : null;
        ali == 'Coldblooded' ? ot = 'Pure Profit' : null;
        ali == 'Neutral' ? ot = 'Neutral' : null;



    }

    if (sphere.toLowerCase() == "religion") {

        // ali == 'Imperial' ? ot = 'Religious Rule' : null;
        //  ali == 'Honorable' ? ot = 'Crusade' : null;
        ali == 'Imperial' ? ot = 'Sanction the Crusades' : null;
        ali == 'Honorable' ? ot = 'Preaching Faith' : null;
        ali == 'Noble' ? ot = 'Curing the plague' : null;
        ali == 'Humane' ? ot = 'Caring for the sick' : null;
        ali == 'Rebel' ? ot = 'Religious freedom' : null;// Religious freedom
        ali == 'Anarchic' ? ot = 'Support the Assasina' : null;
        ali == 'Bloodthirsty' ? ot = 'Burning the sick' : null;
        ali == 'Coldblooded' ? ot = 'Heal the Rich' : null;
        ali == 'Neutral' ? ot = 'Neutral' : null;

    }



    return ot;
}


var attackResponse = [

"Traitorous Slyme!",
"Et tu, Brute?",
"You dare?!",
"I will make you suffer",
"Defend Yourself",
"I'll make this quick",
"I'll make sure you suffer",
"Traitor!",
"You think you can best me?!!",
"You'll pay for your treachery"




]

var slogan = {

	imperial: ["One rule. One order!"],
    honorable: ["They must surender to law and order"],
    noble: ["The welfare of all is at stake"],
    humane: ["They are misguided. Let us save them"],
    rebel: ["We will be free!"],
    anarchic: ["Let's cause some chaos "],
    bloodthirsty: ["We will crush them"],
    coldblooded: ["Reason and logic will prevail"],
    neutral: ['defeat']
}

var sloganFriendly = {

	imperial: ["One rule. One order!"],
    honorable: ["Law and Order will prevail"],
    noble: ["The welfare of all is at stake"],
    humane: ["We must help those who better our world"],
    rebel: ["We will be free!"],
    anarchic: ["Let's cause some chaos "],
    bloodthirsty: ["Blood is the way forward"],
    coldblooded: ["Reason and logic will prevail"],
    neutral: ['defeat']
}


function insultOutlook(sphere, ali) {

    var ot = "";
	var chanceText = new Chance(worldSeed);

    if (sphere.toLowerCase() == "politics") {

        ali == 'Imperial' ? ot = chance1.pick(['crushes the weak under its thumb', 'spares no one', 'keeps the corrupt in power', 'protects the wealthy and exploits the peasant']):null;//military rule
        ali == 'Honorable' ? ot = chance1.pick(['is authoritariang', 'restricts our freedoms', 'is too restrictive', 'provides little room for options']):null;//Law and Order
        ali == 'Noble' ? ot = chance1.pick(['is a toothless approach', 'puts words above actions', 'is just talk, talk, TALK', 'is the voice of fear']):null;//Diplomacy
        ali == 'Humane' ? ot = chance1.pick(['reveals our weaknesses to our enemies', 'is for the weak', 'tips our hand', 'is a foolish approach']):null;//transparency
        ali == 'Rebel' ? ot = chance1.pick(['leads to anarchy', 'breeds chaos', 'brings disorder to society', 'threatens the stability of teh Empyre']):null;//independence
        ali == 'Anarchic' ? ot = chance1.pick(['will ruin us all', 'leads to disorder and chaos', 'breaksdown communication', 'follows no rhyme or reason']):null;//Anarchy
        ali == 'Bloodthirsty' ? ot = chance1.pick(['is a path to blood and ruin', 'spares no one', 'is a bloodthirsty, destructive path', 'preys on the weak']):null;//assasination
        ali == 'Coldblooded' ? ot = chance1.pick(['is an unethical path', 'is a nother name for lies and deception', 'deceives and exploits its victims', 'is the cowards path']):null;//espionage
        ali == 'Neutral' ? ot = chance1.pick(['']):null;//neutral


    }

    if (sphere.toLowerCase() == "economy") {

        ali == 'Imperial' ? ot = chance1.pick(['exploits the helpless', 'is a dark mark on our world', 'is the act of an immoral society']):null;//pro slavery
        ali == 'Honorable' ? ot = chance1.pick(['bleed the average citizen dry', 'have increased to unpayable levels', ', taxes, taxes, and more taxes! It is neverending']):null;//taxes
        ali == 'Noble' ? ot = chance1.pick(['rewards the lazy and the weak', 'is a foolish dream', 'punishes those who work hard']):null;//social welfare
        ali == 'Humane' ? ot = chance1.pick(['is a waste of money', 'rewards lazy citizens with valuable gold', 'does nothing to truly help citizens']):null;//charity
        ali == 'Rebel' ? ot = chance1.pick(['will ruin our economy', 'attacks an institution of our nation', 'would have slaves as equal citizens', 'will lead to a rebellion of slaves']):null;//abolition
        ali == 'Anarchic' ? ot = chance1.pick(['spreads chaos', 'exploits others for profit', 'is a dangerous game to play', 'is a blight on our economy']):null;//black market
        ali == 'Bloodthirsty' ? ot = chance1.pick(['sells innocents and destroys lives', 'is a dark mark on our nation', 'is a vile blight and the dark side of profit', 'kidnaps, kills and sells without morals','profits from pleasure']):null; // exploitation economy
        ali == 'Coldblooded' ? ot = chance1.pick(['is greedy and cold', 'puts gold before citizens', 'followas a dagerous path to corruption', 'sees citizens as little more than cattle']):null;//pure profit
        ali == 'Neutral' ? ot = chance1.pick(['']):null;//



    }

    if (sphere.toLowerCase() == "religion") {

        // ali == 'Imperial' ? ot = 'Religious Rule' : null;
        //  ali == 'Honorable' ? ot = 'Crusade' : null;
        ali == 'Imperial' ? ot = chance1.pick(['breed intolerance and destrction', 'blindly spread the lies of our religious leaders', 'destroy the lives of our neighbours']):null;//crusades
        ali == 'Honorable' ? ot = chance1.pick(['is an outdated burden', 'puts one religion above all others', 'is a danger to other beliefs', 'is a danger to us all']):null;//'is an outdated burden' : null;//Preaching Faith
        ali == 'Noble' ? ot = chance1.pick(['is a lost cause', 'will never yield results', 'is a waste of time']):null;//find plague cure
        ali == 'Humane' ? ot = chance1.pick(['is a waste. Let them rot!', 'wastes good gold on those who will never need it', 'is a weakness']):null;//care for the sick
        ali == 'Rebel' ? ot = chance1.pick(['breeds confusion and immorality', 'will allow our enemies to overwhelm us', 'give legitimacy to heathens and blasphemers']):null;//religious freedom
        ali == 'Anarchic' ? ot = chance1.pick(['leads to blasphemy', 'is a corrupt and immoral path', 'is for anarchists and fools']):null;//freedom from religion
        ali == 'Bloodthirsty' ? ot = chance1.pick(['is a cruel answer to a widespread problem', 'is inhumane and immoral', 'shows a lack of all compassion and ethics']):null;//burn the sick
        ali == 'Coldblooded' ? ot = chance1.pick(['favors the rich over the poor', 'ignores our downtrodden citizens', 'is unethical']):null;//heal the rich
        ali == 'Neutral' ? ot = chance1.pick(['']):null;

    }



    return ot;
}

function praiseOutlook(sphere, ali) {

    var ot = "";
	var chanceText = new Chance(worldSeed);

    if (sphere.toLowerCase() == "politics") {

        ali == 'Imperial' ? ot = chance1.pick(['preserves order and strengthens the nation', 'will keep our enemies at bay', 'provides stability and safety for citizens']):null;//military rule
        ali == 'Honorable' ? ot = chance1.pick(['gives our nation stability', 'keeps everything in its proper place', 'provides structure that separates us from animals', 'is the best way to protect from chaos and danger']):null;//Law and Order
        ali == 'Noble' ? ot = chance1.pick(['is the path to understanding', 'puts reason and logic to good use', 'is an invaluable skill', 'understands negotiation is key']):null;//Diplomacy
        ali == 'Humane' ? ot = chance1.pick(['levels the playing field', 'brings equality to political action', 'is the ethical approach', 'is the humane approach']):null;//transparency
        ali == 'Rebel' ? ot = chance1.pick(['is the right of all ctizens', 'allows freedom of expression', 'creates an open, more equal society', 'empowers the people']):null;//independence
        ali == 'Anarchic' ? ot = chance1.pick(['is the first step on the road to freedom', 'total freedom is the highest goal', 'will free us all', 'is the sweetest path, dont you think?']):null;//Anarchy
        ali == 'Bloodthirsty' ? chance1.pick(['culls the weak and makes us strong', 'is a dark and powerful craft', 'is the path to power']):null;//Assasination
        ali == 'Coldblooded' ? ot = chance1.pick(['uses cold intellect, my friend, to achieve power', 'is the domain of the most intelligent', 'uses the mind to achieve domination', 'sees that the world is a game of chess to be won']):null;//Espionage
        ali == 'Neutral' ? ot = chance1.pick(['']):null;//neutral


    }

    if (sphere.toLowerCase() == "economy") {

        ali == 'Imperial' ? ot = chance1.pick(['is the economic center of our Empyre', 'keeps poeple in their place', 'separates animals from the worthy']):null;//pro slavery
        ali == 'Honorable' ? ot = chance1.pick(['help everyone and keep us safe and well fed', 'keep the roads running', 'are a neccessary evil that helps us all']):null;//taxes
        ali == 'Noble' ? ot = chance1.pick(['means we are all connected', 'puts the needs of many above the needs of a few', 'helps those who cannot help themselves']):null;//Social Welfare
        ali == 'Humane' ? ot = chance1.pick(['preaches kindness to others', 'is a moral imperitive', 'is the sign of a helthy nation']):null;//Charity
        ali == 'Rebel' ? ot = chance1.pick(['treats all citizens as equal ', 'will put an end to this dark chapter in our history', 'is the road to equality', 'is a moral imperative we must follow']):null; // abolition
        ali == 'Anarchic' ? ot = chance1.pick(['profits those who embrace risk', 'puts options in everyones hands', 'levels the playing field', 'revives the sagging economy']):null;//Black Market
        ali == 'Bloodthirsty' ? ot = chance1.pick(['provides all manner of peasures to those who seek them', 'brings pleasure to the people', 'provides pleasure, for a price']):null;//exploitation economy
        ali == 'Coldblooded' ? ot =  chance1.pick(['is the road to a glorious and rich future', 'places the strongest at the top', 'is the sign of a clever mind', 'provides power']):null;//pure profit
        ali == 'Neutral' ? ot = chance1.pick(['']):null;//neutral



    }

    if (sphere.toLowerCase() == "religion") {

        // ali == 'Imperial' ? ot = 'Religious Rule' : null;
        //  ali == 'Honorable' ? ot = 'Crusade' : null;
        ali == 'Imperial' ? ot = chance1.pick(['civilizes barbarity', 'keeps heathens at bay', 'will spread the word of truth among non believers']):null;//crusade
        ali == 'Honorable' ? ot = chance1.pick(['brings balance to our world', 'brings light and joy to people', 'inspires citizens and saves our souls']):null;//preaching faith
        ali == 'Noble' ? ot = chance1.pick(['brings solace and comfort to the ill', 'protects us all from the dangers of illness', 'brings hope to the ill and their families']):null;//find plague cure
        ali == 'Humane' ? ot = chance1.pick(['is a moral imperitive', 'is an act of kindness and compassion', 'creates a more compassionate and open society']):null;//care for the sick
        ali == 'Rebel' ? ot = chance1.pick(['understands the value of diversity', 'allows all to follow their own path', 'builds a stong and diverse nation']):null;//Religious freedom
        ali == 'Anarchic' ? ot = chance1.pick(['is freedom from tyranny', 'is everyones right', 'is freedom from oppression']):null;//Freedom from religion
        ali == 'Bloodthirsty' ? ot = chance1.pick(['is the only way to stop the spread of disease', 'protects us all', 'is a neccessary evil to protect society at large from disease']):null;//burn the sick
        ali == 'Coldblooded' ? ot = chance1.pick(['keeps our economy strong', 'protects the worthy', 'gives the best to those who work hardest']):null;//heal the rich
        ali == 'Neutral' ? ot = chance1.pick(['']):null;//neutral

    }



    return ot;
}

function gladTheyAreGone(sphere, ali) {
	
	var ot = "";
	var chanceText = new Chance(worldSeed);
	
	 ali == 'Imperial' ? ot = chance1.pick(['Those who defy the one order must be punished', 'All must service our great Imperial family', 'A strong Empyre is the sviour of us all', 'The goals of the Empyre must not be questioned']):null;//Military Rule
        ali == 'Honorable' ? ot = chance1.pick(['Those who breed chaos must be held accountable', 'They are a danger to a stable society', 'Rebels are for lawless lands', 'The laws of the nation are just, and must be upheld']):null;//Law and Order
        ali == 'Noble' ? ot = chance1.pick(['You have a Noble heart', 'We must not lose faith in our Noble goals', 'We will change the Empyre for the better', 'W must balance order with compassion']):null;//Diplomacy
        ali == 'Humane' ? ot = chance1.pick(['There is humanity in your actions', 'The misguided must be forgiven', 'Forgiveness is a sign of wisdom', 'Keep your heart open and journey forward']):null;
        ali == 'Rebel' ? ot = chance1.pick(['We will not live in chains', 'Sometimes the rules need to be broken', 'Not all laws are created justly', 'Im glad you took matters into your own hands']):null;
        ali == 'Anarchic' ? ot = chance1.pick(['They were a thorn in my side. ', 'Anarchy may yet rule the day! ', 'Isnt disorder wonderful? ', 'Empowering, isnt it, to sabotage something? ']):null;
        ali == 'Bloodthirsty' ? ot = chance1.pick(['Have you developed a taste for blood? ', 'Death is the only way to ensure victory ', 'I live for the fight, i hope their time was painful', 'The taste of power grows ']):null;
        ali == 'Coldblooded' ? ot = chance1.pick(['The weak do not deserve compassion', 'Our enemies are neither wek, nor stupid, and must be dealt with quickly', 'Keep your wits about you, defeating our enemies requires logic']):null;
        ali == 'Neutral' ? ot = chance1.pick(['']):null;
		 return ot;
}

function externalKillSetup(sphere, ali) {
	
	var ot = "";
	var chanceText = new Chance(worldSeed);
	
	 ali == 'Imperial' ? ot = chance1.pick(['Those who defy the one order must be punished', 'All must service our great Imperial family', 'A strong Empyre is the saviour of us all', 'The goals of the Empyre must not be questioned']):null;//Military Rule
        ali == 'Honorable' ? ot = chance1.pick(['Those who breed chaos must be held accountable', 'They are a danger to a stable society', 'Rebels are for lawless lands', 'The laws of the nation are just, and must be upheld']):null;//Law and Order
        ali == 'Noble' ? ot = chance1.pick(['You have a Noble heart', 'We must not lose faith in our Noble goals', 'We will change the Empyre for the better', 'W must balance order with compassion']):null;//Diplomacy
        ali == 'Humane' ? ot = chance1.pick(['There is humanity in your actions', 'The misguided must be forgiven', 'Forgiveness is a sign of wisdom', 'Keep your heart open and journey forward']):null;
        ali == 'Rebel' ? ot = chance1.pick(['We will not live in chains', 'Sometimes the rules need to be broken', 'Not all laws are created justly', 'Im glad you took matters into your own hands']):null;
        ali == 'Anarchic' ? ot = chance1.pick(['They are a thorn in my side. ', 'Anarchy may yet rule the day! ', 'Isnt disorder wonderful? ', 'Empowering, isnt it, to sabotage something? ']):null;
        ali == 'Bloodthirsty' ? ot = chance1.pick(['Have you developed a taste for blood? ', 'Death is the only way to ensure victory ', 'I live for the fight, i hope their time was painful', 'The taste of power grows ']):null;
        ali == 'Coldblooded' ? ot = chance1.pick(['The weak do not deserve compassion', 'Our enemies are neither weak, nor stupid, and must be dealt with quickly', 'Keep your wits about you, defeating our enemies requires logic']):null;
        ali == 'Neutral' ? ot = chance1.pick(['']):null;
		 return ot;
}

function targetIsObstacle(sphere, ali) {
	
	var ot = "";
	var chanceText = new Chance(worldSeed);
	
	 ali == 'Imperial' ? ot = chance1.pick(['must be punished', 'must yield before our great Imperial family', 'must not oppose the Empyre']):null;//Military Rule
        ali == 'Honorable' ? ot = chance1.pick(['must be held accountable', 'are a danger to a stable society']):null;//Law and Order
        ali == 'Noble' ? ot = chance1.pick(['must be shown the light','are not worthy']):null;//Diplomacy
        ali == 'Humane' ? ot = chance1.pick(['need guidance']):null;
        ali == 'Rebel' ? ot = chance1.pick(['must be stopped','must not hold us back']):null;
        ali == 'Anarchic' ? ot = chance1.pick(['are a thorn in my side. ', 'need a taste of chaos']):null;
        ali == 'Bloodthirsty' ? ot = chance1.pick(['will provide a taste of blood','deserve death']):null;
        ali == 'Coldblooded' ? ot = chance1.pick(['Tdo not deserve compassion', 'are neither weak, nor stupid, and must be dealt with quickly']):null;
        ali == 'Neutral' ? ot = chance1.pick(['']):null;
		 return ot;
}