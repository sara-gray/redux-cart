import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// redux stuff

// stores data, think of state
import { createStore } from 'redux'
import reducer from './reducer'

// react-redux - Provider - wrapps app, connect - used in compnents
import { Provider } from 'react-redux'

// store
const store = createStore(
	reducer,
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
