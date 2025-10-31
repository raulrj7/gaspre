# README.md

# Prueba Técnica – Backend Developer

## Descripción

Proyecto de prueba técnica para gestión de categorías jerárquicas usando Node.js, TypeScript y Express.
Permite:

* Obtener todas las rutas completas de las categorías (`/categories/paths`)
* Buscar categoría por ID (`/categories/:id`)
* Respuestas consistentes con `code`, `data` y `message`
* Validación de parámetros y manejo de errores centralizado

Se utiliza **data mockeada** (`src/data/categories.ts`) para simular la base de datos.

---

## Estructura de archivos relevante

```
src/
├── app.ts
├── controllers/
│   └── category.controller.ts
├── services/
│   └── category.service.ts
├── routes/
│   └── category.routes.ts
├── middlewares/
│   └── validateId.ts
├── utils/
│   └── response.handler.ts
├── data/
│   └── categories.ts      <-- data mockeada
└── ...
```

---

## Requisitos

* Node.js >= 18
* npm
* TypeScript
* ts-node
* nodemon
* Jest (para pruebas unitarias)

---

## Scripts disponibles

```json
"scripts": {
  "dev": "nodemon --watch src --ext ts,json --exec ts-node src/app.ts",
  "build": "tsc",
  "start": "node dist/app.js",
  "test": "jest"
}
```

---

## Cómo levantar el servidor

### 1. Instalar dependencias

```bash
npm install
```

### 2. Levantar en modo desarrollo (con hot reload)

```bash
npm run dev
```

> El servidor correrá en `http://localhost:3000`.

### 3. Levantar en producción

Primero compilar TypeScript:

```bash
npm run build
```

Luego iniciar el servidor:

```bash
npm start
```

---

## Endpoints

* `GET /categories/paths` → Devuelve todas las rutas completas de categorías
* `GET /categories/:id` → Devuelve la categoría correspondiente al `id`

> Nota: El parámetro `id` es validado para que sea un número positivo.

---

## Data mockeada

El archivo `src/data/categories.ts` contiene toda la información de categorías y subcategorías.
Ejemplo:

```ts
export const categories = {
  id: 1,
  name: "Electrónica",
  subcategories: [
    { id: 2, name: "Computadoras", subcategories: [...] },
    { id: 3, name: "Celulares", subcategories: [...] },
  ],
};
```

---

## Validación de la data mockeada

Para asegurar que **nadie modifique la estructura de la data**, en `CategoryService` se puede usar `Object.freeze` en el constructor:

```ts
constructor() {
  this.root = JSON.parse(JSON.stringify(categories)); 
  Object.freeze(this.root);
}
```

> Si alguien intenta cambiar la data en runtime, se lanzará un error en modo estricto.

---

## Pruebas unitarias

Se utilizan **Jest** para testear los servicios:

### 1. Ejecutar tests

```bash
npm test
```

### 2. Qué se prueba

* Que `getCategoryPaths()` genere todas las rutas correctamente, incluyendo subcategorías anidadas
* Que `findCategoryById(id)` devuelva la categoría correcta
* Que `findCategoryById(id)` devuelva 404 si la categoría no existe

---

## Notas finales

* El proyecto está diseñado para ser extendido fácilmente a una base de datos real.
* Todos los métodos del service devuelven `{ code, data?, message? }` para respuestas consistentes.
* El validator de `id` y el handler centralizado garantizan **seguridad y uniformidad** en la API.
