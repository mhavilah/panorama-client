# Project:   BT Panorama - Blog Post Client UI

Matt Havilah
November 2021

An Angular 12 Javascript SPA application for the BT Panorama code test.

## Backend Project
This client is used in conjunction with the usersAndPosts Java Spring Boot API server project.

Visit:  [Panorama Server@Github](https://github.com/mhavilah/panorama-server)

## Prerequisites:
- Node 14.x +
- Angular-cli (ng tool)
- nvm (optional)  
- A modern browser (eg, [Chrome 95](https://www.google.com/intl/en_au/chrome/))

### Installation

On MacOS the following steps will setup the development toolchain:

```
$ brew install nvm
# Install managed nodeJS 14 or newer
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ npm install -g @angular/cli
```

Verfiy the installation:
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
    

Angular CLI: 12.2.12
Node: 14.16.0
Package Manager: npm 6.14.11
OS: darwin x64

Angular: 12.2.12
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.12
@angular-devkit/build-angular   12.2.12
@angular-devkit/core            12.2.12
@angular-devkit/schematics      12.2.12
@schematics/angular             12.2.12
rxjs                            6.6.7
typescript                      4.3.5
```


See also:
- [nvm](https://github.com/nvm-sh/nvm)
- [ng cli](https://angular.io/cli)

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

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

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
