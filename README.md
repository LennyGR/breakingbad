# Breaking Bad

Prueba técnica para validar los siguientes puntos:

 - Correcta organización del código fuente. Componentización adecuada.
- Óptima comunicación con el backend. Óptima navegación de las rutas.
- Gestionar correctamente el feedback de carga de datos y gestión errores (para informar en todo momento al usuario mientras se está realizando una operación u ocurre algún error al efectuarla).
- Dotar a la aplicación de funcionalidad para poder cambiar el idioma entre inglés y español, internacionalizando las cadenas de la propia aplicación (obviamente, las que responden los servicios no).
- A pesar de que se trate de una aplicación simple, se valorará que use una librería de gestión de estados, como Redux y efectos tipo thunk/sagas. Es un plus, no un requisito.
- Incluya algunos tests unitarios que den cobertura a determinada funcionalidad de la aplicación.


## Comenzando 🚀

### Organización 📋

#### 1. Carpeta public:
Contiene la subcarpeta locales dónde están las traduciones necesarias para la internacionalización.

#### 2. Carpeta src
Contiene las siguientes subcarpetas, con el contenido correspondiente agrupado por funcionalidad

- API : Incluye las constantes necesarias para conectarse a los respectivos servicios de https://www.breakingbadapi.com/api
- Assets: Logs e imágenes utilizadas
- Components: Conjunto de componentes utilizados. Cada carpeta se corresponde con un componente, pero éstos a su vez pueden contener subcomponentes, archivos de estilos y el archivo del test unitario
- Hooks: Hooks creados (la mayoría de ellos para realizar fetchs a través de react-query)
- i18n: Archivos necesarios para la internacionalización
- Redux: Contiene los elementos de redux: actions, reducers, selectors y el store.
- Styles: Contiene los estilos comunes

## Instalación 🔧

Dado que las dependencias están añadidas en el package.json, para instalar el proyecto es necesario ejecutar

```
npm i
```

Una vez instaladas las dependencias, para lanzar el proyecto en modo desarrollo:

```
npm start
```
Para lanzar el proyecto en modo producción, es necesario generar primero ejecutar

```
npm run build
```
Si necesitamos instalar el servidor, ejecutamos (el comando anterior nos reportaría sobre ello de todas formas).

```
npm i serve
```

Para ejecutar el servidor ejecutaremos

```
serve -s build
```

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas unitarias, ejecutaremos 

```
npm test
```
Si queremos un reporte de la covertura de las pruebas

```
npm test -- --coverage
```

## Construido con 🛠️

Herramientas utilizadas

* [MaterialUI](https://mui.com) - Biblioteca de componentes
* [Styled-Components](https://styled-components.com) - Librería que te permite escribir código CSS en JavaScript.
* [Axios](https://github.com/axios/axios) - Manejador de solucitudes a la API.
* [i18next](https://www.i18next.com/) - Librería para la internacionalización del proyecto.
* [React Query](https://react-query.tanstack.com/) - Usado para gestionar solicitudes a la API y aprovechar su gestión de la cache.
* [Redux](https://es.redux.js.org/) - Gestión del storage.
* [Thunk](https://github.com/reduxjs/redux-thunk) - Middleware para usar conjuntamente con Redux.
* [Reselect](https://github.com/reduxjs/reselect) - Mejorar la performance de los selectores de Redux.

## Consideraciones 📖

#### 1. Integración de MUI con styled-components:

Inicialmente MaterialUI está integrado con Emotion, para hacerlo trabajar con styled-components se ha seguido ésta guía:
- https://github.com/mui-org/material-ui/tree/master/examples/create-react-app-with-styled-components
#### 2. Fallos en la API:
La API falla a la hora de obtener las frases, algunas veces devuelve valores para el nombre de pila y otras para el apodo conjuntamente con el apellido. Se ha solucionado utilizando redux. 
#### 3. Sección 'Populares':
Se ha creado una sección 'Populares' para sacarle provecho a redux generando un ranking de visitas.

## Autores ✒️

* **Leonardo Gil Rodríguez** - [LennyGR](https://github.com/LennyGR) 

---
