import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import { AuthRoute, ProtectedRoute, LogoRoute } from '../util/route_util';
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
      <LogoRoute path="/videos" value="DANCEFLIX" />
      <Route path="/videos" component={GreetingContainer} />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/videos" component={VideoIndexContainer} />
      <Route path="/videos/:id" component={VideoShowContainer} />
      <Route component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
