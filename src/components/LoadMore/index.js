import React, { Component } from 'react'
import Bounce from './../../components/Bounce'


class LoadMore extends Component {
    render() {
        return (
            <div className='load-more'>
                {
                    this.props.loadingMore
                        ? <div className='load-more__preloader'><Bounce/></div>
                        : <div onClick={ this.handleClickMore } className='load-more__link'>Load more</div>
                }
            </div>
        )
    }

    handleClickMore = () => {
        console.log('click more')
    }
}

export default LoadMore
