import React, {Component} from 'react';
import {StyledVideo, videoConfig, BkgVideo} from './style.js';

/**
 * Pastor says styled components are the fool's fig leaf.
 */
class VideoPlayer extends Component {
  constructor() {
    super();
    this.videoRef = React.createRef();
  }


  // stopping or restarting the playback
  componentDidUpdate(prevProps) {
    const {pose} = this.props;
    if (pose !== prevProps.pose) {
      if (!pose) {
        this.videoRef.current.pause();
      } else {
        this.videoRef.current.play();
      }
    }
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
};

export default VideoPlayer;
