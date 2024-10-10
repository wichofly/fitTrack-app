import { useMemo } from 'react';
import { Categories, Performance } from '../types/interface';

interface Props {
  activities: Performance[];
  categories: Categories[];
}

const ActivityList = ({ activities, categories }: Props) => {
  const categoryName = useMemo(() => {
    const getName = categories.reduce((convertToName, category) => {
      convertToName[category.id] = category.name;
      return convertToName;
    }, {} as Record<number, string>);

    return (categoryId: number) => getName[categoryId] || 'Unknown';
  }, [categories]); // Only recalculate if `categories` changes

  return (
    <>
      <section className="p-10 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-slate-600">
          Activities with Calories
        </h2>
        {activities.map((movement) => (
          <div
            key={movement.id}
            className="px-5 py-10 mt-5  shadow-lg flex justify-between "
          >
            <div>
              <p>{categoryName(movement.category)}</p>
              <p className="font-bold text-2xl text-slate-600 pt-5">
                {movement.activity}
              </p>
              <p className="font-bold text-3xl text-teal-600">
                {movement.calories} Calories
              </p>
            </div>

            <div>
              <p>check and Delete</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ActivityList;
