import React, {Component} from 'react';
import CounterWatcher from './CountWatcher';
import IncrementButton from './IncrementButton';

class App extends Component {
    render() {
        return (
            <div>
                <CounterWatcher />
                <IncrementButton />
            </div>
        );
    }
}

export default App;