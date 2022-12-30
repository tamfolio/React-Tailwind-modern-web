import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row 
    flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart}
          flex-col xl:px-0 sm:px-6`}>
            <div className="flex flex-row items-center 
            py-[6px] px-4
            bg-discount-gradient"></div>
        </div>
    </section>
  )
}

export default Hero
