import React from 'react'

import './styles/cards.scss';

import Card from './Tiles'

import password from '../images/password.png';
import market from '../images/market.png';
import sales from '../images/sales.png';
import buy from '../images/buy.png';



function cardsImages2() {
  return (
    <div>
      <div className="cards-container1" >
            < h3 className="tool">Suggested Tools</h3>

            <br/> <br/>
            <div className="cards">

            
                <Card>  <a href="#" ><img src= {password}/></a> </Card>
                <Card> <a href="#" ><img src= {market}/></a> </Card>
                <Card>  <a href="#" >  <img src= {buy}/></a> </Card>
                <Card> <a href="#" ><img src= {sales}/></a> </Card>

            </div>
        </div>
    </div>
  )
}

export default cardsImages2
