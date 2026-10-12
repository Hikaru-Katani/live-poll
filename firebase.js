const firebaseConfig = {
  apiKey: "AIzaSyDx9g72HXyOgBbrT6rMlX9SUjXf0HrWhLo",
  authDomain: "onein-887eb.firebaseapp.com",
  projectId: "onein-887eb",
  storageBucket: "onein-887eb.firebasestorage.app",
  messagingSenderId: "1086838382965",
  appId: "1:1086838382965:web:7d034c81bed9490322b33c",
  measurementId: "G-C0B3PEF387"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export { ref, onValue, set, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

export const isConfigured = !Object.values(firebaseConfig).some((v) => v.includes("PASTE"));

const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const db = app ? getDatabase(app) : null;
const auth = app ? getAuth(app) : null;

// Each browser gets a stable anonymous ID, so one phone = one vote per question.
export async function signIn() {
  const cred = await signInAnonymously(auth);
  return cred.user;
}
