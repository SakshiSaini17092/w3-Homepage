import React from 'react'

import './styles/carousel.scss';

import passwordc from '../images/passwordc.png';
import cloud from '../images/cloud.png';

import mails from '../images/mails.png';
import { Carousel, Slide } from 'carbon-react/lib/components/carousel';



function CarouselComp() {
  return (
    
    <div className="container" >
      <h1 className="tool" >What's New</h1>
    <div className="carousel" >
          

          <Carousel>
             <Slide>
             <img className="small"
            src = {mails}
            alt="First slide"
          />


        <a href="#" className="ref" >“[EXTERNAL]” added to non-IBMer emails</a>
        <p>2 May 2019</p>

        <p className="para">To help improve email security, the CIO is implementing a change to the IBM global messaging 
 system beginning May 2nd. Once the rollout is complete, all emails received from senders outside of 
 IBM will now have the subject line tagged with the word “[EXTERNAL]." When you see an external tag 
 in an email, open with caution.</p>
             </Slide>

             <Slide>
             <img
            className="small d-block w-100"
            src = {cloud}
            alt="Third slide"
          />

        
         <a href ="#" className="ref">Meet the new CIO Cloud Services</a> 
          <p>4 December 2018</p>

      <p className= "para">CIO Cloud Services enables IBMers to bring internal business applications quickly and securely to 
the IBM Cloud through Managed or Brokered Cloud Services.</p>
             </Slide>
              <Slide>

              <img
            className="small"
            src= {passwordc}
            alt="Third slide"
          />

          
          <a href="#" className="ref" >Plan your 15-character w3id password</a>
          <p>10 April 2019</p>

<p className="para" >
Beginning on April 16th, all w3id password updates must comply with the new requirements announced by the IBM Chief Information Security Officer. All passwords must have:
A minimum of 15 characters.
At least two character types, including uppercase, lowercase, numbers, and special characters, and spaces will be allowed.
Go to section 4.3.2 in the IT Security Standards.
</p>


              </Slide>
            </Carousel>
          </div>
    </div>
       
  )
}

export default CarouselComp
