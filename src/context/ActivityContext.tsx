import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import {
  ActivityActions,
  activityReducer,
  ActivityState,
  initialSate,
} from '../reducers/activityReducer';

interface ActivityProviderProps {
  children: ReactNode;
}

interface ActivityContextProps {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
}

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialSate);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};
