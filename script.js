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
    text: "I m Hungry"
},
{
    image: 'https://source.unsplash.com/random/',
    text: "I m Hungry"
},
{
    image: 'https://source.unsplash.com/random/',
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

    main.appendChild(box);
}