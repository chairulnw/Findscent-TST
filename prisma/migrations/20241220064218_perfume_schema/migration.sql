/*
  Warnings:

  - You are about to drop the column `mainaccords` on the `Perfume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "mainaccords",
ADD COLUMN     "mainaaccords" TEXT[];
