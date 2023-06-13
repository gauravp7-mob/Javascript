import Marks from "./Marks";
class Student{
    constructor(rollNo, firstName, lastName, marks){
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.marks = marks;
        this.totalMarks = 0;
        
    }
    calculateTotalMarks(){
        this.marks.forEach(marks =>{
            this.totalMarks += marks.marks;
        })
       
    }

    
}

let studentsData = [
    {
        rollNo : 1,
        firstName : "Gaurav",
        lastName : "Pandey",
        marks : [
            new Marks("Maths",70),
            new Marks("Science", 60),
            new Marks("History", 70)
        ]
    },{
        rollNo : 2,
        firstName : "Shardul",
        lastName : "Gautam",
        marks : [
            new Marks("Maths",80),
            new Marks("Science", 50),
            new Marks("History", 70)
        ]
    },{
        rollNo : 3,
        firstName : "Shivam",
        lastName : "Yadav",
        marks : [
            new Marks("Maths",60),
            new Marks("Science",90),
            new Marks("History", 60)
        ]
    }
]; 
const students = studentsData.map(data => {
    const student = new Student(data.rollNo, data.firstName, data.lastName, data.marks);
    return student;
});
students.forEach(student  =>{
    student.calculateTotalMarks();
    
})

const percentanges = students.map(student =>{
    const percentage = student.totalMarks/3;
    console.log(`Percentage of ${student.firstName} is ${percentage}%`)
    return percentage;
})

console.log(`Number of Students with distinction are ${(students.filter(student => student.totalMarks>=200)).length}`); 

function logStudentDetails(rollNo){
    const student = students.find(student => student.rollNo === rollNo);
    if (student) {
    console.log(`Roll No. of Student :${student.rollNo}
First Name of Student :${student.firstName} 
Last Name of Student :${student.lastName}
Total marks ${student.totalMarks}`);
    } else {
    console.log(`Student with roll number ${rollNo} not found.`);
    }
    }

logStudentDetails(1);