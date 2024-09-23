// ==UserScript==
// @name         40x link error code check
// @namespace    http://tampermonkey.net/
// @version      2024-09-20
// @description  try to take over the world!
// @author       Sơn
// @match        ://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=iqos.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function checkLinks() {
    const links = document.querySelectorAll('a');
    for (const link of links) {
        try {
            const response = await fetch(link.href, { method: 'HEAD' });
            if (response.status === 403 || response.status === 404 || response.status === 401) {
                link.style.backgroundColor = 'red'; // Highlight bằng màu đỏ
                console.log(`Error ${response.status}: ${link.href}`);
            }
        } catch (error) {
            console.error(`Error fetching ${link.href}:`, error);
        }
    }
}

checkLinks();// Your code here...
})();