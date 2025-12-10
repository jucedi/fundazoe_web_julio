
import { NextResponse } from "next/server";
// IMPORTANTE: Importamos 'db' desde nuestro archivo seguro en 'lib'
import { db } from "@/lib/firebaseAdmin"; 

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const articulosRef = db.collection("articulos");
    const snapshot = await articulosRef.get();

    if (snapshot.empty) {
      return NextResponse.json([]);
    }

    const articulos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(articulos);
  } catch (error) {
    console.error("Error obteniendo articulos:", error);
    return NextResponse.json(
      { error: "Error al obtener los datos" },
      { status: 500 }
    );
  }
}