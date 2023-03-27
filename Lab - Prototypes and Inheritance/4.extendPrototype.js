function Person( name, email) {
    
  
          this.name = name,
          this.email = email
   }
Person.prototype.toString = function() {
    return `${this.name} is a ${this.age} years old.`
    
}

function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'human';
    classToExtend.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${classToExtend.prototype.toString()}`;
    }
    
}
const person = new Person('Peter', '26');
console.log(person);
console.log(person.species);
extendProrotype(Person);
console.log(person);
console.log(person.species);
