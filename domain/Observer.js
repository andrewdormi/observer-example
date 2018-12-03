class Observer {
    constructor() {
        this.listeners = [];
        this.state = {};
        this.actions = {};
    }

    subscribe(fn) {
        this.listeners.push(fn);
    }

    unsubscribe(fn) {
        this.listeners = this.listeners.filter(f => f !== fn);
    }

    emit() {
        this.listeners.forEach(f => f(this.state, this.actions));
    }
}

export default Observer;