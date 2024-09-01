import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { FaAd } from 'react-icons/fa'
import { FaUsers, FaGlobe, FaComments, FaConnectdevelop } from 'react-icons/fa'; // Font Awesome
import { AiOutlineShareAlt } from 'react-icons/ai'; 
import '../Style/service.css'
const Service = () => {
  return (
    <section className='service'>
        <h1>Service</h1>
        <h3>
        Strategic services drive digital success with tailored, comprehensive approaches.
        </h3>

        <div className='media'>
            <div>
            <AiOutlineShareAlt />
            SEO Marketing

            <p className='service-para'>Enhance your website’s visibility and rank higher
on search engines with our expert SEO services.
We optimize your site’s content, structure, and
performance to attract more organic traffic,
ensuring your business stands out in search
results.</p>
<button className='service-btn'>Read More</button>
            </div>
            <div>
            <FaComments />
            Content Marketing
            <p className='service-para'>Enhance your website’s visibility and rank higher
on search engines with our expert SEO services.
We optimize your site’s content, structure, and
performance to attract more organic traffic,
ensuring your business stands out in search
results.</p>
<button className='service-btn'>Read More</button>
            </div>
            <div>
      
     
      <FaConnectdevelop />
            Social Media
Management
<p className='service-para'>Enhance your website’s visibility and rank higher
on search engines with our expert SEO services.
We optimize your site’s content, structure, and
performance to attract more organic traffic,
ensuring your business stands out in search
results.</p>
<button className='service-btn'>Read More</button>
            </div>
            <div>
                <FaAd/>
            PPC
            <p className='service-para'>Enhance your website’s visibility and rank higher
on search engines with our expert SEO services.
We optimize your site’s content, structure, and
performance to attract more organic traffic,
ensuring your business stands out in search
results.</p>
<button className='service-btn'>Read More</button>
            </div>
            <div>
                <AiOutlineMail />
            Email Marketing
            <p className='service-para'>Enhance your website’s visibility and rank higher
on search engines with our expert SEO services.
We optimize your site’s content, structure, and
performance to attract more organic traffic,
ensuring your business stands out in search
results.</p>
<button className='service-btn'>Read More</button>
            </div>
        </div>
    </section>
  )
}

export default Service