import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActiveStationId } from './../../actionCreators'

class Audio extends Component {
    static propTypes = {
        // from component
        streams: PropTypes.array,
        id: PropTypes.number,
        // from store
        activeId: PropTypes.number,
        // from action creators
        setActiveStationId: PropTypes.func
    }

    state = {
        isPlaying: false,
        isMuted: false,
        volume: 30,
        lastVolume: 30
    }

    constructor(props) {
        super(props)

        this.audio = React.createRef()
    }

    render() {
        return (
            <div className='audio'>
                <div className='audio__controls'>
                    { this.renderPlayBtn() }
                    <div className='audio__volume'>
                        { this.renderVolumeBtn() }
                        { this.renderVolumeBar() }
                    </div>
                </div>
                <audio ref={ this.audio }>
                    { this.setDefaultVolume(this.state.volume) }
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
        const { isPlaying, isMuted } = this.state

        if (!isPlaying) return null

        return (
            <div>
                <button
                    className='audio__volume-btn'
                    onClick={ this.handleMuteBtn }>
                    <span className={ `icon-${isMuted ? 'muted-' : '' }volume` }/>
                </button>
            </div>
        )
    }

    renderVolumeBar = () => {
        const { isPlaying, volume } = this.state

        if (!isPlaying) return null

        return (
            <input
                type='range'
                min='0'
                max='100'
                value={ volume }
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
        const { id, activeId, setActiveStationId } = this.props
        const { isPlaying } = this.state

        this.pausePlaying()
        setActiveStationId(null)

        this.play()
            .then(() => {
                this.setState(() => ({
                    isPlaying: !isPlaying
                }), () => setActiveStationId(isPlaying ? null : id))
            })
            .then(() => {
                if (id === activeId) this.pause()
            })
            .catch(err => console.log(err))
    }


    handleMuteBtn = () => {
        const { id, activeId } = this.props

        if (id !== activeId) return null

        this.setState(state => ({
            isMuted: !state.isMuted,
            volume: state.isMuted ? state.lastVolume : 0
        }))
        this.state.isMuted ? this.unmute() : this.mute()
    }

    adjustVolume = e => {
        const { id, activeId } = this.props
        const value = e.target.value

        if (id !== activeId) return null

        this.setState({
            volume: value,
            lastVolume: value,
            isMuted: value === '0'
        })

        value === '0' ? this.mute() : this.unmute()

        this.setVolume(this.state.volume)
    }

    play = () => this.audio.current.play()

    pause = () =>  this.audio.current.pause()

    pausePlaying = () => {
        document.querySelectorAll('audio').forEach(audio => {
            if (!audio.paused) audio.pause()
        })
    }

    mute = () => this.audio.current.muted = true

    unmute = () => this.audio.current.muted = false

    setVolume = val => this.audio.current.volume = val * 0.01

    setDefaultVolume = val => {
        document.querySelectorAll('audio')
            .forEach(audio => audio.volume = val * 0.01)
    }

    componentWillReceiveProps(nextProps) {
        const { id } = this.props
        const { activeId } = nextProps

        this.setState({
            isPlaying: id === activeId
        })
    }
}

export default connect(state => ({
    activeId: state.stations.activeStationId
}), {
    setActiveStationId
})(Audio)
