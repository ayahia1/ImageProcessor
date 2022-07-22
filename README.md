# Image Processing API

This is an API built with **node and express** frameworks to resize images to any valid width and height. Code was written using **TypeScript**, formatted using **prettier and eslint**, and tests were handled using **Jasmine (supetest)** framework. Successful calls to the API are stored in a logger file under the name **access.log** which you can find following this path _dist/src -> api-> images -> access.log_

## How to run the project

- You first need to install the project dependencies. run `npm install` to get your project ready.
- To run the project in the development mode, use `npm run dev`
- To run the project in the production mode, use `npm run start`
- To just run the tests specified by the project's author, use `npm run test`

## How to make calls to the API

To use this API, you have to run it either in **development or production mode** (see the previous section for instructions). Then, to use it, you should use this URL format (http://localhost:3000/api/images?name={fileName}&height={desiredHeight}&width={desiredWidth}).

Note that the three parameters (name, height, and width) in the URL are mandatory; the **desiredHeight** and **desiredWidth** values should be numerical and positive, and the **fileName** value should match one of the five file names that exist on the server. The only valid file names are

1. fjord
2. icelandwaterfall
3. palmtunnel
4. santamonica
5. encenadaport

### Working Endpoint Example

- When calling this endpoint, you should expect to see the image named fjord with a height of 200px and width of 700px
  http://localhost:3000/api/images?name=fjord&height=200&width=700

## Adding new files

To add new files to the valid files on the server, go to _dist -> api -> images -> imagesFolder -> original_, and add your new file with any name to the original folder. Note that you will need to use the same file name you choose to call your API on this file.
