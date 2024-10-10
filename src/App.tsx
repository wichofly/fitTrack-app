import { useReducer } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { activityReducer, initialSate } from './reducers/activityReducer';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  return (
    <>
      <Header />
      <Form dispatch={dispatch} />
    </>
  );
}

export default App;
