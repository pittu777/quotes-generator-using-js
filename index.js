
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `- Winston Churchill`
},{
    quote:`"Believe you can and you're halfway there."`,
    person: `- Theodore Roosevelt`
},{
    quote:`"The only way to do great work is to love what you do."`,
    person: `- Steve Jobs`
},{
    quote:`"It does not matter how slowly you go as long as you do not stop."`,
    person: `- Confucius`
},{
    quote:`"Quality is not an act, it is a habit."`,
    person: `- Aristotle`
},{
    quote:`"The best way to predict your future is to create it."`,
    person: `- Aristotle`
},{
    quote:`"Don't watch the clock; do what it does. Keep going."`,
    person: `- Sam Levenson`
},{
    quote:`"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `- Albert Einstein`
},{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `- Nelson Mandela`
},
];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()* quotes.length);

    quote.innerHTML=quotes[random].quote;
    person.innerHTML=quotes[random].person;
});

