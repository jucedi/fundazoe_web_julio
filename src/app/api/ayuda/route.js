import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.nombre || !data.email || !data.mensaje) {
      return NextResponse.json({ error: 'Faltan datos requeridos.' }, { status: 400 });
    }
    await db.collection('solicitudes_ayuda').add({
      ...data,
      createdAt: new Date(),
      leido: false,
    });
    return NextResponse.json({ message: 'Recibido' }, { status: 201 });
  } catch (error) {
    console.error('Error API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}