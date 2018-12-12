import React, {Component} from 'react';
import StyledNavbar from './style.js';
import NavbarItem from './NavbarItem/NavbarItem.js';
import jump from 'jump.js';

/**
 * navbar implemented in pure JS and inline CSS.
 * will replace the bootstrap one.
 * that way we get rid of the whole library.
 */
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: 0,
    };
  }

  handleClick(newKey, newUrl) {
    this.setState({
      activeKey: newKey,
    });
    if([...newUrl][0]==="#") {
      jump(newUrl);
      window.location.hash = newKey;
    } else {
      window.open(newUrl).focus();
    }
  }

  render() {
    return (
      <StyledNavbar itemID="navbar">
        {this
         .props
         .items
         .map((x) =>
              <NavbarItem text={x.text}
                          key={x.id}
                          isactivekey={x.id === this.state.activeKey}
                          url={x.url}
                          onClick={(e) =>
                                   this.handleClick(x.id, x.url, e)}/>)}
      </StyledNavbar>
    );
  }
}

export default Navbar;
