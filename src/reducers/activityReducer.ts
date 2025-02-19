import { Performance } from '../types/interface';

export interface ActivityState {
  activities: Performance[];
  activeId: Performance['id'];
}

export interface ActivityActions {
  type: 'save-activity' | 'set-activeId' | 'delete-activity' | 'restart-app';
  payload?: { newActivity?: Performance } | { id?: Performance['id'] };
}

const localStorageActivities = (): Performance[] => {
  const activities = localStorage.getItem('activities');
  return activities ? JSON.parse(activities) : [];
};

export const initialSate: ActivityState = {
  activities: localStorageActivities(),
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

  if (action.type === 'restart-app') {
    return initialSate;
  }

  return state;
};
