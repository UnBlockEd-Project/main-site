# Unblocked Site

*This repository hosts the UnBlockEd site's react project. This application is built as a react native project.

## Requirements

As this is a react native requirement no other dependencies are required. The version of npm compatible with this site is **6.12.0**

## GitIgnore

The git ignore is configured for react, vs-code (this or web-storm are the recommended IDEs of choice). **Important** before using another IDE consult [this site](gitignore.io).

## Set-Up

If you dont have npm download it [here](https://www.npmjs.com/get-npm) or set it up via homebrew on OS X. In the working directory of the project run the terminal command **npm run start** or just **npm start** and the project will open up on the browser via localhost.


## Vue and React Compatability

The main functionality of this site is to leverage reports that are constructed in Vue. It would be ideal if the report components can be built on top the existing react project as components. I found the package vuera which seems to provide the mentioned functionality, but we need to still see how effective it is for our use case:

```bash
$ yarn add vuera
# or with npm:
$ npm i -S vuera
```

### Using the Babel Plugin

The preferred way to use Vue inside of a React app is to use a Babel plugin. Add vuera/babel to plugins section of your .babelrc:

```json
{
  "presets": "react",
  "plugins": ["vuera/babel"]
}

```

Now just use the Vue components as you would react components.

```javascript
import React from 'react'
import MyVueComponent from './MyVueComponent.vue'

export default () => (
  <div>
    <h1>I'm a react component</h1>
    <div>
      <MyVueComponent message='Hello from Vue!' />
    </div>
  </div>
)
```

### Not Using the Babel Plugin

If you don't want to use the Babel plugin, you can use a wrapper component:

```javascript
import React from 'react'
import { VueWrapper } from 'vuera'
import MyVueComponent from './MyVueComponent.vue'

export default () => (
  <div>
    <VueWrapper
      component={MyVueComponent}
      message='Hello from Vue!'
    />
  </div>
)
```

### Creating a Build

After navigating into the appropriate local directory of you react app you can start the app by using ``bash npm start `` this should bring up on your terminal:

```bash
Compiled successfully!

You can now view main-site in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.17:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

By navigating to the localhost you can view the site locally however to share the project use ``bash npm build`` which creates a production build of the project. Now there are a couple ways to create a shareable build including most popularly github pages. But on my end just to help with management of the VCS I create a build and then used [netlify](https://www.netlify.com/) to create the shareable site. It's pretty intuitive and shouldn't take more than 3 minutes.
