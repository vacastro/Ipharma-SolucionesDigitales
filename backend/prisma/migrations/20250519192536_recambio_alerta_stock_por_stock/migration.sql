/*
  Warnings:

  - You are about to drop the column `alerta_stock` on the `Medicamento` table. All the data in the column will be lost.
  - Added the required column `stock` to the `Medicamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Medicamento` DROP COLUMN `alerta_stock`,
    ADD COLUMN `stock` INTEGER NOT NULL;
