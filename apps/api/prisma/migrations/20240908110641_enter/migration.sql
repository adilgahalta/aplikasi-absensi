/*
  Warnings:

  - You are about to drop the column `full_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `full_name` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_code` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admins` ADD COLUMN `full_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `full_name`,
    DROP COLUMN `role`,
    ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `department` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `employee_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `gender` ENUM('Pria', 'Wanita') NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `roleId` INTEGER NULL;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Karyawans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,
    `gender` ENUM('Pria', 'Wanita') NOT NULL,
    `employee_code` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Karyawans` ADD CONSTRAINT `Karyawans_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
