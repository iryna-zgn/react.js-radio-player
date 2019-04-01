import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { objToMap } from './../helpers'
import { modes } from './../constants'

const ReducerState = Record({
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
            return objToMap(response, ReducerState)
                    .set('loading', false)

        case actions.LOAD_NEXT_PAGE + actions.START:
            return state.set('loadingMore', true)

        case actions.LOAD_NEXT_PAGE + actions.SUCCESS:
            return state
                    .set('loadingMore', false)

        case actions.SET_QUERY:
            return state.set('query', payload.query)

        case actions.SET_ACTIVE_STATION_ID:
            return state.set('activeStationId', payload.id)

        default:
            return state
    }
}
