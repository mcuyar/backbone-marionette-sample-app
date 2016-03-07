# Backbone Sample App - Contact Manager

This is a sample application using Backbone and Marionette to build a Contact Manger.

The base of the application was built using the [backbone start kit](https://github.com/sabarasaba/modern-backbone-starterkit.git).

### Features

 - The application does its best to follow the [ADR pattern](https://github.com/pmjones/adr) with Marionette
 - Has a custom sync and uses local storage to persist model data from the [Random User Api](https://randomuser.me/)
 - Has data validation via [backbone-validation](https://github.com/thedersen/backbone.validation)
 - Has form+model binding via [backbone.stickit](https://github.com/NYTimes/backbone.stickit)
 - Has a custom route dispatcher for simplifying router calls to actions

### Getting Started

Just [clone](https://github.com/mcuyar/backbone-marionette-sample-app/)

```shell
$ git clone https://github.com/sabarasaba/modern-backbone-starterkit.git ContactManager && cd $_
$ npm install                       # Install Node.js components listed in ./package.json
```

### Development
Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.

```shell
$ gulp
```

### Copyright

Licensed under MIT License (MIT). See [LICENSE.txt](./LICENSE)
