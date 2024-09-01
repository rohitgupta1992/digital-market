import React from 'react'
import '../Style/FirstSection.css'
import { FaQuora ,FaHourglass} from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";
import { HiCurrencyRupee } from "react-icons/hi";

const FirstSection = () => {
  return (
    <section className='first-section'>
      <div className='bost-carier'>
      <span style={{ color: '#93e317' }}> Boost </span>
       Your Brand with</div>
<div className='bost-carier'>
Innovative
<span style={{ color: '#93e317' }}> Digital Marketing</span></div>  
<h6 className='Drive-section'>
Drive Engagement and Conversions with Advanced Digital

Marketing Strategies.
</h6>
<button className='btn-start'>Start Now</button>
<span className='trusted'>Trusted by thousand companies</span>
<div style={{color:'#fff'}} className='last-first '>
<div >
<IoLayersOutline />
Layers
</div>
<div >
<FaQuora />
Quotient
</div>
<div >
<TbCirclesRelation />
Circooles
</div>
<div >
<FaQuora />
Quotient
</div>

<div >
<FaHourglass />

Hourglass
</div>
<div >
<HiCurrencyRupee />
Command+R
</div>
</div>
    </section>
  )
}

export default FirstSection