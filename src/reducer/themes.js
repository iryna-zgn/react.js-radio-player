import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { themes } from './../themes'
import { isDay } from './../helpers'

const ReducerState = Record({
    isDay: isDay(),
    styles: isDay() ? themes.isDay : themes.isNight
})

export default (state = new ReducerState(), action) => {
    const { type, payload } = action

    switch (type) {
        case actions.CHANGE_THEME:
            const { isDay } = payload
            const theme = isDay ? 'isDay' : 'isNight'

            return state
                    .set('isDay', isDay)
                    .set('styles', themes[theme])

        default:
            return state
    }
}
