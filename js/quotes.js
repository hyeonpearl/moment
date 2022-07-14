const quotes = [
    {
        quote: 'You will face many defeats in life, but never let yourself be defeated.',
        author: 'Maya Angelou',
    },
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
    },
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller',
    },
    {
        quote: 'All you need in this life is ignorance and confidence; then success is sure.',
        author: 'Mark Twain',
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',
    },
    {
        quote: `Don't compare yourself with other people, compare yourself with who you were yesterday.`,
        author: 'Jordan Peterson',
    },
    {
        quote: `It's in responsibility that most people find the meaning that sustains them through life. It's not in happiness. It's not in impulsive pleasure.`,
        author: 'Jordan Peterson',
    },
    {
        quote: `'Happiness' is a pointless goal.`,
        author: 'jordan Peterson',
    },
    {
        quote: 'Only allow strength and ambition.',
        author: 'Andrew Tate',
    },
    {
        quote: `Don’t just think. Don’t just talk. Don’t just dream. None of that matters. The only thing that matters is that you actually do. So: DO.`,
        author: 'Jocko Willink',
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// Math.ceil => 올림   Math.round => 반올림   Math.floor => 버림
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;