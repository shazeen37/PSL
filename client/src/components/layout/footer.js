import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer class="footer-distributed">
 
    <div class="footer-left">

    <h3> 
          
          <i className='fas fa-american-sign-language-interpreting'></i><span>Pakistan Sign Language</span></h3>

    <p class="footer-links">
    <a href="#">Home</a>
·
    <a href="#">Dictionary</a>
·
    <a href="#">Translator</a>
·
    
    </p>

    <p class="footer-company-name">webdevtrick &copy; 2019</p>
    </div>

    <div class="footer-center">

    <div>
    <i class="fa fa-map-marker"></i>
    <p><span>university of management and technology</span> Lahore, Pakistan</p>
    </div>

    <div>
    <i class="fa fa-phone"></i>
    <p>+1 555 123456</p>
    </div>

    <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
    </div>

    </div>

    <div class="footer-right">

    <p class="footer-company-about">
    <span>About the company</span>
Pakistan Sign Language Corpus.
    </p>

    <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

    </div>

    </div>

    </footer>
  );
};
export default footer;