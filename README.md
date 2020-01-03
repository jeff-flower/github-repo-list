
## Getting started
1. From the root of the project, install dependencies `npm i`
2. Run the development server `npm start`

## About this project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses typescript. I chose typescript because I like the expressiveness and documentation it adds to a project and the [static testing](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests) it provides. I've also found it to be very helpful in taking on refactors as the code base grows. 

## Process
I first used the provided github links and postman to test out the api calls that I would need to make. After that, I mocked the api call to get the list of top starred repos so I could focus on getting a card component working. I then connected the actual api call.

## Future Work
- Show the list of recent commits for a repo. The response from the call to get a list of repos includes the field 'commits_url'. Use this field to fetch the most recent commits when requested by the user and display the result in the content section of the card.
- Finish adding tests. The RepoCard component needs tests, as does `githubServices.ts`. 
- Improve styling (I'm so sorry). There are lots of card implementations available, which means lots of ideas for look and feel. [This](https://blog.prototypr.io/ui-case-study-state-styles-of-card-component-with-accessibility-in-mind-2f30137c6108) could be a good start.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
