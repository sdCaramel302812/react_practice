import * as React from 'react';
import { isPropertySignature } from 'typescript';

export interface Props {
    name: string,
    happinessLevel?: number
}

interface State {
    currentHappiness: number
}

function Hello({name, happinessLevel = 1}: Props) {
    if (happinessLevel < 0) {
        throw new Error('You should be more happy');
    }

    return (
        <div>
            Hello {name}
        </div>
    );
}

class HelloClass extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentHappiness: props.happinessLevel || 1
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