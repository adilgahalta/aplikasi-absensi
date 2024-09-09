/*
  Warnings:

  - The values [check_in_time,check_out_time] on the enum `attendances_attendance_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `users_username_key` ON `users`;

-- AlterTable
ALTER TABLE `attendances` MODIFY `attendance_type` ENUM('check_in', 'check_out') NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `username`;
