Component Hierarchy

AuthFormContainer

AuthForm

MemberContainer

Member

WelcomeContainer

NavBar
Footer

SearchContainer

NavBar
Search
VideoIndex

SearchResultsContainer

NavBar
Search
SearchResults

VideoIndex

VideoIndexItem
VideoDetail
video

GenreContainer

NavBar
VideoIndex

VideoContainer

Video

PlaylistsContainer

playlists


FavoritesContainer

Favorites

ViewsContainer

Views

___________________________________________________
Path	                      | Component
"welcome/"	                | "WelcomeContainer"
"welcome/sign-up"	          | "AuthFormContainer"
"welcome/sign-in"	          | "AuthFormContainer"
"/member/:memberId"	        | "MemberContainer"
"/search"	                  | "SearchContainer"
"/search/genre/:genreId"	  | "SearcgContainer"
"/search"	                  | "SearchResultsContainer"
"/videos/:videoId"	        | "VideoContainer"
"/favorites"                | "FavoritesContainer"
"/views/:videoId"           | "ViewsContainer"
