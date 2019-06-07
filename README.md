# Sistema de riego
Servidor del proyecto Sistema de Riego para la recolección de datos y activación de electroválvulas por medio de MQTT.

## Servidor
- API RESTful NodeJS con Express.
- MongoDB y Mongoose para persistencia.
- MQTT.js para manejo de comunicación MQTT con Node.

Recibe datos de un microcontrolador por medio del protocolo MQTT. Los datos a gestionar corresponden a **sensores** y **actuadores**. 

### Sensores:
- Sensor de Presión.
- Caudalimetro.
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
#### Estructura mensaje a publicar
```
{
    "identification": [number],
    "description": [string],
    "ph" | "content" | "distance" | "kpa" : [number | string]
}
```

### Actuadores

El sentido jerárquico de 'get' y 'set' cobran sentido de acuerdo a quién es el suscriptor y publicador. Get para cuando el ESP publica el estado de los actuadores. Set, para cuando el ESP, como suscriptor al topic, recibe un payload para modificar el estado de actuadores.

**get** indica publicación del estado del actuador por el ESP. Así, los suscritos al topic, obtienen los datos.

**set** indica modificación del estado del actuador. Normalmente por activación/desactivación. Así, el servidor publica en este topic los motores o electrovalvulas a abrir/cerrar y el ESP, suscrito al mismo,recibe las instrucciones.

```
- irrigation-system/actuator/solenoid-valve/get
- irrigation-system/actuator/solenoid-valve/set
- irrigation-system/actuator/pump-motor/get
- irrigation-system/actuator/pump-motor/set
```

#### Estructura mensaje a publicar
##### Mensaje Get Publicador: ESP
```
{
    "identification": [number],
    "description": [string],
    "open" | "state" : [boolean]
}
```
##### Mensaje Set Suscrito: ESP
```
{
    "identification": [char | number],
    "action": [boolean]
}
```

El campo *identification* puede ser un char o número. Char cuando es '*', que indica aplicación de la acción a todos los actuadores correspondientes al topic. Number, correspondiente a la identificación individual de cada actuador.

### Reporte de estado y conexión
```
- irrigation-system/state
```

## RESTful API
### Sensores
```
- GET /api/sensor/
- GET /api/sensor/water-flow/
- GET /api/sensor/water-flow/:identification
- GET /api/sensor/ultrasonic/
- GET /api/sensor/ultrasonic/:identification
- GET /api/sensor/ph-meter/
- GET /api/sensor/ph-meter/:identification
- GET /api/sensor/pressure/
- GET /api/sensor/pressure/:identification
```
### Actuadores
```
- GET /api/actuator/
- GET /api/actuator/solenoid-valve
- GET /api/actuator/solenoid-valve/:identification
- GET /api/actuator/pump-motor
- GET /api/actuator/pump-motor/:identification
- POST /api/actuator/solenoid_vale
- POST /api/actuator/solenoid-valve/:identification
- POST /api/actuator/pump-motor
- POST /api/actuator/pump-motor/:identification
```

### Estado de Sensores y Actuadores
Los siguientes devuelven un objeto JSON, conformado por el último registros en la BD de cada sensor/actuador de acuerdo id.

```
- GET /api/state
- GET /api/sensors
- GET /api/actuators
```

### Parametros de Consulta RESTful
| Parametro | Descripción                                                                                         | Tipo   |
|-----------|-----------------------------------------------------------------------------------------------------|--------|
| `time`      | Define una franja de tiempo para filtrar los datos a servir. Valores esperados son `today` o `day`. | `string` |
| `value`     | Solo útil cuando `time=day`. Recibe un timestamp y evalua los registros con el día que representa.     | `number` |
| `count`    | Numero de registros a entregar.                                                                     | `number` |   

