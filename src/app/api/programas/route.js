// Archivo: src/app/api/programas/route.js
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';

export async function GET() {
  try {
    // Consultamos la colección 'programas' ordenados por el campo 'orden'
    // Nota: Si no tienes campo 'orden', quita .orderBy('orden')
    const snapshot = await db.collection('programas').orderBy('orden').get();

    const programas = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(programas);
  } catch (error) {
    console.error('Error obteniendo programas:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}