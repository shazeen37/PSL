import React, { Component } from 'react';
import './card-style.css';
import ReactPlayer from 'react-player';
import { Link, Redirect } from 'react-router-dom';
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
          url='../../../../../public/production ID_2.mp4'
          playing
          loop
         
          
        />
      </div></a>
    <div class="property-description">
      <h5> Thank You </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    
  </div>
  <div class="property-card">
    <a href="#">
      <div >
      <ReactPlayer
          url='../../../../../public/production ID_5.mp4'
          playing
          loop
         
          
        />
      </div></a>
    <div class="property-description">
      <h5> Hello </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    
  </div>
  <div class="property-card">
    <a href="#">
      <div >
      <ReactPlayer
          url='../../../../../public/production ID_8.mp4'
          playing
          loop
         
          
        />
      </div></a>
    <div class="property-description">
      <h5> Good Morning </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    
  </div>
</div>


       
        <div className='containier-fluid d-flex justify-content-center'>
        <Link to='/dictionary' className='btn btn-Success'>Search</Link>
        </div>
      </section>
    );
  }
}

export default MyCarousel;
