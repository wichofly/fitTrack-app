import { useMemo } from 'react';
import { Performance } from '../types/interface';
import { CaloriesDisplay } from './CaloriesDisplay';

interface Props {
  activities: Performance[];
}

export const CalorieTracker = ({ activities }: Props) => {
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total, // category 1 is for food
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total, // category 2 is for exercise
        0
      ),
    [activities]
  );

  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [caloriesConsumed, caloriesBurned]
  );

  return (
    <section className="bg-amber-200 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-600">
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
