"use strict";
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randomString = function* (n) {
    for (let i = 0; i < n; i++) {
        yield characters[~~(Math.random() * characters.length)];
    }
};

const str = [...randomString(10)].join('');
console.log(str);