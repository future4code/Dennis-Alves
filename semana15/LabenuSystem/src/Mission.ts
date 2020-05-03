import * as moment from "moment"
moment.locale("pt-br")
import {Student} from "./Student";
import {Teacher} from "./Teacher";

export abstract class Mission {
  private name: string = "";

  constructor(
    private id: string,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule: number = undefined
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public addTeacher(teacher: Teacher) {
    if(this.teachers.find(oldTeacher => oldTeacher.id === teacher.id)){
      console.log(`o professor ${teacher.name} já esta nessa turma!!`)
    }
    else{
      this.teachers.push(teacher);
    }

  }

  public addStudent(student: Student) {
    if(this.students.find(oldStudent => oldStudent.id === student.id)){
      console.log(`o aluno ${student.name} já esta nessa turma!!`)
    }
    else {
      this.students.push(student);
    }
  }

  public setName(name: string) {
    this.name = name;
  }
}