import React from 'react'

import './styles/cards.scss';

import blue from '../images/blue.png';
import box from '../images/box.png';

import checkpoint from '../images/checkpoint.png';
import help from '../images/help.png';
import mail from '../images/mail.png';
import verse from '../images/vrese.png';
import learning from '../images/learning.png';
import meeting from '../images/meeting.png';
import slack from '../images/slack.png';
import workday from '../images/workday.png';
import tool from '../images/tool.png';

import travel from '../images/travel.png';

import Card from './Tiles'

function CardsImages() {
  return (
    <div>
      <div className="cards-container">

        <h3 className="tool" >Top tools</h3>

        <br/> <br/>
            <div className="cards">
                <Card> <a href="#" > <img src= {blue}/>  </a>  </Card>
                <Card> <a href="#" > <img src= {box}/> </a></Card>
                <Card> <a href="#" ><img src= {checkpoint}/> </a></Card>
                <Card> <a href="#" ><img src= {help}/></a> </Card>
                <Card> <a href="#" ><img src= {mail}/></a> </Card>
                <Card> <a href="#" ><img src= {verse}/></a> </Card>
                <Card> <a href="#" > <img src= {learning}/> </a> </Card>
                <Card> <a href="#"> <img src= {slack}/></a> </Card>
                <Card> <a href="#" ><img src= {meeting}/></a> </Card>
                <Card>  <a href="#" ><img src= {workday}/></a>  </Card>
                <Card> <a href="#" ><img src= {travel}/></a> </Card>
                <Card>  <a href="#" ><img src= {tool}/></a>  </Card>
                
            </div>
        </div>
    </div>
  )
}

export default CardsImages
