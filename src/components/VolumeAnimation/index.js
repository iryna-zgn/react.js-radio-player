import React from 'react'

const renderItems = () => {
    const items = new Array(5).fill('')

    return items.map((item, index) => {
        return (
            <div key = { index } className='volume-animation__item'/>
        )
    })
}

export default function VolumeAnimation() {
    return (
        <div className='volume-animation'>{ renderItems() }</div>
    )
}
