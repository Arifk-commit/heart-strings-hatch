import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAEsqnPi1s7uUZ5r4SStHC5Te_0T8nBp-s",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "pawconnect-31bc2.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pawconnect-31bc2",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "pawconnect-31bc2.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "99030315141",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:99030315141:web:6b47b997f2ac6cfe16b9ec",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-DWY0GEYD2C",
};

// Initialize Firebase (singleton pattern safe for SSR / HMR)
export const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Services
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

// Initialize Analytics safely on client-side only
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
export default app;
