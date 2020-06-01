const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const subjectsDatas = await connection('subjects').select('id', 'name');

        console.log(`Dispositivo: ${request.headers['user-agent']}`);

        return response.json(subjectsDatas);
    }
};