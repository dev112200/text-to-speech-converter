let textSpeech = new SpeechSynthesisUtterance();
let voices = [];

// voices for project
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    textSpeech.voice = voices[0];
    voices.forEach((voice,i)=>{
        voiceSelect.options[i]=new Option(voice.name, i);
    })
}
voiceSelect.addEventListener("change",()=>{
    textSpeech.voice = voices[voiceSelect.value];
})

// for count the words in textarea
let textAreavalue = document.querySelector("textarea");
textAreavalue.addEventListener("input", (e)=>{
document.querySelector("p").innerHTML=e.target.value.split(' ').length;
});

// to speech the words
document.querySelector("button").addEventListener("click",()=>{
    textSpeech.text=textAreavalue.value;
    window.speechSynthesis.speak(textSpeech);
})