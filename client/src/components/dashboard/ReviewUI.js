import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUpload } from '../../actions/uploads';
import ReactPlayer from 'react-player';
import './UploadsStyles.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { giveReview } from '../../actions/dictionary';
import { RangeStepInput } from 'react-range-step-input';
import { Alert } from 'reactstrap';

const ReviewUI = ({ getUpload, giveReview, uploads: { upload, loading } }) => {
  useEffect(() => {
    getUpload();
  }, [getUpload]);
  const [shape, setShape] = useState('');
  const [location, setLocation] = useState('');
  const [features, setFeatures] = useState('');
  const [orientation, setOrientation] = useState('');
  const [movement, setMovement] = useState('');
  const [decision, setDecision] = useState('');
  const [scale, setScale] = useState(0);
  const [visible, setVisible] = useState(false);
  return loading || upload === null ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
      <Alert color='danger' isOpen={visible} toggle={() => { setVisible(false) }}>
        Some values are missing. Please select appropriate options.
      </Alert>
      <div className="rowG">
        <div className="column" >
          <div className='containier-fluid d-flex justify-content-center'>
            <div className='card text-center shadow'>
              <div className='overflow'>
                <ReactPlayer url={upload.video} playing loop className='card-img-top' />
              </div>
              <div className='card-body text dark'>
                <h4 className='card-tital'> {upload.gestureName} </h4>
                <p>Status: {upload.status}</p>
                <p className='post-date'>
                  Posted on <Moment format='YYYY/MM/DD'>{upload.date}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='mt-20'>
            <div className='row border-underline'>
              <div className='col-item text-center'>Evaluation</div>
              <div className='col-rate'>5</div>
              <div className='col-rate'>4</div>
              <div className='col-rate'>3</div>
              <div className='col-rate'>2</div>
              <div className='col-rate'>1</div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='row'>
              <div className='col-item text-right px-2-c'>Shape</div>
              <div className='col-rate'>
                <input type='radio' id='5' name='shape' value='5' checked={shape === '5'} onChange={() => setShape('5')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='4' name='shape' value='4' checked={shape === '4'} onChange={() => setShape('4')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='3' name='shape' value='3' checked={shape === '3'} onChange={() => setShape('3')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='2' name='shape' value='2' checked={shape === '2'} onChange={() => setShape('2')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='1' name='shape' value='1' checked={shape === '1'} onChange={() => setShape('1')} />
              </div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='row'>
              <div className='col-item text-right px-2-c'>Location</div>
              <div className='col-rate'>
                <input type='radio' id='5' name='location' value='5' checked={location === '5'} onChange={() => setLocation('5')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='4' name='location' value='4' checked={location === '4'} onChange={() => setLocation('4')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='3' name='location' value='3' checked={location === '3'} onChange={() => setLocation('3')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='2' name='location' value='2' checked={location === '2'} onChange={() => setLocation('2')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='1' name='location' value='1' checked={location === '1'} onChange={() => setLocation('1')} />
              </div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='row'>
              <div className='col-item text-right px-2-c'>Non-Manual Features</div>
              <div className='col-rate'>
                <input type='radio' id='5' name='features' value='5' checked={features === '5'} onChange={() => setFeatures('5')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='4' name='features' value='4' checked={features === '4'} onChange={() => setFeatures('4')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='3' name='features' value='3' checked={features === '3'} onChange={() => setFeatures('3')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='2' name='features' value='2' checked={features === '2'} onChange={() => setFeatures('2')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='1' name='features' value='1' checked={features === '1'} onChange={() => setFeatures('1')} />
              </div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='row'>
              <div className='col-item text-right px-2-c'>Orientation</div>
              <div className='col-rate'>
                <input type='radio' id='5' name='orientation' value='5' checked={orientation === '5'} onChange={() => setOrientation('5')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='4' name='orientation' value='4' checked={orientation === '4'} onChange={() => setOrientation('4')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='3' name='orientation' value='3' checked={orientation === '3'} onChange={() => setOrientation('3')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='2' name='orientation' value='2' checked={orientation === '2'} onChange={() => setOrientation('2')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='1' name='orientation' value='1' checked={orientation === '1'} onChange={() => setOrientation('1')} />
              </div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='row'>
              <div className='col-item text-right px-2-c'>Movement</div>
              <div className='col-rate'>
                <input type='radio' id='5' name='movement' value='5' checked={movement === '5'} onChange={() => setMovement('5')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='4' name='movement' value='4' checked={movement === '4'} onChange={() => setMovement('4')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='3' name='movement' value='3' checked={movement === '3'} onChange={() => setMovement('3')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='2' name='movement' value='2' checked={movement === '2'} onChange={() => setMovement('2')} />
              </div>
              <div className='col-rate'>
                <input type='radio' id='1' name='movement' value='1' checked={movement === '1'} onChange={() => setMovement('1')} />
              </div>
            </div>
          </div>
          <div className='mt-60 border-upperline'>
            <div className='row px-2-c text-center'>Overall Decision</div>
          </div>
          <div className='mt-20 px-2-c'>
            <div className='row'>
              <div className='col-accept'>
                <span className='m-0-25-0-0'>Accept</span>
                <input type='radio' id='accept' name='decision' value='accept' checked={decision === 'accept'} onChange={() => setDecision('accept')} />
              </div>
              <div className='col-reject'>
                <span className='m-0-25-0-0'>Reject</span>
                <input type='radio' id='reject' name='decision' value='reject' checked={decision === 'reject'} onChange={() => setDecision('reject')} />
              </div>
              <div className='col-pendng'>
                <span className='m-0-25-0-0'>Pending</span>
                <input type='radio' id='pending' name='decision' value='pending' checked={decision === 'pending'} onChange={() => setDecision('pending')} />
              </div>
            </div>
          </div>
          <div className='mt-20'>
            <div className='row px-2-c text-center'>Scale</div>
          </div>
          <div className='mt-20 px-2-c'>
            <div className='row'>
              <div className='w-100-p'>
                <RangeStepInput className='w-100-p' min={0} max={10} value={scale} step={1} onChange={(e) => setScale(e.target.value)} /> {scale}
              </div>
            </div>
          </div>
          <div className='mt-20 px-2-c'>
            <div className='row'>
              <div className='col-accept'>
                <button type='button' className='btn btn-primary'
                  onClick={() => {
                    if (shape === '' || location === '' || features === '' || orientation === '' || movement === '' || decision === '') {
                      setVisible(true);

                      setTimeout(() => {
                        setVisible(false);
                      }, 3000);
                    }
                    else {
                      setVisible(false);
                      console.log('shape: ', shape);
                      console.log('location: ', location);
                      console.log('features: ', features);
                      console.log('orientation: ', orientation);
                      console.log('movement: ', movement);
                      console.log('decision: ', decision);
                      console.log('scale: ', scale);
                    }
                  }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ReviewUI.propTypes = {
  getUpload: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
  giveReview: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getUpload, giveReview })(ReviewUI);
