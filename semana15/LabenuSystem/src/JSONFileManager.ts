import * as fs from 'fs'
import {Student} from "./Student";
import {Teacher, TEACHER_SPECIALTY} from "./Teacher";
import {Mission} from "./Mission";
import {NightMission} from "./NightMission";
import {FullTimeMission} from "./FullTimeMission";
import moment = require("moment");

export class JSONFileManager {

    fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName
    }

    writeStudentToFile(student: Student[]) {
        fs.writeFileSync(this.fileName, JSON.stringify(student, null, 2))
    }

    writeTeacherToFile(teacher: Teacher[]) {
        fs.writeFileSync(this.fileName, JSON.stringify(teacher, null, 2))
    }

    writeMissionToFile(mission: Mission[]) {
        fs.writeFileSync(this.fileName, JSON.stringify(mission, null, 2))
    }


    getStudentsFromFile(): Student[] {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());

        const students: Student[] = data.map((studentData: any) => {
            const student: Student = new Student(studentData.id, studentData.name, studentData.email, studentData.birthDate, studentData.hobbies)
            return student
        })
        return students
    }

    getTeachersFromFile(): Teacher[] {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());

        const teachers: Teacher[] = data.map((teacherData: any) => {
            const specialities: TEACHER_SPECIALTY[] = []
            if (teacherData.specialties !== null) {
                teacherData.specialties.forEach((speciality: TEACHER_SPECIALTY) => {
                    specialities.push(speciality)
                })
            }
            const teacher: Teacher = new Teacher(teacherData.id, teacherData.name, teacherData.email, specialities)
            return teacher
        })
        return teachers
    }

    getMissionFromFile(): Mission[] {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());

        const missions: Mission[] = data.map((missionData: any) => {
            let teachers: Teacher[] = []
            let students: Student[] = []
            if (missionData.teachers.length > 0)  {
                 missionData.teachers.forEach((teacherData: any) => {
                    const specialities: TEACHER_SPECIALTY[] = []
                    if (teacherData.specialties !== null) {
                        teacherData.specialties.forEach((speciality: TEACHER_SPECIALTY) => {
                            specialities.push(speciality)
                        })
                    }
                    const teacher: Teacher = new Teacher(teacherData.id, teacherData.name, teacherData.email, specialities)
                    teachers.push(teacher)
                })
            }
            if (missionData.students.length > 0)  {
                missionData.students.forEach((studentData: any) => {
                    const student: Student = new Student(studentData.id, studentData.name, studentData.email, studentData.birthDate, studentData.hobbies)
                    students.push(student)
                })
            }
            if (missionData.name.indexOf("-na-night") !== -1) {
                const mission: Mission = new NightMission(missionData.id, moment(missionData.startDate), moment(missionData.endDate), teachers, students)
                mission.setName(missionData.name)
                return mission
            } else {
                const mission: Mission = new FullTimeMission(missionData.id, moment(missionData.startDate), moment(missionData.endDate), teachers, students)
                mission.setName(missionData.name)
                return mission
            }
        })
        return missions
    }
}
