const frisby = require("frisby");
const handlebars = require("handlebars");
const Joi = frisby.Joi;

describe("Day20", () => {
  const template = `
  <style>
    table {
      background-color: #00FFEF;
      border-collapse: collapse;
      width: 100%;
    }
    
    th, td {
      text-align: left;
      padding: 8px;
    }
    
    th {
      background-color: #4CAF50;
      color: white;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  </style>

  <table>
    <tr>
      <th>Name</th>
      <th>URL</th>
    </tr>
    {{#each response.results}}
    <tr>
      <td>{{name}}</td>
      <td>{{url}}</td>
    </tr>
    {{/each}}
  </table>
`;
  const compiledTemplate = handlebars.compile(template);

  it("Checking status and response", async () => {
    const response = await frisby
      .get("https://pokeapi.co/api/v2/type")
      .expect("status", 200)
      .expect('jsonTypes', 'results.*', {
        name: frisby.Joi.string(),
        url: frisby.Joi.string()
    })
    
  });
});
