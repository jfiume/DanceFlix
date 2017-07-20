import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import VideoIndexContainer from './videos/video_index_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1><a id="logo" href="/">DANCEFLIX</a></h1>
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route exact path="/videos" component={VideoIndexContainer} />
      <Route component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
