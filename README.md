# FitTrack — Calorie Tracker

A small React + TypeScript app to track calories consumed (food) and calories burned (exercise). State is managed with a central context built on React's useReducer + useContext patterns and persisted to localStorage.

This repo includes a recent refactor (see PR #4) that consolidates activity state and logic into a single ActivityContext and a custom useActivity hook, removing prop drilling and simplifying component contracts.

## What’s new (PR #4 — Context)

- Centralized state and logic in `ActivityContext` (uses useReducer internally) to manage activities, calorie calculations, and related actions.
- New `useActivity` hook to consume context across components (Header, Form, CalorieTracker, ActivityList).
- Components no longer accept activity-related props or dispatch; they read state and call actions from context.
- Renamed the main data type from `Performance` to `Activity` for clarity.
- Improved reducer behavior on `restart-app` to properly clear activities and activeId, and the restart action now also clears localStorage.
- Overall result: easier maintenance, fewer prop chains, and a single place for calculating totals and handling persistence.

## Features

- Add food or exercise items with calories
- Edit and delete activities
- Totals for calories consumed, calories burned, and net calories
- Persistent state using localStorage
- Centralized ActivityContext + reducer + custom hook
- Clean component interfaces (Header, Form, CalorieTracker, ActivityList)

## Tech stack

- React
- TypeScript
- Vite (or CRA — adjust scripts if needed)
- Tailwind CSS (used in components)
- uuid (for unique ids)
- LocalStorage

## Getting started

1. Clone the repo

```bash
git clone https://github.com/wichofly/fitTrack-app.git
cd fitTrack-app
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Run locally

```bash
npm run dev
# or
yarn dev
```

4. Build for production

```bash
npm run build
# or
yarn build
```

## Usage notes

- Global state: The app is wrapped with `ActivityProvider` (in `src/main.tsx`) so any component can call `useActivity()` to get state and actions.
- Actions available from context typically include: save/add activity, delete activity, set active activity (for editing), and restart-app (clears state + localStorage).
- Totals: calorie aggregates (consumed/burned/net) are computed centrally in the context so every component reads the same source of truth without recomputing in each place.
- Persisted storage key: activities are saved to localStorage; restart clears localStorage as part of the reset flow.

## Recommended patterns used in the codebase

- Centralize expensive or shared computations in context (or in reducer write-actions) to keep renders simple.
- Prefer a single-pass reduce for multiple aggregates (e.g., calculate consumed and burned in one pass).
- Use input type="number" for numeric fields and parse with Number() plus guards for NaN.
- Keep handlers generic in forms but prefer name attributes over brittle id-based updates.

## Project structure (high level)

```
- src/
  - components/
    - Header.tsx
    - Form.tsx
    - ActivityList.tsx
    - CalorieTracker.tsx
  - context/
    - ActivityContext.tsx
  - hooks/
    - useActivity.ts
  - reducers/
    - activityReducer.ts
  - data/
    - categories.ts
  - types/
    - interface.ts
  - main.tsx
```

## Deploy in Netlify

- [fitTrack-app](https://fittracker0.netlify.app/)
