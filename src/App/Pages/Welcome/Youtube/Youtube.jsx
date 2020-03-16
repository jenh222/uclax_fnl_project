import React from 'react';
import YouTube from 'react-youtube';

class YoutubePlayer extends React.Component {

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render() {
      const opts = {
      //  height: '300px',
      //  width: '100%',
        playerVars: {
          autoplay: 0
        }
      };
   
      return (
        <YouTube
          videoId="y2PL4gNffBI"
          opts={opts}
          onReady={this.videoOnReady}
        />
      );
    }
  }
  export default YoutubePlayer;