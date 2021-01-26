import repositories from '../../apis/repositories';
import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

const searchRepositories = (term: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    //getting names from npm registry
    const { data } = await repositories.get('/search', {
      params: {
        text: term,
      },
    });
    //saving data
    const names = data.objects.map(
      (result: any) => result.package.name
    );
    //dispatching results
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: err.message,
    });
  }
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES,
  });
};
