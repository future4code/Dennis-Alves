"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = require("./Manager");
const Teacher_1 = require("./Teacher");
const moment = require("moment");
moment.locale("pt-br");
const manager = new Manager_1.Manager();
manager.createStudent("teste1", "teste1", "2000-01-01", ["hobbieTeste1", "hobbieTeste2"]);
manager.createStudent("teste2", "teste2", "2001-01-01", ["hobbieTeste1", "hobbieTeste2"]);
manager.createStudent("teste3", "teste3", "2002-01-01", ["hobbieTeste1", "hobbieTeste2"]);
manager.createTeacher("testeTeacher1", "testeTeacher1", [Teacher_1.TEACHER_SPECIALTY.OOP, Teacher_1.TEACHER_SPECIALTY.BACKEND]);
manager.createTeacher("testeTeacher2", "testeTeacher2", [Teacher_1.TEACHER_SPECIALTY.REACT, Teacher_1.TEACHER_SPECIALTY.BACKEND]);
manager.createTeacher("testeTeacher3", "testeTeacher3", [Teacher_1.TEACHER_SPECIALTY.CSS, Teacher_1.TEACHER_SPECIALTY.BACKEND]);
manager.createTeacher("testeTeacher4", "testeTeacher4", [Teacher_1.TEACHER_SPECIALTY.TESTES, Teacher_1.TEACHER_SPECIALTY.BACKEND]);
manager.createMission("testeMission1", moment("2020-01-01"), moment("2020-07-01"), "fulltime");
manager.createMission("testeMission2-na-night", moment("2020-02-02"), moment("2020-07-02"), "nighttime");
manager.addStudentToMission("8oQ6Dz", "zjYtRT");
manager.addTeacherToMission("8oQ6Dz", "qLsvAp");
manager.addStudentToMission("cKEzWs", "adcK6l");
manager.addTeacherToMission("cKEzWs", "E08ffx");
//# sourceMappingURL=index.js.map