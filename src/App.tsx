import { useReducer } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { activityReducer, initialSate } from './reducers/activityReducer';
import ActivityList from './components/ActivityList';
import { categories } from './data/categories';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  return (
    <>
      <Header />
      <Form dispatch={dispatch} />
      <ActivityList activities={state.activities} categories={categories} />
    </>
  );
}

export default App;
