import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import Footer from './components/Footer'
import Bounce from './components/Bounce'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
    static propTypes = {
        // from store
        query: PropTypes.string,
        loading: PropTypes.bool,
        isDayTheme: PropTypes.bool,
        themeStyles: PropTypes.object
    }

    render() {
        return (
            <div className={ this.getThemeClass() }
                style={ this.props.themeStyles }>
                <div className='container'>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={ Home }/>
                            <Route path='/search/:query' render={ this.getSearch }/>
                        </Switch>
                    </div>
                    <div>
                        <Footer/>
                        { this.renderPreloader() }
                    </div>
                </div>
            </div>
        )
    }

    getSearch = ({ match }) => {
        const { query } = match.params

        return <Search query={ query }/>
    }

    renderPreloader = () => {
        if (!this.props.loading) return null

        return <Bounce
            style={{ background: this.props.themeStyles.background }}
            isFixed/>
    }

    getThemeClass = () => {
        if (!this.props.isDayTheme) return 'is-night'
    }
}

export default connect(state => ({
    query: state.stations.query,
    loading: state.stations.loading,
    isDayTheme: state.themes.isDay,
    themeStyles: state.themes.styles
}))(App)
