const frisby = require('frisby');
const cheerio = require('cheerio');

describe("Day26", () => {
it('Send GET request to bing.com', () => {
    return frisby
        .get('https://www.bing.com/search?q=postman')
        .expect('status', 200)
        .expect('bodyContains', 'postman')
        .then((response) => {
            const $ = cheerio.load(response.body);
            const links = [];
            $("li.b_algo h2 a").each(function () {
                const href = $(this).attr("href");
                links.push(href);
            });

            console.log(links);

            const parsedLinks = JSON.parse(JSON.stringify(links));

            expect(parsedLinks).toBeInstanceOf(Array);
            expect(response.status).toBe(200);
        });
    });
});
