import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";

// POST: Menambahkan parfum ke daftar favorit
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userEmail = session.user.email;
  const { perfumeId } = await request.json();

  try {
    const favorite = await prisma.favorite.create({
      data: {
        user: { connect: { email: userEmail } },
        perfume: { connect: { id: perfumeId } },
      },
    });

    return NextResponse.json(favorite);
  } catch (error) {
    console.error("Error adding favorite:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
// GET: Mendapatkan daftar parfum favorit
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userEmail = session.user.email;

  try {
    const favorites = await prisma.favorite.findMany({
      where: { user: { email: userEmail } },
      include: { perfume: true },
    });

    return NextResponse.json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE: Menghapus parfum dari daftar favorit
export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userEmail = session.user.email;
  const { perfumeId } = await request.json();

  try {
    await prisma.favorite.deleteMany({
      where: {
        user: { email: userEmail },
        perfumeId: perfumeId,
      },
    });

    return NextResponse.json({ message: "Favorite removed successfully" });
  } catch (error) {
    console.error("Error removing favorite:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}