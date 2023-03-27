function personAndTeacher() {
  class Person {
   constructor(name, email){
        this.name = name,
        this.email = email

   }
}
class Teacher extends Person {
  constructor(name, email, subject){
    super(name, email);
    this.subject = subject
  }
}

return {
    Person,
    Teacher
}
} 
let f = personAndTeacher() 

 let foo = new f.Person('Ivan', 'ivan98@abv.bg');
 console.log(foo);
 let ro = new f.Teacher('Ivana', 'ivana98@abv.bg','biology')
console.log(ro);

