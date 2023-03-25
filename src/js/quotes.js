const quotes = [
  {
    quote: '지나간 슬픔에 새 눈물을 낭비하지 마라.',
  },
  {
    quote: '거짓말은 그 자체가 죄일 뿐 아니라 정신을 더럽힌다.',
  },
  {
    quote: '그 사람을 알고 싶으면 그의 친구를 보라.',
  },
  {
    quote: '남에게, 또 남의 일에 대해서 말을 삼가라.',
  },
  {
    quote: '나태라는 어머니는 강도라는 아들과 굶주림이라는 딸을 가지고 있다.',
  },
  {
    quote: `방을 정리하라. 방은 당신의 머릿속의 혼란한 정도를 보여준다.`,
  },
  {
    quote: `당신에게 최고의 모습을 기대하는 사람만 만나라.`,
  },
  {
    quote: `규율은 자유와 같다.`,
  },
];

const quote = document.querySelector('#quote-line span');

// Math.ceil => 올림   Math.round => 반올림   Math.floor => 버림
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
