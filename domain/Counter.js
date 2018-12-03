import Observer from './Observer';

class Counter extends Observer {
    constructor() {
        super();
        this.state = {
            current: 0
        };
        this.actions = {
            increment: this.increment.bind(this)
        };
    }

    increment() {
        this.state.current++;
        this.emit();
    }
}

export default Counter;