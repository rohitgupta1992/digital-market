import React from 'react'
import '../Style/Capabilities.css'
import { FaInfinity } from "react-icons/fa";
import { LuZapOff } from "react-icons/lu";
import { FaFileWord } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { FaTeethOpen } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
const Capabilities = () => {
  return (
    <div className='Capabilities'>
        <h5>Our capabilities</h5>
        <h1>We can help you with...</h1>
      <section className='btn-sec'>
      <button className='btn-cap'>web design & ui</button>
        <button className='btn-cap'>
            social media
        </button >
        <button className='btn-cap'>
            Infrastructure
        </button>
        <button className='btn-cap'>web design & ui</button>
        <button className='btn-cap'>
            social media
        </button>
        <button className='btn-cap'>
            Infrastructure
        </button>
        <button className='btn-cap'>web design & ui</button>
        <button className='btn-cap'>
            social media
        </button>
        <button className='btn-cap'>
            Infrastructure
        </button>
        <button className='btn-cap'>web design & ui</button>
        <button className='btn-cap'>
            social media
        </button>
        <button className='btn-cap'>
            Infrastructure
        </button>
        <button className='btn-cap'>Design System</button>
        <button className='btn-cap'>
            Email Design
        </button>
        <button className='btn-cap'>
            Stationary
        </button>
        <button className='btn-cap'>Icons</button>
        <button className='btn-cap'>
            social media
        </button>
        <button className='btn-cap'>
            Infrastructure
        </button>
    
      </section>

      <div className='save-pricing'>
        <div>
          
            <h1>
            The design subscription
that connects you to your
dream team
            </h1>
        </div>
        <div>
            <p>
            A subscription can alleviate the stress of staffing,
managing expenses, or make design calls like a
Creative Director. We partner with you to ensure
that your design elevates your brand to new levels.
            </p>
            <button className='btn-cap'>
               save Pricing 
            </button>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
       <p> <FaInfinity /></p>
            1. On-demand requests
       <p>Put all your requests in the design queue in
       Trello, and we ll knock them out 1 by 1.</p>
        </div>
        <div class="grid-item">
            <p><LuZapOff /></p>
            2. Top-notch quality
            <p>High-end work from a dedicated team of senior
designers that s always available when you need
it.</p>
        </div>
        <div class="grid-item">
            <p><FaFileWord /></p>
            3. Powered by Webflow
            <p>We build every site on Webflow, making
them dynamic, accessible, and easily
scalable. It s easy for you like Squarespace
but better.</p>
        </div>
        <div class="grid-item">
            <p><FaPenClip /> </p>
            4. Fast. Responsive. Reliable.
            <p>Get regular updates on your projects and
can expect to receive your designs within
2 3 days.</p>
        </div>
        <div class="grid-item">
            <p><FaRegFolderOpen /></p>
            5. No lock in contracts
            <p>
            Pay the same every month, no surprises.
You can use it for as long as you want and
cancel anytime.
            </p>
        </div>
        <div class="grid-item">
            <p>
                <FaRegEnvelopeOpen/></p>6. Great value for money
            <p>Get the power of dedicated design team
at fraction of the cost of full-time
employee. ($54k/yr vs. $112k/yr).</p>
        </div>
        <div class="grid-item">
            <p><FaTeethOpen/></p>7. Customized for you
            <p>We design and build custom for you. We re
never starting from a template unless you
want that? You don t, right?</p>
        </div>
        <div class="grid-item">
            <p><GiOpenTreasureChest/></p>
            8. Creative paying
            <p>We re here when you need us and not on
            payroll when you don t.</p>
        </div>
        <div class="grid-item">
            <p><FaSearchDollar/></p>
            9. Expert turnovers
            <p>
            You re getting 10+ years of design

experience with every request. No hand-
holding required.  
            </p>
        </div>
    </div>
    </div>
  )
}

export default Capabilities