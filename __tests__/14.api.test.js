const frisby = require('frisby');
const TOKEN = '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';

describe('Day14', () => {
    it('Getting repos list', async () => {
        const result = await frisby
        .setup({
         request: {
              headers: {
             'Authorization': `Bearer ${TOKEN}`
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