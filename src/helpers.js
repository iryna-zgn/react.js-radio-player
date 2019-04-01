import { countries } from './countries'

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
