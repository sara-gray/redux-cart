// reducer - function that is used to update state
// two arguments - state, action
// state - old state/steate before update
// action - what happened/ what update
// return updates or old state

import { DECREASE, INCREASE } from './actions'

const reducer = (state, action) => {
	console.log({ state, action })

	if (action.type === DECREASE) {
		return { ...state, count: state.count - 1 }
	}
	if (action.type === INCREASE) {
		return { ...state, count: state.count + 1 }
	}

	return state
}

export default reducer
