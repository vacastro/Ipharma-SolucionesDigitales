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
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../db"));
const jwt_1 = require("../utils/jwt");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, clave, nombre, perfil } = req.body;
    const existingUser = yield db_1.default.usuario.findFirst({ where: { email: email } });
    if (existingUser)
        res.status(400).json({ message: 'Email ya registrado' });
    if (!isValidPerfilEnum(perfil)) {
        res.status(400).json({ message: 'Perfil inválido' });
    }
    const hashedPassword = yield bcrypt_1.default.hash(clave, 10);
    console.log('Registrando usuario ...', { email, clave, nombre, perfil, hashedPassword });
    const user = yield db_1.default.usuario.create({
        data: {
            nombre: nombre,
            email: email,
            clave: hashedPassword,
            perfil: perfil,
            activo: true
        },
    });
    res.status(201).json({ message: 'Usuario creado con éxito', user });
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield db_1.default.usuario.findFirst({ where: { email } });
        if (!user)
            res.status(401).json({ message: 'Credenciales inválidas' });
        const valid = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.clave);
        if (!valid)
            res.status(401).json({ message: 'Credenciales inválidas' });
        const token = (0, jwt_1.generateToken)({ id: user === null || user === void 0 ? void 0 : user.id, email: user === null || user === void 0 ? void 0 : user.email });
        res.json({ message: 'Login exitoso', token });
    }
    catch (err) {
        res.status(500).json({ message: 'Error en login', error: err });
    }
});
exports.loginUser = loginUser;
const isValidPerfilEnum = (value) => {
    return value === 'farmaceutico' || value === 'administrativo';
};
