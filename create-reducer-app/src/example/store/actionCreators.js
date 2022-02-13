import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const random_color = data => ({
	type: actionTypes.RANDOM_COLOR,
	data: fromJS(data),
});
