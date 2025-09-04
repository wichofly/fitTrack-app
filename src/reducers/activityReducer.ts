import { Activity } from '../types/interface';

export interface ActivityState {
  activities: Activity[];
  activeId: Activity['id'];
}

export interface ActivityActions {
  type: 'save-activity' | 'set-activeId' | 'delete-activity' | 'restart-app';
  payload?: { newActivity?: Activity } | { id?: Activity['id'] };
}

const localStorageActivities = (): Activity[] => {
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
    const { newActivity } = action.payload as { newActivity: Activity };

    let updatedActivities: Activity[] = [];

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
    const { id } = action.payload as { id: Activity['id'] };

    return {
      ...state,
      activeId: id,
    };
  }

  if (action.type === 'delete-activity') {
    const { id } = action.payload as { id: Activity['id'] };

    const deleteActivity = state.activities.filter(
      (activity) => activity.id !== id
    );

    return {
      ...state,
      activities: deleteActivity,
    };
  }

  if (action.type === 'restart-app') {
    return {
      ...state,
      activities: [],
      activeId: '',
    };
  }

  return state;
};
