import React, { Component } from 'react'
import NoResults from './../../components/NoResults'
import { classes } from './../../constants'

class SearchForm extends Component {
    state = {
        query: '',
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
                {/*{ this.renderMsg() }*/}
            </div>
        )
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
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
        return <NoResults/>
    }
}

export default SearchForm
