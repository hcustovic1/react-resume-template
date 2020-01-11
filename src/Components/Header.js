import React, { Component } from "react";
import ReactFitText from "react-fittext";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#resume">Resume</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#portfolio">Works</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#testimonials">Testimonials</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <ReactFitText minFontSize="40" maxFontSize="90">
              <h1>I'm {name}.</h1>
            </ReactFitText>
            <h3>
              I'm a {city} based <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <AnchorLink href="#about">
            <i className="icon-down-circle"></i>
          </AnchorLink>
        </p>
      </header>
    );
  }
}

export default Header;
