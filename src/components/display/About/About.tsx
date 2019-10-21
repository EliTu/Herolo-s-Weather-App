import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
	const { AboutStyles, contentWrapper, listHeading } = styles;

	return (
		<div className={AboutStyles}>
			<h1>About this app:</h1>
			<div className={contentWrapper}>
				<h3>In brief:</h3>
				<p>
					<a href="https://github.com/EliTu/Eliad-Tuksher-10-10-2019">
						Herolo's Weather app{' '}
					</a>{' '}
					is a small SPA that was built for{' '}
					<a href="https://herolo.co.il">Herolo</a> as an intro
					project, using React.js (+Redux & React Router), TypeScript
					and CSS modules.
				</p>
				<h3>Usage:</h3>
				<p>
					Using the various{' '}
					<a href="https://developer.accuweather.com/">
						Accuweather API{' '}
					</a>
					endpoints, the user is able to perform a search, through the{' '}
					<a href="https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete">
						weather search auto-complete API
					</a>
					, and select a location based on his input. Through the{' '}
					<a href="https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D">
						{' '}
						current weather conditions API
					</a>{' '}
					and the{' '}
					<a href="https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D">
						five days forecast API
					</a>
					, the user receives the current weather data of the location
					he selected, as well as a forecast for the following five
					days.{' '}
				</p>
				<p>
					The user can then press on the heart-shaped button to save a
					location to his favorites. When the user visits the 'My
					Favorites' page, he then can see a list of all the locations
					he saved and the current conditions in each one.
				</p>
				<p>
					Clicking on one of the favorite items will navigate the user
					back to Home screen, where he will receive the updated
					information on his location, in addition to the five days
					forecast.
				</p>
				<h3>Tech details:</h3>
				<ul>
					<li>
						<span className={listHeading}>Main tech stack</span>:
						React.js (Using hooks), TypeScript, and CSS modules.
					</li>
					<li>
						<span className={listHeading}>State management</span>:
						Redux for Flux architecture state management, and
						redux-thunk as a middleware for async actions.
					</li>
					<li>
						<span className={listHeading}>Testing</span>: Embracing
						a TDD methedology, this app is using Jest as a test
						runner and assertion library, also using Enzyme to test
						React components. Every component and reducer has a unit
						& snapshot test coverage.
					</li>
					<li>
						<span className={listHeading}>Routes</span>: This app
						uses React-router as the main routing solution between
						the app's different sections.
					</li>
					<li>
						<span className={listHeading}>React features</span>:
						This app is fully embracing the best and latest React
						features: Hooks, Lazy loading with Suspense, Memoization
						for the main components, HOC and more.
					</li>
					<li>
						<span className={listHeading}>Styling</span>: This app
						uses CSS modules for styling and for scoped styles. The
						app is fully responsive, suitable both for large & small
						screens, by using Flexbox, CSS Grid and Media Queries.
						Also it's employing CSS variables for better control on
						specific styling rules.
					</li>
					<li>
						<span className={listHeading}>HTTP</span>: Using Axios
						library to make async HTTP request to the various API
						endpoints.
					</li>
					<li>
						<span className={listHeading}>localStorage</span>: This
						app uses the native localStorage API to store & fetch
						the user selected favorite locations.
					</li>
					<li>
						<span className={listHeading}>Hosting</span>: This app
						is hosted on Google's{' '}
						<a href="https://firebase.google.com/">
							Firebase server
						</a>
						, using the Firebase CLI.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
