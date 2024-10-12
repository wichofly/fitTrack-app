import { useReducer } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { activityReducer, initialSate } from './reducers/activityReducer';
import ActivityList from './components/ActivityList';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  return (
    <>
      <Header />
      <Form dispatch={dispatch} state={state} />
      <ActivityList activities={state.activities} dispatch={dispatch} />
    </>
  );
}

export default App;
