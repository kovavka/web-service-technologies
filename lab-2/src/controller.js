const Cat = require('../src/cat');
var pg = require('pg');
var conString = "postgres://postgres:root@localhost:5432/test";

post = async function (body) {
    var cat = new Cat(body);

    var client = new pg.Client(conString);
    await client.connect();

    var result = await client.query(`insert into cats(name, year) values ('${cat.name}', ${cat.year}); select LASTVAL()`);
    await client.end();

    return result[1].rows[0].lastval;
}

put = async function (body) {
    var cat = new Cat(body);

    var client = new pg.Client(conString);
    await client.connect();

    await client.query(`update cats set name='${cat.name}', year=${cat.year} where id=${cat.id}`);
    await client.end();

    return cat.id;
}