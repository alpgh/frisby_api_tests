const frisby = require("frisby");
const apiKey =
  "PMAK-6496e39f35af230031972da5-6060b91b5b35fb78ab76de325f485c4bf2";
const Joi = frisby.Joi;

describe("Day04", () => {
  it("Check status and response body", function () {
    return frisby
      .post("https://api.getpostman.com/collections", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      })
      .expect("status", 200)
      .expect("jsonTypes", "collections.*", {
        id: frisby.Joi.string(),
        name: frisby.Joi.string(),
        isPublic: frisby.Joi.boolean(),
      });
  });
});






