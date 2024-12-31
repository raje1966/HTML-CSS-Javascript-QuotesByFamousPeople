const quotes = [
    {
        name: 'Stephan King',
        quote: 'get busy living or get busy dying.'
    },
    {
        name: 'John F. Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly.'
    },
    {
        name: 'Abraham Lincoln',
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'
    }
]
const quoteBtnEl = document.querySelector('#quoteBtn');
const quoteEl = document.querySelector('#quote');
const quoteAuthorEl = document.querySelector('#quoteAuthor');

quoteBtnEl.addEventListener('click', displayQuote);

function displayQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quoteAuthorEl.innerHTML = quotes[random].name;
    console.log(quoteAuthorEl.innerHTML)
    quoteEl.innerHTML = quotes[random].quote; 
    console.log(quoteEl.innerHTML)
}