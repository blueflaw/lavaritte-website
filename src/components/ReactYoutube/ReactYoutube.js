import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactYouTube extends Component {
  videoOnReady (event) {
      event.target.pauseVideo();
      // event.target.setVolume(100);
  }
  render () {
    var vw = window.innerWidth ;
    var vh = window.innerHeight;
    console.log(vw)
    if (window.innerWidth < '768') {
      vw = '600'; 
      vh = '300';
    } if (window.innerWidth < '375') {
      vw = '300';
      vh = '300';
    } else {
      vw = '1100';
      vh = '470';
    }
    const opts = {
        height: vh,
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
