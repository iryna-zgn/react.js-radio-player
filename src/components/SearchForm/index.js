import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NoResults from './../../components/NoResults'
import { classes } from './../../constants'
import { loadStations, setQuery } from './../../actionCreators'
import { modes } from './../../constants'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class SearchForm extends Component {
    static propTypes = {
        // from actionCreators
        loadStations: PropTypes.func,
        setQuery: PropTypes.func,
        // from store
        lastQuery: PropTypes.string,
        resultsCount: PropTypes.number
    }

    state = {
        isFocus: false
    }

    render() {
        let classNameInput = 'search__field'
        if (this.state.isFocus) classNameInput += ` ${classes.IS_FOCUS}`

        return (
            <div className='search'>
                <form
                    className='search__form'
                    onSubmit={ this.handleSubmit }>
                    <div
                        className={ classNameInput }>
                        <input
                            value={ this.props.query }
                            placeholder='Search for a station'
                            type='text'
                            onChange={ this.handleChange }
                            onFocus={ this.addFocus }
                            onBlur={ this.removeFocus }/>
                    </div>
                    <button className='search__btn icon-search'/>
                </form>
                { this.renderMsg() }
            </div>
        )
    }

    handleChange = e => this.props.setQuery(e.target.value)

    handleSubmit = e => {
        const { loadStations, history, lastQuery, query } = this.props

        e.preventDefault()

        if (query && query !== lastQuery) {
            loadStations(modes.SEARCH, query)
            history.push(`/search/${query}`)
        }
    }

    addFocus = () => {
        this.setState({
            isFocus: true
        })
    }

    removeFocus = () => {
        this.setState({
            isFocus: false
        })
    }

    renderMsg = () => {
        if (this.props.resultsCount) return null

        return <NoResults/>
    }
}

export default withRouter(connect(state => ({
    lastQuery: state.stations.lastQuery,
    query: state.stations.query,
    resultsCount: state.stations.resultsCount
}), {
    loadStations,
    setQuery
})(SearchForm))
