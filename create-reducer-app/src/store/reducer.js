import { combineReducers } from 'redux-immutable';
import { reducer as ExampleReducer } from '../example/store';

const reducer = combineReducers({
	example: ExampleReducer,
});

export default reducer;
