import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// 1. Validamos que la clave privada exista para evitar errores silenciosos
if (!process.env.FIREBASE_PRIVATE_KEY) {
  console.warn("Advertencia: No se encontró FIREBASE_PRIVATE_KEY.");
}

const serviceAccount = {
  // ⚠️ AQUÍ ESTÁ LA CLAVE DEL ÉXITO: Usamos snake_case
  project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined,
};

// 2. Inicializamos solo si no hay apps activas
if (!getApps().length) {
  try {
    initializeApp({
      credential: cert(serviceAccount),
    });
  } catch (error) {
    console.error("Error inicializando Firebase Admin:", error);
  }
}

const db = getFirestore();

export { db };