Component Hierarchy

AuthFormContainer

AuthForm

MemberContainer

Member

WelcomeContainer

NavBar
Footer

BrowseContainer

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

___________________________________________________
Path	                    | Component
"welcome/"	              | "WelcomeContainer"
"welcome/sign-up"	        | "AuthFormContainer"
"welcome/sign-in"	        | "AuthFormContainer"
"/member/:memberId"	      |"MemberContainer"
"/browse"	                | "BrowseContainer"
"/browse/genre/:genreId"	| "GenreContainer"
"/search"	                | "SearchResultsContainer"
"/watch/:videoId"	        | "VideoContainer"
