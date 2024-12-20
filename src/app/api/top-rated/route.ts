import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const topRatedPerfumes = await prisma.fragrance.findMany({
      orderBy: {
        ratingValue: "desc",
      },
      take: 3, // Ambil hanya 3 parfum dengan rating tertinggi
    });

    return NextResponse.json(topRatedPerfumes);
  } catch (error) {
    console.error("Error fetching top rated perfumes:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
