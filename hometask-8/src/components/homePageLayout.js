import CONFIG from '../config.js';

const appContainer = document.querySelector(CONFIG.selectors.mainAppContainer);
const templateScript = document.querySelector(CONFIG.selectors.newsTemplate).innerHTML;

function initHomePageLayout(render, data) {
  const mainNewsContainer = document.createElement('div');
  mainNewsContainer.setAttribute('class', 'main-container');

  const template = Handlebars.compile(templateScript);

  mainNewsContainer.innerHTML = template(data);
  appContainer.appendChild(mainNewsContainer);

  mainNewsContainer.querySelectorAll(CONFIG.selectors.newsCard).forEach((card) => {
    card.addEventListener('click', () => {
      const { index } = card.dataset;
      window.history.pushState(null, null, `/news/${index}`);
      render(window.location.pathname);
    });
  });
}

export default initHomePageLayout;
