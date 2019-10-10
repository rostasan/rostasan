# Rstatic

## Install

npm install

## Create Firebase config

Create environments.ts & environments.prod.ts

Example:
export const environment = {
production: false,
firebaseConfig: {
apiKey: "XYZ",
authDomain: "XYZ.firebaseapp.com",
databaseURL: "https://XYZ.firebaseio.com",
storageBucket: "XYZ.appspot.com"
}
};

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

## Build

Run `npm run build:ssr`

Run `npm run serve:ssr` for a dev server. Navigate to Node Express server listening on `http://localhost:4000`. The app will not automatically reload. Although `ng serve -o` will work for Angular or other frontend troubleshooting.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
