const frisby = require('frisby');
const Joi = frisby.Joi;
const fs = require('fs');
const csv = require('csv-parser');

describe("Day02 get", () => {
  let data = [];

  beforeAll((done) => {
    fs.createReadStream('..//geoMap.csv')
      .pipe(csv())
      .on('data', (row) => {
        data.push(row);
      })
      .on('end', () => {
        done();
      });
  });

  it("Check status and data", () => {
    for (let i = 0; i < data.length; i++) {
      let { Region, boba } = data[i];
      frisby
        .get(`https://postman-echo.com/get?Region=${Region}&boba=${boba}`)
        .expect("status", 200)
        .expect('json', {
          args: {
            Region: Region,
            boba: boba
          }
        });
    }
  });
});
