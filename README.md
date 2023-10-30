
# PWA Text Editor Challenge

## Introduction
This project is part of a progressive learning journey where we've built several impressive projects. The current challenge is to create a text editor that runs in the browser as a single-page application (SPA) and meets the criteria of a Progressive Web Application (PWA). The text editor will feature data persistence techniques for reliability and function offline.

## Table of Contents
- [PWA Text Editor Challenge](#pwa-text-editor-challenge)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Deployment](#deployment)
  - [License](#license)
  - [Contact](#contact)

## User Story
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria
GIVEN a text editor web application:

- **Application Structure**: When opening the application in an editor, there should be a client-server folder structure.
- **Start Command**: Running `npm run start` from the root directory should start up the backend and serve the client.
- **Webpack Bundling**: The JavaScript files should be bundled using webpack when running the application.
- **Webpack Plugins**: Running webpack plugins should generate an HTML file, service worker, and a manifest file.
- **Next-Gen JavaScript**: The text editor should function in the browser without errors, even when using next-gen JavaScript.
- **IndexedDB Integration**: Upon opening the text editor, IndexedDB should create a database storage immediately.
- **Data Persistence**: Content entered should be saved with IndexedDB when clicking off of the DOM window and retrieved from IndexedDB upon reopening the text editor.
- **Installable**: Clicking on the Install button should allow downloading the web application as an icon on the desktop.
- **Service Worker**: The application should have a registered service worker using workbox, with static assets pre-cached upon loading along with subsequent pages and static assets.
- **Heroku Deployment**: The application should have proper build scripts for a webpack application when deploying to Heroku.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repo:
   ```
   git clone git@github.com:tijanihind/text-editor.git
   ```
2. Install NPM packages:
    ```
    npm install
    ```

### Usage
This section will provide instructions on how to use the text editor after deployment.

### Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### Fork the Project
1. Create your Feature Branch (git checkout -b feature/AmazingFeature)
2. Commit your Changes (git commit -m 'Add some AmazingFeature')
3. Push to the Branch (git push origin feature/AmazingFeature)
4. Open a Pull Request

### Deployment
For deployment on Heroku, follow the Heroku Deployment Guide.

### License
Distributed under the MIT License. See LICENSE for more information.
