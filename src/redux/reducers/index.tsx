import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants";
import { combineReducers } from 'redux'

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    console.log(action.type);
    switch(action.type) {
        case INCREMENT_ENTHUSIASM:
            // create shallow copy
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel - 1};
    }

    return state;
}

const reducers = combineReducers({
    enthusiasm
});

export default reducers;