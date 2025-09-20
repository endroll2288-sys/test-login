// main.js
(() => {
  const ta = document.getElementById('question');
  const btn = document.getElementById('showBtn');

  function showAlert() {
    const text = ta.value.trim();
    if (!text) {
      alert('何も入力されていません。質問を入力してください。');
      return;
    }
    alert(text);
  }

  btn.addEventListener('click', showAlert);

  ta.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      showAlert();
    }
  });

  function updateButtonState() {
    btn.disabled = ta.value.trim().length === 0;
  }
  ta.addEventListener('input', updateButtonState);
  updateButtonState();
})();
