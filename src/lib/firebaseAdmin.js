import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Función para inicializar Firebase de forma segura
function initFirebase() {
  // 1. Si ya existe una app inicializada, la usamos para evitar re-inicializar
  if (getApps().length > 0) {
    return getFirestore();
  }

  // 2. Definimos las credenciales usando los nombres EXACTOS que pide la librería (snake_case)
  const serviceAccount = {
    // ⚠️ AQUÍ ESTABA EL ERROR: Cambiamos 'projectId' por 'project_id'
    project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "fundazoe-web", 
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined,
  };

  // 3. Verificamos que las credenciales críticas existan
  // Si falta alguna, advertimos pero no rompemos la app (útil para el Build)
  if (!serviceAccount.project_id || !serviceAccount.client_email || !serviceAccount.private_key) {
    console.warn("⚠️ Advertencia: Faltan variables de entorno de Firebase. La conexión fallará en tiempo de ejecución.");
  }

  try {
    initializeApp({
      credential: cert(serviceAccount),
    });
    console.log("✅ Firebase (Admin) inicializado correctamente.");
  } catch (error) {
    console.error("❌ Error inicializando Firebase Admin:", error);
  }

  return getFirestore();
}

// Exportamos la base de datos ya inicializada
export const db = initFirebase();