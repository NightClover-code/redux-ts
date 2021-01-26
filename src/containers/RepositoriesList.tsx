import { useState } from 'react';
import { useActions } from '../hooks/useActions';
//repositories component
const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  //on Submit Handler
  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={e => setTerm(e.target.value)}
          type="text"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
