import React, {Component} from 'react';
import styledNavbar from './style.js';
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
      <styledNavbar>
        {this
         .props
         .items
         .map((x, i) =>
              <NavBarItem text={x.text}
                          id={i}
                          isActiveKey={i === this.state.activeKey}
                          url={x.url}
                          onClick={(e) => this.handleClick(i, x.url, e)}/>)}
      </styledNavbar>
    );
  }
}

export default Navbar;
