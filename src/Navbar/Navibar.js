import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import jump from 'jump.js';

// import the CSS, which is just bootstrap's.
// I really, really need a way of making this directory independent.
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

/* Navbar component. */
/* important and depressing tidbit: I can't seem to decouple the select function
   from the key, so for now, said key will have to be the item's id.*/
class Navibar extends Component {
  constructor() {
	  super();
    this.handleSelect = this.handleSelect.bind(this);
	  this.state = {
	    activeKey: 1
	  };
  }

  handleSelect(selectedKey) {
	  this.setState({
	    activeKey: selectedKey
	  });
    jump("#" + selectedKey);
    window.location.hash = selectedKey;
  }

  render() {
	  return (
	    <Navbar inverse fixedTop>
	      <Navbar.Header>
		      <Navbar.Brand>
		        <a href='/'>𒀭Luisch</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
	      </Navbar.Header>

	      <Nav bsStyle="pills"
		      activeKey={this.state.activeKey}
          onSelect={this.handleSelect}>
          {this.props.sections.map(section =>
            <NavItem eventKey={section} href={"#" + section}>
              {section}
            </NavItem>
          )}
	      </Nav>
      </Navbar>
	  );
  }
}

export default Navibar;
