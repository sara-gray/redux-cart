import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff

// stores data, think of state
import { createStore } from 'redux'
import reducer from './reducer'

// react-redux - Provider - wrapps app, connect - used in compnents
import { Provider } from 'react-redux'

// intial store
const initialStore = {
	cart: cartItems,
	total: 105,
	amount: 5,
}

// store
const store = createStore(
	reducer,
	initialStore,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
	// cart setup

	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	)
}

export default App
