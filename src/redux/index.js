import { combineReducers } from 'redux';

import searchItems from './reducers/searchItems';
import searchDetail from './reducers/searchDetail';

const rootReducer = combineReducers({
    items: searchItems,
    objectDetail: searchDetail,

});

export default rootReducer;
