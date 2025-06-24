# Etapa 1: Compilación
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
COPY prisma ./prisma
RUN npm run build

# Etapa 2: Ejecución
FROM node:18
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY package*.json ./
RUN npm install --production

EXPOSE 5000
CMD ["node", "dist/server.js"]

