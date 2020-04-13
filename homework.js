"use strict";

class User {
    constructor(userName, birthday) {
        this.userName = userName;
        this.birthday = birthday;
    }

    get age() {
        let now = new Date(); //Текущая дата
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
        let birthdayInThisYear = new Date(today.getFullYear(), this.birthday.getMonth(), this.birthday.getDate()); //ДР в текущем году
        let age; //Возраст

//Возраст = текущий год - год рождения
        age = today.getFullYear() - this.birthday.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
        if (today < birthdayInThisYear) {
            age = age - 1;
        }

        return console.log(age);
    }
}

const birthday = new Date(2000, 5, 11);
const john = new User("John Doe", birthday);
john.age;