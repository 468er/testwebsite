// Wait until DOM is ready (defer usually handles this too)
document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
  const para = document.getElementById('para');
  const msg = document.getElementById('message');

  document.getElementById('headerBlueBtn').addEventListener('click', () => {
    title.style.color = 'blue';          // change inline style
    console.log('Header turned blue');
  });

  document.getElementById('paraPurpleBtn').addEventListener('click', () => {
    para.classList.add('purple-text');   // better: toggle a CSS class
  });

  document.getElementById('greetBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      msg.textContent = `Hello, ${name}! 👋`;
    } else {
      msg.textContent = 'Please enter your name first.';
    }
  });
});
