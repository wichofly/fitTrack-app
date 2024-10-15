import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { categories } from '../data/categories';
import { Performance } from '../types/interface';
import { ActivityActions, ActivityState } from '../reducers/activityReducer';

interface Prop {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
}

const initialSate: Performance = {
  id: uuidv4(),
  category: 1,
  activity: '',
  calories: 0,
};

export const Form = ({ dispatch, state }: Prop) => {
  const [performance, setPerformance] = useState<Performance>(initialSate);

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(
        (stateActivity) => stateActivity.id === state.activeId
      )[0];
      setPerformance(selectedActivity);
    }
  }, [state.activeId, state.activities]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id);

    setPerformance({
      ...performance,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { activity, calories } = performance;
    return activity.trim() !== '' && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    dispatch({ type: 'save-activity', payload: { newActivity: performance } });

    setPerformance({
      ...initialSate,
      id: uuidv4(),
    });

    // Optionally, show a success message
    alert('Activity saved successfully!');
  };

  return (
    <section className="bg-gray-50 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <form
          className="space-y-5 bg-white shadow p-10 rounded-lg border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold text-gray-700">
              Category:
            </label>
            <select
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              id="category"
              value={performance.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold text-gray-700">
              Activity:
            </label>
            <input
              id="activity"
              type="text"
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Food or Exercise"
              value={performance.activity}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold text-gray-700">
              Calories:
            </label>
            <input
              id="calories"
              type="text"
              className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Calories burned"
              value={performance.calories}
              onChange={handleChange}
            />
          </div>

          <input
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 rounded-lg w-full p-2 text-white cursor-pointer font-semibold uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            value={performance.category === 1 ? 'Save Food' : 'Save Exercise'}
            disabled={!isValidActivity()}
          />
        </form>
      </div>
    </section>
  );
};
