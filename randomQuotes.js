const rand = {
  beginning: [
    ' Life is a struggle',
    'life is destined',
    'life is an experiment',
    'Life is simple',

  ],
  middle: [

    '  make it beautiful',
    '  make it simple and cheerful',
    '  If you want the rainbow',
    '  you cannot choose what happens ',
  
  ],
  end: [
    ' you got to put up the rain',
    '  no matter who you are ',
    '  you will not be successsful',
    ' you chose to make it happy. ',

  ],
};
const randomNumber = (arr) => {
  const result = [];

  result.push(arr[Math.floor(Math.random() * arr.length)]);

  return result;
};
function generateCustomQuote() {
  const quantityInput = document.getElementById('quantityInput');
  quantityInput.style.display = 'block';

  
  deleteChild();
  const quotes = randomNumber(rand.beginning) + randomNumber(rand.middle) + randomNumber(rand.end);
  const p = document.createElement('p');
  const text = document.createTextNode(quotes);
  p.appendChild(text);
  document.getElementById('quoteDisplay').appendChild(p);
}