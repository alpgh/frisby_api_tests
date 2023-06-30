const frisby = require('frisby');

describe('Day10', () => {
    it('Mock call', function () {
        return frisby
            .get('https://26f7fd30-46aa-494b-bbc6-a1fa41760b66.mock.pstmn.io')
            .expect('status', 200)
            .expect('json', 'answer', {
                "name": "Alex",
                "message": "happy holiday!",
                "header": "You made an example"
            })
            .then((response) => {
                console.log(response.json);
            });
    });
});