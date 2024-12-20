/*
  Warnings:

  - Changed the type of `ratingValue` on the `Fragrance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Fragrance" DROP COLUMN "ratingValue",
ADD COLUMN     "ratingValue" DOUBLE PRECISION NOT NULL;
