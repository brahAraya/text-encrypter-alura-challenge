const resultField = document.getElementById('result-text');
const cardHide = { 'not-found': 'result', 'result': 'not-found' };
const encryptionKeys = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

function makeOperation(operation) {
  const input = document.getElementById('text');
  if (input.value.trim() === '') {
    showCard('not-found');
    input.value = '';
  }
  showCard('result');
  resultField.textContent = operation(input.value);
}

function encryptText(text) {
  const regex = new RegExp(`[${Object.keys(encryptionKeys).join('')}]`, 'g');
  return text.replace(regex, (key) => encryptionKeys[key]);
}

function decryptText(text) {
  return Object.entries(encryptionKeys).reduce((accumulator, [key, value]) => {
    return accumulator.replaceAll(value, key);
  }, text);
}

function showCard(card) {
  console.log(card, cardHide[card]);
  document.getElementById(card).classList.remove('hidden');
  document.getElementById(cardHide[card]).classList.add('hidden');
}

async function copyResult() {
  await navigator.clipboard.writeText(resultField.innerHTML);
}
