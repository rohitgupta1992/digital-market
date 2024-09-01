import React from 'react'
import image from '../image/shose1.PNG'
import image2 from '../image/hgfhf.PNG'
import image3 from '../image/try.jpeg'
import image4 from '../image/sfs.PNG'
import image5 from '../image/data.PNG'
import image6 from '../image/kjj.PNG'
import '../Style/blogs.css'
const Blogs = () => {
  return (
    <div className='blogs'>
        <h4 className='blog-heading'>Blogs</h4>
        <h2 className='blog-sub-heading'>News & Articles</h2>
        <p>Best Articles to get started</p>
        <div className='blog-card'>
            <div className='blog-card-first'>
                <img src={image}/> 
                <div>
                    <h4>Branding</h4>
                    <h2>What is the branding,
                    and what we need it?</h2>
                    <p>
                    What is the branding,
                    and what we need it?
                    </p>
                </div>
            </div>
            <div className='blog-card-second'>
                <img src={image2} />
                <div>
                    <h4>TIKTOK</h4>
                    <h2>
                    What is the branding,
                    and what we need it?
                    </h2>
                    <p>What is the branding,
                    and what we need it?</p>
                </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='blog-card-first'>
                <img src={image3}/> 
                <div>
                    <h4>Branding</h4>
                    <h2>What is the branding,
                    and what we need it?</h2>
                    <p>
                    What is the branding,
                    and what we need it?
                    </p>
                </div>
            </div>
            <div className='blog-card-second'>
                <img src={image4}/>
                <div>
                    <h4>TIKTOK</h4>
                    <h2>
                    What is the branding,
                    and what we need it?
                    </h2>
                    <p>What is the branding,
                    and what we need it?</p>
                </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='blog-card-first'>
                <img src={image5}/> 
                <div>
                    <h4>Branding</h4>
                    <h2>What is the branding,
                    and what we need it?</h2>
                    <p>
                    What is the branding,
                    and what we need it?
                    </p>
                </div>
            </div>
            <div className='blog-card-first'>
                <img src={image6}/>
                <div>
                    <h4>TIKTOK</h4>
                    <h2>
                    What is the branding,
                    and what we need it?
                    </h2>
                    <p>What is the branding,
                    and what we need it?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs