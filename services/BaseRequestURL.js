const axios = require('axios');

const baseLinkAPI = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

module.exports = baseLinkAPI;