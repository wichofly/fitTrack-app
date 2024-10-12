import { Performance } from '../types/interface';

export interface ActivityState {
  activities: Performance[];
  activeId: Performance['id'];
}

export interface ActivityActions {
  type: 'save-activity' | 'set-activeId' | 'delete-activity';
  payload:
    | { newActivity: Performance }
    | { id: Performance['id'] }
    | { id: Performance['id'] };
}

export const initialSate: ActivityState = {
  activities: [],
  activeId: '',
};

export const activityReducer = (
  state: ActivityState = initialSate,
  action: ActivityActions
) => {
  if (action.type === 'save-activity') {
    const { newActivity } = action.payload as { newActivity: Performance };

    let updatedActivities: Performance[] = [];

    if (state.activeId) {
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? newActivity : activity
      );
    } else {
      updatedActivities = [...state.activities, newActivity];
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: '',
    };
  }

  if (action.type === 'set-activeId') {
    const { id } = action.payload as { id: Performance['id'] };

    return {
      ...state,
      activeId: id,
    };
  }

  if (action.type === 'delete-activity') {
    const { id } = action.payload as { id: Performance['id'] };

    const deleteActivity = state.activities.filter(
      (activity) => activity.id !== id
    );

    return {
      ...state,
      activities: deleteActivity,
    };
  }

  return state;
};
