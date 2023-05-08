// put the classes in an array
const audioClasses = ["clap", "hihat","kick","openhat","boom","ride","snare","tom","tink","accent"];

// loop through the classes
for (i = 0 ; i <= audioClasses.length ; i++ ){

    let  audioClass = document.querySelector(`.${audioClasses[i]}`);

  if (audioClass){
    // function to play the audio
    const playSound = () => {
      div.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
     console.log('Clap Div was clicked!');
    }
    //funtion to remove the audio and animation
    const removeTransition =() => {
    div.classList.remove('playing');
    console.log('transition ended');
    }
    const div = document.querySelector(`.${audioClasses[i]}`);
    const audio = document.querySelector(`audio[class="${audioClasses[i]}"]`);
    div.addEventListener('click', playSound);
    div.addEventListener('transitionend', removeTransition);
  }
}
