import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeTheme } from './../../actionCreators'

class ThemeButton extends Component {
    static propTypes = {
        // from store
        isDayTheme: PropTypes.bool,
        themeStyles: PropTypes.object,
        // from action creators
        changeTheme: PropTypes.func
    }

    render() {
        return (
            <button
                className='theme-button'
                onClick={ this.handleTheme }
                title='Change the skin'>
                <span className={`icon-${this.props.isDayTheme ? 'sun' : 'moon'}`}/>
            </button>
        )
    }

    handleTheme = () => {
        const { changeTheme, isDayTheme } = this.props

        changeTheme(!isDayTheme)
    }
}

export default connect(state => ({
    isDayTheme: state.themes.isDay,
    themeStyles: state.themes.styles
}), {
    changeTheme
})(ThemeButton)
