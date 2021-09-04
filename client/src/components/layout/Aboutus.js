import React from 'react';

const Aboutus = () => {
  {
    return (
      <section className='about'>
        <div className='overlay'>
          <div className='about-inner'>
            <h1 className='x-large'> About us</h1>
            <h2 className='lead'>
              {' '}
              Crowd Sourcing for Pakistan sign language corpus
            </h2>{' '}
            <p>
            Sign languages are gesture-based languages that are used by the deaf community of the world. There is no universal sign language, and there exist hundreds of sign languages in the
word, i.e. every sign language has a different gesture for the same word of natural language. Furthermore,like different written or scripting languages there are different dialects of sign language gestures as well, i.e., in large
countries there exist different gestures for the same word in different regions of a country

            </p>
            <p>
            Each word of spoken language is either represented by
a single gesture or a combination of multiple gestures in
sign language. The gesture may be static or dynamic which
may involve certain movements of hands to perform a gesture.
This research aims to investigate
the idea of engaging the deaf community for the development and validation of a parallel corpus for a sign
language and its dialects. As a principal contribution, this research presents a framework for building a
parallel corpus for sign languages by harnessing the powers of crowdsourcing with editorial manager, thus
it engages a diversified set of stakeholders for building and validating a repository in a quality controlled
manner.
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default Aboutus;
