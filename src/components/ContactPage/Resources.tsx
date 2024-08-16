import React from 'react'
import { TopRightArrowIcon } from '../../assets'
import { cards, HomepagCardType } from '../../utils'

const HomePageResources = () => {
  return (
    <div className="home-resources">
        <div className="container">
            <div className="home-resources__info">
                <h3>Helpful resources</h3>
                <p className="desktop-p3">
                Find helpful tools, tips, and materials from our community, help center, and docs.
                </p>
            </div>
            <div className="home-resources__cards">
                 {cards.map((item: HomepagCardType, idx: number) => (
                  <div className="home-resources__cards__card" key={idx}>
                    <div>
                      <item.icon />
                      <p className="desktop-p4">
                        {item.subTitle}
                      </p>
                      <TopRightArrowIcon />
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                 ))}
            </div>
        </div>
    </div>
  )
}

export default HomePageResources