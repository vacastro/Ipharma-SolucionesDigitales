"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./public/auth.routes"));
const users_routes_1 = __importDefault(require("./private/users.routes"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const proveedor_routes_1 = __importDefault(require("./private/proveedor.routes"));
const medicamento_routes_1 = __importDefault(require("./private/medicamento.routes"));
const usuarios_routes_1 = __importDefault(require("./public/usuarios.routes"));
const router = (0, express_1.Router)();
// Rutas públicas
router.use('/auth', auth_routes_1.default);
router.use('/users', usuarios_routes_1.default);
// Rutas privadas (requieren autenticación)
router.use('/users', authMiddleware_1.authMiddleware, users_routes_1.default);
router.use('/proveedores', proveedor_routes_1.default);
router.use('/medicamentos', medicamento_routes_1.default);
exports.default = router;
