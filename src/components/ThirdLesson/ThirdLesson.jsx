import React, { Component } from 'react';
import css from './ThirdLesson.module.css';
import VideoList from './VideoList';
import Player from './Player';
import videos from './video.json';
import Reader from './Reader';

class ThirdLesson extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div>
        <div className={css.containerPlayer} style={{ padding: 24 }}>
          <h1 className={css.titlePlayer}>
            Selected video: {this.state.selectedVideo}
          </h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={this.state.selectedVideo} />
        </div>
        <div className={css.containerReader}>
          <Reader />
        </div>
      </div>
    );
  }
}

export default ThirdLesson;
