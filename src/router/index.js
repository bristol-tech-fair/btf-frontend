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
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/policy" exact component={Policy} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/books" component={Books} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/competetions" component={Competetions} />
        <Route path="/codeofconduct" component={CodeOfConduct} />
        <Route path="/events" component={Events} />
        <Route exact path="/resources" component={Resources} />
        <Route path="/resources/:title" component={ResourcePage} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:title" component={PostPage} />
      </Switch>
      {background && <Route path="/addresources" component={AddResource} />}
    </>
  );
}

export default Router;
