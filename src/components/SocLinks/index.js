import React from 'react'

export default function SocLinks(props) {
  const renderItems = () => {
    const { links } = props
    const linksList = []

    for (let link in links) {
      if (links[link]) {
        linksList.push({
          name: link,
          url: (link === 'twitter' ? 'https://twitter.com/' : '') + links[link]
        })
      }
    }

    return linksList.map(item => {
      return (
          <li
              key={ item.name }
              className='soc-links__item'>
            <a
                href={ item.url }
                title={ item.name }
                className='soc-links__link'
                target='_blank'
                rel='noopener noreferrer'>
              <span className={ `soc-links__icon icon-${item.name}` }/>
            </a>
          </li>
      )
    })
  }

  if (!renderItems().length) return null

  return (
      <ul className='soc-links'>{ renderItems() }</ul>
  )
}
