import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const TV_SERIES_URL_API = `${BASE_URL_API}/tvseries`

export async function getCourses(params) {
    const url = getURL(`${TV_SERIES_URL_API}/`, params)
    return await request('GET', url)
}

export async function getDetailTVSeries(id, params) {
    const url = getURL(`${TV_SERIES_URL_API}/${id}/`, params)
    return await request('GET', url)
}

export async function getPlayerTVSeries(id, params) {
    const url = getURL(`${TV_SERIES_URL_API}/${id}/see/`, params)
    return await request('GET', url)
}
