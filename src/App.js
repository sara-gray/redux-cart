import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff

// stores data, think of state
import { createStore } from 'redux'
import { DECREASE, INCREASE } from './actions'
import reducer from './reducer'

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPRE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// intial store
const initialStore = {
	count: 0,
	name: 'sara',
}

// store
const store = createStore(reducer, initialStore)
store.dispatch({ type: DECREASE })
store.dispatch({ type: INCREASE })
store.dispatch({ type: INCREASE })
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
