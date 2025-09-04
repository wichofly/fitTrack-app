import { CaloriesDisplay } from './CaloriesDisplay';
import { useActivity } from '../hooks/useActivity';

export const CalorieTracker = () => {
  const { caloriesConsumed, caloriesBurned, totalCalories } = useActivity();

  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-700">
          Calorie Summary
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
          <CaloriesDisplay calories={caloriesConsumed} text="Consumed" />
          <CaloriesDisplay calories={caloriesBurned} text="Burned" />
          <CaloriesDisplay calories={totalCalories} text="Difference" />
        </div>
      </div>
    </section>
  );
};
