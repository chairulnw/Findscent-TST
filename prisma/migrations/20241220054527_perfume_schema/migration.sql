/*
  Warnings:

  - You are about to drop the column `name` on the `Perfume` table. All the data in the column will be lost.
  - Added the required column `perfume` to the `Perfume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "name",
ADD COLUMN     "perfume" TEXT NOT NULL;
