import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	ExampleData: ['#996', '#648', '#317', '#096'],
	color: '#009966',
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.RANDOM_COLOR:
			return state.merge({
				color: '#' + action.data,
			});
		default:
			return state;
	}
};

export default reducer;
