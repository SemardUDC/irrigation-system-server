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

Por medio de *topics* MQTT la API recibe lecturas de sensores y estado de actuadores. El servidor es esencial para guardar datos históricos de lecturas y servirlas por HTTP al cliente web.

## Cliente
- Framework Angular para cliente Web.
- Bootswatch para temas Bootstrap.
- ngx-mqtt para usar MQTT con Angular.

El cliente web ofrece visualizaciones de los datos recibidos del servidor correspondientes al estado del sistema de riego. También permite accionar las electroválvulas para cambiar su estado y actualizar las visualizaciones de la interfaz al apoyarse en los *topics* MQTT pertinentes.

## Topics MQTT
### Sensores
```
- irrigation-system/sensor/ph-meter
- irrigation-system/sensor/water-flow
- irrigation-system/sensor/ultrasonic
- irrigation-system/sensor/pressure
```
### Actuadores
```
- irrigation-system/actuator/solenoid-valve/get
- irrigation-system/actuator/solenoid-valve/set
```
### Reporte de estado y conexión
```
- irrigation-system/state
```
