import React from 'react'
import image from '../image/photo5.PNG'
import '../Style/testimonial.css'
const Testimonial = () => {
  return (
    <div className='testimonial'>
       
        <div>
        <h6 style={{textAlign:'center',textTransform:'uppercase'}}>testimonial</h6>
        <h1>Customer is Our Top

Priority</h1>
<h6>
We survey all of our clients, the results of which go directly

to our CEO.
</h6>
        </div>
<div className='card'>
    <div className='card-content'>
        <p>
        Kornix is the best digital agency i have
        ever seen! Highly Recommended!
        </p>
        <h6>
        I recently hired Ideapeel for a custom web development
project and couldn't be happier with the results. The team
was able to bring my unique ideas to life and create a
website that truly stands out.
        </h6>
        <h4>Diana Loreza</h4>
        <h5>Director of Gymstory</h5>
    </div>
    <div>
<img src={image}/>
    </div>
</div>
    </div>
  )
}

export default Testimonial