// ==UserScript==
// @name         Broken Link Check
// @namespace    http://tampermonkey.net/
// @version      2024-09-20
// @description  Yom Yom
// @author       Son
// @match        ://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

      var links = document.querySelectorAll('a, button');

    links.forEach(function(link) {
        // Check if href is missing or empty
        if (!link.hasAttribute('href') || link.getAttribute('href') === '') {
            // Highlight the link by changing the background color and border
            link.style.backgroundColor = 'yellow';
            link.style.border = '2px solid red';
        }



    });
})();