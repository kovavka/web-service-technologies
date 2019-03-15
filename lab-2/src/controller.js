const Cat = require('../src/cat');
var pg = require('pg');
var conString = "postgres://postgres:root@localhost:5432/test";

post = async function (body) {

    var cat = new Cat(body);

    var client = new pg.Client(conString);
    await client.connect();

    await client.query(`insert into cats(name, year) values ('${cat.name}', '${cat.year}')`);
    await client.end();

    return cat.id;
}

put = async function () {

    var client = new pg.Client(conString);

    await client.connect();

    var result = await client.query("SELECT Count(*) FROM cats");

    console.log(result.rows);

    await client.end();

    var cat = new Cat();
    cat.year = 2017;
    return cat;
}