import React, {Component} from 'react';
import CountProvider from './CountProvider';

class CountWatcher extends Component {
    render() {
        const {current} = this.props;
        return <div>{current}</div>
    }
}

export default CountProvider(CountWatcher);