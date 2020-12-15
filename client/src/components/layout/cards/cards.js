import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from './CardsUI';
import './card-style.css';
import { Container } from 'reactstrap';

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: 'relative',
      height: '50vh',
      width: '100%',
      display: 'flex',
      flex: 1,
      paddingTop: '10px',
      justifyContent: 'center',
      alignItems: 'middle',
    };
  }

  render() {
    return (
      <Container>
        <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel
            autoplay={true}
            autoplay_speed={2500}
            
          >
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </ReactCardCarousel>
        </div>
        <div className='containier-fluid d-flex justify-content-center'>
          <a herf='#' className='btn btn-Success'>
            Search
          </a>
        </div>
      </Container>
    );
  }
}

export default MyCarousel;
