"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
class Student {
    constructor(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getAge() {
        return moment().diff(this.birthDate, "years");
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map