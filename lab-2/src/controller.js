const Cat = require('../src/cat');

run = async function () {
    var pg = require('pg');
    var conString = "postgres://postgres:root@localhost:5432/test";

    var client = new pg.Client(conString);

    await client.connect();

    var result = await client.query("SELECT Count(*) FROM users");

    console.log(result.rows);

    await client.end();

    var cat = new Cat();
    cat.age = 12;
    return cat;
}