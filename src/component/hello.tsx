import * as React from 'react';
import store from '../store';

export interface Props {
    name: string,
    enthusiasmLevel?: number,
    onIncrement?: () => void,
    onDecrement?: () => void,
}

interface State {
    currentHappiness: number
}

export function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) {
    if (enthusiasmLevel < 0) {
        throw new Error('You should be more happy');
    }

    return (
        <div>
            Hello {name}, {enthusiasmLevel}
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

class HelloClass extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentHappiness: props.enthusiasmLevel || 1
        };
    }

    onIncrement = () => {
        store.count++;
        this.setState((state, props) => ({
            currentHappiness: state.currentHappiness + 1
        }));
    }

    onDecrement = () => {
        store.count--;
        this.setState((state, props) => ({
            currentHappiness: state.currentHappiness - 1
        }));
    }

    render() {
        return (
            <div>
                <div>        
                    Hello {this.props.name}, happiness {this.state.currentHappiness}
                    <button onClick={this.onIncrement}>Inc</button>
                    <button onClick={this.onDecrement}>Dec</button>
                </div>
                <div>
                    count: {store.count}
                </div>
            </div>
        );
    }
}

export default HelloClass;