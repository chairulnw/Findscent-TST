/*
  Warnings:

  - You are about to drop the column `baseNotes` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `brand` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `imgUrl` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `mainAccords` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `middleNotes` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `perfume` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `perfumers` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `ratingCount` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `ratingValue` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `topNotes` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Perfume` table. All the data in the column will be lost.
  - Added the required column `Brand` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Country` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Perfume` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RatingCount` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RatingValue` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgurl` to the `Perfume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "baseNotes",
DROP COLUMN "brand",
DROP COLUMN "country",
DROP COLUMN "gender",
DROP COLUMN "imgUrl",
DROP COLUMN "mainAccords",
DROP COLUMN "middleNotes",
DROP COLUMN "perfume",
DROP COLUMN "perfumers",
DROP COLUMN "ratingCount",
DROP COLUMN "ratingValue",
DROP COLUMN "topNotes",
DROP COLUMN "year",
ADD COLUMN     "Base" TEXT[],
ADD COLUMN     "Brand" TEXT NOT NULL,
ADD COLUMN     "Country" TEXT NOT NULL,
ADD COLUMN     "Gender" TEXT NOT NULL,
ADD COLUMN     "Middle" TEXT[],
ADD COLUMN     "Perfume" TEXT NOT NULL,
ADD COLUMN     "Perfumers" TEXT[],
ADD COLUMN     "RatingCount" INTEGER NOT NULL,
ADD COLUMN     "RatingValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "Top" TEXT[],
ADD COLUMN     "Year" INTEGER,
ADD COLUMN     "imgurl" TEXT NOT NULL,
ADD COLUMN     "mainaccords" TEXT[];
