const sqlite3 = require('sqlite3');

const DBSOURCE = 'db.sqlite';

const SQL_DOGS_CREATE = `
    CREATE TABLE Dogs (
        id TEXT PRIMARY KEY,
        dogName TEXT,
        finalSlug TEXT,
        description TEXT,
        weight REAL,
        age REAL,
        gender TEXT,
        personality TEXT,
        infertile INTEGER,
        traits TEXT,
        breed TEXT,
        goodWith TEXT,
        trained TEXT,
        commands TEXT,
        mainPhoto TEXT,
        secondPhoto TEXT,
        sleepType TEXT,
        healthIssues INTEGER,
        adopted INTEGER,
        createdAt TEXT,
        updatedAt TEXT,
        deletedAt TEXT
    )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('DB successfully connected');
        database.run(SQL_DOGS_CREATE, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Dogs table created');
            }
        });
    }
});

module.exports = database;