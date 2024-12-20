/*
  Warnings:

  - You are about to drop the column `nid` on the `Perfume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Perfume" DROP COLUMN "nid",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "perfume_id_seq";
