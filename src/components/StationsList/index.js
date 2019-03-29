import React, { Component } from 'react'
import Station from './../Station'
import LoadMore from './../LoadMore'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { POPULAR_STATIONS } from './../../popularStations'


class StationsList extends Component {
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
        return POPULAR_STATIONS.map(station => {
            return (
                <CSSTransition
                    key={ station.id }
                    classNames='fade'
                    timeout={{ appear: 300, enter: 300, exit: 300 }}
                    appear>
                    <div className='stations-list__item'>
                        <Station
                            station={ station }/>
                    </div>
                </CSSTransition>
            )
        })
    }

    renderLoadMore = () => {
        return <LoadMore/>
    }
}

export default StationsList
