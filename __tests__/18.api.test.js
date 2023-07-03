const frisby = require("frisby");
const Joi = frisby.Joi;
const URL = 'https://2a6e0231-05f5-4028-8571-cbce1dcfb5b5.mock.pstmn.io';

describe("Day18", () => {
  it("check status and response", async () => {
    await frisby
      .get(`${URL}/cosmos`)
      .expect("status", 200)
      .expect("jsonTypes","*", {
         id: Joi.number(),
        name: Joi.string(),
        tag: Joi.string()
      });
  });
});