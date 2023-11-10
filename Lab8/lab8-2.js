function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades=[];
}

Student.prototype.getFullName= function(){
    return this.firstName+" " +this.lastName;
}

// I am using this just for learning purpose
Student.getStudentFullName = function (student) {
    return `${student.firstName} ${student.lastName}`;
  };

Student.prototype.inputNewgrade=function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage= function(){
    const sum = this.grades.reduce((acc,grade)=>acc+grade,0 );
    const avg =sum/this.grades.length ;
    return avg;
}


const std1 = new Student("Hugh","Jackman");
std1.inputNewgrade(80);
std1.inputNewgrade(80);
std1.inputNewgrade(80);
std1.inputNewgrade(80);
std1.inputNewgrade(80);
std1.inputNewgrade(80);
console.log(`Average Grade of ${Student.getStudentFullName(std1)}: `,std1.computeAverage());

const std2 = new Student("Peter","Parker");
std2.inputNewgrade(90);
std2.inputNewgrade(80);
std2.inputNewgrade(89);
std2.inputNewgrade(95);
console.log(`Average Grade of ${std2.getFullName()}: ${std2.computeAverage()}`);

const std3 = new Student("Ariana","Grande");
std3.inputNewgrade(90);
std3.inputNewgrade(96);
std3.inputNewgrade(94);
std3.inputNewgrade(85);
console.log(`Average Grade of ${std3.getFullName()}: ${std3.computeAverage()}`);
