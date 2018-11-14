'use strict';
/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/

class StudentClass {
    
    learn (){
        console.log('Peti: Ertem, tanarneni!');
    }

    question (teacher: TeacherClass): any {
        console.log('Peti: Azt szeretnem kerdezni hogy')
        teacher.answer();
    }
}

class TeacherClass {

    answer () {
        console.log('Erika neni: Ne okoskodj Petike');
    }

    teach(student: StudentClass): any {
        console.log('Erika neni: most megmondom a tutit');
        student.learn();
    }
}

let Peti = new StudentClass;
let Erikaneni = new TeacherClass;

Peti.question(Erikaneni);