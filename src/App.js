import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";

import Hls from "hls.js";

Amplify.configure(aws_exports);

function App() {
  var src =
    "http://dwtagutzs10k4.cloudfront.net/881e7da8-5212-4529-9180-884e0b58b90d/hls/SampleVideo_1280x720_5mb.m3u8";
  var video = React.useRef();

  React.useEffect(() => {
    var hls = new Hls();
    if (Hls.isSupported()) {
      hls.loadSource(src);

      hls.attachMedia(video.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <video width={300} controls="true" height={300} ref={video} />
    </div>
  );
}

export default withAuthenticator(App, true);
