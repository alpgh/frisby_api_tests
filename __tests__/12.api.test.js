const frisby = require('frisby');
const Joi = frisby.Joi;
const COLLECTIONID = '20951934-99240920-0804-4c1d-acaa-5b477be3326b';
const ENVIRONMENTID  = '20951934-b8b0e531-0b8a-4325-99f5-edbe42fc8c7d';
const WORKSPACEID = '6b405185-0304-40ff-9987-45170a3f1cd5';


describe('Day12', () => {
  it('Submit', async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": process.env.API_KEY_TEST,
          },
        },
      })
      .post('https://postman-echo.com/post', {
        collectionId: COLLECTIONID,
        environmentId: ENVIRONMENTID,
        workspaceId: WORKSPACEID
      })
      .expect('status', 200)
      .expect('json', 'data', {
        collectionId: COLLECTIONID,
        environmentId: ENVIRONMENTID,
        workspaceId: WORKSPACEID
      });
  });
});