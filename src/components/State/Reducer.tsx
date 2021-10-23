import React, { useReducer } from 'react'
type CounterState = {
    count: number,
}

type updateAction = {
    type: 'increment' | 'decrement',
    payload: number
}
type resetAction = {

    type: 'reset',

}
type CounterAction = updateAction | resetAction
const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }

        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}


const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment by 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>decrement by 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

        </div>
    )
}

export default Reducer
