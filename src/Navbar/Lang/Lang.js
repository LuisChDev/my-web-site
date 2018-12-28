import React, {Component} from 'react';
import {StyledLang, StyledCont, StyledBtn, StyledItm} from './style.js';
import styled from 'styled-components';
import {flags} from '../../style.js';

class Lang extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false,
    };
  }

  render() {
    const {open} = this.state;
    const {langs, handleLang} = this.props;
    return (
      <StyledLang onClick={this.handleClick}>
        <StyledBtn>{`language ▼`}</StyledBtn>
        <StyledCont open={open}>
          {langs.map(lang =>
                     <StyledItm onClick={() => handleLang(lang)}>
                       <img src={flags[lang]} alt=""/>
                       {lang}</StyledItm>)}
        </StyledCont>
      </StyledLang>
    );
  }

  handleClick() {
    const {open} = this.state;
    this.setState({
      open: !open,
    });
  }
}

export default Lang;
