/*
  Warnings:

  - You are about to drop the column `Base` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Brand` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Country` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Middle` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Perfume` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Perfumers` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `RatingCount` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `RatingValue` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Top` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `Year` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `imgurl` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `mainaaccords` on the `Perfume` table. All the data in the column will be lost.
  - Added the required column `baseNotes` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainAccords` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleNotes` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfume` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfumers` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratingCount` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratingValue` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topNotes` to the `Perfume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Perfume` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Perfume_url_key";

-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "Base",
DROP COLUMN "Brand",
DROP COLUMN "Country",
DROP COLUMN "Gender",
DROP COLUMN "Middle",
DROP COLUMN "Perfume",
DROP COLUMN "Perfumers",
DROP COLUMN "RatingCount",
DROP COLUMN "RatingValue",
DROP COLUMN "Top",
DROP COLUMN "Year",
DROP COLUMN "imgurl",
DROP COLUMN "mainaaccords",
ADD COLUMN     "baseNotes" JSONB NOT NULL,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "mainAccords" JSONB NOT NULL,
ADD COLUMN     "middleNotes" JSONB NOT NULL,
ADD COLUMN     "perfume" TEXT NOT NULL,
ADD COLUMN     "perfumers" JSONB NOT NULL,
ADD COLUMN     "ratingCount" INTEGER NOT NULL,
ADD COLUMN     "ratingValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "topNotes" JSONB NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
