import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin'; // 👈 Aquí importamos al Portero (Servidor)

// Esta función maneja las peticiones GET (cuando el navegador pide datos)
export async function GET() {
  try {
    // 1. Vamos a buscar la colección 'articulos' a la base de datos
    const snapshot = await db.collection('articulos').get();

    // 2. Transformamos los datos a un formato limpio
    const articulos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // 3. Respondemos con éxito (Status 200) y los datos JSON
    return NextResponse.json(articulos);

  } catch (error) {
    console.error('Error obteniendo artículos:', error);
    // Si falla, respondemos con error (Status 500)
    return NextResponse.json(
      { error: 'Error interno del servidor al obtener artículos' },
      { status: 500 }
    );
  }
}