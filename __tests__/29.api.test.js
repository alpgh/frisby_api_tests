const frisby = require('frisby');
const Joi = frisby.Joi;
const API_KEY = 'PMAK-6496e39f35af230031972da5-4c08447d913b9bbbaea7a16529dc2473ec';
const workspaceId = '6b405185-0304-40ff-9987-45170a3f1cd5'
let webhookName = 'echo webhook'
let collectionUid = '20951934-c85ddb04-4572-4a95-a9ba-212cb0b46950'

describe("Day29", () => {
    frisby.globalSetup({
        request: {
          headers: {
            'x-api-key': API_KEY
          }
        }
      })

    let webhookUrl;

    it('Create Webhook', async () => {       
        const createWebhook = await frisby.post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}`, {
            "webhook":{
                "name": webhookName,
                "collection": collectionUid
            }
        })
        .expect('status', 200)
        .expect('jsonTypes', 'webhook.webhookUrl', Joi.string().required())

        webhookUrl = createWebhook.json.webhook.webhookUrl;
    });

    it('Trigger Webhook', async () => {
        const triggerWebhook = await frisby.post(webhookUrl, {"message": "hello world"})
        .expect('status', 200)
        .expect('bodyContains', 'ok')
    });

});