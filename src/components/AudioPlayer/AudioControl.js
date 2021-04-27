const AudioControl = ({ audioFile, ...props }) => {
  // if audio file is set, display controls
  return (
    <audio {...props}>
      <source src={audioFile} type="audio/ogg" />
      <source src={audioFile} type="audio/mpeg" />
      <source src={audioFile} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioControl;
