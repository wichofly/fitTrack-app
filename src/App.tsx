import { useEffect } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import ActivityList from './components/ActivityList';
import { CalorieTracker } from './components/CalorieTracker';
import { useActivity } from './hooks/useActivity';

function App() {
  const { state, dispatch } = useActivity();
  
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
