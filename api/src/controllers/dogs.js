const dogsRepository = require('../repository/dogsRepository');
const utils = require('../utils/utils');
 
class DogsController {
    getAll = (request, response) => {
        const repo = new dogsRepository();
        const utilsService = new utils();
        repo.getAll((elements) => {
            response.json(utilsService.formatResponse(elements));
        });
    }

    getOne = (request, response) => {
        const id = request.params.dogId;
        const repo = new dogsRepository();
        const utilsService = new utils();
        repo.getOne(id, (element) => {
            response.json(utilsService.formatResponse(element));
        });
    }

    create = (request, response) => {
        const { body } = request;
        const repo = new dogsRepository();
        repo.create(body, (id) => { 
            response.json({
                status: 200,
                id: id
            });
        });
    };

    update = (request, response) => {
        const id = request.params.dogId;
        const { body } = request;
        const repo = new dogsRepository();
        repo.update(id, body);
        response.json({
            status: 200,
            id: id
        });
    };

    deleteOne = (request, response) => {
        const id = request.params.dogId;
        const repo = new dogsRepository();
        repo.deleteOne(id);
        response.json({
            status: 200,
            id: id
        });
    };
}

module.exports = DogsController;