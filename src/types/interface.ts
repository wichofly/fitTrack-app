export interface Categories {
  id: number;
  name: string;
}

export interface Activity {
  id: string;
  category: number;
  activity: string;
  calories: number;
}
