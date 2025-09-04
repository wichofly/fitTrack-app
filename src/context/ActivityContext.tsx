import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';
import {
  ActivityActions,
  activityReducer,
  ActivityState,
  initialSate,
} from '../reducers/activityReducer';
import { categories } from '../data/categories';
import { Activity } from '../types/interface';

interface ActivityProviderProps {
  children: ReactNode;
}

interface ActivityContextProps {
  state: ActivityState; 
  dispatch: Dispatch<ActivityActions>;
  caloriesConsumed: number;
  caloriesBurned: number;
  totalCalories: number;
  categoryName: (categoryId: Activity['category']) => string;
  isEmptyActivities: boolean;
}

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  const caloriesConsumed = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total, // category 1 is for food
        0
      ),
    [state.activities]
  );

  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total, // category 2 is for exercise
        0
      ),
    [state.activities]
  );

  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [caloriesConsumed, caloriesBurned]
  );

  const categoryName = useMemo(() => {
    return (categoryId: Activity['category']) => {
      const category = categories.find((cat) => cat.id === categoryId);
      return category ? category.name : '';
    };
  }, []);

  const isEmptyActivities = state.activities.length === 0;

  return (
    <ActivityContext.Provider
      value={{
        state,
        dispatch,
        caloriesConsumed,
        caloriesBurned,
        totalCalories,
        categoryName,
        isEmptyActivities,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
