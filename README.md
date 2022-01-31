# MFLIX APP
This react native mobile application is built for the movie lovers who wants to update their interest on the movies and to see the information regarding the movies like Popular movies and Trending Movies in a single place.
Consuming the TMDB api's, this application is able to provide you the easiest and quickest way to find the movies and to know about ratings and reviews and casts etc.

<br>

## Major Screens:
- Home Screen
- Movies List Tab Screen (Popular & Trending Movies)
- Detail Screen
- Search Screen

<br>

## Major Libraries used in the project:

- React 
- React Navigation
- React Native image Viewing
- Jest Testing Library
- Redux
- Styled Components
- Reanimatted 
- Axios

<br>

## Main Features of this app:
- User can view the list of popular movies
- User can view the list of trending movies
- User can view the detail of any movie by seeing the detail of the movie including rating, cast, recommendations and reviews etc
- User can search for a faviourite movie.

<br>

## Running locally

As others projects, you will need some requirements to run:

<br>

## Requirements
- Node.js 
- React Native cli
- Yarn
- Android and IOS setup on machine
- You need to add the api_key provided by the TMDB in the folder `config/config.js`


<br>

## How to run

- git clone https://github.com/MuhammadMattiullah/movies-app.git
- yarn
- yarn pod


<br>

## Commands:

- yarn ios to run on iOS simulator
- yarn android to run on Android simulator
- yarn start:clean to run metro with cache clean
- yarn test to to run the test

<br>

## Project Design:
To make the architecture easy to understand and make it clear and comfortable to acess and putting all the related stuff in the same level of herierchy.

- `src` folder contains all the sub folders including components, navigation, redux, screens and utils etc.
- All the sub components defined under the screen folder have their own components that are useable under that particular screens.
- Components that are useable all over the app kept under the root of src folder in `component` folder.

<br>

## Attaching Screenshots of the application to see the layouts:

If images are not loading properly, then please refer to `/demo` folder to see the application layouts.
- ![Loading ..](/demo/ios/1.png?raw=true)

- ![Loading ..](/demo/ios/2.png?raw=true)

- ![Loading ..](/demo/ios/3.png?raw=true)

- ![Loading ..](/demo/ios/4.png?raw=true)

- ![Loading ..](/demo/ios/5.png?raw=true)

- ![Loading ..](/demo/ios/6.png?raw=true)

- ![Loading ..](/demo/ios/7.png?raw=true)

- ![Loading ..](/demo/ios/8.png?raw=true)

- ![Loading ..](/demo/ios/9.png?raw=true)

