import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  // ✅ CORRECCIÓN 1: Usamos 'project_id' (con guion bajo), así lo exige el Admin SDK.
  // ✅ CORRECCIÓN 2: Ponemos el valor directo "fundazoe-web" para asegurar que no falle.
  project_id: "fundazoe-web",
  
  // Estas claves siguen viniendo de las variables de entorno de Vercel
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined,
};

// Inicialización segura
if (!getApps().length) {
  try {
    // Verificamos antes de intentar conectar
    if (serviceAccount.project_id && serviceAccount.client_email && serviceAccount.private_key) {
      initializeApp({
        credential: cert(serviceAccount),
      });
      console.log("✅ Firebase Admin inicializado con ID:", serviceAccount.project_id);
    } else {
      console.warn("⚠️ Saltando inicialización: Faltan credenciales en Vercel (Email o Private Key).");
    }
  } catch (error) {
    console.error("❌ Error iniciando Firebase Admin:", error);
  }
}

const db = getFirestore();
export { db };