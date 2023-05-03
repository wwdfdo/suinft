import React, { Component } from "react";
import frogsound from "../../audios/Frog Ribbit Sound Effect.mp3";

class MusicComponent extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src={frogsound}></source>
        </audio>
      </div>
    );
  }
}

export default MusicComponent;
