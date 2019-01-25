##SLUG BUG CLICKY GAME!
Click on an Image to earnpoints but don't click on any more than once!

Made with React Components.

All front end react deployed to git hub pageas, no back end node/express server.

Therefore, only 1 package.json rather than 2, 1 for react view and 1 for node/express server.   The React package.json must be updated to allow deployment of a react view to github pages.

##GitHub Pages Deployment Issues:

Deployment to GH Pages requires some more steps than in the GH Pages Deployment instructions https://facebook.github.io/create-react-app/docs/deployment.  There are many GH Pages deployment issues that remain unclear, which would benefit others if Facebook would clarify:

1.  Must go to settings in the Github Repo and allow the page to be deployed, it may be set to not deploy be default.
2.  in Bash you must $ git remote set-url origin https://github.com/username/appname.git (issues:  a. origin vs. master;  origin origin vs. origin master?  b. don't set origin to the deploy page https://username.github.io/appname that will not work. c. does the difference between the repo clone address for the initial git clone/ git init make a difference if it is the ssh or html address?  git remote -v displays where the urls are set.   cfvs. git remote show  and git ....set upstream.    A good explaination of set-url origin can be found at: https://help.github.com/articles/changing-a-remote-s-url/   


Format: ![Alt Text](https://kamranjune.github.io/clickygame/assets/images/set-url-sshtohttps.JPG)
Format: ![Alt Text](https://kamranjune.github.io/clickygame/assets/images/set-url-httpstossh.JPG)


)
3.  you must change the branch to gh-pages branch (Issues:  a. before npm run deploy?  b.  that appears after the npm install of gh-pages? or pre-deploy or deploy?  c.  when you git push to master it automatically recopies to the gh-pages branch?)




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

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
