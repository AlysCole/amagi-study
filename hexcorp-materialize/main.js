document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elements);

  // Enable animation
  const welcomeSlogan = document.querySelector('.welcome__slogan');
  const welcomeButton = document.querySelector('.welcome__button');

  welcomeSlogan.className = welcomeSlogan.className + ' welcome__slogan--animated';

  welcomeButton.className = welcomeButton.className + ' welcome__button--animated';
});