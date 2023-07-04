const frisby = require("frisby");
const user = "alex";
const pass = "j3qq4";
const BaseURL = 'http://security.postman-breakable.com';
const Joi = frisby.Joi;

    describe("Day27", () => {
it ("User login", async () => {
  const userLogged = await frisby.post(`${BaseURL}/user/login`, {
    body: {
      username: user,
      password: pass,
    },
  });

     sessionToken = userLogged.json.response.session_token;
     userId = userLogged.json.response.user_id;
});


it("Collection run", async () => {
    await frisby
      .get(`${BaseURL}/user`, {
        headers: {
          "x-api-key": sessionToken,
        },
      })
      .expect("status", 200);
  
    await frisby
      .get(`${BaseURL}/account/${userId}/summary`, {
        headers: {
          "x-api-key": sessionToken,
        },
      })
      .expect("status", 200)
      .expect("jsonTypes", {
        response: {
          balance: frisby.Joi.number(),
          last_transaction: frisby.Joi.number(),
          user_id: frisby.Joi.string().guid(),
        },
      });
  
    await frisby.get(`${BaseURL}/user/logout`, {
      headers: {
        "x-api-key": sessionToken,
      },
    })
      .expect("status", 200);
  
    await frisby
      .get(`${BaseURL}/account/${userId}/summary`)
      .expect("status", 403);
  });
});