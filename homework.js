"use strict";

// 1. Классы
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

    get name() {
        return this.userName;
    }
}

class Admin extends User {
    constructor(...args) {
        super(...args);
    }

    kill(obj) {
        if (obj instanceof User && obj !== Admin) {
            return console.log(`Пользователь ${super.name} убит`);
        } else {
            throw new TypeError("Необходимо передать обьект");
        }
    }
}

const birthday = new Date(2000, 5, 11);
const john = new User("John Doe", birthday);
john.age;
const admin = new Admin();
admin.kill(admin);