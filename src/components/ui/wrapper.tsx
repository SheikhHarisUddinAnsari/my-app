import React from 'react'

type Props = {}

const Wrapper = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className='ml-8 mr-0 xs:ml:16 md:ml-16 md:mr-7 lg:mx:3 xl:mx:0 xl:pr-0 xl:mx-0 lg:mr-20 xl:mr-28 xl:ml-16 2xl:ml-32 '>
 {children}
    </div>
  )
}

export  default Wrapper;