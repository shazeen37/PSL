import React from 'react';

const footer = () => {
  return (
    <footer className="footer-distributed">
 
    <div className="footer-left">

    <h3> 
          
          <i className='fas fa-american-sign-language-interpreting'></i><span>Pakistan Sign Language</span></h3>

    
    <p className="footer-company-name">Pakistan sign language corpus &copy; 2020</p>
    </div>

    <div className="footer-center">

    <div>
    <i className="fa fa-map-marker"></i>
    <p><span>university of management and technology</span> Lahore, Pakistan</p>
    </div>

    <div>
    <i className="fa fa-phone"></i>
    <p>+1 555 123456</p>
    </div>

    <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
    </div>

    </div>

    <div className="footer-right">

    <p className="footer-company-about">
    <span>About the company</span>
Pakistan Sign Language Corpus.
    </p>

    <div className="footer-icons">

    <a href="#"><i className="fa fa-facebook"></i></a>
    <a href="#"><i className="fa fa-twitter"></i></a>
    <a href="#"><i className="fa fa-linkedin"></i></a>
    <a href="#"><i className="fa fa-github"></i></a>

    </div>

    </div>

    </footer>
  );
};
export default footer;