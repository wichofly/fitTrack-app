import { Performance } from '../types/interface';

export interface ActivityActions {
  type: 'save-activity';
  payload: { newActivity: Performance };
}

interface ActivityState {
  activities: Performance[];
}

export const initialSate: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialSate,
  action: ActivityActions
) => {
  if (action.type === 'save-activity') {
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  return state;
};
