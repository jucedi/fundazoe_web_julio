import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';

export async function GET() {
  try {
    // Asumo que tu colección en Firebase se llama 'recursos'
    const snapshot = await db.collection('recursos').get();

    const recursos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(recursos);
  } catch (error) {
    console.error('Error obteniendo recursos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}