import React, {Component} from 'react';
import Counter from '../domain/Counter';

const counter = new Counter();

export default WrapperComponent => {
    return class CounterProvider extends Component {
        constructor(props) {
            super(props);
            this.state = {...counter.state, ...counter.actions};
            this.updateState = this.update.bind(this);
        }
        componentDidMount() {
            counter.subscribe(this.updateState);
        }

        componentWillUnmount() {
            counter.unsubscribe(this.updateState);
        }

        update(state, actions) {
            this.setState({...state, ...actions});
        }

        render() {
            return <WrapperComponent  {...this.state} {...this.props} />
        }
    };
};