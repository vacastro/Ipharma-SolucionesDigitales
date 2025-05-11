# Ipharma Soluciones Digitales

Este proyecto es una solución digital para la gestión de farmacias, desarrollado con un enfoque full-stack utilizando **Vite**, **React**, **TypeScript**, y **Node.js**. Incluye herramientas de calidad de código como **ESLint** y **Prettier** para mantener un código limpio y consistente.

## Requisitos Previos

- [Node.js](https://nodejs.org/) v18 o superior  
- [npm](https://www.npmjs.com/) v9 o superior  
- [Git](https://git-scm.com/)

## Clonación del Repositorio

```bash
git clone https://github.com/vacastro/Ipharma-SolucionesDigitales.git
cd Ipharma-SolucionesDigitales
```

## Instalación de Dependencias

Desde la raíz del proyecto, instalá las dependencias de todos los paquetes:
```bash
npm install
```
Este comando instala las dependencias tanto del frontend como del backend.

## Scripts Disponibles

### En la raíz del proyecto
 - Iniciar frontend y backend en paralelo:
```bash
npm start
```
Este comando utiliza concurrently para levantar tanto el servidor de desarrollo de React (frontend) como el backend de Node.js/Express.
 - Formatear el código con Prettier:
```bash
npm run format
```
## ESLint y Prettier
El proyecto incluye configuración para ESLint y Prettier tanto en el frontend como en el backend, con reglas específicas para TypeScript y React.

### Extensión recomendada
Se recomienda instalar la siguiente extensión para VS Code:

👉 Prettier ESLint (de Rebecca Vest) 

- Configuración recomendada para settings.json
```bash
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnType": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "files.autoSave": "onFocusChange",
  "vs-code-prettier-eslint.prettierLast": false
}

```
## Estructura del proyecto
```bash
Ipharma-SolucionesDigitales/
│
├── backend/         # Servidor Express con TypeScript
│   ├── src/
│   └── ...
│
├── frontend/        # Aplicación Vite + React + TypeScript
│   ├── src/
│   └── ...
│
├── package.json     # Comandos globales y configuración de concurrently
└── README.md
```

## Notas
Asegurarse de no subir la carpeta node_modules/ al repositorio. Ya están correctamente ignoradas en los .gitignore de cada carpeta.

Para agregar nuevas dependencias, hacelo dentro del directorio correspondiente (frontend o backend), dependiendo del uso.


