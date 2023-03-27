function toStringExtension() {
    class Person {
     constructor(name, email){
          this.name = name,
          this.email = email
  
     }
    toString(){
        return `Person (name: ${this.name}, email: ${this.email})`
    }
  }
  class Teacher extends Person {
    constructor(name, email, subject){
      super(name, email);
      this.subject = subject
    }
    toString(){
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
    }
  }
  class Student extends Person {
    constructor(name, email, course){
        super(name, email);
        this.course = course;
    }
    toString(){
        return `Person (name: ${this.name}, email: ${this.email})  course: ${this.course})`
    }
  }
  
  return {
      Person,
      Teacher,
      Student
  }
  } 

  let f = toStringExtension() 

 let foo = new f.Person('Ivan', 'ivan98@abv.bg');
 console.log(foo.toString());
 let ro = new f.Teacher('Ivana', 'ivana98@abv.bg','biology')
console.log(ro.toString());
let st = new f.Student('Maria','mari99@abv.bg','informatic','4');
console.log(st.toString());