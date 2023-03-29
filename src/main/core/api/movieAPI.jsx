import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const MOVIE_URL_API = `${BASE_URL_API}/movies`

export async function getMovies(params) {
    const url = getURL(`${MOVIE_URL_API}/`, params)
    return await request('GET', url)
}

export async function getDetailCourse(id, params) {
    const url = getURL(`${MOVIE_URL_API}/${id}/`, params)
    return await request('GET', url)
}

export async function getPlayerMovies(id, params) {
    const url = getURL(`${MOVIE_URL_API}/${id}/see/`, params)
    return await request('GET', url)
}