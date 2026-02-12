# ICAS Mathematics Challenge 2026 (Hong Kong P4)

A production-ready, interactive examination platform designed for Primary 4 students in Hong Kong to prepare for the ICAS 2026 Mathematics competition.

## Features
- **Smart Theming**: Automatically switches between Day and Night modes based on user time.
- **Authentication**: Supports Email and Social (Google) login via Firebase.
- **Detailed Dashboard**: Tracks progress across Math categories (Geometry, Algebra, etc.).
- **AI Ready**: Includes integration points for sentiment analysis (tracking exam frustration via speed) and math concept recommendations.
- **PWA Ready**: Mobile-first responsive design using Bootstrap 5.

## Setup Instructions
1. `npm install` to install dependencies.
2. Update `src/firebase/config.ts` with your Firebase project credentials.
3. `npm start` to run locally.
4. `npm run build` for production deployment.

## Technology Stack
- React 18 & TypeScript
- Bootstrap 5 & React-Bootstrap
- Firebase (Auth & Firestore)
- Framer Motion (Animations)
- Lucide-React (Icons)