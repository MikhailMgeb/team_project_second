function renderAuthorizationScreen() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('header-tittle');
  title.textContent = 'Rock Paper Scissors!!!!!!';

  app.appendChild(title);

  window.application.renderBlock('mainImage', document.querySelector('.app'));

  const authorizationForm = document.createElement('form');
  authorizationForm.classList.add('authorization-form');
  app.appendChild(authorizationForm);

  window.application.renderBlock(
    'mainButton',
    document.querySelector('.authorization-form')
  );

  const footer = document.createElement('footer');
  footer.classList.add('wrapper__footer');
  app.appendChild(footer);

  window.application.renderBlock(
    'renderFooterLogo',
    document.querySelector('.wrapper__footer')
  );
}