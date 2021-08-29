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
import upload from './components/Posts/upload';
import Dictionary from './components/dictionary';
import Translator from './components/translator';
import Sentence  from './components/Sentence';
import Footer from './components/layout/footer';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';

import './App.css';
import Ourteam from './components/layout/ourteam';
import ReviewGS from './components/dashboard/ReviewUI'
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
        <Alerts />
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={cards} />
          <Route exact path='/' component={Aboutus} />
          <Route exact path='/' component={Ourteam} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <section className='container'>
<<<<<<< HEAD
           
            <switch>
=======
            <Alerts />
            <Switch>
>>>>>>> 0cc078346183a5153befb7001cc45faaf6510b25
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
                <Route
                exact
                path='/review/:id'
                component={ReviewGS}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={Editprofile}
              />
              <PrivateRoute exact path='/upload' component={upload} />
            </Switch>
          </section>
          <Footer/>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
