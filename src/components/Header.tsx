import { RiRestartLine } from 'react-icons/ri';
import { useActivity } from '../hooks/useActivity';

export const Header = () => {
  const { state, dispatch } = useActivity();
  const canRestartApp = state.activities.length;

  return (
    <header className=" bg-teal-700 text-white border-b-4 border-teal-500 p-4 ">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold uppercase">Calorie Counter</h1>

        <button
          className="flex gap-2 hover:bg-teal-600 p-2 font-bold uppercase cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          disabled={!canRestartApp}
          onClick={() => {
            localStorage.removeItem('activities');
            dispatch({ type: 'restart-app' });
          }}
        >
          <RiRestartLine className="text-2xl" /> Restart App
        </button>
      </div>
    </header>
  );
};
