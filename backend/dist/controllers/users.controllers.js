"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = void 0;
const db_1 = __importDefault(require("../db"));
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield db_1.default.usuario.findMany({ select: { id: true, nombre: true, email: true } });
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: err });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const user = yield db_1.default.usuario.findUnique({ where: { id } });
        if (!user)
            res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ message: 'Error al obtener usuario', error: err });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    try {
        const updated = yield db_1.default.usuario.update({ where: { id }, data: { nombre: name, email } });
        res.json(updated);
    }
    catch (err) {
        res.status(500).json({ message: 'Error al actualizar usuario', error: err });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        yield db_1.default.usuario.delete({ where: { id } });
        res.json({ message: 'Usuario eliminado' });
    }
    catch (err) {
        res.status(500).json({ message: 'Error al eliminar usuario', error: err });
    }
});
exports.deleteUser = deleteUser;
