import React from 'react'
import { LogoMark, WordMark1 } from '../../assets'
import { footerLinks, FooterLinkType, MenuLinkType } from '../../utils'
import { StatusIndicator } from '../Indicator'
import { Link } from '../Link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer__contents">
                <LogoMark className='footer__contents__logo' />
                <div className="footer__contents__links">
                    {footerLinks.map((item: FooterLinkType, idx: number) => (
                        <div key={idx} className="footer__links">
                            <p className="desktop-cap-medium">
                                {item.header}
                            </p>
                            {item.links.map((link: MenuLinkType, index: number) => (
                                <div 
                                key={index}className='footer__links__link'>
                                    {link?.icon && <link.icon />}
                                    <Link
                                    className='desktop-p5'
                                        link={link} 
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer__divider"></div>
            <div className="footer__footnote">
                
                <StatusIndicator status='operational' />
                <span className='desktop-p5'>All systems operational</span>
                <p className='desktop-p5-regular'>&copy; Brinte 2024</p>
            </div>
        </div>
        <div className="footer__underlay">
            <WordMark1 />
        </div>
    </div>
  )
}

export default Footer