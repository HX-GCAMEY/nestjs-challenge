# Desafío de Desarrollo Web Full-Stack

Este desafío consiste en crear una pequeña aplicación web para gestionar una lista de libros. Cada libro tiene un nombre, un ISBN y un autor. El examen consta de dos partes: una API RESTful como backend y la aplicación frontend basada en JavaScript.

## Backend

Para la parte del backend, utilizaremos NestJS, Mongo DB y mongoose. Debes definir los siguientes modelos de datos con las validaciones y restricciones necesarias:

### Schemas

## Author

| Parameter  | Type     |
| :--------- | :------- |
| first_name | `string` |
| last_name  | `string` |

## Book

| Parameter  | Type     |
| :--------- | :------- |
| first_name | `string` |
| last_name  | `string` |

## Endpoints

```http
GET /books/  -> Devuelve una lista de libros en la base de datos en formato JSON

GET /book/{{id}}/: Devuelve una vista detallada del libro especificado por su ID, anidando los detalles del autor en formato JSON.

GET /authors/: Devuelve una lista de autores en la base de datos en formato JSON.

GET /author/{{id}}/: Devuelve una vista detallada del autor especificado por su ID.

POST /author/: Crea un nuevo autor con los detalles especificados. Espera un cuerpo en formato JSON.

POST /book/: Crea un nuevo libro con los detalles especificados. Espera un cuerpo en formato JSON.

PUT /author/{{id}}: Actualiza un autor existente. Espera un cuerpo en formato JSON.

PUT /book/{{id}}: Actualiza un libro existente. Espera un cuerpo en formato JSON.

```

## Frontend

Implementa una pequeña aplicación frontend para consumir la API que desarrollaste anteriormente.
El frontend debe ser capaz de mostrar una lista de nombres de los libros disponibles en la base de datos.
Al hacer clic en el nombre de un libro en la lista, el usuario debe ser redirigido a una vista más detallada del libro seleccionado, donde se le presenten el ISBN y los detalles del autor.
También debes implementar dos formularios donde el usuario pueda crear/actualizar autores y libros (utilizando los puntos finales POST y PUT).

Debes construir esta aplicación utilizando React y Vite (Si manejas estados globales hazlo únicamente con React)
