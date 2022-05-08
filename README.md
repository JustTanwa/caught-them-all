<h1 align="center"> Caught Them All</h1>

A web application build on React with Material UI v.5 to create the user interface. The goal of the web application is to allow users to be able to add Pokemons they have "captured" into their collection. The motivation for this web application is to learn MUI v5.

## Technologies

I used React to build this interactive personal Pokemon collection by calling the PokeAPI for Pokemon data. The design of the web application are made up of customised MUI v5 components. This web application is prodominantly to solidify my learning experience of MUI and it is not designed to be a full application. However, some functionality has been implemented to learn MUI components, for example, the use of modal to search for pokemon, the use of theme toggle to learning theme providing and use of menu bar to learn mobile responsive menu.

I also included React Router Dom v6 to allow for navigating to different views.

<br>
<p align="left"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" width="60" height="60"/> <img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="Material UI" width="60" height="60" />  <img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" alt="Netlify" width="60" height="60" /> </p> </p>

<br>

## Demonstration

A short clip showcasing the features of the application. Users can search and add new pokemons to their collection, view friends list and change theme.

## What I have learnt

I learned how to used styled components with the MUI v5 library. All the components in this web application was building using MUI5 components and styled with their `sx` prop for easier responsive design. Their `sx` prop has the same syntax as using CSS in React but it allow for greater customisation by accessing theme.

I learnt more about using React context and `ThemeProvider` to pass customised theme into the web application. This also allow for easily including theme toggling as MUI v5 already built in color palette for "light" and "dark" theme.

I learnt that MUI v5 has similar layout system to Bootstrap where it uses 12 point grid system for Grids and Containers while using Flexbox. This is something I have encountered previously when using Bootstrap.

I learnt how to implement data fetching in React but requesting data from the [PokeAPI](https://pokeapi.co/). I also reused my own code for a custom hook to access and store data in local storage for persistence data.

## Features

Currently, the project has the following features:

- Users can add new pokemons into their "caught" collection.
- Users can view their collection of caught pokemons with pokemon stats.
- Lastest caught pokemon are shown on the home page with description.
- The overall percentage increases as the pokemons are "caught".
- Users can toggle between "dark" and "light" theme in the settings.


### In the future

- I would implement a login and logout feature and include a database so that all information is stored in a data base rather than local storage.


### Credits

- I have taken various examples from the official [MUI v5 Docs](https://mui.com/material-ui/getting-started/installation/) to learn how to implement the components.
- Design layout inspired by [Lama Dev](https://www.youtube.com/watch?v=fzxEECHnsvU&ab_channel=LamaDev).