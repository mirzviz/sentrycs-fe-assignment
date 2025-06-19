class MyActionListener {
  constructor() {
    this.listeners = {};
  }

  // Registers a listener for an action
  registerListener(action, listener) {
    if (!this.listeners[action]) {
      this.listeners[action] = [];
    }
    this.listeners[action].push(listener);
  }

  // Removes all listeners for an action
  removeListener(action) {
    delete this.listeners[action];
  }

  // Emits an action, calling all listeners with data
  emit(action, data) {
    if (!this.listeners[action]) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exits.`);
    }
    this.listeners[action].forEach((listener) => listener(data));
  }
}

const actionListener = new MyActionListener();
export default actionListener; 