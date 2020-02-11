class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  next(data) {
    this.subscribers.forEach((subscribedFn) => {
      subscribedFn(data);
    });
  }
}

export default Observable;
