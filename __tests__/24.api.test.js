const frisby = require('frisby');
const Joi = frisby.Joi;
const moment = require('moment');

describe("Day24", () => {
it('Determine day two days from now', () => {
    return frisby
        .get('http://worldtimeapi.org/api/ip')
        .expect('status', 200)
        .expect('jsonTypes', {
            abbreviation: Joi.string(),
            client_ip: Joi.string()
            
        })
        .then((response) => {
            const currentDate = moment(response.json.datetime);
            const futureDate = currentDate.add(2, 'days').format('dddd');

            console.log('Two days from now is: ' + futureDate);
        });
});
});