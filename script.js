// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

// Form validation with real-time feedback
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');
const successMsg = form.querySelector('.success');

function validate(input) {
  const error = input.nextElementSibling;
  if (input.type === 'email') {
    const valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(input.value);
    error.style.display = valid ? 'none' : 'block';
    return valid;
  } else {
    const valid = input.value.trim() !== '';
    error.style.display = valid ? 'none' : 'block';
    return valid;
  }
}

inputs.forEach(input => {
  input.addEventListener('input', () => validate(input));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  inputs.forEach(input => { if (!validate(input)) valid = false; });
  if (valid) {
    successMsg.style.display = 'block';
    form.reset();
    setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
  }
});
