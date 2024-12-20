-- CreateTable
CREATE TABLE "Perfume" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ratingValue" DOUBLE PRECISION NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "year" INTEGER,
    "topNotes" TEXT[],
    "middleNotes" TEXT[],
    "baseNotes" TEXT[],
    "perfumer1" TEXT,
    "perfumer2" TEXT,
    "mainAccords" TEXT[],
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Perfume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Perfume_url_key" ON "Perfume"("url");
