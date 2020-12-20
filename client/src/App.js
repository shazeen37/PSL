import React, { Fragment, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import cards from './components/layout/cards/cards';
import Aboutus from './components/layout/Aboutus';
import Register from './components/auths/Register';
import Login from './components/auths/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Createprofile from './components/profile-form/Createprofile';
import Editprofile from './components/profile-form/Editprofile';
import Profiles from './components/profiles/Profiles';
import Post from './components/Posts/Post-form';
import upload from './components/Posts/upload';
import alluploads from './components/dashboard/Uploads';
import Review from './components/dashboard/Review';
import Dictionary from './components/dictionary';
import Translator from './components/translator';
import Sentence  from './components/Sentence';
import Footer from './components/layout/footer' 
//Redux
import { Provider } from 'react-redux';
import store from './store';
import ourteam from './components/layout/ourteam'

import { loadUser } from './actions/auth';

import './App.css';
import { dictionary } from './components/dictionary';
import Ourteam from './components/layout/ourteam';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={cards} />
          <Route exact path='/' component={Aboutus} />
          <Route exact path='/' component={Ourteam} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <section className='container'>
            <Alerts />
            <switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/Profiles' component={Profiles} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dictionary' component={Dictionary} />
              <Route exact path='/translator' component={Translator} />
              <Route exact path='/sentence' component={Sentence} />
              <PrivateRoute
                exact
                path='/Createprofile'
                component={Createprofile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={Editprofile}
              />
              <PrivateRoute exact path='/upload' component={upload} />
            </switch>
          </section>
          <Footer/>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
