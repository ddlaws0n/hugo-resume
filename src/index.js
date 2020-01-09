// JS Goes here - ES6 supported
require("particles.js");

import "./scss/main.scss";

// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});