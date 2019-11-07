## About Greact
Greact (Graphite + React... um– well I like it) is our starter kit for Single Page Applications (SPA), built in React. Essentially, it's [create-react-app](https://github.com/facebook/create-react-app) bundled with additional tools.

The toolkit is assembled based on experience developing our first React SPA, [Kellogg's Crunchy Nut](https://bitbucket.org/graphitedigital/kelloggs-crunchy-nut/src/master/). As the app grew, we sought proven techniques for: app navigation, testing, typechecking and component styling. On top of this we've added state management, in the form of Redux, to Greact.

## Features
* Routing with [react-router](https://reacttraining.com/react-router/)
* Testing with [Enzyme and Jest](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
* Typechecking with [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)
* Styling with [styled components](https://www.styled-components.com/)
* Component styleguide with [Storybook](https://storybook.js.org/)
* State management with [Redux](https://redux.js.org/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run storybook`

Launches Storybook (a styleguide for isolated components) in your browser. Stories typically show versions of our components with different state or styles, e.g. Standard button, disabled button, loading button, button with icon, etc.

You can see how stories are created by viewing the Button example at `src/components/Button/Button.stories.js`. Feel free to delete or modify this component and story.

Run this command in a separate CLI window to view components in Storybook during development.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
