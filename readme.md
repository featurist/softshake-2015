# Soft-Shake 2015: TDD for Front-End Hackers

```js
npm install
```

# Structure

* Karma configuration is in [karma.conf.js]()
* Specification files are in [test/browser/](), configued [here]().
* Images used in specifications are in [test/browser/images](), configured [here]().

# Links

* The [slide deck](https://github.com/featurist/softshake-2015-demo) to this talk.
* [@dereke](https://github.com/dereke) has made an excellent [video](https://www.youtube.com/watch?v=WQZ2eIfmfEs) of a TDD session using browser-monkey.
* Here is another [example project](https://github.com/dereke/web-testing) that demonstrates how to use browser-monkey with Karma.

# Tools

* [browser-monkey](https://github.com/featurist/browser-monkey)

    Reliable DOM assertion and interaction library for automated tests in the browser

* [trytryagain](https://github.com/featurist/trytryagain)

    If at first your expectation does not pass, try try again. Useful to make assertions on things that don't happen immediately.

* [mock-xhr-router](https://github.com/featurist/mock-xhr-router)

    Fake out your server API in the browser.

* [chai](http://chaijs.com/)

    Comprehensive expectation library

* [debug](https://github.com/visionmedia/debug)

    Runtime configurable debug output. Both browser-monkey and mock-xhr-router use this.

* [unset-timeout](https://github.com/featurist/unset-timeout)

    Resets any `setTimeout` or `setInterval` from previous tests, improving test isolation.

* [browserify](http://browserify.org/)

    Stiches JavaScript files together using require. Can be used in Karma, as well as production deployments. Possibly my favourite JavaScript tool!

* [qo](https://github.com/featurist/qo)

    A task runner that's not mental.