import { Performance } from '../types/interface';

interface Props {
  activities: Performance[];
}

const ActivityList = ({ activities }: Props) => {
  console.log(activities);

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
              <p>{movement.category}</p>
              <p>{movement.activity}</p>
              <p className="font-bold text-3xl text-teal-600">{movement.calories} Calories</p>
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
