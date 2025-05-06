import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const startRecording = async () => {
  const result = await audioRecorderPlayer.startRecorder();
  console.log('Recording at: ', result);
};

const stopRecording = async () => {
  const result = await audioRecorderPlayer.stopRecorder();
  console.log('Audio file path: ', result);
  return result; // Caminho do arquivo gravado
};
