import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';
//combining reducers
const reducers  = combineReducers({
  repositories: repositoriesReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;