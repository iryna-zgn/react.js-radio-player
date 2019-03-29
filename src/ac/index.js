import { actions } from './../constants'
import { URL_POPULAR, URL_SEARCH } from './../paths'
import { modes } from './../constants'

function getUrl(mode, query, page) {
    return mode === modes.POPULAR
        ? `${URL_POPULAR}&page=${page}`
        : `${URL_SEARCH}&query=${query}&page=${page}`
}

export function loadStations(mode = modes.POPULAR, query = '', page = 1) {
    return {
        type: actions.LOAD_STATIONS,
        payload: { mode, query },
        callAPI: getUrl(mode, query, page)
    }
}

export function loadNextPage(mode = modes.POPULAR, query = '', page = 1) {
    return {
        type: actions.LOAD_NEXT_PAGE,
        payload: { page },
        callAPI: getUrl(mode, query, page)
    }
}

export function setQuery(query) {
    return {
        type: actions.SET_QUERY,
        payload: { query }
    }
}
