import { countries } from './countries'

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
