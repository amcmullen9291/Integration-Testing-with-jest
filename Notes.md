 # Notes

You will have a test runner (ie mocha or jest), an assertion library to define expectations (like Chai), and a Headless browser (mostly used for end to end testing)


the "test" script  "jest --watch"  watches for changes in your app (without having to restart the server. You may have to press 'a' to start the active watching)

run tests with 'npm test'
the puppeter dapendency is a 'headless version' of the chrome browser.

Headless Chrome is a way to run the Chrome browser in a headless environment without the full browser UI. One of the benefits of using Headless Chrome (as opposed to testing directly in Node) is that your JavaScript tests will be executed in the same environment as users of your site. Headless Chrome gives you a real browser context without the memory overhead of running a full version of Chrome.
