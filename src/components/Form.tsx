import { ChangeEvent, Dispatch, FormEvent, useState } from 'react';
import { categories } from '../data/categories';
import { Performance } from '../types/interface';
import { ActivityActions } from '../reducers/activityReducer';

interface Prop {
  dispatch: Dispatch<ActivityActions>;
}

export const Form = ({ dispatch }: Prop) => {
  const [performance, setPerformance] = useState<Performance>({
    category: 1,
    activity: '',
    calories: 0,
  });

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

    // Optionally, show a success message
    alert('Activity saved successfully!');
  };

  return (
    <section className="bg-teal-100 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <form
          className="space-y-5 bg-gray-100 shadow p-10 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">
              Category:
            </label>
            <select
              className="border border-slate-300 p-2 rounded-lg w-full"
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
            <label htmlFor="activity" className="font-bold">
              Activity:
            </label>
            <input
              id="activity"
              type="text"
              className="border border-slate-300 p-2 rounded-lg w-full"
              placeholder="Food or Exercise"
              value={performance.activity}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">
              Calories:
            </label>
            <input
              id="calories"
              type="text"
              className="border border-slate-300 p-2 rounded-lg w-full"
              placeholder="Calories burned"
              value={performance.calories}
              onChange={handleChange}
            />
          </div>

          <input
            type="submit"
            className="bg-zinc-700 hover:bg-zinc-800 rounded-lg w-full p-2 text-white cursor-pointer font-bold uppercase disabled:opacity-5"
            value={performance.category === 1 ? 'Save Food' : 'Save Exercise'}
            disabled={!isValidActivity()}
          />
        </form>
      </div>
    </section>
  );
};
