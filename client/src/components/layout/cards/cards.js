import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from './CardsUI';
import './card-style.css';
import { Container } from 'reactstrap';
import ReactPlayer from 'react-player';
class MyCarousel extends Component {
  

  render() {
    return (
 
      <section>
         <div className= 'text-centerr'> <h1 className ='headingteam'>gesture videos</h1></div>
        <div class="center">

  <div class="property-card">
    <a href="#">
      <div >
      <ReactPlayer
          url='../../../../../public/4b114fd3-e117-418b-a792-3b859e3fff60-hand_close7.mp4'
          playing
          loop
          
        />
      </div></a>
    <div class="property-description">
      <h5> Drinking </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    
  </div>
  <div class="property-card">
    <a href="#">
      <div >
      <ReactPlayer
          url='../../../../../public/4b114fd3-e117-418b-a792-3b859e3fff60-hand_close7.mp4'
          playing
          loop
          
        />
      </div></a>
    <div class="property-description">
      <h5> Eating </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    
  </div>
  <div class="property-card">
    <a href="#">
      <div >
      <ReactPlayer
          url='../../../../../public/4b114fd3-e117-418b-a792-3b859e3fff60-hand_close7.mp4'
          playing
          loop
          
        />
      </div></a>
    <div class="property-description">
      <h5> Playing </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    
  </div>
</div>


       
        <div className='containier-fluid d-flex justify-content-center'>
          <a herf='#' className='btn btn-Success'>
            Search
          </a>
        </div>
      </section>
    );
  }
}

export default MyCarousel;
