import React from 'react'
import { TopRightArrowIcon } from '../../assets'
import { cards, ContactpagCardType } from '../../utils'

const ContactPageResources = () => {
  return (
    <div className="contact-resources">
        <div className="container">
            <div className="contact-resources__info">
                <h3>Helpful resources</h3>
                <p className="desktop-p3">
                Find helpful tools, tips, and materials from our community, help center, and docs.
                </p>
            </div>
            <div className="contact-resources__cards">
                 {cards.map((item: ContactpagCardType, idx: number) => (
                  <div className="contact-resources__cards__card" key={idx}>
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

export default ContactPageResources