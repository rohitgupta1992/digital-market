import React from 'react'
import image from '../image/photo1.PNG'
import image2 from '../image/photo2.PNG'
import image3 from '../image/photo4.PNG'
import '../Style/choseus.css'
import { FaPeopleGroup, FaStapler } from "react-icons/fa6";
import { FaArrowsSpin } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
const ChoseUs = () => {
  return (
    <div className='chose-us'> 
        <h1 className='top-hed'>
        Why Choose Us?
        </h1>
        <div className='card-sec'>
            <div>
                <img src={image} />
            </div>
            <div>
                <h1>
                Solutions Tailored
Specifically to Your
Business Needs
                </h1>
                <p>
                We provide customized solutions for your
business needs, ensuring relevance and
success.
                </p>
                <button className='read-more'>Read More</button>
            </div>
        </div>
        <div className='card-sec'>
        <div>
                <h1>
                Creative Excellence
                Elevates Every Project
                </h1>
                <p>
                Creative excellence drives our work. From
concept to execution, we aim for exceptional
results.
                </p>
                <button className='read-more'>Read More</button>
            </div>
            <div>
            <img src={image2} />
            </div>
        </div>
        <div className='card-sec'>
            <div>
            <img src={image3} />
            </div>
            <div>
                <h1>
                Client Satisfaction is Our
                Main Focus
                </h1>
                <p>
                Our main goal is your satisfaction, and we
work tirelessly to ensure that you are pleased
with the results we achieve together.
                </p>
                <button className='read-more'>Read More</button>
            </div>
        </div>
        <div className='work-with'>
            <h3>Work with Click it new Tech</h3>
           <div className='people'>
           <div>
            <div>
                <FaPeopleGroup />
            </div>
            <span>
            10,000+
            </span>
            <span>
            Happy Customers 
            </span>
           </div>
            <div>
            <div>
                <FaArrowsSpin />
            </div>
            <span>
            20,000+
           
            </span>
            <span> Success Processes</span>
            </div>
            <div>
            <div>
                <CiStar />
            </div>
            <span>
            10,000+
            
            </span>
            <span>
            Happy Customers 
            </span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default ChoseUs