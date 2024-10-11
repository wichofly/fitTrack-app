import { useMemo } from 'react';
import { Performance } from '../types/interface';
import { categories } from '../data/categories';
import { FaRegEdit } from 'react-icons/fa';

interface Props {
  activities: Performance[];
}

const ActivityList = ({ activities }: Props) => {
  const categoryName = useMemo(() => {
    return (categoryId: Performance['category']) => {
      const category = categories.find((cat) => cat.id === categoryId);
      return category ? category.name : '';
    };
  }, []);

  return (
    <section className="p-10 mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-slate-600">
        Activities with Calories
      </h2>
      {activities.map((movement) => (
        <div
          key={movement.id}
          className="px-5 py-10 mt-5 shadow-lg flex justify-between "
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white rounded-lg shadow-md uppercase font-bold ${
                movement.category === 1 ? 'bg-teal-600' : 'bg-cyan-600'
              }`}
            >
              {categoryName(movement.category)}
            </p>

            <p className="font-bold text-2xl text-slate-600 pt-5">
              {movement.activity}
            </p>

            <p
              className={`font-bold text-3xl ${
                movement.category === 1 ? 'text-teal-600' : 'text-cyan-600'
              }`}
            >
              {movement.calories} Calories
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <button className="text-3xl text-slate-700 hover:text-slate-800">
              <FaRegEdit />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActivityList;
