const request = require("supertest");
const { expect } = require("chai");
const app = require("./index.js");

describe("Test api routes: '/ping, '/api/', '/api/crearAeropuertos', '/api/vi/aeropuertos", () => {
  it("Test prueba route '/ping", (done) => {
    request(app)
      .get("/ping")
      .end((err, res) => {
        if (err) {
          console.log("Request " + err);
          done(err);
        } else {
          expect(res.body).to.equal("pong");
          done();
        }
      });
  });

  it("Obtener el clima de todos los aeropuertos", async () => {
    const response = await request(app)
      .get("/api/")
      .query({ at: "2022-11-25T09:00:00" })
      .set("Accept", "application/json");
    expect(response.status).to.eql(200);
    expect(response.body).to.be.an("array").to.have.lengthOf(3);
    response.body.forEach((res) => {
      expect(res).to.be.an("object");
      expect(Object.keys(res)).to.have.lengthOf(18);
    });
  });
  //afecta la base de datos
  // it("Crear aeropuerto, con su clima ", async () => {
  //   const response = await request(app)
  //     .post("/api/crearAeropuerto")
  //     .send({
  //       cityName: "Santiago de Chile",
  //       countryCode: "CHL",
  //       icaoCode: "SCEL",
  //     })
  //     .set("Accept", "application/json");
  //   expect(response.status).to.eql(200);
  //   expect(response.body.weatherAirport).to.be.an("array").to.have.lengthOf(40);

  // });

  it("Obtener el clima de un aeropuerto en momento determinado", async () => {
    const icaoCode = "SAME";
    const response = await request(app)
      .get(`/api/v1/aeropuertos/${icaoCode}`)
      .query({ at: "2022-11-25T09:00:00" })
      .set("Accept", "application/json");
    expect(response.status).to.eql(200);
    expect(response.body.airport).to.be.an("object");
    expect(Object.keys(response.body.airport)).to.have.lengthOf(18);
  });

  it("Obtener el clima de un aeropuerto en un intervalo de tiempo", async () => {
    const icaoCode = "SAME";
    const response = await request(app)
      .get(`/api/v1/aeropuertos/${icaoCode}`)
      .query({
        desde: "2022-11-24T15:00:00",
        hasta: "2022-11-28T15:00:00",
        frecuencia: "diaria",
      })
      .set("Accept", "application/json");
    expect(response.status).to.eql(200);
    expect(response.body.airport).to.be.an("array").to.not.be.empty;
    response.body.airport.forEach((res) => {
      expect(res).to.be.an("object");
      expect(Object.keys(res)).to.have.lengthOf(18);
    });
  });
});
