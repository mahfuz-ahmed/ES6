const person = {
  Name: "Mahfuz Ahmed",
  Age: 17,
  Phone: "01742162172",
  Add: "Tolarbag",
  friends: ["nafees", "sakib", "joy"],
};
//Destucturing Object
const { Name, Age, Phone, friends } = person; //calling person with new Object
// const name = person.Name;
// const friends = person.friends;

//Destucturing Array

const students = ["Mahfuz", "Ahmed", "Nafees", "Sakib", "Joy"];
const [newfriends, nextfriend, ...lastfriend] = students;

console.log(lastfriend);

// console.log(Name, Age, Phone);

//complex Object Destructuring

const complexObject = {
  name: "Mahfuz Ahmed",
  info: {
    Add: "Mirpur-1",
    Phone: "01742162172",
  },
};

const info = complexObject.info;
console.log(info);
