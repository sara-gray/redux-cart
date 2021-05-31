// reducer - function that is used to update state
// two arguments - state, action
// state - old state/steate before update
// action - what happened/ what update
// return updates or old state

import { CLEAR_CART, REMOVE, DECREASE, INCREASE } from './actions'

const reducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case CLEAR_CART:
			return { ...state, cart: [] }

		case DECREASE:
			console.log('decrease')
			return state

		case INCREASE:
			let tempCart = state.cart.map((item) => {
				console.log(item)
				return item
			})
			return { ...state, cart: tempCart }

		case REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== payload.id),
			}

		default:
			return state
	}
}

export default reducer
