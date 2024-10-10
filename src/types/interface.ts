export interface Categories {
  id: number;
  name: string;
}

export interface Performance {
  id: string
  category: number;
  activity: string;
  calories: number;
}