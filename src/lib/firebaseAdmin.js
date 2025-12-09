import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  // ✅ AQUÍ ESTÁ EL CAMBIO: Pusimos el ID directo (hardcoded)
  project_id: "fundazoe-web", 
  
  // Estas dos las seguimos leyendo de las variables secretas de Vercel
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined,
};

// Verificación en consola (para los logs de Vercel)
console.log("🔥 Intentando conectar con ID:", serviceAccount.project_id);

if (!getApps().length) {
  try {
    initializeApp({
      credential: cert(serviceAccount),
    });
    console.log("✅ Firebase inicializado correctamente");
  } catch (error) {
    console.error("❌ Error crítico inicializando Firebase:", error);
  }
}

const db = getFirestore();
export { db };