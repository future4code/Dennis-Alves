"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
class Mission {
    constructor(id, startDate, endDate, teachers = [], students = [], currentModule = undefined) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.name = "";
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    addTeacher(teacher) {
        if (this.teachers.find(oldTeacher => oldTeacher.id === teacher.id)) {
            console.log(`o professor ${teacher.name} já esta nessa turma!!`);
        }
        else {
            this.teachers.push(teacher);
        }
    }
    addStudent(student) {
        if (this.students.find(oldStudent => oldStudent.id === student.id)) {
            console.log(`o aluno ${student.name} já esta nessa turma!!`);
        }
        else {
            this.students.push(student);
        }
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map