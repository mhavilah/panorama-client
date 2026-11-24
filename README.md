# Project:   BT Panorama - Blog Post Client UI

Matt Havilah
November 2021
(Updated build info - Nov 2026)

An Angular 13 Javascript SPA application for the BT Panorama code test.

## Backend Project
This client is used in conjunction with the usersAndPosts Java Spring Boot API server project.

Visit:  [Panorama Server@Github](https://github.com/mhavilah/panorama-server)

## Prerequisites:
- Node 16.x +
- Angular-cli (ng tool)
- nvm (optional)  
- A modern browser (eg, [Chrome 95](https://www.google.com/intl/en_au/chrome/))



### Installation

On MacOS the following steps will setup the development toolchain:

```
$ brew install nvm

# Install managed nodeJS 16 or newer

$ nvm use 16
N/A: version "v16"  is not yet installed.

You need to run `nvm install 16` to install and use it.
$ nvm install 16
Downloading and installing node v16.20.2...



$ nvm use 16
Now using node v16.20.2 (npm v8.19.4)

# Install the latest version of the Angular CLI
# (This project currently uses the Angular v13 toolchain)
$ npm install -g @angular/cli@v13-lts

# See also:
# For release version tag names etc
$ npm info @angular/cli
```

Verfiy the installation:
(Actual version numbers will vary for latest releases etc)
```
$ npm --version
6.14.11
$ node --version
v14.16.0
$ ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.3.11
Node: 16.20.2
Package Manager: npm 8.19.4
OS: darwin arm64

Angular: 13.4.0
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.11
@angular-devkit/build-angular   13.3.11
@angular-devkit/core            13.3.11
@angular-devkit/schematics      13.3.11
@angular/cli                    13.3.11
@schematics/angular             13.3.11
rxjs                            6.6.7
typescript                      4.6.4
```


See also:
- [nvm](https://github.com/nvm-sh/nvm)
- [ng cli](https://angular.io/cli)

NB: On MacOS, NodeJS versions 16 and above are Apple Silicon only.
MacOS 27 (Golden Gate) no longer supports Intell x64 binaries, previously emulated via Rosetta 2.

Angular 13 supports Node 12.20, 14.15, and 16.10+

### MacOS on Apple Silicon 

To confirm a native Apple Silicon version of NodeJS try:
```
$ node -p process.arch
arm64
```

## Install Project Dependencies

Before running the application its NodeJS dependencies must be downloaded
```
$ rm -rf "node_modules"
$ npm install
# Download the world...
```


## Building

To build/run, in development:
```
$ ng serve
```
OR:
```
$ npm start
```
The server will start on http://localhost:4200.

By default, the server will 'watch' any source code changes and hot redeploy.

# Application Usage

The front end application assumes that the Java Server application is running on localhost:8080

The Server makes downstream requests to the blog Users and Posts API and will require online internet access.





----
# Angular generated notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
