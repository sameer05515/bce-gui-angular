# To install angular
npm install -g @angular/cli@latest

# check angular version


    ng version

# to add bootstrap

    npm install --save bootstrap@3

edit angular.json , architect->build->styles

  `"node_modules/bootstrap/dist/css/bootstrap.min.css",`

# to add forms module

in app.module.ts file

    import { FormsModule } from '@angular/forms';

And add Forms mudule in import list

    imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule],

# Add font awesome module

This is page where all related details mentioned.
https://github.com/FortAwesome/angular-fontawesome

# to run angular application on different port

        ng serve --port 4202

