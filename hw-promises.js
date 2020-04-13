"use strict";

// 2. Промисы
// Дан массив промисов

// Необходимо найти сумму значений трёмя способами:
// а) с помощью Promise.all и reduce
// б) построить цепочку промисов с помощью reduce и вывести результат через последний then
// в) async / await

const promises = [
    new Promise((resolve) => {
        setTimeout(() => resolve(5), 2000);
    }),
    new Promise((resolve) => {
        setTimeout(() => resolve(10), 2000);
    }),
    Promise.resolve(9),
];

//a
const sum = arr => arr.reduce((acc, item) => acc + item, 0);

Promise.all(promises)
    .then(sum)
    .then(console.log)
    .catch(console.error);  // на случай ошибки

//б
promises.reduce((acc, promise) => {
    return acc + promise
        .then(() => promise)
        .then(console.log)
}, Promise.resolve());