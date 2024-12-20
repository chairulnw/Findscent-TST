import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const brand = searchParams.get("brand");
  const gender = searchParams.get("gender");
  const country = searchParams.get("country");
  const yearRange = searchParams.get("yearRange");
  const rating = searchParams.get("rating");
  const mainAccord = searchParams.get("mainAccord"); // Ambil mainAccord di sini

  const filters: any = {};

  // Filter Query
  if (query) {
    filters.perfume = { contains: query, mode: "insensitive" };
  }

  // Filter Brand
  if (brand) {
    filters.brand = { contains: brand, mode: "insensitive" };
  }

  // Filter Gender
  if (gender) {
    filters.gender = { equals: gender, mode: "insensitive" };
  }

  // Filter Country
  if (country) {
    filters.country = { contains: country, mode: "insensitive" };
  }

  // Filter Year Range
  if (yearRange) {
    const [startYear, endYear] = yearRange.split("-").map(Number);
    filters.year = { gte: startYear, lte: endYear };
  }

  // Filter Rating
  if (rating) {
    filters.ratingValue = { gte: parseFloat(rating) };
  }

  if (mainAccord) {
    filters.OR = [
      { mainAccord1: { contains: mainAccord, mode: "insensitive" } },
      { mainAccord2: { contains: mainAccord, mode: "insensitive" } },
      { mainAccord3: { contains: mainAccord, mode: "insensitive" } },
      { mainAccord4: { contains: mainAccord, mode: "insensitive" } },
      { mainAccord5: { contains: mainAccord, mode: "insensitive" } },
    ];
  }
  

  try {
    // Query database dengan filter
    const perfumes = await prisma.fragrance.findMany({
      where: filters, // Menggunakan filters langsung
      orderBy: { ratingValue: "desc" }, // Urutkan berdasarkan ratingValue descending
    });

    console.log("Filters Applied:", filters); // Debugging
    console.log("Query Results:", perfumes); // Debugging
    return NextResponse.json(perfumes);
  } catch (error) {
    console.error("Error fetching fragrances:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
