import { Map } from 'immutable'
import { countries } from './countries'

export function objToMap(obj, DataRecord = Map) {
    return Object.keys(obj).reduce((acc, key) => acc.set(key, obj[key]), new DataRecord())
}

export function getImgPath(img) {
    return img ? img : 'static/images/rho_light.jpg'
}

export function getCountryName(code) {
    const country = countries.find(el => el.alpha_2_code === code)

    return country ? country.en_short_name : code
}

export function separateByCommas(arr) {
    if (arr) return arr.reduce((acc, el, index) => acc + (index ? `, ${el.toLowerCase()}` : el) , '')
}
