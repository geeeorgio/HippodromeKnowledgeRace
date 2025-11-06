import { PLACES } from './images';

export interface HistoryPlace {
  id: string;
  title: string;
  location: string;
  summary: string;
  image?: number;
}

export const HISTORY_PLACES: HistoryPlace[] = [
  {
    id: 'theFirstWheelsWar',
    title: 'The First Wheels of War',
    location: 'Mesopotamia',
    summary:
      'Long before the word “civilization” existed, the Sumerians built the first great cities on the fertile plains between the Tigris and Euphrates. Their discoveries shaped the world — writing, irrigation, and perhaps most dramatically, the wheel.\n\nWhat began as a simple invention for pottery soon found a new purpose on the battlefield. Heavy wooden carts pulled by wild asses became mobile platforms for archers, changing how wars were fought. These primitive chariots were slow but terrifying — rolling symbols of human ingenuity and control over motion.\n\nIn Mesopotamia, the wheel became more than a tool; it became a weapon of empire. Every rotation carried the echo of humanity’s first mechanical triumph — the moment when invention met ambition.',
    image: PLACES.TheFirstWheelsWar,
  },
  {
    id: 'chariotsOfTheSun',
    title: 'Chariots of the Sun',
    location: 'Egypt',
    summary:
      'Along the banks of the Nile, sunlight gleamed off golden wheels. Egyptian chariots were marvels of lightness and speed, crafted from wood, leather, and bronze. The pharaoh’s chariot was both a weapon and a throne — a moving symbol of divine right.\n\nWhen horses arrived from Asia, Egypt mastered the art of harnessing them for precision and grace. Warriors stood steady on platforms barely wide enough for two men, commanding motion with balance and elegance.\n\nIn battle, they struck swiftly and vanished like the wind. In ceremony, they carried gods through processions. Every race, every parade, every conquest reminded the people that the chariot was the chosen vehicle of the sun.',
    image: PLACES.ChariotsSun,
  },
  {
    id: 'mastersOfIronAndMotion',
    title: 'Masters of Iron and Motion',
    location: 'The Hittites',
    summary:
      'In the highlands of Anatolia, the Hittites forged not only empires but also the strongest chariots of their time. Built from iron and reinforced with leather, their designs could carry three warriors — driver, archer, and shield-bearer — with unmatched stability.\n\nTheir armies rolled across the ancient world, conquering cities and rewriting the art of war. Against the Egyptians at Kadesh, thousands of Hittite chariots thundered over the desert plain — a display of raw power that left even pharaohs cautious.\n\nThe Hittite chariot became a model for centuries to come: durable, disciplined, and built to dominate. It was not just a machine of war but a testament to how craftsmanship could command history.',
    image: PLACES.MastersIronMotion,
  },
  {
    id: 'wheelsOfGlory',
    title: 'Wheels of Glory',
    location: 'Ancient Greece',
    summary:
      'In Greece, the chariot left the battlefield and entered the arena. What once symbolized conquest became a measure of honor. The Olympic Games celebrated charioteers who risked their lives for speed, pride, and the applause of gods and mortals alike.\n\nThe races were dangerous — one wrong move could end in splintered wood and flying dust. Yet to win meant eternal fame, songs, and statues. The Greeks admired mastery over chaos, and nowhere was that more visible than in the controlled fury of a chariot in full motion.\n\nFor Greece, the chariot embodied arete — excellence through discipline. It was a reminder that glory demands balance: between courage and control, between mortal ambition and divine will.',
    image: PLACES.WheelsGlory,
  },
  {
    id: 'theRoarOfTheCircusMaximus',
    title: 'The Roar of the Circus Maximus',
    location: 'Rome',
    summary:
      'No empire celebrated spectacle like Rome. The Circus Maximus, vast and echoing, held more than 150,000 roaring voices. Charioteers were stars — heroes of the crowd, gamblers’ dreams, and emperors’ favorites.\n\nFour teams — Reds, Blues, Greens, and Whites — divided the city with rivalries fiercer than war. Crashes were common, and survival was never certain. Yet victory brought fortune and immortality, carved in mosaics and sung in the streets.\n\nIn the Circus, the chariot was no longer a weapon but a theater of willpower. Rome turned competition into culture, speed into faith, and the race into eternity.',
    image: PLACES.TheRoarCircusMaximus,
  },
  {
    id: 'divineJourneyOfArjuna',
    title: 'Divine Journey of Arjuna',
    location: 'India',
    summary:
      'In India’s sacred text, the Bhagavad Gita, the chariot is more than a vehicle — it is a spiritual symbol. On the battlefield of Kurukshetra, Arjuna hesitates before war, and Krishna, his divine guide, speaks from the driver’s seat.\n\nHere, the chariot becomes the soul, and its horses — the senses. The reins are discipline, the driver is reason, and the battlefield is life itself. Through this image, the Gita teaches balance between duty and inner peace.\n\nFor millions, Arjuna’s chariot is not of bronze or wood but of wisdom. It carries the eternal message that mastery of the self is the greatest victory.',
    image: PLACES.DivineJourney,
  },
  {
    id: 'theChariotsOfZhou',
    title: 'The Chariots of Zhou',
    location: 'China',
    summary:
      'Across the plains of early China, during the Zhou dynasty, the chariot became a sign of order and prestige. Rulers stood tall as banners waved, and the sound of hooves marked the rhythm of power.\n\nEach chariot was part ceremony, part weapon — designed with symmetry and adorned with ornaments that reflected the harmony of heaven and earth. They led armies, parades, and even philosophical metaphors in texts like the Book of Songs.\n\nThe Zhou chariot was elegance in motion — not just a tool of war, but a moving reflection of Confucian balance: strength guided by wisdom.',
    image: PLACES.TheChariotsZhou,
  },
  {
    id: 'ridersOfTheSteppe',
    title: 'Riders of the Steppe',
    location: 'Scythia',
    summary:
      'In the endless steppes north of the Black Sea, the Scythians lived in motion. Their chariots were light, fast, and perfectly adapted to a nomadic life. They carried warriors, families, and entire cultures across grasslands without borders.\n\nTo outsiders, they seemed wild — hair flying, arrows whistling from moving carts — but their freedom was deliberate. They fought not for empire, but for survival and independence.\n\nEach wheel left no trace, only dust and legend. The Scythian chariot remains a symbol of life unbound — the spirit that races with the wind.',
    image: PLACES.RidersSteppe,
  },
  {
    id: 'theCelticSpirit',
    title: 'The Celtic Spirit',
    location: 'Europe’s Western Edge',
    summary:
      'In misty lands of ancient Britain and Gaul, Celtic warriors thundered into battle on chariots painted with bright colors and bronze patterns. Their cries filled the air before the first clash of blades.\n\nUnlike the organized ranks of Rome, the Celts fought with passion and pride. Their chariots darted across fields, carrying heroes who leapt from them to fight and returned in triumph.\n\nTo the Celts, the chariot was more than transport — it was a living companion, part of ritual, myth, and identity. Each wheel turned to the rhythm of courage and chaos.',
    image: PLACES.TheCelticSpirit,
  },
  {
    id: 'chariotsOfTheGreatKings',
    title: 'Chariots of the Great Kings',
    location: 'Persia',
    summary:
      'The Persians perfected the art of grandeur. Their royal chariots gleamed with gold, pulled by teams of white horses and guarded by archers. When the Great King appeared, dust settled and silence followed.\n\nIn battle, Persian chariots struck fear, cutting through enemy ranks with scythes fixed to their wheels. But their true power was psychological — a display of imperial might that stretched from the Indus to the Aegean.\n\nThe Persian chariot embodied empire itself: disciplined, vast, and unstoppable — a throne that moved with the wind.',
    image: PLACES.ChariotsGreatKings,
  },
  {
    id: 'theLastRace',
    title: 'The Last Race',
    location: 'Late Roman Empire',
    summary:
      'When Rome began to crumble, the races did not stop. The empire’s borders shrank, its language faded, yet in the Circus Maximus the wheels kept turning.\n\nThe last charioteers raced through ruins of glory, their cheers echoing across broken marble. For a fleeting moment, the empire still felt alive — the pulse of its people bound to motion.\n\nThe final laps of Rome were not of conquest but of memory. The dust that once rose to applause now settled in silence, and the wheel of history turned once again.',
    image: PLACES.TheLastRace,
  },
  {
    id: 'fromChariotToCarriage',
    title: 'From Chariot to Carriage',
    location: 'Medieval Europe',
    summary:
      'Centuries passed, and the world rediscovered the wheel in gentler forms. The chariot became the carriage — slower, heavier, yet filled with grace. Nobles rode not to battle but to court, their wheels creaking through cobbled streets.\n\nWhere once stood warriors, now sat scholars, merchants, and queens. The roar of races faded, replaced by conversation and ceremony. Yet every spoke still held a memory of motion — a quiet echo of thunder long gone.\n\nFrom war to art, from power to prestige, the chariot’s spirit lived on. It never truly stopped — it simply learned to travel differently.',
    image: PLACES.FromChariotCarriage,
  },
];
