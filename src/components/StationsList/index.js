import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Station from './../Station'
import LoadMore from './../LoadMore'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'


class StationsList extends Component {
    static propTypes = {
        // from store
        stations: PropTypes.array,
        resultsCount: PropTypes.number
    }

    render() {
        return (
            <div>
                <div className='stations-list'>
                    <TransitionGroup>
                        { this.renderItems() }
                    </TransitionGroup>
                </div>
                { this.renderLoadMore() }
            </div>
        )
    }

    renderItems = () => {
        return this.props.stations.map(station => {
            return (
                <CSSTransition
                    key={ station.id }
                    classNames='fade'
                    timeout={{ appear: 300, enter: 300, exit: 300 }}
                    appear>
                    <div className='stations-list__item'>
                        <Station station={ station }/>
                    </div>
                </CSSTransition>
            )
        })
    }

    renderLoadMore = () => {
        if (this.props.resultsCount < 10) return null

        return <LoadMore/>
    }
}

export default connect(state => ({
    stations: state.stations.stations,
    resultsCount: state.stations.resultsCount
}))(StationsList)
