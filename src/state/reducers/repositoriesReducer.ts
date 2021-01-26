import { Action } from '../actions';
import { ActionType } from '../action-types';
//reducer interface
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
//initial State
const initialState = {
  loading: false,
  error: null,
  data: [],
};
//reducer
const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default repositoriesReducer;
