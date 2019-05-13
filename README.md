# Pokédex

This app allows you to look for information of any pokemon using the [PokéAPI](https://pokeapi.co/).

## Features

- Server-side rendering (SSR) using [Create React SSR app](https://trustworktech.github.io/create-react-ssr-app/) package.
- UI designed using [Reactstrap](https://reactstrap.github.io/).
- Responsive design.
- Text-To-Speech capable using [speak-tts](https://www.npmjs.com/package/speak-tts).
- Searching by name or ID.
- Navigation in groups (on homepage) or individual (on modal).
- Pokemon stats using progress bar.
- Slideshow showing pokemons' different images.
- URL parameters can be used to access to a particular pokemon with the route `/pokemon/<id>` or `/pokemon/<name>`.

**Note**: to fully see all the features, it's recommended to run a **production build**. (check the **Available Scripts** section for more info).

## How to use it

On the homepage, use the buttons **Prev** and **Next** to navigate through groups of pokemons. Also, the name or the ID of the pokemon can be typed in the **search box** and then press **enter**. If the pokemon is found, it is showed.
Press **See details** button to see more information. A modal will pop up and the text-to-speech feature will start reading the pokemon description.
The following details are available:

- Pokemon name
- ID or number
- Images
- Description
- Evolution chain
- Habitat(s)
- Stats

At the bottom of the modal, the previous or next pokemon can be accessed using the **<** and **>** buttons.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode (both for the server and the client) and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The build can be run using `node build` command.
