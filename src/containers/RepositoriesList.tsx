import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
//repositories component
const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, data, error } = useTypedSelector(
    state => state.repositories
  );
  //on Submit Handler
  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    searchRepositories(term);
  };
  //returning names
  const returnedNames = data.map(name => {
    return <div key={name}>{name}</div>;
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={e => setTerm(e.target.value)}
          type="text"
        />
        <button>Search</button>
      </form>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      {!loading && !error && returnedNames}
    </div>
  );
};

export default RepositoriesList;
