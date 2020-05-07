"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_1 = require("./Teacher");
const Student_1 = require("./Student");
const FullTimeMission_1 = require("./FullTimeMission");
const NightMission_1 = require("./NightMission");
const JSONFileManager_1 = require("./JSONFileManager");
class Manager {
    constructor() {
        this.studentFileManager = new JSONFileManager_1.JSONFileManager("students.json");
        this.teacherFileManager = new JSONFileManager_1.JSONFileManager("teachers.json");
        this.missionFileManager = new JSONFileManager_1.JSONFileManager("missions.json");
        this.students = this.studentFileManager.getStudentsFromFile();
        this.teachers = this.teacherFileManager.getTeachersFromFile();
        this.missions = this.missionFileManager.getMissionFromFile();
    }
    createStudent(name, email, birthday, hobbies) {
        if (this.students.find(student => student.name === name)) {
            console.log(`o aluno ${name} já consta no sistema`);
        }
        else {
            const id = this.makeId(6);
            const newStudent = new Student_1.Student(id, name, email, birthday, hobbies);
            this.students.push(newStudent);
            this.studentFileManager.writeStudentToFile(this.students);
        }
    }
    createTeacher(name, email, specialties) {
        if (this.teachers.find(teacher => teacher.name === name)) {
            console.log(`o professor ${name} já consta no sistema`);
        }
        else {
            const id = this.makeId(6);
            const newTeacher = new Teacher_1.Teacher(id, name, email, specialties);
            this.teachers.push(newTeacher);
            this.teacherFileManager.writeTeacherToFile(this.teachers);
        }
    }
    createMission(name, startDate, endDate, type) {
        if (this.missions.find(mission => mission.getName() === name)) {
            console.log(`a turma ${name} já consta no sistema`);
        }
        else {
            const id = this.makeId(6);
            if (type.toLowerCase() === "fulltime") {
                const newFulltimeMission = new FullTimeMission_1.FullTimeMission(id, startDate, endDate);
                newFulltimeMission.setName(name);
                this.missions.push(newFulltimeMission);
                this.missionFileManager.writeMissionToFile(this.missions);
            }
            if (type.toLowerCase() === "nighttime") {
                const newNightTimeMission = new NightMission_1.NightMission(id, startDate, endDate);
                newNightTimeMission.setName(name);
                this.missions.push(newNightTimeMission);
                this.missionFileManager.writeMissionToFile(this.missions);
            }
        }
    }
    addStudentToMission(missionId, studentId) {
        if (this.missions.filter(mission => mission.getId() === missionId)) {
            if (this.students.filter(student => student.id === studentId)) {
                const newStudent = this.students.find(student => student.id === studentId);
                this.missions.forEach(mission => {
                    if (mission.getId() === missionId) {
                        mission.addStudent(newStudent);
                    }
                });
                this.missionFileManager.writeMissionToFile(this.missions);
            }
            else {
                console.log("o id do aluno não existe!");
            }
        }
        else {
            console.log("o id da turma não existe!");
        }
    }
    addTeacherToMission(missionId, teacherId) {
        if (this.missions.filter(mission => mission.getId() === missionId)) {
            if (this.teachers.filter(student => student.id === teacherId)) {
                const newTeacher = this.teachers.find(teacher => teacher.id === teacherId);
                this.missions.forEach(mission => {
                    if (mission.getId() === missionId) {
                        mission.addTeacher(newTeacher);
                    }
                });
                this.missionFileManager.writeMissionToFile(this.missions);
            }
            else {
                console.log("o id do professor não existe!");
            }
        }
        else {
            console.log("o id da turma não existe!");
        }
    }
    getStudentAge(id) {
        let msg = "o id digitado não existe!";
        this.students.filter((student) => {
            if (student.id === id) {
                msg = `a idade do estudante ${student.name} é ${student.getAge()}`;
            }
        });
        console.log(msg);
    }
    makeId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map