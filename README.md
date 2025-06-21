# Ipharma Soluciones Digitales

## Ipharma - Sistema de Gestión para Farmacias

Este proyecto corresponde al Trabajo Práctico Integrador de la materia DevOps. Consiste en un sistema backend para gestión de medicamentos, usuarios, proveedores y recetas, con monitoreo, pruebas automatizadas y CI/CD.

##  Tecnologías utilizadas

* Node.js + Express (Backend)
* TypeScript
* Prisma ORM
* MySQL (Base de datos)
* Docker + Docker Compose
* Swagger (Documentación API)
* Prometheus + Grafana (Monitoreo)
* GitHub Actions (CI/CD)
* Render (Despliegue)
* React + Vite (Frontend opcional)

##  Instrucciones para correrlo localmente con Docker

### 1. Clonar el repositorio

```bash
git clone https://github.com/vacastro/Ipharma-SolucionesDigitales.git
cd Ipharma-SolucionesDigitales
git checkout produccion
```

### 2. Crear el archivo `.env`

Crear un archivo `.env` dentro de la carpeta `backend/` con el siguiente contenido:

```ini
DATABASE_URL="mysql://root@localhost:3306/ipharma"
SHADOW_DATABASE_URL="mysql://root@localhost:3306/ipharma_shadow"
JWT_SECRET=Qw8!zP4rT2@xL9$eV7^bN6&uK1*oM3%jS5
SWAGGER_API_URL=http://localhost:5000/api
SWAGGER_APIS_PATH=../src/routes/**/*.ts
```

### 3. Levantar todos los servicios

```bash
docker-compose up -d
```

### 4. Acceder desde el navegador

* **Swagger**: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
* **Frontend**: [http://localhost:3000](http://localhost:3000)
* **Grafana**: [http://localhost:3001](http://localhost:3001) (Usuario: `admin`, Contraseña: `admin`)
* **Prometheus**: [http://localhost:9090](http://localhost:9090)
* **Metrocas**: [http://localhost:5000/metrics](http://localhost:5000/metrics)
