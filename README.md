# ApiNode
Api con nodeJs

Dependencias:
    body-parser: "^1.18.3,
    express: "^4.16.4,
    mongoose: "^5.4.13

Programas:
  editor de codigo: visual studio code,
  gestor de base de datos: mongoDB,
  framework: nodeJS
  
Arrancar la api:
    para arrancar la api debes de abrir una consola en la carpeta raiz del proyecto y correr el comando
    "npm run dev", este iniciara el servidor y te devolvera por consola el puerto en el que se esta ejecutando.
    la ruta inicial seria localhost:3000/api/user, de ser necesario sustituir el 3000, por el puerto correspondiente
    tambien se puede alternar entre user,department,coment.
    
Nota: 
    Puede que la direccion te muestre una pagina en blanco, en ese se deben agregar entradas a la base de datos con 
    el metodo post con postman.
