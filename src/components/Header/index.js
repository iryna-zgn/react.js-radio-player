import React from 'react'
import Logo from './../Logo'
import SearchForm from './../SearchForm'
import ThemeButton from './../ThemeButton'
import SocLinks from './../../components/SocLinks'
import { RHO, socLinks } from './../../links'

export default function Header() {
    return (
        <header className='header'>
            <div className='header__main'>
                <Logo
                    text='radio'
                    link={ RHO.RADIO } />
                <SearchForm/>
            </div>
            <div className='header__links'>
                <ThemeButton/>
                <SocLinks
                    links = { socLinks }/>
                <Logo
                    link={ RHO.MOVIES }
                    text='movies'
                    isSmall
                    isTargetBlank
                    title='Movies db (React.js)'/>
            </div>
        </header>
    )
}
