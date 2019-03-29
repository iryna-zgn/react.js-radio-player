import React, { Component } from 'react'
import Preloader from './../../components/Preloader'


class LoadMore extends Component {
    render() {
        return (
            <div className='load-more'>
                {
                    this.props.loadingMore
                        ? <div className='load-more__preloader'><Preloader/></div>
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
