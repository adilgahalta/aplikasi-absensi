/*
  Warnings:

  - You are about to drop the `Karyawans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Karyawans` DROP FOREIGN KEY `Karyawans_userId_fkey`;

-- DropTable
DROP TABLE `Karyawans`;
