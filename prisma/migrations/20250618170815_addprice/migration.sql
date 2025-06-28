/*
  Warnings:

  - Added the required column `price` to the `Court` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Court" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
