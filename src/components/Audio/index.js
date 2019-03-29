import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Audio extends Component {
    static propTypes = {
        streams: PropTypes.array
    }

    constructor(props) {
        super(props)

        this.audio = React.createRef()
    }

    state = {
        isPlaying: false
    }

    render() {
        return (
            <div className='audio'>
                <div className='audio__controls'>
                    { this.renderPlayBtn() }
                </div>
                <audio
                    ref={ this.audio }
                    controls>
                    { this.renderSources() }
                </audio>
            </div>
        )
    }

    renderPlayBtn = () => {
        return (
            <button
                className='audio__play'
                onClick={ this.handlePlayBtn }>
                <span className={ `icon-${this.state.isPlaying ? 'pause' : 'play'}-button` }/>
            </button>
        )
    }

    renderSources = () => {
        return this.props.streams.map((stream, index) => {
            return (
                <source
                    key={ stream.stream + index }
                    src={ stream.stream }
                    type={ stream.content_type }/>
            )
        })
    }

    handlePlayBtn = () => {
        const audio = this.audio.current

        this.setState(state => ({
            isPlaying: !state.isPlaying
        }))

        this.state.isPlaying ? audio.pause() : audio.play()
    }
}
