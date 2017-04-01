# React Starter

React Starter is boilerplate code base to develop React applications using the latest releases.
This kit was also put together for those who need a focus on styling with tools we've
been using for years. Many React starters make it difficult to write Sass or Less
and often want to remove Pre-Processors altogether. The issue is there hasn't been
any good replacements and only solutions that provide partial coverage. You can write inline styling but what about Media Queries? React is meant to be reusable and DRY, but yet we can't harness the power of CSS Pre-Processor variables? We believe there is
a common ground here and we aim to find it. This kit
is geared to allow you to work how you used to while providing guidelines on developing your React project with more strict disciplines.

### Installation & Commands:

* `npm install yarn -g`
* We encourage the use of `yarn install` but you can also run `npm install`
* `npm start` - will run webpack-dev-server
* `npm build` - will run webpack production into `/dist`

Why **yarn**? NPM is great, however [Yarn](https://yarnpkg.com/en/) adds some components that greatly improve
the functionality of NPM. From concurrency downloading to creating a [`yarn.lock`](https://yarnpkg.com/en/docs/yarn-lock) file,
we believe Yarn is a great addition to NPM environment.

### Technologies:

* Webpack 2
* Babel
* React 0.15.*
* Redux 0.15.*
* React Router
* Sass
* Axios

### Optional API Mockers

If you are in need of a quick API to build out your React project please take
a look at the following list. Each will provide some level of ultra fast easy
API prototyping and mocking

* [JSON Server](https://github.com/typicode/json-server)
* [deployd](https://github.com/deployd/deployd)
* [Directus](https://github.com/directus/directus)

### React Starter Full Stack

Need to run React Starter on Rails or Node? Well you are in luck, developed
is a Rails-React Starter API and Node-React Starter API

* **Coming Soon** Rails-React
* **Coming Soon** Node-React

### Learning React

React itself is a very simple View Library to learn. However the ecosystem and tools
can make it very difficult to for anyone wanting to start learning to build React
applications. The following list of resources may help structure your learning.

* [Start Here](https://github.com/petehunt/react-howto)
* [Learn Webpack 2 Video Series](https://www.youtube.com/playlist?list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY)



### Directory Setup

    /react-starter
      /src
         /components
           /App
             App.jsx
             App.scss
         /layouts
           /Layout
             Layout.jsx
             Layout.scss
         index.ejs
         index.jsx
         index.scss

### Frameworks

React Starter does not come baked with any frameworks. This is because with so
many great tools we would like you to be able to add what is best for your project.
But, to keep in line with getting you up and running here is a list of our favorite
frameworks for React as well as a great comparison overview of each frameworks.

* [Angular Material vs Semantic-Ui vs Bootstrap vs Foundation vs Materialize](https://medium.com/@thatisuday/angular-material-vs-semantic-ui-vs-bootstrap-vs-foundation-vs-materialize-8bd3646e6f0a)

#### Top React Picks:
* [Material-UI](http://www.material-ui.com/#/), is a personal favorite as it provides
raw React components and nothing else. Therefore you can choose any grid system if needed.
  * What grid system should I use if Material-UI doesn't offer one? Great question,
  [Flexbox Grid](http://flexboxgrid.com/) is a pretty good grid system if you are wanting to use some new CSS properties. For easiest installation just use the
  [Flexbox Grid CDN](https://cdnjs.com/libraries/flexboxgrid)
  * **Coming Soon** React-Starter-Grid-System
* [Semantic-UI React](https://react.semantic-ui.com/introduction), Semantic-UI is
an incredible framework that does a lot to create some amazing application UIs.



Roadmap:

* Add "no-unused-vars" error messaging
* Integrate Flexbox grid system
* Add React Router
* Add 404 Page
