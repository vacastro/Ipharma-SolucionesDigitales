-- AlterTable
ALTER TABLE `medicamento` ADD COLUMN `stock_minimo` INTEGER NOT NULL DEFAULT 5;

-- CreateTable
CREATE TABLE `AlertaStock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medicamentoId` INTEGER NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlertaStock` ADD CONSTRAINT `AlertaStock_medicamentoId_fkey` FOREIGN KEY (`medicamentoId`) REFERENCES `Medicamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
