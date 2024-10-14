import { useReducer, useEffect } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import ActivityList from './components/ActivityList';
import { activityReducer, initialSate } from './reducers/activityReducer';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  // Load from localStorage on app initialization
  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    const storedActiveId = localStorage.getItem('activeId');

    if (storedActivities) {
      dispatch({
        type: 'load-state',
        payload: {
          activities: JSON.parse(storedActivities),
          activeId: storedActiveId || '', // If there's no storedActiveId, fallback to empty string
        },
      });
    }
  }, [dispatch]); // Only runs on mount

  return (
    <>
      <Header />
      <Form dispatch={dispatch} state={state} />
      <ActivityList activities={state.activities} dispatch={dispatch} />
    </>
  );
}

export default App;
