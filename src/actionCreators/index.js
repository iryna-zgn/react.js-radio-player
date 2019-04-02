import { actions } from './../constants'
import { URL_POPULAR, URL_SEARCH, KEY, PER_PAGE } from './../links'
import { modes } from './../constants'

function getUrl(mode, query, page) {
    return mode === modes.POPULAR
        ? `${URL_POPULAR}?page=${page}&per_page=${PER_PAGE}&token=${KEY}`
        : `${URL_SEARCH}/${query}?page=${page}&per_page=${PER_PAGE}&token=${KEY}`
}

export function loadStations(mode = modes.POPULAR, query='', page = 1) {
    return {
        type: actions.LOAD_STATIONS,
        payload: { mode, query },
        callAPI: getUrl(mode, query, page)
    }
}

export function loadPage(mode = modes.POPULAR, query='', page = 1) {
    return {
        type: actions.LOAD_PAGE,
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

export function setActiveStationId(id) {
    return {
        type: actions.SET_ACTIVE_STATION_ID,
        payload: {id}
    }
}

export function changeTheme(isDay) {
    return {
        type: actions.CHANGE_THEME,
        payload: { isDay }
    }
}
