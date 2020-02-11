/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

import CONFIG from './config.js';
import initNavbar from './components/navbar.js';
import initModal from './components/modal.js';
import initHomePageLayout from './components/homePageLayout.js';
import initErrorLink from './components/errorPage.js';

class Render {
  constructor(router, search) {
    this.router = router;
    this.search = search;
  }

  initMainPage(data) {
    initHomePageLayout.call(this.render, this.router.renderRouteContent.bind(this.router), data);
    initNavbar.call(this.router, this.router.renderRouteContent.bind(this.router));
    initErrorLink.call(this.router, this.router.renderRouteContent.bind(this.router));
    const searchBar = document.querySelector('.search-form');
    searchBar.style.display = 'block';
  }

  generateHomePage() {
    const appContainer = document.querySelector(CONFIG.selectors.mainAppContainer);

    Array.from(appContainer.children).forEach((item) => {
      if (!item.classList.contains('main-container')) {
        item.style.display = CONFIG.styles.hide;
      } else {
        item.style.display = 'flex';
      }
    });

    [...document.querySelectorAll('.news-card')].forEach((news) => {
      news.style.opacity = CONFIG.styles.brighten;
    });

    const searchBar = document.querySelector('.search-form');
    searchBar.style.display = 'block';

    this.getFilterValue();
  }

  getFilterValue() {
    const currentFilterValue = this.search.searchField.value;
    if (currentFilterValue) {
      window.history.pushState(null, null, `/search/value=${currentFilterValue}`);
      this.router.renderRouteContent(window.location.pathname);
    }
  }

  displayFilteredContent() {
    const currentSearchValue = window.location.pathname.split('/search/value=')[1];
    const allNews = document.querySelectorAll('.news-card');
    allNews.forEach((news) => {
      const titleValue = news.querySelector('span').innerHTML;
      if (!titleValue.toLowerCase().includes(currentSearchValue.toLowerCase())) {
        news.style.opacity = CONFIG.styles.dim;
      } else {
        news.style.opacity = CONFIG.styles.brighten;
      }
    });
  }

  initSinglePage() {
    initModal.call(this.router, this.router.renderRouteContent.bind(this.router));
  }

  generateSinglePage(news) {
    const id = window.location.pathname.split('news/')[1];
    const newsEnrty = news.find((item) => item.id === Number(id));

    if (newsEnrty) {
      const modalContainer = document.querySelector('.news-modal');
      modalContainer.style.display = CONFIG.styles.show;
      const modal = document.getElementById('modal');

      document.querySelector('.modal-content h4').textContent = newsEnrty.title;
      document.querySelector('.modal-content h5').textContent = newsEnrty.date;
      document.querySelector('.modal-content img').setAttribute('src', newsEnrty.image);
      document.querySelector('.modal-content p').textContent = newsEnrty.content;
      const instance = M.Modal.init(modal);
      instance.open();
    }
  }

  generateSecondaryPage(routeName) {
    const appContainer = document.querySelector(CONFIG.selectors.mainAppContainer);

    Array.from(appContainer.children).forEach((elem) => {
      if (!elem.classList.contains(routeName)) {
        elem.style.display = CONFIG.styles.hide;
      } else {
        elem.style.display = CONFIG.styles.show;
      }
    });
  }
}

export default Render;
