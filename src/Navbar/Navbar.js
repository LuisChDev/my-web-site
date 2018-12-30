import React, {Component} from 'react';
import {StyledNavbar} from './style.js';
import NavbarItem from './NavbarItem/NavbarItem.js';
import jump from 'jump.js';
import Lang from './Lang/Lang.js';

/**
 * navbar implemented in pure JS and inline CSS.
 * will replace the bootstrap one.
 * that way we get rid of the whole library.
 */
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: "home",
    };
  }

  render() {
    const {items, langs, handleLang} = this.props;
    const {activeKey} = this.state;
    return (
      <StyledNavbar itemID="navbar">
        {items
         .map((x) =>
              <NavbarItem text={x.text}
                          key={x.id}
                          isactivekey={x.id === activeKey}
                          url={x.url}
                          handleClick={() =>
                                       this.handleClick(x.id, x.url)}/>)}
        {/* language button*/}
        <Lang langs={langs} handleLang={handleLang}/>
      </StyledNavbar>
    );
  }

  handleClick(newKey, newUrl) {
    this.setState({
      activeKey: newKey,
    });
    if([...newUrl][0]==="#") {
      jump(`#${newKey}`);
      window.location.hash = newKey;
    } else {
      window.open(newUrl).focus();
    }

  }

}

export default Navbar;
