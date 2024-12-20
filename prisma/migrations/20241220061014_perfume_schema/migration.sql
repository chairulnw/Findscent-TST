/*
  Warnings:

  - Added the required column `nid` to the `Perfume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE perfume_id_seq;
ALTER TABLE "Perfume" ADD COLUMN     "nid" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('perfume_id_seq');
ALTER SEQUENCE perfume_id_seq OWNED BY "Perfume"."id";
