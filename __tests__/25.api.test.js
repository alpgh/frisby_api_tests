const frisby = require('frisby');

describe("Day25", () => {
it('Send POST request to postman-echo', () => {
    return frisby
        .setup({
            request: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        })
        .post('https://postman-echo.com/post', {
            payload: '{{payload}}'
        })
        .expect('status', 200)
        .expect('json', 'data', {
            payload: '{{payload}}',
           
        });

    });

});
