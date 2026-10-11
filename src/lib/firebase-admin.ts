import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import firebaseConfig from '../../firebase-applet-config.json';

export const isFirebaseConfigured = Boolean(firebaseConfig.projectId && firebaseConfig.apiKey);

if (!getApps().length && isFirebaseConfigured) {
  try {
    initializeApp({
      projectId: firebaseConfig.projectId,
    });
  } catch (err) {
    console.warn('Firebase admin initialization skipped:', err);
  }
}

export const adminAuth = getApps().length ? getAuth() : null;
