import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from 'theme/globalStyle'
import Header from 'components/Header'
import Footer from 'components/Footer'

import logo from 'images/litecoin-logo.svg'

const Wrapper = styled.div`
  margin: '0 auto';
  max-width: 960;
  padding: '0px 1.0875rem 1.45rem';
  padding-top: 0;
`

const AppWrapper = styled.div`
  text-align: center;
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Litecoin Summit' },
          { name: 'keywords', content: 'litecoin, summit, 2018' },
        ]}
      >
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <Header />
      <Wrapper>{children()}</Wrapper>
      <Footer />
    </AppWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
