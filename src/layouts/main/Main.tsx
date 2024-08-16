import React from 'react'
import { Footer } from '../../components'
import { Nav } from '../../components/Nav'

type Props = {
    children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <div className='main'>
      <Nav />
      <div className="main__contents">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Main;
