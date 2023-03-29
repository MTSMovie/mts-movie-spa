import {MAIN_URL, MOVIES_URL, MY_URL, SERIALS_URL, TV_CHANNELS_URL} from "../../../core/service/urls";

export const headerStateModalList = [
    {title: 'Главная', id: 'main', path: MAIN_URL},
    {title: 'Телеканалы', id: 'tv-channels', path: TV_CHANNELS_URL},
    {title: 'Фильмы', id: 'movies', path: MOVIES_URL},
    {title: 'Сериалы', id: 'serials', path: SERIALS_URL},
    {title: 'Моё', id: 'my', path: MY_URL},
]