export const MAIN_URL = '/';
export const TV_CHANNELS_URL = '/tv-channels';
export const MOVIES_URL = '/movies';
export const SERIALS_URL = '/serials';
export const MY_URL = '/my';
export const PLAYER_URL = '/player';

export const PLAYER_MOVIE_URL = `${PLAYER_URL}/movie`;
export const PLAYER_TV_SERIES_URL = `${PLAYER_URL}/tv-series`;

export const getDetailMovieURL = (movieId) => {
    return `${MOVIES_URL}/${movieId}`;
}

export const getPlayerMovieURL = (movieId) => {
    return `${PLAYER_MOVIE_URL}/${movieId}`;
}

export const getPlayerTVSeriesURL = (tvSeriesId) => {
    return `${PLAYER_TV_SERIES_URL}/${tvSeriesId}`;
}
