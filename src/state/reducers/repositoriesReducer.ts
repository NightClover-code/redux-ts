//reducer interface
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
//reducer
const repositoriesReducer = (
  state: RepositoriesState,
  action: any
) => {
  switch (action.type) {
    case 'SEARCH_REPOSITORIES':
      return { loading: true, error: null, data: [] };
    case 'SEARCH_REPOSITORIES_ERROR':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case 'SEARCH_REPOSITORIES_SUCCESS':
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
