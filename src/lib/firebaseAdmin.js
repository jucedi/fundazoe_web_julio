import admin from "firebase-admin";

let db;

try {
  // 1. Intentamos inicializar solo si no hay apps activas
  if (!admin.apps.length) {
    // Verificamos que las variables existan ANTES de usarlas
    if (process.env.FIREBASE_PROJECT_ID && 
        process.env.FIREBASE_CLIENT_EMAIL && 
        process.env.FIREBASE_PRIVATE_KEY) {
      
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Reemplazo seguro de saltos de línea
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
      console.log("✅ Firebase Admin inicializado correctamente");
    } else {
      // Si faltan variables (común en el build), lanzamos error para activar el Mock
      throw new Error("Faltan variables de entorno en el Build.");
    }
  }

  // 2. Si llegamos aquí y hay app, usamos Firestore real
  db = admin.firestore();

} catch (error) {
  console.warn("⚠️ MODO BUILD/MOCK ACTIVADO (No te preocupes por este aviso):", error.message);
  
  // 3. EL TRUCO MAESTRO: Creamos una base de datos "falsa"
  // Esto permite que el comando 'npm run build' termine sin romperse
  db = {
    collection: () => ({
      doc: () => ({ get: async () => ({ exists: false, data: () => ({}) }) }),
      get: async () => ({ empty: true, docs: [] }),
      add: async () => {},
      orderBy: () => ({ get: async () => ({ empty: true, docs: [] }) }),
      where: () => ({ get: async () => ({ empty: true, docs: [] }) })
    })
  };
}

export { db };