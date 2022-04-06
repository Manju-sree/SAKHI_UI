const demoButton = document.querySelectorAll ('.demo-toast-button');
const baselineToast = document.querySelector ('.baseline');

function showToast (ToastType) {
  if (ToastType === 'Click-Me') {
    baselineToast.style.display = 'flex';
    setTimeout (() => {
      baselineToast.style.display = 'none';
    }, 2000);
  } 
}

demoButton.forEach (button => {
  button.addEventListener ('click', () => {
    let buttonType = button.innerText;
    showToast (buttonType);
  });
});
