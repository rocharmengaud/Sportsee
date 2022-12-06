### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

You will need :

- A text editor
- Node.js >= v.16
- Git

# How to clone and start the project

First off, create a folder that will contain back and front-end that will be necessary for the project to work

You can download the backend [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

You can now clone the front-end from this repository into the main folder using :

```
$ git clone
```

Your main folder now contains both back-end and front-end.
Position yourself on the front-end and use npm install (or yarn).
You can now run the project using npm start in both back and front-end folders :

```
$ cd sportsee/sportsee-front
$ npm install
$ npm start
```

Website URL will be : http://localhost:3000/user/12.
Don't forget to replace back-end port to something else than 3000 and to choose which user informations you want to see by inputting 12 or 18 in the url.

This project can work without any backend data since there is mocked datas in the front-end folder.
You just need to uncomment some lines in the useEffect and imports on these components.

For example, line 3,45,46 in components/barStats.jsx.
