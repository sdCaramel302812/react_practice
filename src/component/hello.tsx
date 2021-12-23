import * as React from 'react';

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
        this.setState((state, props) => ({
            currentHappiness: state.currentHappiness + 1
        }));
    }

    onDecrement = () => {
        this.setState((state, props) => ({
            currentHappiness: state.currentHappiness - 1
        }));
    }

    render() {
        return (
            <div>
                Hello {this.props.name}, happiness {this.state.currentHappiness}
                <button onClick={this.onIncrement}>Inc</button>
                <button onClick={this.onDecrement}>Dec</button>
            </div>
        );
    }
}

export default HelloClass;