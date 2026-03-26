# Gestor de Tareas

Aplicación web para gestionar tareas del día a día. Permite visualizar, filtrar y marcar tareas como completadas o pendientes.

## Integrantes

- Tomas Córdoba Urquijo
- Emmanuel Calad Correa
- Jorge Steven Lopez

## Tecnologías

- **Next.js**
- **TypeScript**
- **Tailwind CSS**

## Funcionalidades

- Listado de tareas obtenidas desde una API externa
- Filtros por estado: **Todas**, **Pendientes**, **Completadas**
- Toggle para marcar/desmarcar tareas como completadas
- Estado de carga

## Estructura

```
src/
├── app/
│   ├── page.tsx              # Página de inicio
│   └── task-manager/
│       └── page.tsx          # Gestor de tareas
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    └── TodoList.tsx
```

## Instalación y uso

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.
