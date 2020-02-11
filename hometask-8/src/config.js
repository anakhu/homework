const CONFIG = {
  api: 'http://localhost:3000',
  routes: {
    homepage: '',
    aboutPage: 'about',
    contactPage: 'contact',
    newsSinglePage: 'news',
    errorPage: '404',
    searchPage: 'search',
  },
  selectors: {
    mainAppContainer: '.app-container',
    allNewsCardsContainer: '.main-container',
    newsCard: '.news-card',
    searchForm: '.search-form',
    newsTemplate: '#news-template',
    singleNewsTemplate: '#single-news-template',
    aboutLink: '.about',
    contactLink: '.contact',
    homepageLink: '.brand-logo',
  },
  styles: {
    hide: 'none',
    show: 'block',
    dim: '0.1',
    brighten: '1',
    auto: 'auto',
  },
};


export default CONFIG;
