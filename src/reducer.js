// reducer - function that is used to update state
// two arguments - state, action
// state - old state/steate before update
// action - what happened/ what update
// return updates or old state

import { CLEAR_CART, REMOVE, DECREASE, INCREASE, GET_TOTALS } from './actions'

const reducer = (state, action) => {
	const { type, payload } = action
	let tempCart = []

	switch (type) {
		case CLEAR_CART:
			return { ...state, cart: [] }

		case DECREASE:
			tempCart = []
			if (payload.amount === 1) {
				tempCart = state.cart.filter((item) => item.id !== payload.id)
			} else {
				tempCart = state.cart.map((item) => {
					if (item.id === payload.id)
						item = { ...item, amount: item.amount - 1 }
					return item
				})
			}
			return { ...state, cart: tempCart }

		case INCREASE:
			tempCart = state.cart.map((item) => {
				if (item.id === payload.id) item = { ...item, amount: item.amount + 1 }
				return item
			})
			return { ...state, cart: tempCart }

		case REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== payload.id),
			}

		case GET_TOTALS:
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem
					cartTotal.amount += amount
					cartTotal.total += price * amount
					return cartTotal
				},
				{
					total: 0,
					amount: 0,
				}
			)
			total = parseFloat(total.toFixed(2))
			return { ...state, total, amount }

		default:
			return state
	}
}

export default reducer
