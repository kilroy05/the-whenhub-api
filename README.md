# TheWhenhubApi

#Introducing myself
My name is Cristian Raț, I live in London, UK and this is my entry to to the Whenhub hackathon, backend category, using the Whenhub API.

#The idea
The idea of my entry is to allow any user of Whenhub to manage his or her schedules and events from this application, which can be run on mobile, tablet, desktop.
The second unique idea is that besides managing your events, this also allows a public user (client, member of public etc.) to make a request for an appointment.
For example, this application (once further developed) would act as an appointnent manager for a cleaning company, dentist or any other professional or company / public institution that needs to manage time based appointments .

#Technologies used
My entry is writting in TypeScript and uses the Angular framework. (Same as the whenhub studio :) )
As a temporary / demo API for events, I have used json-server (npm package)

#Quick instructions
Upon opening the app you will be required to input your api key. The key is not saved anywhere and will be lost on refreshing or closing the browser window
3 main pages exist : 
1. Schedules > manage your schedules and events
2. My Requests > manage public requests
3. Demo page > which is a demo page for a public request page. Users will use this page to request an appointment at a given date / time

#Set Up
I have included instructions below, however, for your convenience, also included an installation deployed by me here : http://griffin.digital

In order to simulate an api server (where the public requests are saved), I am using json-server, which is an npm package.
Angular requires to either be built (`ng build`) and served from a website, or run with `ng serve`

#Step by step
You need angular CLI
`npm install -g @angular/cli`

Go to your work directory.
Clone from the repo
`git clone https://github.com/kilroy05/the-whenhub-api.git`
Change directory into the cloned app
`cd the-whenhub-api`
Start the application
`ng serve`

GO to localhost:4200 to view the app

Setup json-server https://www.npmjs.com/package/json-server
`npm install -g json-server`

Change directory into the json-server 
`cd src/the-whenhub-api-json-server`
You need to start the json server
`json-server --watch events.json`
You should now be able to go to localhost:3000 and see the events.

If you followed the above, you are ready to go

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).