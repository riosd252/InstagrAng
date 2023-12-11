Istruzione per aprire l'app in ambiente di sviluppo:

1. npm install
2. ng add @ng-bootstrap/ng-bootstrap
3. npm install json-server
4. npm install json-server-auth
5. npm install concurrently
6. npm install @auth0/angular-jwt
7. modificare il package.json aggiungendo:
   "ng": "ng",
   "start": "ng serve -o",
   "build": "ng build",
   "watch": "ng build --watch --configuration development",
   "test": "ng test",
   "backend": "json-server-auth --watch db.json --port 4201",
   "fullstack": "concurrently \"npm run backend\" \"npm run start\""
8. avviare il comando "npm run fullstack" da console VSCode

# U3BuildWeek

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
