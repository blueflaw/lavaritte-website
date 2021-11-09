import React, { Component } from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components';

class ReactYouTube extends Component {
  videoOnReady (event) {
      event.target.pauseVideo();
  }
  videoOnPlay(event){
      event.target.setVolume(100);
  }
  render () {
    const opts = {
        height: '535',
        width: '960',
        playerVars: {
            'playsinline': 1, 'controls' : 1
          }

    }
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        onReady={this.videoOnPlay}
        opts={opts}
        onReady={this.videoOnReady}
        
      />
    )
  }
}

export default ReactYouTube
