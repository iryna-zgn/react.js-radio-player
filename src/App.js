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
        loading: PropTypes.bool
    }

    render() {
        return (
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
        )
    }

    getSearch = ({ match }) => {
        const { query } = match.params

        return <Search query={ query }/>
    }

    renderPreloader = () => {
        if (this.props.loading) return <Bounce isFixed/>
    }
}

export default connect(state => ({
    query: state.stations.query,
    loading: state.stations.loading
}))(App)
