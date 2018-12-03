import React, {Component} from 'react';
import CountProvider from './CountProvider';

class IncrementButton extends Component {
    render() {
        const {increment} = this.props;
        return <button onClick={increment}>increment</button>
    }
}

export default CountProvider(IncrementButton);