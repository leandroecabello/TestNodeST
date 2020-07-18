# TestNodeST
### Sooft Technology Nodejs Test

- Se realiza un post y un get de restaurantes almacenando los datos en memoria a través de un archivo json

## Tecnologías empleadas
- Nodejs
- express 

## Uso
Puede descargar este repo para testear sin compromiso, clonandolo y una vez descargado correr npm i para instalara dependedencias, si lo desea puede instalar nodemon 
para actualizar el servidor automaticamente ya que está configurado para correrlo con npm run dev.
Ej:
  - Con postman puede probar la carga de un restuarant de la siguiente manera:
    ```json
    {
      "name": "nombre del restaurant",
      "kindOfRestaurant": "comida thai",
      "specials": ["pollo","pescado","milanesa"]
    }
    
   ``` 

- Respuesta ok. Informa que se cargo correctamente (puede comprobarlo en el archivo restaurants.js)
- Bad request. error informa que el nombre del restaurante ya existe 
