/*
  Warnings:

  - You are about to drop the `Perfume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Perfume";

-- CreateTable
CREATE TABLE "Fragrance" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "perfume" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ratingValue" TEXT NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "year" INTEGER,
    "perfumer" TEXT,
    "mainAccord1" TEXT,
    "mainAccord2" TEXT,
    "mainAccord3" TEXT,
    "mainAccord4" TEXT,
    "mainAccord5" TEXT,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Fragrance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fragrance_url_key" ON "Fragrance"("url");
