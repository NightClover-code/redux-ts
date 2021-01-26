import { ActionType } from '../action-types';
//typeAction
export type Action =
  | SearchRepositoriesSuccess
  | SearchRepositoriesError
  | SearchRepositories;
//actions interface
interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
