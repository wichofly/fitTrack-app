import { categories } from '../data/categories';

export const Form = () => {
  return (
    <section className="bg-teal-100 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <form className="space-y-5 bg-gray-100 shadow p-10 rounded-lg">
          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">
              Category:
            </label>
            <select
              className="border border-slate-300 p-2 rounded-lg w-full"
              id="category"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">
              Activity:
            </label>
            <input
              id="activity"
              type="text"
              className="border border-slate-300 p-2 rounded-lg w-full"
              placeholder="Food or Exercise"
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">
              Calories:
            </label>
            <input
              id="calories"
              type="text"
              className="border border-slate-300 p-2 rounded-lg w-full"
              placeholder="Calories burned"
            />
          </div>

          <input
            type="submit"
            className="bg-zinc-700 hover:bg-zinc-800 w-full p-2 text-white cursor-pointer font-bold"
            value="Save food or exercise"
          />
        </form>
      </div>
    </section>
  );
};
