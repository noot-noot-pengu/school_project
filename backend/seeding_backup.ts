import { Subject, Note } from './types'
import { ObjectId } from "mongodb";
import { Subject as SubjectModel } from "./models/subject"
import { Note as NodeModel } from "./models/note"
import { Student, Teacher } from './models/user';
import { Grade as GradeModel } from './models/grade';
import { StudentType, TeacherType, Grade } from './types';
import { connect } from 'mongoose';
import bcrypt from 'bcrypt';



const mongo_uri = 'mongodb://127.0.0.1:27017/school_proc'
connect(mongo_uri);



const grades: Grade[] = [
    {
        grade: 'master 1',
        speciality: 'stic',
        simester: '2',
        subjects: []
    },
    {
        grade: 'license 3',
        speciality: 'ti',
        simester: '1',
        subjects: []
    },

    {
        grade: 'license 2',
        speciality: 'mi',
        simester: '1',
        subjects: []
    }
]



const subjects: Subject[] = [
    {
        name: "interconnection gestion reseaux",
        group: "UEF1",
        //grade: new ObjectId(), // change with existing ones
        credits: 5,
        coefficient: 5,
        notes_coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "concuurence system information",
        group: "UEF1",
        //grade: new ObjectId(), // change with existing ones
        credits: 5,
        coefficient: 5,
        notes_coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "security reseau informatic",
        group: "UEF1",
        //grade: new ObjectId(), // change with existing ones
        credits: 3,
        coefficient: 3,
        notes_coefficient: {
            tp: 0,
            td: 0,
            exam: 1,
        }
    },
    {
        name: "archetecture application web",
        group: "UEF2",
        //grade: new ObjectId(), // change with existing ones
        credits: 3,
        coefficient: 3,
        notes_coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "model sim sys complex",
        group: "UEF2",
        //grade: new ObjectId(), // change with existing ones
        credits: 4,
        coefficient: 4,
        notes_coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "grilles calcule cloude",
        group: "UEF2",
        //grade: new ObjectId(), // change with existing ones
        credits: 4,
        coefficient: 4,
        notes_coefficient: {
            tp: 0.5,
            td: 0.5,
            exam: 2,
        }
    },
    {
        name: "anglais",
        group: "UEM1",
        //grade: new ObjectId(), // change with existing ones
        credits: 2,
        coefficient: 2,
        notes_coefficient: {
            tp: 0,
            td: 0,
            exam: 1,
        }
    },
    {
        name: "metho travail science",
        group: "UEM1",
        //grade: new ObjectId(), // change with existing ones
        credits: 2,
        coefficient: 2,
        notes_coefficient: {
            tp: 0,
            td: 0,
            exam: 1,
        }
    },
]
const notes: Note[] = [
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        grade: new ObjectId(), // change with existing ones
        year: 2022,
        notes:{
            tp: 15,
            td: 20,
            exam: 13,
        }
    },
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        grade: new ObjectId(), // change with existing ones
        year: 2022,
        notes:{
            tp: 3,
            td: 7,
            exam: 12,
        }
    },
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        grade: new ObjectId(), // change with existing ones
        year: 2022,
        notes:{
            tp: 5,
            td: 5,
            exam: 2,
        }
    },
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        grade: new ObjectId(), // change with existing ones
        year: 2022,
        notes:{
            tp: 7,
            td: 5,
            exam: 2,
        }
    },
    {
        student: new ObjectId(), // change with existing ones
        teacher: new ObjectId(), // change with existing ones
        subject: new ObjectId(), // change with existing ones
        grade: new ObjectId(), // change with existing ones
        year: 2022,
        notes:{
            tp: 9,
            td: 5,
            exam: 12,
        }
    },
]








const main = async () => {
    
    const teachers: TeacherType[] = [
        {
            username: "mezioud",
            email: "mezioud@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "bouzenada",
            email: "bouzenada@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "chickhi",
            email: "chickhi@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "gharzouli",
            email: "gharzouli@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "draa",
            email: "draa@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "labed",
            email: "labed@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "idk",
            email: "idk@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
        {
            username: "meriem",
            email: "meriem@gmail.com",
            password: await bcrypt.hash("password", 10),
            subjects: [],
            isAdmin: false,
            grades_admin: [],
        },
    ]
    
    const inserted_subjects = await SubjectModel.insertMany(subjects)
    for (let i = 0; i < inserted_subjects.length; i++) {
        grades[0].subjects.push(inserted_subjects[i].id)
        teachers[i].subjects.push(inserted_subjects[i].id)
    }
    const inserted_grades = await GradeModel.insertMany(grades)
    // this is here becuase of the needed await
    const students: StudentType[] = [
        {
            username: "ilyes",
            email: "ilyes@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: inserted_grades[0]._id,
            year: 2022,
            previous: [
                {
                    year: 2021,
                    grade: inserted_grades[1]._id
                }
            ]
        },
        {
            username: "ahmed",
            email: "ahmed@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: inserted_grades[0]._id,
            year: 2022,
            previous: [
                {
                    year: 2021,
                    grade: inserted_grades[1]._id
                }
            ]
        },
        {
            username: "ali",
            email: "ali@gmail.com",
            password: await bcrypt.hash("password", 10),
            grade: inserted_grades[1]._id,
            year: 2022,
            previous: [
                {
                    year: 2021,
                    grade: inserted_grades[2]._id
                }
            ]
        },
    ]

    //for (let i = 0; i < subjects.length; i++) {
    //    subjects[i].grade = inserted_grades[0]._id
    //}
    const inserted_students = await Student.insertMany(students)

    const inserted_teachers = await Teacher.insertMany(teachers)
    notes[0].student = inserted_students[0].id
    notes[0].teacher = inserted_teachers[0].id
    notes[0].subject = inserted_subjects[0].id
    notes[0].grade = inserted_grades[0].id
    notes[1].student = inserted_students[0].id
    notes[1].teacher = inserted_teachers[1].id
    notes[1].subject = inserted_subjects[1].id
    notes[1].grade = inserted_grades[0].id
    notes[2].student = inserted_students[0].id
    notes[2].teacher = inserted_teachers[2].id
    notes[2].subject = inserted_subjects[2].id
    notes[2].grade = inserted_grades[0].id
    notes[3].student = inserted_students[0].id
    notes[3].teacher = inserted_teachers[3].id
    notes[3].subject = inserted_subjects[3].id
    notes[3].grade = inserted_grades[0].id
    notes[4].student = inserted_students[0].id
    notes[4].teacher = inserted_teachers[4].id
    notes[4].subject = inserted_subjects[4].id
    notes[4].grade = inserted_grades[0].id
    await NodeModel.insertMany(notes)
    process.exit(0);
}


main()