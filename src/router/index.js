import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Terms from '../pages/Terms';
import Policy from '../pages/Policy';
import Books from '../pages/Books';
import Clubs from '../pages/Clubs';
import Competetions from '../pages/Competetions';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import ResourcePage from '../pages/ResourcePage';
import Posts from '../pages/Posts';
import PostPage from '../pages/PostPage';
import CodeOfConduct from '../pages/CodeOfConduct';
import AddResource from '../pages/AddResource';

function Router() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/policy">
          <Policy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/clubs">
          <Clubs />
        </Route>
        <Route path="/competetions">
          <Competetions />
        </Route>
        <Route path="/codeofconduct">
          <CodeOfConduct />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route path="/resources/:title">
          <ResourcePage />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route path="/posts/:title">
          <PostPage />
        </Route>
      </Switch>
      {background && (
        <Route path="/addresources">
          <AddResource />
        </Route>
      )}
    </>
  );
}

export default Router;
