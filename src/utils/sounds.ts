import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let bg: Sound | null = null;
let correct: Sound | null = null;
let incorrect: Sound | null = null;
let inited = false;

export const loadSounds = () => {
  if (inited) return;
  inited = true;

  correct = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) console.log('correct load err', e);
    else correct?.setVolume(0.12);
  });

  incorrect = new Sound('error.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) console.log('incorrect load err', e);
    else incorrect?.setVolume(0.07);
  });

  bg = new Sound('historical.mp3', Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('bg load err', e);
      return;
    }
    bg?.setNumberOfLoops(-1);
    bg?.setVolume(0.07);
  });
};

export const playBackgroundMusic = () => {
  if (!bg) {
    console.log('bg not ready yet');
    return;
  }

  bg.stop(() => {
    bg?.play((success) => {
      if (!success) console.log('bg playback failed');
    });
  });
};

export const stopBackgroundMusic = () => {
  bg?.stop();
};

export const playCorrectSound = () => {
  if (!correct) {
    console.log('correct not ready');
    return;
  }

  correct.stop(() => {
    correct?.setCurrentTime(0);
    correct?.play((s) => !s && console.log('correct play failed'));
  });
};

export const playIncorrectSound = () => {
  if (!incorrect) {
    console.log('incorrect not ready');
    return;
  }

  incorrect.stop(() => {
    incorrect?.setCurrentTime(0);
    incorrect?.play((s) => !s && console.log('incorrect play failed'));
  });
};

export const releaseAll = () => {
  bg?.stop();
  correct?.release();
  incorrect?.release();
  bg?.release();
  correct = null;
  incorrect = null;
  bg = null;
  inited = false;
};
