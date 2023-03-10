const database = require('./db');
const v4 = require('uuid');
const utils = require('../utils/utils');

class DogsRepository {
    create = (dog, callback) => {
        const id = v4.v4();
        const sql = `INSERT INTO Dogs (id, dogName, finalSlug, description, weight, age, gender, personality, infertile, traits, breed, goodWith, trained, commands, mainPhoto, secondPhoto, sleepType, healthIssues, adopted, createdAt, updatedAt, deletedAt) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)`;
        const params = [
            id,
            dog.dogName,
            dog.finalSlug,
            dog.description,
            dog.weight,
            dog.age,
            dog.gender,
            dog.personality,
            dog.infertile,
            JSON.stringify(dog.traits),
            JSON.stringify(dog.breed),
            JSON.stringify(dog.goodWith),
            JSON.stringify(dog.trained),
            JSON.stringify(dog.commands),
            dog.mainPhoto,
            dog.secondPhoto,
            dog.sleepType,
            dog.healthIssues,
            dog.adopted,
            new Date().toISOString(),
            new Date().toISOString()
        ];
        database.run(sql, params, function(_err) {
            callback(this?.lastID);
        });
    }

    getAll = (callback) => {
        const sql = `SELECT * FROM Dogs WHERE deletedAt IS NULL`;

        database.all(sql, [], (_err, rows) => {
            if (_err) throw _err;
            callback(rows);
        });
    }

    getOne = (id, callback) => {
        const sql = `SELECT * FROM Dogs WHERE id = ?`;
        database.get(sql, [id], (_err, rows) => {
            if (_err) throw _err;
            callback(rows);
        });
    }

    update = (id, dog) => {
        const service = new utils();
        const fields = service.prepareStatement(dog);
        const update = fields.join(', ');
        const now = new Date();
        const sql = `UPDATE Dogs SET ${update} WHERE id = ?`;
        database.run(sql, [now.toISOString(), id], (_err) => {
            if (_err) throw _err;
        });
    };

    deleteOne = (id) => {
        const sql = `UPDATE Dogs SET deletedAt = ? WHERE id = ?`;
        const now = new Date();
        database.run(sql, [now.toISOString(), id], (_err) => {
            if (_err) throw _err;
        });
    };
}

module.exports = DogsRepository;