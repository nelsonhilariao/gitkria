import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Footer from './Footer/Footer'
// import Filter from './Filters/Filters'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div style={{ "position": "relative", "minHeight": "100vh" }}>
        <NavMenu />
        {/* <Filter /> */}
        <Container style={{ "paddingBottom": "150px" }}>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
