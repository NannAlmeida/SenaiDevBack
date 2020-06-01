const express = require('express');
// const cors = require('cors');
const app = express();
const routes = require('./routes');

app.listen(3000, () => console.log(`[SERVER] O servidor está rodando na porta 3000`));

app.use(routes);
// app.use((request, response, next) => {
//     response.header('Access-Control-Allow-Origin', '*');
//     response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');

//     app.use(cors());

//     next();
// });