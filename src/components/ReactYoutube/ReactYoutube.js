import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactYouTube extends Component {
  videoOnReady (event) {
      event.target.pauseVideo();
      // event.target.setVolume(100);
  }
  render () {
    const opts = {
        height: '535',
        width: '1100',
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
