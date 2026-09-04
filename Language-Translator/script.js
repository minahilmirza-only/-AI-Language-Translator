const TranslateBtn = document.getElementById('Translatebtn');
const inputText = document.getElementById('inputText');
const targetlangs = document.getElementById('targetlangs');
const outputText = document.getElementById('outputText');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const speakBtn = document.getElementById('speakBtn');

TranslateBtn.addEventListener('click', async () => {
  const text = inputText.value.trim();
  const targetLang = targetlangs.value();

  if (text === '') {
    alert('Please enter text to translate.');
    return;
  }

});