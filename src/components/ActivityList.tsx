import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useActivity } from '../hooks/useActivity';

const ActivityList = () => {
  const { state, dispatch, categoryName, isEmptyActivities } = useActivity();

  return (
    <section className="p-10 mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-teal-700">
        Food and Activities with Calories
      </h2>

      {isEmptyActivities ? (
        <p className="text-center text-slate-500 mt-10">
          Not Activity is done yet
        </p>
      ) : (
        state.activities.map((movement) => (
          <div
            key={movement.id}
            className="px-5 py-10 mt-5 shadow-lg flex justify-between bg-white border border-gray-200 rounded-lg"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white rounded-lg shadow-md uppercase font-bold ${
                  movement.category === 1 ? 'bg-teal-600' : 'bg-cyan-600'
                }`}
              >
                {categoryName(movement.category)}
              </p>

              <p className="font-bold text-2xl text-slate-700 pt-5">
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
              <button
                className="text-3xl text-slate-600 hover:text-teal-600 transition-colors"
                onClick={() =>
                  dispatch({
                    type: 'set-activeId',
                    payload: { id: movement.id },
                  })
                }
              >
                <FaRegEdit />
              </button>
              <button
                className="text-3xl text-red-500 hover:text-red-600 transition-colors"
                onClick={() =>
                  dispatch({
                    type: 'delete-activity',
                    payload: { id: movement.id },
                  })
                }
              >
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default ActivityList;
