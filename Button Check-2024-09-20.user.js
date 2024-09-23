// ==UserScript==
// @name         Button Check
// @namespace    http://tampermonkey.net/
// @version      2024-09-20
// @description  try to take over the world!
// @author       Son
// @match        ://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var ctas = document.querySelectorAll('a');

ctas.forEach(function(cta) {
    let isClickable = true; // Mặc định là clickable

    // Kiểm tra nếu có thuộc tính href
    if (!cta.hasAttribute('href') || cta.getAttribute('href') === '' || cta.getAttribute('href') === 'javascript:void(0)') {
        isClickable = false;
        console.log(`${cta.innerText} is not clickable (missing or empty href).`);
    }

    // Nếu không clickable, làm nổi bật
    if (!isClickable) {
        cta.style.backgroundColor = 'yellow';
        cta.style.border = '2px solid red';
    } else {
        console.log(`${cta.innerText} is clickable.`);
    }
});



})()