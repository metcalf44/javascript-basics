const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }

};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object["age"];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  let person = people.find(obj => obj.name === name);
  return person

};

const findHondas = cars => {
  let honda = cars.filter(obj => obj.manufacturer === "Honda");
  return honda
};

const averageAge = people => {
  let age = 0;
  for (let i = 0; i < people.length; i += 1) {
    age += people[i].age;
  }
  return age / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
