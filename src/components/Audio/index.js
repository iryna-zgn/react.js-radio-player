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
        isPlaying: false,
        isMuted: false,
        volume: 50,
        lastVolume: 50
    }

    render() {
        return (
            <div className='audio'>
                <div className='audio__controls'>
                    { this.renderPlayBtn() }
                    { this.renderVolumeBtn() }
                    { this.renderVolumeBar() }
                </div>
                <audio ref={ this.audio }>
                    { this.renderSources() }
                </audio>
            </div>
        )
    }

    renderPlayBtn = () => {
        return (
            <button
                className='audio__btn'
                onClick={ this.handlePlayBtn }>
                <span className={ `icon-${this.state.isPlaying ? 'pause' : 'play'}-button` }/>
            </button>
        )
    }

    renderVolumeBtn = () => {
        return (
            <button
                className='audio__btn'
                onClick={ this.handleMuteBtn }>
                <span className={ `icon-${this.state.isMuted ? 'muted-' : ''}volume` }/>
            </button>
        )
    }

    renderVolumeBar = () => {
        return (
            <input
                type='range'
                min='0'
                max='100'
                value={ this.state.volume }
                className='audio__slider'
                onChange={ this.adjustVolume }/>
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

    handleMuteBtn = () => {

        if (this.state.isMuted) {
            this.setState(state => ({
                isMuted: false,
                volume: this.state.lastVolume
            }))
            this.unmute()
        } else {
            this.setState(state => ({
                isMuted: true,
                volume: 0
            }))
            this.mute()
        }
    }

    adjustVolume = e => {
        const value = e.target.value

        this.setState({
            volume: value,
            lastVolume: value,
            isMuted: value === '0'
        })
        value === '0' ? this.mute() :  this.unmute()
        this.changeVolume(this.state.volume * 0.01)
    }

    mute = () => {
        this.audio.current.muted = true
    }

    unmute = () => {
        this.audio.current.muted = false
    }

    changeVolume = val => {
        this.audio.current.volume = val
    }


}
