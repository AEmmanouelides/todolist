# TodoList

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes
- The app is responsive.
- Data are fetched into the app by using `Fetch` API (browser build-in tool) through a fake free api from <a href="http://jsonplaceholder.typicode.com/" rel="nofollow" target='_blank'>Jsonplaceholder</a>.
- <a href="https://reactjs.org/docs/context.html" rel="nofollow" target='_blank'>React Context</a> library was used to pass Todos data through the component tree without having to pass props down manually at every level.
- A `custom hook` was created to fetch the initial data. `/services/FetchData.tsx`
- `SCSS` preprocessor was used for stylesheets management. 
- `Screenshots` of the running app can be found at `/screenshots`
- *UPDATE* - A <a href="https://redux.js.org/" rel="nofollow" target='_blank'>`Redux`</a> Store was created to manage and show the completed todos.
- *UPDATE 2* - A new page was created to show more details (userId) about the completed todos.
- <a href="https://reactrouter.com/en/main" rel="nofollow" target='_blank'>`React Router DOM`</a> npm package was used to implement dynamic routing in the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
