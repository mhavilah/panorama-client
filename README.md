# Project:   BT Panorama - Blog Post Client UI

Matt Havilah
November 2021

An Angular 12 Javascript SPA application for the BT Panorama code test.

Used in conjunction with the usersAndPosts Java Spring Boot API server project.

## Prerequisites:
- Node 14.x +
- Angular-cli (ng tool)
- nvm (optional)  

### Installation
```
$ brew install nvm
# Install managed nodeJS 14 or newer
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ npm install -g @angular/cli
$ ng help
```

See also:
- [https://github.com/nvm-sh/nvm]
- [https://angular.io/cli]

## Building

To build/run in development:
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
