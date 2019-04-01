import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getImgPath, getCountryName, separateByCommas } from './../../helpers'
import Audio from './../../components/Audio'
import SocLinks from './../../components/SocLinks'

class Station extends Component {
    static propTypes = {
        station: PropTypes.shape({
            name: PropTypes.string,
            categories: PropTypes.array,
            country: PropTypes.string,
            streams: PropTypes.array,
            facebook: PropTypes.string,
            twitter: PropTypes.string,
            website: PropTypes.string
        })
    }

    render() {
        const { station } = this.props

        return (
            <div className='station'>
                <div className='station__const'>
                    <div
                        className='station__img'
                        style={{ backgroundImage: `url(${getImgPath(station.image.url)})` }}>
                        <img src='static/images/hidden_250x250.jpg'
                             alt=''
                             className='u-hidden'/>
                    </div>
                </div>
                <div className='station__var'>
                    <div className='station__title t2'>{ station.name }</div>
                    { this.renderCategories(station.categories) }
                    { this.renderCountry(station.country) }
                    <Audio
                        streams = { station.streams }
                        id = { station.id }/>
                    <SocLinks
                        links = {{
                            facebook: station.facebook,
                            twitter: station.twitter
                        }}/>
                    { this.renderWebsiteLink(station.website) }
                </div>
            </div>
        )
    }

    renderCategories = categories => {
        if (!categories) return null

        const categoriesList = categories.map(category => category.title)

        return (
            <div className='station__prop'>
                { separateByCommas(categoriesList) }
            </div>
        )
    }

    renderCountry = country => {
        if (!country) return null

        return (
            <div className='station__prop'>
                { getCountryName(country) }
            </div>
        )
    }

    renderWebsiteLink = link => {
        if (!link) return null

        return (
            <div className='station__link'>
                <a
                    href={ link }
                    title={ link }
                    target='_blank'
                    rel='noopener noreferrer'>
                    Homepage
                </a>
            </div>
        )
    }
}

export default Station
