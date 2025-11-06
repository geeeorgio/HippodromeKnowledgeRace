import { PLACES } from './images';

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface ChariotQuizQuestion {
  id: string;
  era: string;
  question: string;
  options: QuizOption[];
  image?: number;
}

export const CHARIOT_QUIZ_QUESTIONS: ChariotQuizQuestion[] = [
  {
    id: 'theFirstWheelsWarQuestion',
    era: 'Mesopotamia',
    question: 'What was the earliest known use of the wheel in Mesopotamia?',
    options: [
      { text: 'Transportation for goods', isCorrect: false },
      { text: 'Pottery making', isCorrect: true },
      { text: 'Building irrigation systems', isCorrect: false },
    ],
    image: PLACES.TheFirstWheelsWar,
  },
  {
    id: 'chariotsOfTheSunQuestion',
    era: 'Egypt',
    question: 'What made Egyptian chariots stand out from earlier designs?',
    options: [
      { text: 'They were made of heavy stone', isCorrect: false },
      { text: 'They were light and fast', isCorrect: true },
      { text: 'They were pulled by camels', isCorrect: false },
    ],
    image: PLACES.ChariotsSun,
  },
  {
    id: 'mastersOfIronAndMotionQuestion',
    era: 'Hittite Empire',
    question: 'Why were Hittite chariots so effective in battle?',
    options: [
      { text: 'They could carry three warriors', isCorrect: true },
      { text: 'They used four horses', isCorrect: false },
      { text: 'They were made of gold', isCorrect: false },
    ],
    image: PLACES.MastersIronMotion,
  },
  {
    id: 'wheelsOfGloryQuestion',
    era: 'Ancient Greece',
    question:
      'Where did chariot racing become a major public event in Ancient Greece?',
    options: [
      { text: 'In the Olympic Games', isCorrect: true },
      { text: 'In temple courtyards', isCorrect: false },
      { text: 'In military training camps', isCorrect: false },
    ],
    image: PLACES.WheelsGlory,
  },
  {
    id: 'theRoarOfTheCircusMaximusQuestion',
    era: 'Rome',
    question: 'What was the name of Rome’s largest chariot racing arena?',
    options: [
      { text: 'The Roman Forum', isCorrect: false },
      { text: 'The Colosseum', isCorrect: false },
      { text: 'The Circus Maximus', isCorrect: true },
    ],
    image: PLACES.TheRoarCircusMaximus,
  },
  {
    id: 'divineJourneyOfArjunaQuestion',
    era: 'India',
    question: 'In the Bhagavad Gita, what does Arjuna’s chariot symbolize?',
    options: [
      { text: 'The human soul and self-control', isCorrect: true },
      { text: 'A weapon of destruction', isCorrect: false },
      { text: 'A royal parade vehicle', isCorrect: false },
    ],
    image: PLACES.DivineJourney,
  },
  {
    id: 'theChariotsOfZhouQuestion',
    era: 'China',
    question: 'During the Zhou dynasty, what did the chariot represent?',
    options: [
      { text: 'A symbol of harmony and order', isCorrect: true },
      { text: 'A tool for farming', isCorrect: false },
      { text: 'A method of sea transport', isCorrect: false },
    ],
    image: PLACES.TheChariotsZhou,
  },
  {
    id: 'ridersOfTheSteppeQuestion',
    era: 'Scythia',
    question: 'What was unique about Scythian use of chariots?',
    options: [
      { text: 'They raced them in enclosed arenas', isCorrect: false },
      { text: 'They adapted them for nomadic life', isCorrect: true },
      { text: 'They used them only for rituals', isCorrect: false },
    ],
    image: PLACES.RidersSteppe,
  },
  {
    id: 'theCelticSpiritQuestion',
    era: 'Celtic Lands',
    question: 'How did Celtic warriors typically use their chariots in battle?',
    options: [
      { text: 'They fought from them continuously', isCorrect: false },
      { text: 'They jumped off to fight on foot', isCorrect: true },
      { text: 'They stayed behind as reserves', isCorrect: false },
    ],
    image: PLACES.TheCelticSpirit,
  },
  {
    id: 'chariotsOfTheGreatKingsQuestion',
    era: 'Persia',
    question: 'What feature made Persian war chariots especially fearsome?',
    options: [
      { text: 'Scythes attached to their wheels', isCorrect: true },
      { text: 'Gold-plated shields', isCorrect: false },
      { text: 'Double-deck platforms', isCorrect: false },
    ],
    image: PLACES.ChariotsGreatKings,
  },
  {
    id: 'theLastRaceQuestion',
    era: 'Late Roman Empire',
    question:
      'What did chariot races symbolize in the final days of the Roman Empire?',
    options: [
      { text: 'A fading echo of past glory', isCorrect: true },
      { text: 'The rise of new military power', isCorrect: false },
      { text: 'Religious renewal', isCorrect: false },
    ],
    image: PLACES.TheLastRace,
  },
  {
    id: 'fromChariotToCarriageQuestion',
    era: 'Medieval Europe',
    question: 'How did the chariot evolve in Medieval Europe?',
    options: [
      { text: 'It became a royal carriage', isCorrect: true },
      { text: 'It turned into a farming plow', isCorrect: false },
      { text: 'It disappeared completely', isCorrect: false },
    ],
    image: PLACES.FromChariotCarriage,
  },
];
