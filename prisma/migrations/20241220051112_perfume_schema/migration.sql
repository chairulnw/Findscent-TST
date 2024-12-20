/*
  Warnings:

  - You are about to drop the column `mainAaaccords` on the `Perfume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "mainAaaccords",
ADD COLUMN     "mainAccords" TEXT[];
