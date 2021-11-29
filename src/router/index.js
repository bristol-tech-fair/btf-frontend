import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from 'components/pages/About';
import BookList from 'components/pages/BookList';
import Clubs from 'components/pages/Clubs';
import CodeOfConduct from 'components/pages/CodeOfConduct';
import Competitions from 'components/pages/Competitions';
import Contact from 'components/pages/Contact';
import CookiePolicy from 'components/pages/CookiePolicy';
import Events from 'components/pages/Events';
import HomePage from 'components/pages/HomePage';
import LearningResources from 'components/pages/LearningResources';
import Posts from 'components/pages/Posts';
import PostsOpen from 'components/pages/PostsOpen';
import ResourceCardOpen from 'components/pages/ResourceCardOpen';
import SupportGroups from 'components/pages/SupportGroups';
import TermsAndConditions from 'components/pages/Terms';
import { PATHS } from './paths';

function Routes() {
  return (
    <>
      <Switch>
        {/* Header / Navigation */}
        <Route exact path={PATHS.home}>
          <HomePage readMoreUrl="/" />
        </Route>
        <Route exact path={PATHS.learningResources}>
          <LearningResources />
        </Route>
        <Route exact path={PATHS.books}>
          <BookList />
        </Route>
        <Route exact path={PATHS.events}>
          <Events />
        </Route>
        <Route exact path={PATHS.clubs}>
          <Clubs />
        </Route>
        <Route exact path={PATHS.competitions}>
          <Competitions />
        </Route>
        <Route exact path={PATHS.supportGroups}>
          <SupportGroups />
        </Route>
        <Route exact path={PATHS.posts}>
          <Posts />
        </Route>
        {/* Pages by id / title */}
        <Route exact path={PATHS.resourceOpen}>
          <ResourceCardOpen />
        </Route>
        <Route exact path={PATHS.postOpen}>
          <PostsOpen />
        </Route>
        {/* Footer links */}
        <Route exact path={PATHS.about}>
          <About />
        </Route>
        <Route exact path={PATHS.contact}>
          <Contact />
        </Route>
        <Route exact path={PATHS.codeOfConduct}>
          <CodeOfConduct />
        </Route>
        <Route exact path={PATHS.cookiePolicy}>
          <CookiePolicy />
        </Route>
        <Route exact path={PATHS.termsAndConditions}>
          <TermsAndConditions />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
