import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.ico';

export default function SEO(props) {
  const {title, description, siteName, twitterCard, children, favicon} = props;
  return (
    <Helmet
    key="app-head"
    titleTemplate="%s · Data ∩ Product"
    defaultTitle="Data ∩ Product"
  >
    <html lang="en" />

    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>
    <meta name='description' content={config.siteDescription} />
    <meta property="og:image" content='favicon.ico' />
    
    {/* Favicon stuff from realfavicongenerator.net */}
    <meta name="apple-mobile-web-app-title" content="thegyre.io" />
    <meta name="application-name" content="thegyre.io" />
    <link rel="icon" href={favicon} />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

  </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  twitterCard: PropTypes.string,
  children: PropTypes.node,
  favicon: PropTypes.string
};

SEO.defaultProps = {
  twitterCard: 'summary',
  favicon: 'https://thegyre.io/favicon.ico'
};
