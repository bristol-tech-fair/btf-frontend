import React from 'react';
import PropTypes from 'prop-types';
import {
  LayoutContainer,
  FooterPlaceholder,
  NavPlaceholder,
  Main
} from './DefaultPageLayout.styles';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

const DefaultPageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavPlaceholder>
        <Navigation />
      </NavPlaceholder>
      <Main>
        <h1>
          Red border: 100VH .... Purple Border & Main Tag: max-width 144REM ....
          Footer: width:144REM centered inside ORANGE DIV taking 100% width of
          the page .... Footer is sticky to the bottom and will be pushed down
          as more content populate the page
        </h1>
        <br />
        <br />
        <h3>
          Default Page Layout:
          <br />
          {`<Navbar />`}
          <br />
          {`<Main >`}
          <br />
          {`{children}`}
          <br />
          {`</Main>`}
          <br />
          {`<Footer />`}
        </h3>

        {children}
      </Main>
      <FooterPlaceholder>
        <Footer />
      </FooterPlaceholder>
    </LayoutContainer>
  );
};

DefaultPageLayout.propTypes = { children: PropTypes.node };

export default DefaultPageLayout;
