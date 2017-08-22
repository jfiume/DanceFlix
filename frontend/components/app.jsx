import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import FavoriteIndexContainer from './favorites/favorite_index_container';
import SearchContainer from './search/search_container';
import ViewsIndexContainer from './views/views_index_container';
import { AuthRoute, ProtectedRoute, LogoRoute, SplashRoute, SplashVideoRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';


const currentPage = () => {
  const page = window.location.hash.slice(2);
  if (page === "") {
    return (
      "splash"
    );
  } else {
    return (
      page
    );
  }
};


const App = () => (
  <div id={currentPage()}>
    <header>
      <LogoRoute path="/videos" value="DANCEFLIX" />
      <ProtectedRoute path="/" component={GreetingContainer} />
      <ProtectedRoute path="/" component={SearchContainer} />
      <SplashRoute exact path="/" />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/videos" component={VideoIndexContainer} />
      <ProtectedRoute path="/videos/:id" component={VideoShowContainer} />
      <ProtectedRoute path="/favorites" component={FavoriteIndexContainer} />
      <ProtectedRoute path="/views" component={ViewsIndexContainer} />
      <SplashVideoRoute exact path="/" />
    </Switch>
  </div>
);

export default App;
