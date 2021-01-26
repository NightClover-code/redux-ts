import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';
//combining reducers
export default combineReducers({
  repositories: repositoriesReducer,
});
