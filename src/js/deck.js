let standard = [
	{
		id: "1",
		name: "Balance",
		suit: "Two of Spades",
		image: "standard/x_card1.jpg",
		description: "Change alignment instantly.",
		longDescription: "The character must change to a radically different alignment. If the character fails to act according to the new alignment, she gains a negative level."
	},
	{
		id: "2",
		name: "Comet",
		suit: "Two of Diamonds",
		image: "standard/x_card2.jpg",
		description: "Defeat the next monster you meet to gain one level.",
		longDescription: "The character must single-handedly defeat the next hostile monster or monsters encountered, or the benefit is lost. If successful, the character gains enough XP to attain the next experience level."
	},
	{
		id: "3",
		name: "Donjon",
		suit: "Ace of Spades",
		image: "standard/x_card3.jpg",
		description: "You are imprisoned.",
		longDescription: "This card signifies imprisonment- either by the imprisonment spell or by some powerful being. All gear and spells are stripped from the victim in any case. Draw no more cards."
	},
	{
		id: "4",
		name: "Euryale",
		suit: "Queen of Spades",
		image: "standard/x_card4.jpg",
		description: "-1 penalty on all saving throws henceforth.",
		longDescription: "The medusalike visage of this card brings a curse that only the fates card or a deity can remove. The -1 penalty on all saving throws is otherwise permanent."
	},
	{
		id: "5",
		name: "The Fates",
		suit: "Ace of Hearts",
		image: "standard/x_card5.jpg",
		description: "Avoid any situation you choose . . . once.",
		longDescription: "This card enables the character to avoid even an instantaneous occurrence if so desired, for the fabric of reality is unraveled and respun. Note that it does not enable something to happen. It can only stop something from happening or reverse a past occurrence. The reversal is only for the character who drew the card; other party members may have to endure the situation."
	},
	{
		id: "6",
		name: "Flames",
		suit: "Queen of Clubs",
		image: "standard/x_card6.jpg",
		description: "Enmity between you and an outsider.",
		longDescription: "Hot anger, jealousy, and envy are but a few of the possible motivational forces for the enmity. The enmity of the outsider can\'t be ended until one of the parties has been slain. Determine the outsider randomly, and assume that it attacks the character (or plagues her life in some way) within 1d20 days."
	},
	{
		id: "7",
		name: "Fool",
		suit: "Joker (black)",
		image: "standard/x_card7.jpg",
		description: "Lose 10,000 experience points and you must draw again.",
		longDescription: "The payment of XP and the redraw are mandatory. This card is always discarded when drawn, unlike all others except the jester.",
		removeCard: true
	},
	{
		id: "8",
		name: "Gem",
		suit: "Two of Hearts",
		image: "standard/x_card8.jpg",
		description: "Gain your choice of twenty-five pieces of jewelry or fifty gems.",
		longDescription: "This card indicates wealth. The jewelry is all gold set with gems, each piece worth 2,000 gp, the gems 1,000 gp value each."
	},
	{
		id: "9",
		name: "Idiot",
		suit: "Two of Clubs",
		image: "standard/x_card9.jpg",
		description: "Lose Intelligence (permanent drain). You may draw again.",
		longDescription: "This card causes the drain of 1d4+1 points of Intelligence immediately. The additional draw is optional."
	},
	{
		id: "10",
		name: "Jester",
		suit: "Joker (red)",
		image: "standard/x_card10.jpg",
		description: "Gain 10,000 XP or two more draws from the deck.",
		longDescription: "This card is always discarded when drawn, unlike all others except the fool. The redraws are optional.",
		removeCard: true
	},
	{
		id: "11",
		name: "Key",
		suit: "Queen of Hearts",
		image: "standard/x_card11.jpg",
		description: "Gain a major magic weapon.",
		longDescription: "The magic weapon granted must be one usable by the character. It suddenly appears out of nowhere in the character\'s hand."
	},
	{
		id: "12",
		name: "Knight",
		suit: "Jack of Hearts",
		image: "standard/x_card12.jpg",
		description: "Gain the service of a 4th-level fighter.",
		longDescription: "The fighter appears out of nowhere and serves loyally until death. He or she is of the same race (or kind) and gender as the character."
	},
	{
		id: "13",
		name: "Moon",
		suit: "Queen of Diamonds",
		image: "standard/x_card13.jpg",
		description: "You are granted 1d4 wishes.",
		longDescription: "This card sometimes bears the image of a moonstone gem with the appropriate number of wishes shown as gleams therein; sometimes it depicts a moon with its phase indicating the number of wishes (full = four; gibbous = three; half = two; quarter = one). These wishes are the same as those granted by the 9th-level wizard spell and must be used within a number of minutes equal to the number received."
	},
	{
		id: "14",
		name: "Rogue",
		suit: "Jack of Spades",
		image: "standard/x_card14.jpg",
		description: "One of your friends turns against you.",
		longDescription: "When this card is drawn, one of the character\'s NPC friends (preferably a cohort) is totally alienated and forever after hostile. If the character has no cohorts, the enmity of some powerful personage (or community, or religious order) can be substituted. The hatred is secret until the time is ripe for it to be revealed with devastating effect."
	},
	{
		id: "15",
		name: "Ruin",
		suit: "King of Spades",
		image: "standard/x_card15.jpg",
		description: "Immediately lose all wealth and real property.",
		longDescription: "As implied by its name, when this card is drawn, all nonmagical possessions of the drawer are lost."
	},
	{
		id: "16",
		name: "Skull",
		suit: "Jack of Clubs",
		image: "standard/x_card16.jpg",
		description: "Defeat dread wraith or be forever destroyed.",
		longDescription: "A dread wraith appears. Treat this creature as an unturnable undead. The character must fight it alone-if others help, they get dread wraiths to fight as well. If the character is slain, she is slain forever and cannot be revived, even with a wish or a miracle."
	},
	{
		id: "17",
		name: "Star",
		suit: "Jack of Diamonds",
		image: "standard/x_card17.jpg",
		description: "Immediately gain a +2 inherent bonus to one ability score.",
		longDescription: "The 2 points are added to any ability the character chooses. They cannot be divided among two abilities."
	},
	{
		id: "18",
		name: "Sun",
		suit: "King of Diamonds",
		image: "standard/x_card18.jpg",
		description: "Gain beneficial medium wondrous item and 50,000 XP.",
		longDescription: "Roll for a medium wondrous item until a useful item is indicated."
	},
	{
		id: "19",
		name: "Talons",
		suit: "Ace of Clubs",
		image: "standard/x_card19.jpg",
		description: "All magic items you possess disappear permanently.",
		longDescription: "When this card is drawn, every magic item owned or possessed by the character is instantly and irrevocably gone."
	},
	{
		id: "20",
		name: "Throne",
		suit: "King of Hearts",
		image: "standard/x_card20.jpg",
		description: "Gain a +6 bonus on Diplomacy checks plus a small keep.",
		longDescription: "The character becomes a true leader in people\'s eyes. The castle gained appears in any open area she wishes (but the decision where to place it must be made within 1 hour)."
	},
	{
		id: "21",
		name: "Vizier",
		suit: "Ace of Diamonds",
		image: "standard/x_card21.jpg",
		description: "Know the answer to your next dilemma.",
		longDescription: "This card empowers the character drawing it with the one-time ability to call upon a source of wisdom to solve any single problem or answer fully any question upon her request. The query or request must be made within one year. Whether the information gained can be successfully acted upon is another question entirely."
	},
	{
		id: "22",
		name: "The Void",
		suit: "King of Clubs",
		image: "standard/x_card22.jpg",
		description: "Body functions, but soul is trapped elsewhere.",
		longDescription: "This black card spells instant disaster. The character\'s body continues to function, as though comatose, but her psyche is trapped in a prison somewhere-in an object on a far plane or planet, possibly in the possession of an outsider. A wish or a miracle does not bring the character back, instead merely revealing the plane of entrapment. Draw no more cards."
	}
];
