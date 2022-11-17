const main=document.querySelector('main');
const voiceSelect=document.getElementById('voices');
const textarea=document.getElementById('text');
const readBtn=document.getElementById('read');
const toogleBtn=document.getElementById('toggle');
const closeBtn=document.getElementById('close');


const data=[
{
    image: 'https://source.unsplash.com/random/?backgrounds/',
    text: "I m Hungry"
},
{
    image: 'https://source.unsplash.com/random/200x200/?nature/',
    text: "I aṁ Happy"
},
{
    image: 'https://source.unsplash.com/random/',
    text: "What is your name?"
},
{
    image: 'https://source.unsplash.com/random/',
    text: "I am a speech to text Reader"
},
{
    image: '',
    text: "GOOD MORNING"
},

{
    image: '',
    text: "I am your Friend"
},
{
    image: '',
    text: "Stay Motivated"
},

{
    image: '',
    text: "I m Hungry"
},

{
    image: '',
    text: "I m Hungry"
},

{
    image: '',
    text: "I m Hungry"
},
{
    image: '',
    text: "I m Hungry"
},

{
    image: '',
    text: "I m Hungry"
},

];

data.forEach(createBox) ;

// Create speech boxes

function createBox(item){
    
    // create box in ui

    const box =document.createElement('div');

    const {image,text}=item;

    box.classList.add('box');

    box.innerHTML=`
    <img src= "${image}" alt="${text}"/>
    <p class="info"> ${text}</p> `;

    // todo speak event

    box.addEventListener('click',() =>{
        setTextMessage(text);
        speakText();

        //Add active effect

        box.classList.add('active');

        setTimeout(() => box.classList.remove('active'),800);
    });

    main.appendChild(box);
}


//INIT SPEECH SYSTEM

const message=new SpeechSynthesisUtterance();

// array to store voices

let voices=[];

function getVoices() {
    voices=speechSynthesis.getVoices();

    voices.forEach(voice =>
    {
        const option=document.createElement('option');

        option.value=voice.name;
        option.innerText=`${voice.name} ${voice.lang}`;

        voiceSelect.appendChild(option);
    });
    
}

//set text message

function setTextMessage(text)
{
    message.text=text;
}

//Speak text
function speakText(){
speechSynthesis.speak(message);
}

// set voice

function setVoice(e){
    message.voice=voices.find(voice => voice.name===e.target.value);
}
// addding event listener voice changed

speechSynthesis.addEventListener('voiceschanged',getVoices);

// Adding the toggle functionality

toogleBtn.addEventListener('click',() =>
document.getElementById('text-box').classList.toggle('show'));


// close 

closeBtn.addEventListener('click',() =>
document.getElementById('text-box').classList.remove('show'));

// change voice
voiceSelect.addEventListener('change',setVoice);

//READ TEXT BOX BUTTON

readBtn.addEventListener('click',() =>{
    setTextMessage(textarea.value);
    speakText();

});
getVoices();
