// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(function (student) {
//       console.log(this.title + ": " + student);
//     });
//   },
// };
// group.showList();

/**
 *  1. arrow fn
 **/

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach((student) => {
//       console.log(this.title + ": " + student);
//     });
//   },
// };
// group.showList();

/**
 * 2. self pattern
 **/
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     const self = this;
//     self.students.forEach((student) => {
//       console.log(self.title + ": " + student);
//     });
//   },
// };
// group.showList();

/**
 * 3.bind
 **/ 
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//       this.students.forEach(function (student) {
//         console.log(this.title + ": " + student);
//       }.bind(this));
//     },
//   };
//   group.showList();


//4. call + wrapper
// let group4 ={
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showlist:function(){
//             const res = (student) => function(student){
//                 console.log(this.title+": "+student);
//             }.call(this,student);
//         this.students.forEach(res);
//     }
// };
// group4.showlist();


// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(stu=>{
//         (function(student){
//             console.log(this.title + ": " + student);
//         }).call(this,stu);
//     });
//   }
// };
// group.showList();

/**
 * 5. apply + wrapper
 **/
let group5 ={
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showlist:function(){
        this.students.forEach((stu)=>{
            (function (student){
                console.log(this.title+": "+student);
            }).apply(this,[stu]);
        });
    }
};
group5.showlist();
