import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bounce from './../../components/Bounce'
import { connect } from 'react-redux'
import { loadPage } from './../../actionCreators'


class LoadMore extends Component {
    static propTypes = {
        // from store
        loadingMore: PropTypes.bool,
        page: PropTypes.number,
        mode: PropTypes.string,
        query: PropTypes.string,
        // from actionCreators
        loadPage: PropTypes.func
    }

    render() {
        return (
            <div className='load-more'>
                {
                    this.props.loadingMore
                        ? <div className='load-more__preloader'><Bounce/></div>
                        : <div
                            onClick={ this.handleClickMore }
                            className='load-more__link'>
                            Load more
                            </div>
                }
            </div>
        )
    }

    handleClickMore = () => {
        const { mode, query, page } = this.props

        this.props.loadPage(mode, query, page + 1)
    }
}

export default connect(state => ({
    loadingMore: state.stations.loadingMore,
    page: state.stations.page,
    mode: state.stations.mode,
    query: state.stations.query
}), {
    loadPage
})(LoadMore)
