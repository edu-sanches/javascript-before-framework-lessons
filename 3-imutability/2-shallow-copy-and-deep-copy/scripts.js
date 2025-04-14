// Shallow Copy (cópia superficial): não pega os itens aninhados

const htmlCourse = {
    course: "HTML",
    students: [
        {
            name: "Eduardo",
            email: "eduardo@email.com"
        }
    ]
}

/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
}
*/

// Vai modificar o htmlCourse também, pois students é uma referência e não cópia
// jsCourse.students.push({ name: "Leane", email: "leane@email.com" })

// Deep Copy: cópia profunda

// Opção 1
// const jsCourse = {
//     ...htmlCourse,
//     students: [...htmlCourse.students, { name: "Leane", email: "leane@email.com" }]
// }

// jsCourse.course = "Javascript"
// jsCourse.students.push({ name: "Joana", email: "joana@email.com" })

// Opção 2
const jsCourse = {
    ...htmlCourse
}

jsCourse.course = "Javascript"

const jsCourseStudents = [
    {
        name: "Eduardo",
        email: "eduardo@email.com",
        course: "HTML"
    },
    {
        name: "Leane",
        email: "leane@email.com",
        course: "Javascript"
    },
    {
        name: "Joana",
        email: "joana@email.com",
        course: "Javascript"
    },
    {
        name: "Leonardo",
        email: "leonardo@email.com",
        course: "Javascript"
    },
]

const studentsArray = jsCourseStudents.filter(
    (jsStudent) => jsStudent.name !== "Eduardo" && jsStudent.course === "Javascript"
)

studentsArray.map((studentCourse) => delete(studentCourse.course))

jsCourse.students = [...htmlCourse.students, ...studentsArray]

console.log(htmlCourse, jsCourse)