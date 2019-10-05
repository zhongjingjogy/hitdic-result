# HitdicResult

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Deploy to local file system

1. Build with `ng build --prod --output-hashing=none --base-href #`

2. Modify the `index.html`
```
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>HitdicResult</title>
  <base href="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="src/favicon.ico">

  <script src="src/info.js"></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110502204-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    // gtag('config', 'UA-110502204-1');
  </script>

  <link rel="stylesheet" href="src/styles.css">
</head>

<body>
  <app-root></app-root>
  <!-- <script src="src/runtime-es2015.js" type="module"></script> -->
  <!-- <script src="polyfills-es2015.js" type="module"></script> -->
  <script src="src/runtime-es5.js" type="text/javascript"></script>
  <script src="src/polyfills-es5.js" type="text/javascript"></script>
  <!-- <script src="main-es2015.js" type="module"></script> -->
  <script src="src/main-es5.js" type="text/javascript"></script>
</body>

</html>
```

3. Modify the `main-es5.js`

- from `assets/hitdic-automated.svg` to `src/hitdic-automated.svg`
- from `./assets/.report` to `./`
- from `assets/.report/ansatz.tdb` to `./ansatz.tdb`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```
ng build -prod --output-hashing=none
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
