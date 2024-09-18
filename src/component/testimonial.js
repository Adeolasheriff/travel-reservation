import React from 'react'
import Slick from '../pages/slick'


function Testimonial() {
  return (
    <div className='container d-flex row'>
        <div className='col-sm-6 col-md-6 col-lg-6 testimony mt-5' style={{zIndex:1}}>
            <h1 className='text-primary-emphasis fw-bolder'>Testimonials</h1>
            <p className='fs-5 text-body-tertiary mt-5 mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti dolorem est? A, officiis ab! Reiciendis labore, maxime ipsa quidem eos, eaque aspernatur distinctio rerum est laboriosam debitis, perferendis ratione!</p>
        </div>
        <div className='' style={{zIndex:0}}>
           <Slick/>
        </div>
    </div>
  )
}

export default Testimonial;