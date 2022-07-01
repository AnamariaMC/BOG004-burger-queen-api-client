# Burger Queen (API Client)

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación del proyecto](#5-criterios-de-aceptación-del-proyecto)
* [4. Prototipo](#4-prototipo)
* [5. Producto Final](#5-producto-final)
* [6. Creado Por](#6-creado-por)


***

## 1. Preámbulo

Utilizando [React](https://reactjs.org/) contruimos una [SPA](https://es.wikipedia.org/wiki/Single-page_application) en la cual entregamos una API funcional a nuestrx clientx
con la que podra administrar su negocio y trabajadores, montar y tomar pedidos por los meseros y los chef.

## 2. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

![burger-queen](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/main/src/lib/hamburger.png)

Este proyecto tiene dos áreas: interfaz (cliente) y API (servidor). Nuestra
clienta nos ha solicitado desarrollar la interfaz que se integre con la API
que otro equipo de desarrolladoras está trabajando simultáneamente

## 3. Criterios de aceptación del proyecto

### Definición del producto

Para la definición del producto se trabajaron 5 Historias de Usuario que fueron desarroladas a lo largo de 5 Sprints desde el prototipo hasta la funcionalidad. 

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
## 4. Prototipo

![prototipo-BQ1](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/prototipoBQ1.PNG)
![prototipo-BQ2](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/prototipoBQ2.PNG)

## 5. Producto Final
##### Vista del inicio de sesión /Login
![login](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/loginBQ.PNG)
![login-con-errores](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/msjerrorloginBQ.PNG)

##### Vista del Mesero/Waiter 
![waiter-productos](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/waiter1.PNG)
![waiter-resumen](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/waiter4.PNG)
![Pedidos-pendientes-mesero](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/waiter2.PNG)
![Pedidos-entregados](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/waiter3.PNG)

##### Vista del Chef
![]()

##### Vista del Administrador
![administrador](https://github.com/AnamariaMC/BOG004-burger-queen-api-client/blob/desarrollo/src/lib/admin1.PNG)


## 6. Creado Por:

[AnamariaMedina](https://github.com/AnamariaMC) y 
[KarenAlarcon](https://github.com/KalarconYarz) 😊 con ❤️.

