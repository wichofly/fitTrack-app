# Fit Track App 🍏🏃‍♂️⚡️

FitTrack is a calorie tracking app that allows users to log their food intake and exercises, calculate calories consumed and burned, and keep a summary of their activities. The app ensures a seamless experience with persistent data storage via `localStorage` and is designed with a responsive UI using modern React tools.

## Key Features

- **Activity Tracking:** Log food intake and exercises with calorie counts.
- **Category Filtering:** Differentiate between food and exercise activities.
- **Calorie Summary:** Track calories consumed, burned, and the net difference.
- **Edit and Delete:** Modify or remove logged activities.
- **Persistent Data:** Uses localStorage to retain activities across sessions.
- **App Restart:** Clear all activities and start fresh.

## Key Technologies and Tools

- **React:** Built with functional components and hooks (`useReducer`, `useEffect`, `useMemo`).
- **TypeScript:** Strongly typed components and logic ensure robustness.
- **Tailwind CSS:** For a clean and responsive UI.
- **React Icons:** Icons for enhancing the visual appeal of the app.
- **UUID:** Used for generating unique activity IDs.
- **Local Storage:** Persistent storage for activity logs across sessions.

## How to Use fitTrack

**Prerequisites**
- Node.js installed on your machine.

**Installation**
1. Clone the repository:
```
git clone https://github.com/your-username/fitTrack.git
````

2. Navigate to the project folder:
```
cd fitTrack
```

3. Install dependencies:  
```
npm install
```

4. Run the app:
```
npm run dev
```

## Data Flow

- State is managed using `useReducer` in combination with `localStorage`.
- Activities are logged as an array of objects, where each object contains:
  - `id`: Unique identifier.
  - `category`: Either food (1) or exercise (2).
  - `category`: Description of the activity.
  - `calories`: The number of calories.

## Deploy in Netlify
- [fitTrack-app](https://fittracker0.netlify.app/)
