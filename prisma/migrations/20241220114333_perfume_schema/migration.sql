/*
  Warnings:

  - You are about to alter the column `ratingValue` on the `Fragrance` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Fragrance" ALTER COLUMN "ratingValue" SET DATA TYPE DECIMAL(65,30);
