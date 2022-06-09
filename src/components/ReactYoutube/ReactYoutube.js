import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactYouTube extends Component {
  videoOnReady (event) {
      event.target.pauseVideo();
      // event.target.setVolume(100);
  }
  render () {
    var vw = '1100';
    if (window.innerWidth < 720) {
      vw = '600';
    } if (window.innerWidth < 375) {
      vw = '0';
    }
    const opts = {
        height: '375',
        width: vw,
        playerVars: {
            'playsinline': 1, 'controls' : 1
          }

    }
    
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        
      />
    )
  }
}

export default ReactYouTube
