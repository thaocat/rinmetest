// ==UserScript==
// @name         Broken Images Check
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



   const images = document.querySelectorAll('img');

images.forEach((img) => {
    img.addEventListener('error', () => {
        // Nếu hình ảnh không tải được, làm nổi bật nó
        img.style.border = '2px solid red';
        img.style.backgroundColor = 'yellow';
        console.log(`Broken image: ${img.src}`);
    });
});

})();