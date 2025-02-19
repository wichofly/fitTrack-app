import { useReducer, useEffect } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import ActivityList from './components/ActivityList';
import { activityReducer, initialSate } from './reducers/activityReducer';
import { CalorieTracker } from './components/CalorieTracker';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  // Load from localStorage on app initialization
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  return (
    <>
      <Header activities={state.activities} dispatch={dispatch} />
      <Form dispatch={dispatch} state={state} />
      <CalorieTracker activities={state.activities} />
      <ActivityList activities={state.activities} dispatch={dispatch} />
    </>
  );
}

export default App;
