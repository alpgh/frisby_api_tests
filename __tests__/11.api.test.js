const frisby = require('frisby');

describe('Day11', () => {
  it('checking status and level', (done) => {
    frisby
      .get('https://water-ttl.herokuapp.com/hygrometer')
      .expect('status', 200)
      .then((response) => {
        const levelOfWater = response.json.level;

        
        if (levelOfWater < 0.6) {
          frisby
            .post('https://water-ttl.herokuapp.com/water', { duration: 10 })
            .expect('status', 200)
            .then((wateringResponse) => {
              const success = wateringResponse.json.success;
              if (success) {
                console.log('The plants are watered.');
              } else {
                console.log('The plants weren`t watered.');
              }
              done();
            });
        }
        if(levelOfWater >= 0.6) {

          console.log(`The soil isn't dry.`);
          done();
        }
      });
  });
});