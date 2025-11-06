export interface QuizResultText {
  title: string;
  description: string;
}

export const QUIZ_RESULT_TEXTS: Record<
  'bronze' | 'silver' | 'gold',
  QuizResultText
> = {
  bronze: {
    title: 'Well done!',
    description:
      "You've started your journey through the Hippodrome of knowledge. Every wheel turns with your progress - keep going!",
  },
  silver: {
    title: 'Impressive!',
    description:
      "You've shown true skill and insight. The silver cup is yours - but greater mastery still awaits.",
  },
  gold: {
    title: 'Outstanding!',
    description:
      "You've raced through every challenge and claimed the golden cup of wisdom. Knowledge and glory are now yours!",
  },
};
