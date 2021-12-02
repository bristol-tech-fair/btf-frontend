import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Header / Navigation */}
        <Route path={PATHS.home} element={<HomePage readMoreUrl="/" />} />
        <Route path={PATHS.learningResources} element={<LearningResources />} />
        <Route path={PATHS.books} element={<BookList />} />
        <Route path={PATHS.events} element={<Events />} />
        <Route path={PATHS.clubs} element={<Clubs />} />
        <Route path={PATHS.competitions} element={<Competitions />} />
        <Route path={PATHS.supportGroups} element={<SupportGroups />} />
        <Route path={PATHS.posts} element={<Posts />} />
        {/* Pages by id / title */}
        <Route path={PATHS.resourceOpen} element={<ResourceCardOpen />} />
        <Route path={PATHS.postOpen} element={<PostsOpen />} />
        {/* Footer links */}
        <Route path={PATHS.about} element={<About />} />
        <Route path={PATHS.contact} element={<Contact />} />
        <Route path={PATHS.codeOfConduct} element={<CodeOfConduct />} />
        <Route path={PATHS.cookiePolicy} element={<CookiePolicy />} />
        <Route
          path={PATHS.termsAndConditions}
          element={<TermsAndConditions />}
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
