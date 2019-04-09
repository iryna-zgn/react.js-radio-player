import { countries } from './countriesList'
import { URL_POPULAR, URL_SEARCH, KEY, PER_PAGE } from './links'
import { modes } from './constants'

export function getUrl(mode, query, page) {
    return mode === modes.POPULAR
        ? `${URL_POPULAR}?page=${page}&per_page=${PER_PAGE}&token=${KEY}`
        : `${URL_SEARCH}/${query}?page=${page}&per_page=${PER_PAGE}&token=${KEY}`
}

export function getImgPath(img) {
    if (!img) return null
    return img
}

export function getCountryName(code) {
    const country = countries.find(el => el.alpha_2_code === code)

    return country ? country.en_short_name : code
}

export function separateByCommas(arr) {
    if (arr) return arr.reduce((acc, el, index) => acc + (index ? `, ${el.toLowerCase()}` : el) , '')
}

export function isDay() {
    const hours = (new Date()).getHours()

    return hours > 6 && hours < 20
}
