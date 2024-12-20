/*
  Warnings:

  - You are about to drop the column `mainAccords` on the `Perfume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "mainAccords",
ADD COLUMN     "mainAaaccords" TEXT[];
