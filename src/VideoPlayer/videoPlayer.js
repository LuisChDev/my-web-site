import React, {Component} from 'react';
import {StyledVideo, videoConfig, BkgVideo} from './style.js';

/**
 * Pastor says styled components are the fool's fig leaf.
 */
class VideoPlayer extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    let {bkg} = this.props;
    return (
      <StyledVideo itemID={bkg?"bkg":"video"} ref={this.videoRef}
                   loop muted autoPlay bkg={bkg}
                   poster={videoConfig.poster}>
        <source src={videoConfig.video} type="video/webm"/>
      </StyledVideo>
    );
  }
  /* if window scroll position is greater than video bottom position:
   *   pause video
   * else:
   *   if video already playing:
   *     do nothing
   *   else:
   *     play video
   */
  handleScroll() {
    let {top, bottom} = this.videoRef.current.getBoundingClientRect();
    let {paused} = this.videoRef.current;
    if (window.scrollY > bottom) {
      this.videoRef.current.pause();
    }
    else {
      if (paused) {
        this.videoRef.current.play();
      }
    }
  }
};

export default VideoPlayer;
