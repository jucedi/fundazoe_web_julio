import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// 1. Preparamos las credenciales
// OJO: Usamos las variables de entorno que configuraste en Vercel
const serviceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // El .replace es un truco vital para que Vercel lea bien los saltos de línea de la clave
  privateKey: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined,
};

// 2. Inicializamos Firebase Admin (Solo si no existe ya)
// Esto evita el error de "App already exists"
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

// 3. Exportamos la base de datos para usarla en las APIs
const db = getFirestore();

export { db };