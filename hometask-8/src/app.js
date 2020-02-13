/* eslint-disable class-methods-use-this */
import HistoryRouter from './routerHistory';
import Render from './render.js';
import CONFIG from './config.js';
import Search from './search.js';
import '../dist/assets/styles.css';


class App {
  constructor() {
    this.news = [];
    this.search = new Search();
    this.router = new HistoryRouter();
    this.render = new Render(this.router, this.search);
    this.search.subscribe(this.onSearchChange.bind(this));
  }

  init() {
    fetch(`${CONFIG.api}/news`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.news = data;
      })
      .then(() => {
        this.inintRouter();
        this.render.initMainPage(this.news);
        this.render.initSinglePage();
        this.router.renderRouteContent(window.location.pathname);
        this.search.getSearchInitialState();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  inintRouter() {
    this.router.createRoute(CONFIG.routes.homepage, this.render.generateHomePage.bind(this.render));
    this.router.createRoute(CONFIG.routes.aboutPage, this.render.generateSecondaryPage.bind(this.render, 'about'));
    this.router.createRoute(CONFIG.routes.contactPage, this.render.generateSecondaryPage.bind(this.render, 'contact'));
    this.router.createRoute(CONFIG.routes.errorPage, this.render.generateSecondaryPage.bind(this.render, 'error'));
    this.router.createRoute(CONFIG.routes.newsSinglePage, this.render.generateSinglePage.bind(this.render, this.news));
    this.router.createRoute(CONFIG.routes.searchPage, this.render.displayFilteredContent.bind(this.render));
  }

  onSearchChange(data) {
    window.history.pushState(null, null, data);
    this.router.renderRouteContent(decodeURI(window.location.pathname));
  }
}

const app = new App();
app.init();
