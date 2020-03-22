This project is bootstrapped with [Create React App], @Appscrip (https://www.appscrip.com/).

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

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Other Project Structure Info

1. We have a folder called 'src', where our main app resides.
2. /src/index.js , is our entry point of the project.
3. serviceWorker.js , file is used to register service worker, for PWA experience and Offine Support.

### Folder wise Instructions

1. \***\*test\*\***

- This directory is used to create all our _.test.js/_.spec.js files, which contains test code for the components.

2. **components**

- This directory is used to create all the resusable components, which are only supposed to be used in our whole project. ( e.g. Buttons, Drawers, Panels etc.)

3. **containers**

- This directory is used to create all functional containers in the project, which will be called from our main(parent) pages, it usually calls re-usable components to create views.

4. **hoc**

- This is used to wrap more than 1 child components.

5. **lib**

- It contains all the Utility files used in the project. (e.g. Session, Api Request, App Configuration).

6. **redux**

- It contains all the files related to react-redux setup. store, reducers, actions, sagas and so on. ( We can distribute the actions by components for isolation of actions ).

7. **services**

- Tt contains all the API services ( API calls ).

8. **static**

- It contains, 1.Images, 2.Css/Scss 3. Js Libraries.

9. **translations**

- It contains language key files for multi-language support.

### Features Enabled

1. **Globalization**

- This project is created by keeping globalization in mind. It means each and every assets, colors, often used things will be comming from central variables rather than hard coding everywhere.

2. **Bootstrap Theme**

- This project is enabled with bootstrap scss theming, which allows to use built in classes from bootstrap. These classes we can override to make our custom theme.

3. **Language Support**

- This project supports multiple languages. It uses "react-intl" to support multiple language. To add new language support, we need to add just key string files, and we need to add option in language selection menu. You can find language selection options at, /src/fixtures/language/

4. **Fixtures**

- /src/fixtures/ This path contains all the static JSON data, array data, which will be used to show the groups or list of items. All the static data we can create here.

5. **Linters**

- It is Linter enabled project, which restricts developers to write code in certain manner. It basically enables the spacing, variable declarations, unnecessary logs etc.

6. **Husky**

- Husky is pre-commit hook, which enables pre-commit tests and error checks. So when user push the changes, it runs the test code and checks for errors, if any error exists in the code, it wont push the code, so that it wont affect the live running versions.

7. **PWA**

- Progressive Web Apps (PWA), is the feature to enable native mobile app support like, push notification, app experience, offline support etc. For more reference about PWA, go through these links:

https://medium.com/better-programming/everything-you-need-to-know-about-pwas-8e41a7e745aa
https://blog.bitsrc.io/how-to-build-a-react-progressive-web-application-pwa-b5b897df2f0a

8. **TEST CASES - Code Coverage**

- It includes base code test cases for the components.
  
  npm run test  -> This command is used to run all the test cases manually. After completion of test cases, it'll generate test code coverage for all the cases. The output path will be /output. We can change this default path in package.json.
