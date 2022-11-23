const request = require("supertest");
const expect = require("chai").expect();
const  app  = require('./index')

describe('get / api weatherapp', function() {
  // it('responds with json', function(done) {
  //   request(app)
  //     .get('/?at=2022-11-25T09:00:00')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200, done);
  // });

  it('responds with three objets', function() {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => console.log(response))
  });

});