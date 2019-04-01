import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Bounce from './components/Bounce'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
    static propTypes = {
        loading: PropTypes.bool
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                    </Switch>
                </div>
                <div>
                  <Footer/>
                  { this.renderPreloader() }
                </div>
            </div>
        )
    }

    renderPreloader = () => {
        if (this.props.loading) return <Bounce isFixed/>
    }
}

export default connect(state => ({
    loading: state.stations.loading
}))(App)
