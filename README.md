# Aplicación de Tareas (Todo App)

Esta es una aplicación simple de lista de tareas (Todo) desarrollada con React Native y Expo. La aplicación permite a los usuarios crear, gestionar y dar seguimiento a sus tareas con una interfaz limpia e intuitiva.

## Inspiración de Diseño

El diseño de la interfaz está inspirado en [este diseño de Lista de Tareas en Behance](https://www.behance.net/gallery/90219979/Todo-List/modules/521605207) por Samuel Owusu-Aboagye.

## Características

- Crear nuevas tareas
- Marcar tareas como completadas/pendientes
- Eliminar tareas
- Filtrar tareas (Todas, Completadas, Pendientes)
- Persistencia de datos con AsyncStorage

## Estructura del Proyecto

- `app/`: Código principal de la aplicación
-`components/`: Componentes UI como ítems de tareas, campos de entrada, etc.
- `hooks/`: Hooks personalizados de React
  - `useTodos.ts`: Hook para gestionar las tareas con persistencia
- `interfaces/`: Interfaces de TypeScript

## Tecnologías Utilizadas

- React Native / Expo
- TypeScript
- AsyncStorage para persistencia de datos

## Cómo Empezar

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar la aplicación

   ```bash
   npx expo start
   ```

## Recomendaciones para Pruebas

Para una mejor experiencia, recomendamos probar la aplicación en un dispositivo físico en lugar de solo un emulador. Para la persistencia de datos

Puedes usar Expo Go en tu dispositivo físico escaneando el código QR que aparece cuando inicias la aplicación con `npx expo start`.
