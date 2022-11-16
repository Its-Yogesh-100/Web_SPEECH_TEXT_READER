const main=document.querySelector('main');
const voiceSelect=document.getElementById('voices');
const textarea=document.getElementById('text');
const readBtn=document.getElementById('read');
const toogleBtn=document.getElementById('toggle');
const closeBtn=document.getElementById('close');


const data={
{
    image: ''
    text: "I m Hungry"
},
{
    image: ''
    text: "I m Hungry"
},
{
    image: ''
    text: "I m Hungry"
},
{
    image: ''
    text: "I m Hungry"
},
{
    image: ''
    text: "I m Hungry"
},

{
    image: ''
    text: "I m Hungry"
},
{
    image: ''
    text: "I m Hungry"
},

};

data.forEach(createBox) ;

// Create speech boxes

function createBox(item){
    console.log("hello");
}