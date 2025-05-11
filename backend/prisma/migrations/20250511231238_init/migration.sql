-- CreateTable
CREATE TABLE `Proveedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medicamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `principio_activo` VARCHAR(191) NOT NULL,
    `laboratorio` VARCHAR(191) NOT NULL,
    `proveedor_id` INTEGER NOT NULL,
    `fecha_vencimiento` DATETIME(3) NOT NULL,
    `forma_farmaceutica` ENUM('comprimido', 'solucion') NOT NULL,
    `presentacion` ENUM('caja5', 'caja10', 'solucion50', 'solucion80') NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `alerta_stock` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Devolucion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medicamento_id` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `motivo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medicamento_id` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Receta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paciente_nombre` VARCHAR(191) NOT NULL,
    `medico_nombre` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RecetaMedicamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `receta_id` INTEGER NOT NULL,
    `medicamento_id` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `estado` ENUM('pendiente', 'recibido') NOT NULL DEFAULT 'pendiente',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `cliente_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `total` DECIMAL(65, 30) NOT NULL,
    `formaPago` ENUM('efectivo', 'tarjeta') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VentaMedicamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `venta_id` INTEGER NOT NULL,
    `medicamento_id` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_unitario` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(191) NOT NULL,
    `perfil` ENUM('farmaceutico', 'administrativo') NOT NULL,
    `activo` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `suscripto` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medicamento` ADD CONSTRAINT `Medicamento_proveedor_id_fkey` FOREIGN KEY (`proveedor_id`) REFERENCES `Proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Devolucion` ADD CONSTRAINT `Devolucion_medicamento_id_fkey` FOREIGN KEY (`medicamento_id`) REFERENCES `Medicamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_medicamento_id_fkey` FOREIGN KEY (`medicamento_id`) REFERENCES `Medicamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RecetaMedicamento` ADD CONSTRAINT `RecetaMedicamento_receta_id_fkey` FOREIGN KEY (`receta_id`) REFERENCES `Receta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RecetaMedicamento` ADD CONSTRAINT `RecetaMedicamento_medicamento_id_fkey` FOREIGN KEY (`medicamento_id`) REFERENCES `Medicamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VentaMedicamento` ADD CONSTRAINT `VentaMedicamento_venta_id_fkey` FOREIGN KEY (`venta_id`) REFERENCES `Venta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VentaMedicamento` ADD CONSTRAINT `VentaMedicamento_medicamento_id_fkey` FOREIGN KEY (`medicamento_id`) REFERENCES `Medicamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
