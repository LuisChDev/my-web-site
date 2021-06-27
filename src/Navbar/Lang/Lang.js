import React, {Component} from 'react';
import {StyledLang, StyledCont, StyledBtn, StyledItm} from './style.js';
import styled from 'styled-components';
import {flags} from '../../style.js';

class Lang extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false,
      lang: "english",
    };
  }

  render() {
    const {open, lang} = this.state;
    const {langs} = this.props;
    const {handleChange} = this;
    return (
      <StyledLang onClick={this.handleClick}>
        <StyledBtn><img src={flags[lang]} alt=""/>{`${lang} ▼`}</StyledBtn>
        <StyledCont open={open}>
          {langs.map(lang =>
                     <StyledItm onClick={() => handleChange(lang)}>
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

  handleChange(lang) {
    const {handleLang} = this.props;
    this.setState({
      lang: lang,
    });
    handleLang(lang);
  }
}

export default Lang;
