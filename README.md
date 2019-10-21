# Eliad-Tuksher-10-10-2019

### In brief

[Herolo's Weather app](<https://github.com/EliTu/Eliad-Tuksher-10-10-2019>) is a small SPA that was built for [Herolo](<https://herolo.co.il>) as an intro project, using React.js (+Redux & React Router), TypeScript and CSS modules.

### Functionality

Using the various [Accuweather API](<https://developer.accuweather.com>) endpoints, the user is able to perform a search, through the weather [search auto-complete API](<https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete),> and select a location based on his input. Through the [current weather conditions API] (<https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D)> and the [five days forecast API](<https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D),> the user receives the current weather data of the location he selected, as well as a forecast for the following five days. The user can then press on the heart-shaped button to save a location to his favorites. When the user visits the 'My Favorites' page, he then can see a list of all the locations he saved and the current conditions in each one. Clicking on one of the favorite items will navigate the user back to Home screen, where he will receive the updated information on his location, in addition to the five days forecast.

### Tech details

* Main tech stack: React.js (Using hooks), TypeScript, and CSS modules.

* State management: Redux for Flux architecture state management, and redux-thunk as a middleware for async actions.

* Testing: Embracing a TDD methedology, this app is using Jest as a test runner and assertion library, also using Enzyme to test React components. Every component and reducer has a unit & snapshot test coverage.

* Routes: This app uses React-router as the main routing solution between the app's different sections.

* React features: This app is fully embracing the best and latest React features: Hooks, Lazy loading with Suspense, Memoization for the main components, HOC and more.

* Styling: This app uses CSS modules for styling and for scoped styles. The app is fully responsive, suitable both for large & small screens, by using Flexbox, CSS Grid, Media Queries. Also it's employing CSS variables for better control on specific styling rules.

* HTTP: Using Axios library to make async HTTP request to the various API endpoints.

* localStorage: This app uses the native localStorage API to store & fetch the user selected favorite locations.

* Hosting: This app is hosted on Google's [Firebase server](<https://firebase.google.com>) using the Firebase CLI.
