import { useEffect } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import ActivityList from './components/ActivityList';
import { CalorieTracker } from './components/CalorieTracker';
import { useActivity } from './hooks/useActivity';

function App() {
  const { state } = useActivity();

  // Load from localStorage on app initialization
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  return (
    <>
      <Header />
      <Form />
      <CalorieTracker />
      <ActivityList />
    </>
  );
}

export default App;
