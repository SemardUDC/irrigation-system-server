# Sistema de riesgo
Servidor del proyecto Sistema de Riego para la recolección de datos y activación de electroválvulas por medio de MQTT.

## Servidor
- API RESTful NodeJS con Express.
- MongoDB y Mongoose para persistencia.
- MQTT.js para manejo de comunicación MQTT con Node.

Recibe datos de un microcontrolador por medio del protocolo MQTT. Los datos a gestionar corresponden a **sensores** y **actuadores**. 

### Sensores:
- Sensor de Presión.
- Caudalímetro.
- PH-metro.
- Ultrasonido.

### Actuadores:
- Electrovalvula para activar/desactivar flujo de agua.

Por medio de *topics* MQTT la API recibe lecturas de sensores y estado de actuadores. El servidor se encarga de enviar peticiones para cambiar el estado de la electrovalvula y así permitir/negar el paso de agua.

## Cliente
- Framework Angular para cliente Web.
- Bootswatch para temas Bootstrap.
- ngx-mqtt para usar MQTT con Angular.

El cliente web ofrece visualizaciones de los datos recibidos por los sensores y permite, mediante la misma interfaz, accionar las electroválvulas para cambiar su estado. Todo se gestiona mediante los *topics* MQTT pertinentes.

## Topics MQTT
Por rellenar

## Formato de transmisión JSON
Por rellenar
