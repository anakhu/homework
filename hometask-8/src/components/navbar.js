import CONFIG from '../config.js';

const aboutLink = document.querySelector(CONFIG.selectors.aboutLink);
const contactLink = document.querySelector(CONFIG.selectors.contactLink);
const homePageLink = document.querySelector(CONFIG.selectors.homepageLink);

function initNavbar(render) {
  aboutLink.addEventListener('click', () => {
    window.history.pushState(null, null, '/about');
    render(window.location.pathname);
  });

  contactLink.addEventListener('click', () => {
    window.history.pushState(null, null, '/contact');
    render(window.location.pathname);
  });

  homePageLink.addEventListener('click', () => {
    window.history.pushState(null, null, '/');
    render(window.location.pathname);
  });


  aboutLink.style.display = 'block';
  homePageLink.style.display = 'block';
  contactLink.style.display = 'block';
}

export default initNavbar;
