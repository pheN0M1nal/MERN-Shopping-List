import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';

export default combineReducers({
	item: ItemsReducer,
});
