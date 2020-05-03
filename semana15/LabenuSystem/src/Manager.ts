import {Teacher, TEACHER_SPECIALTY} from "./Teacher";
import {Student} from "./Student";
import {FullTimeMission} from "./FullTimeMission";
import {NightMission} from "./NightMission";
import * as moment from "moment";
import {JSONFileManager} from "./JSONFileManager";
import {Mission} from "./Mission";

export class Manager {
    teachers: Teacher[];
    students: Student[];
    missions: Mission[];
    studentFileManager: JSONFileManager = new JSONFileManager("students.json")
    teacherFileManager: JSONFileManager = new JSONFileManager("teachers.json")
    missionFileManager: JSONFileManager = new JSONFileManager("missions.json")

    constructor() {
        this.students = this.studentFileManager.getStudentsFromFile()
        this.teachers = this.teacherFileManager.getTeachersFromFile()
        this.missions = this.missionFileManager.getMissionFromFile()
    }

    public createStudent(name: string, email: string, birthday: string, hobbies: string[],): void {
        if (this.students.find(student => student.name === name)) {
            console.log(`o aluno ${name} já consta no sistema`)
        } else {
            const id = this.makeId(6)
            const newStudent = new Student(id, name, email, birthday, hobbies)
            this.students.push(newStudent)
            this.studentFileManager.writeStudentToFile(this.students)
        }

    }

    public createTeacher(name: string, email: string, specialties: TEACHER_SPECIALTY[]): void {
        if (this.teachers.find(teacher => teacher.name === name)) {
            console.log(`o professor ${name} já consta no sistema`)
        } else {
            const id = this.makeId(6)
            const newTeacher = new Teacher(id, name, email, specialties)
            this.teachers.push(newTeacher)
            this.teacherFileManager.writeTeacherToFile(this.teachers)
        }
    }

    public createMission(name: string, startDate: moment.Moment, endDate: moment.Moment, type: string): void {
        if (this.missions.find(mission => mission.getName() === name)) {
            console.log(`a turma ${name} já consta no sistema`)
        } else {
            const id = this.makeId(6)
            if (type.toLowerCase() === "fulltime") {
                const newFulltimeMission = new FullTimeMission(id, startDate, endDate)
                newFulltimeMission.setName(name)
                this.missions.push(newFulltimeMission)
                this.missionFileManager.writeMissionToFile(this.missions)
            }
            if (type.toLowerCase() === "nighttime") {
                const newNightTimeMission = new NightMission(id, startDate, endDate)
                newNightTimeMission.setName(name)
                this.missions.push(newNightTimeMission)
                this.missionFileManager.writeMissionToFile(this.missions)
            }
        }

    }

    public addStudentToMission(missionId: string, studentId: string): void {
        if (this.missions.filter(mission => mission.getId() === missionId)) {
            if (this.students.filter(student => student.id === studentId)) {
                const newStudent = this.students.find(student => student.id === studentId)
                this.missions.forEach(mission => {
                    if (mission.getId() === missionId) {
                        mission.addStudent(newStudent)
                    }
                })
                this.missionFileManager.writeMissionToFile(this.missions)
            } else {
                console.log("o id do aluno não existe!")
            }
        } else {
            console.log("o id da turma não existe!")
        }
    }

    public addTeacherToMission(missionId: string, teacherId: string): void {
        if (this.missions.filter(mission => mission.getId() === missionId)) {
            if (this.teachers.filter(student => student.id === teacherId)) {
                const newTeacher = this.teachers.find(teacher => teacher.id === teacherId)
                this.missions.forEach(mission => {
                    if (mission.getId() === missionId) {
                        mission.addTeacher(newTeacher)
                    }
                })
                this.missionFileManager.writeMissionToFile(this.missions)
            } else {
                console.log("o id do professor não existe!")
            }
        } else {
            console.log("o id da turma não existe!")
        }
    }

    public getStudentAge(id: string): void {
        let msg = "o id digitado não existe!"
        this.students.filter((student) => {
            if (student.id === id) {
                msg = `a idade do estudante ${student.name} é ${student.getAge()}`
            }
        })
        console.log(msg)

    }

    private makeId(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}

