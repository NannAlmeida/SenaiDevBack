const api = require('../../services/BaseRequestURL');
const connection = require('../database/connection');

async function getTotalVideos(playlistId, apiKey) {
    const getPlaylistTotalSize = (await api.get(`/playlistItems?playlistId=${playlistId}&key=${apiKey}`)).data;

    const playlistSize = getPlaylistTotalSize.pageInfo.totalResults;

    return playlistSize;
}

module.exports = {

    async index(request, response) {
        const apiKey = 'AIzaSyDzfFqkp9bRBGCBwYgttaHuXFGqR5Nxf0g';

        const { idSubject } = request.params;

        const subjects = await connection('subjects').select('playlistId').where('id', idSubject);
        const playlist = subjects[0].playlistId;

        const totalVideos = await getTotalVideos(playlist, apiKey);

        const requestGetDataPlaylist = (await api.get(`/playlistItems?part=snippet&maxResults=${totalVideos}&playlistId=${playlist}&key=${apiKey}`)).data;

        return response.send(requestGetDataPlaylist);
    }

}