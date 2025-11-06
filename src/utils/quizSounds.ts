import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let correctSound: Sound | null = null;
let incorrectSound: Sound | null = null;
let soundsInitialized = false;

const initializeSounds = () => {
  if (soundsInitialized) {
    return;
  }

  try {
    if (!correctSound) {
      correctSound = new Sound(
        require('../assets/music/correct.mp3'),
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.log('Failed to load correct sound', error);
          } else {
            if (!incorrectSound) {
              incorrectSound = new Sound(
                require('../assets/music/error.mp3'),
                Sound.MAIN_BUNDLE,
                (err) => {
                  if (err) {
                    console.log('Failed to load incorrect sound', err);
                  } else {
                    soundsInitialized = true;
                  }
                },
              );
            } else {
              soundsInitialized = true;
            }
          }
        },
      );
    } else if (!incorrectSound) {
      incorrectSound = new Sound(
        require('../assets/music/error.mp3'),
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.log('Failed to load incorrect sound', error);
          } else {
            soundsInitialized = true;
          }
        },
      );
    } else {
      soundsInitialized = true;
    }
  } catch (error) {
    console.log('Error initializing sounds', error);
  }
};

export const playCorrectSound = () => {
  try {
    initializeSounds();
    if (correctSound && soundsInitialized) {
      correctSound.stop();
      correctSound.setCurrentTime(0);
      correctSound.play((success) => {
        if (!success) {
          console.log('Failed to play correct sound');
        }
      });
    }
  } catch (error) {
    console.log('Error playing correct sound', error);
  }
};

export const playIncorrectSound = () => {
  try {
    initializeSounds();
    if (incorrectSound && soundsInitialized) {
      incorrectSound.stop();
      incorrectSound.setCurrentTime(0);
      incorrectSound.play((success) => {
        if (!success) {
          console.log('Failed to play incorrect sound');
        }
      });
    }
  } catch (error) {
    console.log('Error playing incorrect sound', error);
  }
};
