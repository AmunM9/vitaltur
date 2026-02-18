# Vital Tur - Experiencias y Hospedaje en Gualivá

Bienvenido al repositorio de **Vital Tur**, una plataforma moderna para conectar turistas con experiencias únicas y hospedajes exclusivos en la región del Gualivá, Cundinamarca.

## 🚀 Descripción del Proyecto

Este proyecto es una aplicación web (Monorepo) construida con tecnologías modernas:
- **Frontend**: React + Vite (ubicado en `apps/web`)
- **Estilos**: Tailwind CSS + Framer Motion
- **Navegación**: React Router

El objetivo es ofrecer una experiencia de usuario fluida y visualmente atractiva para descubrir planes turísticos y alojamientos.

## 🛠️ Requisitos Previos

Asegúrate de tener instalado:
- **Node.js**: v18 o superior.
- **NPM**: Incluido con Node.js.

## 📦 Instalación

1. Clona el repositorio (si aún no lo has hecho):
   ```bash
   git clone <url-del-repositorio>
   cd vitaltur
   ```

2. Instala las dependencias desde la raíz del proyecto:
   ```bash
   npm install
   ```

## ▶️ Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará la aplicación web (`apps/web`) en modo desarrollo. Normalmente estará disponible en:
- [http://localhost:3000](http://localhost:3000)

### Comandos Adicionales

- **`npm run build`**: Construye la aplicación para producción.
- **`npm run lint`**: Ejecuta el linter para revisar el código.

## 📁 Estructura del Proyecto

```
vitaltur/
├── apps/
│   └── web/          # Código fuente de la aplicación frontend
│       ├── src/      # Componentes, páginas y lógica
│       └── public/   # Assets estáticos
├── package.json      # Scripts y dependencias del monorepo
└── README.md         # Este archivo
```

---
Desarrollado con ❤️ para impulsar el turismo en Cundinamarca.
