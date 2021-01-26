import { Provider } from 'react-redux';
import { store } from '../state';
//importing components
import RepositoriesList from './RepositoriesList';
// App component
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
