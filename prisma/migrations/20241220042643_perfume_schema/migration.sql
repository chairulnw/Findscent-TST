/*
  Warnings:

  - Made the column `year` on table `Perfume` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Perfume" ALTER COLUMN "year" SET NOT NULL;
