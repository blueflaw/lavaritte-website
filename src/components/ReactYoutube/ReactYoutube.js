import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ReactYouTube extends Component {
  videoOnReady (event) {
      event.target.pauseVideo();
      // event.target.setVolume(100);
  }
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    if(window.innerWidth <= 768) {
      this.state = { 
        vw: 650,
        vh: 300
      };
    }
    if(window.innerWidth <= 425) {
      this.state = { 
        vw: 350,
        vh: 200
      };
    } else{
      this.state = { 
        vw: 1100,
        vh: 600
      };
    }
  }

  componentDidMount(){
    console.log('this is componentDidMount')
  }

  componentDidUpdate(){
    console.log('this is componentDidUpdate')
  }
  render () {
    var opts = {
        height: this.vh,
        width: this.vw,
        frameBorder: "0",
        playerVars: { 
            'playsinline': 1, 'controls' : 1
          }

    }
    if(window.innerWidth > 1024){ 
      opts.width = '1100';
      opts.height = '600';
    }
    if(window.innerWidth <= 1024 && window.innerWidth > 768){ 
      opts.width = '750';
      opts.height = '500';
    }
    if(window.innerWidth <= 768 && window.innerWidth > 425){
      opts.width = '650';
      opts.height = '300';
    }
    if(window.innerWidth <= 425 && window.innerWidth > 375){
        opts.width = '350';
        opts.height = '200';
    } 
    if(window.innerWidth <= 375){
      opts.width = '250';
      opts.height = '150';
    }
    //console.log(window.innerWidth);
    var {videoId} = this.props
    return (
      <YouTube 
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        style={{
          content: 'fit',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%'
        }}
      />
    )
  }
}

export default ReactYouTube
