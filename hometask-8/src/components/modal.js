import CONFIG from '../config.js';

const appContainer = document.querySelector(CONFIG.selectors.mainAppContainer);
const templateScript = document.querySelector(CONFIG.selectors.singleNewsTemplate).innerHTML;

function resetBodyOverflow() {
  const body = document.getElementsByTagName('body');
  if (body[0]) {
    body[0].style.overflow = CONFIG.styles.auto;
  }
}

function initModal(render) {
  function redirect() {
    resetBodyOverflow();
    window.history.pushState(null, null, '/');
    render(window.location.pathname);
  }

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      redirect();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('modal') && e.key === 'Escape') {
      redirect();
    }
  });

  const emptyModalContainer = document.createElement('div');
  emptyModalContainer.setAttribute('class', 'news-modal');

  const template = Handlebars.compile(templateScript);

  emptyModalContainer.innerHTML = template({
    news: {
      title: '',
      date: '',
      content: '',
      image: null,
    },
  });

  appContainer.appendChild(emptyModalContainer);
  const modal = document.getElementById('modal');
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close')) {
      redirect();
    }
  });
}

export default initModal;
