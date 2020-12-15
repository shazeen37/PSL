import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Ourteam = () => {
return<div>
 
 <div class="containerG">
   <div className= 'text-center'> <h1 className ='headingteam'>Our Team</h1></div>
   
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6"/>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"></a></li>
                        <li><a href="#" class="fab fa-google-plus"></a></li>
                        <li><a href="#" class="fab fa-instagram"></a></li>
                        <li><a href="#" class="fab fa-linkedin"></a></li>
                    </ul>
                </div>
                <div class="team-content">
                    <h3 class="title">Kristiana</h3>
                    <span class="post">Web Developer</span>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"/>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"></a></li>
                        <li><a href="#" class="fab fa-google-plus"></a></li>
                        <li><a href="#" class="fab fa-instagram"></a></li>
                        <li><a href="#" class="fab fa-linkedin"></a></li>
                    </ul>
                </div>
                <div class="team-content">
                    <h3 class="title">Williamson</h3>
                    <span class="post">Web Designer</span>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="our-team">
                <div class="pic">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"/>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"></a></li>
                        <li><a href="#" class="fab fa-google-plus"></a></li>
                        <li><a href="#" class="fab fa-instagram"></a></li>
                        <li><a href="#" class="fab fa-linkedin"></a></li>
                    </ul>
                </div>
                <div class="team-content">
                    <h3 class="title">Kristiana</h3>
                    <span class="post">Web Designer</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  
};


export default Ourteam;
