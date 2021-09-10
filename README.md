# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

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

## My notes
### Create a new project
ng new my-first-project

### Generate a component
ng g c servers

### Selector options
- by element
- by attribute
- by class

### String interpolation
Creates a binding to type script. Anything that returns a string or that can be converted into string.

### Property binding
We can bind type script values into html properties. (Like the 'disabled' property of the html button)

### Event binding
We can use 'any' type if the type script doesn't allow Event type to read value. 

### Two-way binding
With 2 way binding, when you update the value in TS it will update the UI, and vice versa. We are using Angular's directives.
