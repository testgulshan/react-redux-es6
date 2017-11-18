import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PrivacyPage from './components/pages/PrivacyPage';
import CoursesPage from './components/pages/CoursesPage';
import AnimationPage from './components/pages/AnimationPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="privacy" component={PrivacyPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="animation" component={AnimationPage} />
  </Route>
);
