import React, { Component } from 'react';
import VideoList from './VideoList';
import Player from './Player';
import videos from './video.json';

class ThirdLesson extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}

export default ThirdLesson;
