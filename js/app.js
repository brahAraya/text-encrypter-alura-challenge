const input = document.getElementById('text');
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
  if (input.value.trim().replace(/(\r\n|\n|\r)/gm, '') === '') {
    showCard('not-found');
    input.value = '';
  } else {
    showCard('result');
    resultField.textContent = operation(input.value);
  }
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
  document.getElementById(card).classList.remove('hidden');
  document.getElementById(cardHide[card]).classList.add('hidden');
}

async function copyResult() {
  await navigator.clipboard.writeText(resultField.innerHTML);
}

async function pasteText() {
  input.value = await navigator.clipboard.readText();
}
