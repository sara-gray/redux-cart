import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff

// stores data, think of state
import { createStore } from 'redux'

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPRE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// intial store
const initialStore = {
	count: 0,
}

// reducer - function that is used to update state
// two arguments - state, action
// state - old state/steate before update
// action - what happened/ what update
// return updates or old state
const reducer = (state, action) => {
	console.log({ state, action })

	if (action.type === 'DECREASE') {
		return { count: state.count - 1 }
	}
	if (action.type === 'INCREASE') {
		return { count: state.count + 1 }
	}
	if (action.type === 'RESET') {
		return { count: 0 }
	}

	return state
}

// store
const store = createStore(reducer, initialStore)
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'RESET' })
console.log(store.getState())

function App() {
	// cart setup

	return (
		<main>
			<Navbar cart={store.getState()} />
			<CartContainer cart={cartItems} />
		</main>
	)
}

export default App
