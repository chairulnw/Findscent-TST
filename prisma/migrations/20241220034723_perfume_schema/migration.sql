/*
  Warnings:

  - You are about to drop the column `perfumer1` on the `Perfume` table. All the data in the column will be lost.
  - You are about to drop the column `perfumer2` on the `Perfume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "perfumer1",
DROP COLUMN "perfumer2",
ADD COLUMN     "perfumers" TEXT[],
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Perfume_id_seq";
