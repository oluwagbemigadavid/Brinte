import React from 'react' 
import { Helmet } from 'react-helmet';
import { CONTACTPAGEHERO, CONTACTPAGERESOURCES } from '../../components';

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | Brinte</title>
        <meta name="description" content="Get in touch with us." />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="This is a description of my page." />
        <meta property="og:image" content="http://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <CONTACTPAGEHERO />
        <CONTACTPAGERESOURCES />
    </div>
  )
}

export default ContactPage