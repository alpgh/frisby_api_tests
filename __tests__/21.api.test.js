const frisby = require('frisby');
const API_KEY = 'PMAK-6496e39f35af230031972da5-4c08447d913b9bbbaea7a16529dc2473ec'

describe('Day21', () => {
    it('Checking status and collectionID', () => {
      var collectionId = '649f1861dcbb33482c13a5ee'
      return frisby
        .setup({
            request: {
            headers: {
                'x-api-key': API_KEY
            }
         }
        })  
        .get(`https://postman-echo.com/get?collectionUid=${collectionId}`)
        .expect('status', 200)
        .expect('json', ['args', 'collectionUid'], collectionId)
      });
})