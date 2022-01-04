class Parent {
  constructor() {
    this.fatherName = "mafia";
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return this.name + " " + this.fatherName + ",";
  }
}
const son = new Child("Abrar");
const son2 = new Child("linkon");
console.log(son.getFullName(), son2.getFullName());
