const frisby = require('frisby');
require('dotenv').config();
const token = process.env.token;

describe('Day14', () => {
    it.skip('Getting repos list', async () => {
        const result = await frisby
        .setup({
         request: {
              headers: {
             'Authorization': `Bearer ${token}`
              }
            }
          })
          .get('https://api.github.com/user/repos')
          .expect('status', 200)
        var repoList = ['Repositories:']
        result.json.forEach(element => {
            repoList.push(element.name)
        });
        console.log(repoList)
    })
})