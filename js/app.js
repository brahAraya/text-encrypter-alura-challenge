const resultField = document.getElementById('result');
const notFoundCard = document.getElementById('not-found-card');
const resultCard = document.getElementById('result-card');
const encryptionKeys = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

function encryptText() {
  const text = document.getElementById('text').value;
  text === '' ? showNotFoundCard() : showResultCard();
  const regex = new RegExp(`[${Object.keys(encryptionKeys).join('')}]`, 'g');
  const encryptedText = text.replace(regex, (key) => encryptionKeys[key]);
  resultField.textContent = encryptedText;
}

function decryptText() {
  let text = document.getElementById('text').value;
  text === '' ? showNotFoundCard() : showResultCard();
  for (const [key, value] of Object.entries(encryptionKeys)) {
    text = text.replaceAll(value, key);
  }
  resultField.textContent = text;
}

function showNotFoundCard() {
  notFoundCard.classList.remove('hidden');
  resultCard.classList.add('hidden');
}

function showResultCard() {
  resultCard.classList.remove('hidden');
  notFoundCard.classList.add('hidden');
}

async function copyResult() {
  await navigator.clipboard.writeText(resultField.innerHTML);
}
