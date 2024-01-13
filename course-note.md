# Features Covered In 3 Projects

-   React Native CLI
-   REST APIs
-   React Hooks
-   Google Maps
-   Firebase (serverless)
-   Search & Filtering
-   User Authentication
-   Social Share
-   React Context
-   Momentjs
-   Figma
-   Deploying to Google Play
-   Deploying to App Store

# Packages Install

```bash
yarn add -D @babel/eslint-parser eslint-plugin-react-native eslint-plugin-react

```

# Project Config

_react-native.config.js_

```js
module.exports = {
    // other fields
    dependency: {
        ...(process.env.NO_FLIPPER
            ? { "react-native-flipper": { platforms: { ios: null } } }
            : {}),
    },
};
```
