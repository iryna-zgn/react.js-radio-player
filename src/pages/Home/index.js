import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StationsList from './../../components/StationsList'
import { loadStations } from './../../actionCreators'
import { connect } from 'react-redux'

class Home extends Component {
    static propTypes = {
        // from action creators
        loadStations: PropTypes.func
    }

    render() {
        return (
            <StationsList />
        )
    }

    componentDidMount() {
        this.props.loadStations()
    }
}

export default connect(null, {
    loadStations
})(Home)
