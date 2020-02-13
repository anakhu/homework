/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import CONFIG from './config.js';

class HistoryRouter {
  constructor(search) {
    this.search = search;
    this.routes = {
      404: () => {
        console.log('Not found');
      },
    };

    window.addEventListener('popstate', () => {
      this.renderRouteContent(window.location.pathname);
    });
  }

  createRoute(url, callback) {
    this.routes[url] = callback;
  }

  renderRouteContent(url) {
    let currentUrl = url.split('/')[1];
    if (!currentUrl) {
      currentUrl = '';
    }

    if (Object.prototype.hasOwnProperty.call(this.routes, currentUrl)) {
      this.routes[currentUrl]();
    } else {
      this.routes[404]();
    }
  }
}

export default HistoryRouter;
