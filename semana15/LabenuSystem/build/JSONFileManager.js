"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
const NightMission_1 = require("./NightMission");
const FullTimeMission_1 = require("./FullTimeMission");
const moment = require("moment");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeStudentToFile(student) {
        fs.writeFileSync(this.fileName, JSON.stringify(student, null, 2));
    }
    writeTeacherToFile(teacher) {
        fs.writeFileSync(this.fileName, JSON.stringify(teacher, null, 2));
    }
    writeMissionToFile(mission) {
        fs.writeFileSync(this.fileName, JSON.stringify(mission, null, 2));
    }
    getStudentsFromFile() {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());
        const students = data.map((studentData) => {
            const student = new Student_1.Student(studentData.id, studentData.name, studentData.email, studentData.birthDate, studentData.hobbies);
            return student;
        });
        return students;
    }
    getTeachersFromFile() {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());
        const teachers = data.map((teacherData) => {
            const specialities = [];
            if (teacherData.specialties !== null) {
                teacherData.specialties.forEach((speciality) => {
                    specialities.push(speciality);
                });
            }
            const teacher = new Teacher_1.Teacher(teacherData.id, teacherData.name, teacherData.email, specialities);
            return teacher;
        });
        return teachers;
    }
    getMissionFromFile() {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());
        const missions = data.map((missionData) => {
            let teachers = [];
            let students = [];
            if (missionData.teachers.length > 0) {
                missionData.teachers.forEach((teacherData) => {
                    const specialities = [];
                    if (teacherData.specialties !== null) {
                        teacherData.specialties.forEach((speciality) => {
                            specialities.push(speciality);
                        });
                    }
                    const teacher = new Teacher_1.Teacher(teacherData.id, teacherData.name, teacherData.email, specialities);
                    teachers.push(teacher);
                });
            }
            if (missionData.students.length > 0) {
                missionData.students.forEach((studentData) => {
                    const student = new Student_1.Student(studentData.id, studentData.name, studentData.email, studentData.birthDate, studentData.hobbies);
                    students.push(student);
                });
            }
            if (missionData.name.indexOf("-na-night") !== -1) {
                const mission = new NightMission_1.NightMission(missionData.id, moment(missionData.startDate), moment(missionData.endDate), teachers, students);
                mission.setName(missionData.name);
                return mission;
            }
            else {
                const mission = new FullTimeMission_1.FullTimeMission(missionData.id, moment(missionData.startDate), moment(missionData.endDate), teachers, students);
                mission.setName(missionData.name);
                return mission;
            }
        });
        return missions;
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map