import Observable from './observable.js';

class Search {
  constructor() {
    this.searchField = document.getElementById('search');
    this.observable = new Observable();
    this.currentState = '';
    this.init();
    this.getSearchInitialState();
  }

  subscribe(fn) {
    this.observable.subscribe(fn);
  }

  init() {
    this.searchField.addEventListener('keyup', () => {
      if (!this.searchField.value.trim()) {
        this.currentState = '';
        this.observable.next('/');

        return;
      }
      if (this.searchField.value) {
        this.currentState = `/search/value=${this.searchField.value}`;
        this.observable.next(this.currentState);
      }
    });
  }

  getSearchInitialState() {
    if (window.location.pathname.includes('/search/')) {
      this.currentState = `/${window.location.pathname.split('/')[1].trim()}`;
      this.searchField.value = decodeURI(window.location.pathname.split('/search/value=')[1].trim());
    }
  }
}

export default Search;
