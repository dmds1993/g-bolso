import axios from 'axios';

const ROOT_URL = `https://api.chucknorris.io/jokes`

export const SEARCH_ITEMS = 'SEARCH_ITEMS';

export const fetchItems = () => {
    let url = `${ROOT_URL}/categories`;
    const request = axios.get(url);

    return {
        type: SEARCH_ITEMS,
        payload: request
    }
}
