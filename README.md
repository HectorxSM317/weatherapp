# WeatherApp
## DESAFIO ORIGINAL

[Open Weather  Map API](https://openweathermap.org/current#home) es un proyecto que entrega informacion sobre el clima en una ciudad determinada. Utilizando PostgreSQL, Node.js y Express, crear un servicio REST (API) que acumule informacion sobre el clima de una ciudad. 

[ICAO Codes](https://en.wikipedia.org/wiki/List_of_airports_by_ICAO_code:_A) es la lista de codigos ICAO referenciando aeropuertos. 

El servicio REST (API) que crees, capturando informacion sobre el clima, deberia de ser capaz de recibir como parametro el codigo ICAO del aeropuerto de la ciudad, para mostrar finalmente el clima en un aeropuerto en un momento determinado. Usaremos como referencia, las ciudades de Buenos Aires (Aeropuerto Ezeiza), Mendoza (aeropuerto de la capital) y Santiago de Chile (Aeropuerto Arturo Benitez). 

Desarrollar los siguientes endpoints

## Clima en todos los aeropuertos referenciados en la descripcion

Datos de todos los aeropuertos el dia 1 de Enero del 2022, a las 9 am UCT:

`/api?at=2022-01-01T09:00:00`

Este endpoint deberia de retornar en formato JSON, la informacion del clima disponible para cada aeropuerto.

## Datos climaticos de un Aeropuerto en un momento determinado 

`/api/v1/aeropuertos/<codigo ICAO>?at=2022-01-01T09:00:00`

## Datos climaticos dada una frecuencia de tiempo para un aeropuerto determinado 

`/api/v1/aeropuertos/<codigo ICAO>desde=2017-11-01T11:00:00&hasta=2017-12-01T11:00:00&frecuencia=diaria`

En este caso, las frecuencias posibles son diaria y semanal

## Cambios en el desafío

La api, dejó de ser gratuita, y la version free, solo permite hacer una solicitud de clima actual, y un forecast de 5 dias y 3 horas, por lo que los endpoints fueron modificados y en vez de hacer las solicitudes a fechas pasadas, se hicieron a fechas posteriores.

### Clima en todos los aeropuertos referenciados en la descripcion

Datos de todos los aeropuertos el dia 24 de noviembre del 2022, a las 9 am UCT:

`http://52.67.254.194:4000/api?at=2022-11-24T09:00:00`

### Datos climaticos de un Aeropuerto en un momento determinado 

`http://52.67.254.194:4000/api/v1/aeropuertos/<codigo ICAO>?at=2022-11-24T09:00:00`

### Datos climaticos dada una frecuencia de tiempo para un aeropuerto determinado 

`http://52.67.254.194:4000/api/v1/aeropuertos/<codigo ICAO>?hasta=2022-11-26T15:00:00&desde=2022-11-24T15:00:00&frecuencia=diaria`

## ICAO codes
![Build Status](https://img.shields.io/badge/Buenos_Aires-SAEZ-informational)
![Build Status](https://img.shields.io/badge/Mendoza-SAME-informational)
![Build Status](https://img.shields.io/badge/Chile-SCEL-informational)

## Fechas y hora disponibles en la base de datos

![Build Status](https://img.shields.io/badge/Desde-2022/11/24T06:00:00-informational)
![Build Status](https://img.shields.io/badge/Hasta-2022/11/28T21:00:00-informational)

## Endpoint /ping, para conocer el estado de la conexión

`http://52.67.254.194:4000/ping`
res `pong`

## Host aplicación node

AWS- amazon web service, instancia EC2

## Host base de datos Postgres

ElephantSQL - https://www.elephantsql.com/

## Unit testing Supertest/Mocha/chai

Comando:

```sh
npm test
```

## Instrucciones conexión local

Clonar repo:

```sh
git clone https://github.com/HectorxSM317/weatherapp.git
```

Instalar dependencias:

```sh
cd backend && npm install
```

Base de datos con Docker Compose:

```sh
docker-compose up -d
```

Levantar backend:

```sh
npm run dev
```

Con siguiente endpoint, se realiza una solicitud a la base de datos de la api [Open Weather  Map API](https://openweathermap.org/current#home)

`http://localhost:4000/api/crearAeropuerto`

enviamos a través de body, nombre, codigo de país y ICAO Code

ejemplo:

{
    "cityName": "Santiago de Chile",
    "countryCode": "CHL",
    "icaoCode": "SCEL"
}

Como respuesta nos devuelve un json, con el clima de dias posteriores, agregandolo a la base de datos que ya hemos configurado.