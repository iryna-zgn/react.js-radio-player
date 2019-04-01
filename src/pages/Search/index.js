import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StationsList from './../../components/StationsList'
import { loadStations } from './../../actionCreators'
import { connect } from 'react-redux'
import { modes } from './../../constants'

class Search extends Component{
    static propTypes = {
        // from component
        query: PropTypes.string,
        // from action creators
        loadStations: PropTypes.func
    }

    render() {
        return <StationsList query={ this.props.query }/>
    }

    componentDidMount() {
        this.props.loadStations(modes.SEARCH, this.props.query)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.query !== this.props.query) {
            this.props.loadStations(modes.SEARCH, nextProps.query)
        }
    }
}

export default connect(null, {
    loadStations
})(Search)
