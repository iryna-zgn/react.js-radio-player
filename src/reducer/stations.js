import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { modes } from './../constants'

const ReducerState = Record({
    stations: [],
    resultsCount: 0,
    page: 1,
    activeStationId: null,
    mode: modes.POPULAR,
    query: '',
    lastQuery: '',
    loading: false,
    loadingMore: false
})

export default (state = new ReducerState(), action) => {
    const { type, payload, response } = action

    switch (type) {
        case actions.LOAD_STATIONS + actions.START:
            return state.set('loading', true)

        case actions.LOAD_STATIONS + actions.SUCCESS:
            return state
                    .set('stations', response)
                    .set('resultsCount', response.length)
                    .set('mode', payload.mode)
                    .set('query', payload.query)
                    .set('lastQuery', payload.query)
                    .set('loading', false)

        case actions.LOAD_PAGE + actions.START:
            return state.set('loadingMore', true)

        case actions.LOAD_PAGE + actions.SUCCESS:
            return state
                    .set('page', payload.page)
                    .set('stations', [...state.stations, ...response])
                    .set('loadingMore', false)

        case actions.SET_ACTIVE_STATION_ID:
            return state.set('activeStationId', payload.id)

        case actions.SET_QUERY:
            return state.set('query', payload.query)

        default:
            return state
    }
}
