# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


-------------------------------------------------------------------------------------------------------

Assignment Day 4:
1. Modify the Logic Class to Update and Delete the Product
2. Generate Delete button for Each Table Row  for the Products table so that whern the button is clicked the Product will be deleted
3. [Mandatory] Add Radio button above the Products Table for Sort and Reverse, When these radiot buttons are clicked the Table must be sorted/ reversed based on ProductName / Price
4. Add validations for all Product properties like required/ Price cannot be -ve
5. [Mandatory] Create a Custom validator to chech Uniqueness of ProductId. This means tthat when enduse enters ProductId and Press-Tab, the valdation shoud be executed to check if the ProductId is already available in array. (Hint: Access the Logic class in Custom validator)  