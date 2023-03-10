class Utils {
    prepareStatement = (obj) => {
        let statements = [];
        let statement = '';
        for (const key in obj) {
            statement = '';
            if (key === 'id' || key === 'createdAt' || key === 'deletedAt') continue;
            if (key === 'updatedAt') {
                statement = `${key} = ?`;
                statements.push(statement);
                continue;
            }
            if (obj[key]) {
                if (typeof(obj[key]) === 'string') {
                    statement =  `${key} = '${obj[key]}'`;
                } else {
                    statement = `${key} = ${obj[key]}`;
                }
                statements.push(statement);
            }
        }
        return statements;
    };

    splitCamelCase = (str) => {
        return str.replace(/([a-z])([A-Z])/g, '$1 $2')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    formatResponse = (dog) => {
        if (Array.isArray(dog)) {
            for (let item of dog) {
                item.traits = JSON.parse(item.traits);
                item.breed = JSON.parse(item.breed);
                item.goodWith = JSON.parse(item.goodWith);
                item.trained = JSON.parse(item.trained);
                item.commands = JSON.parse(item.commands);
            }
        } else {
            dog.traits = JSON.parse(dog.traits);
            dog.breed = JSON.parse(dog.breed);
            dog.goodWith = JSON.parse(dog.goodWith);
            dog.trained = JSON.parse(dog.trained);
            dog.commands = JSON.parse(dog.commands);
        }

        return dog;
    };
}

module.exports = Utils;