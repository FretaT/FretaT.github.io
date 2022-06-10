let convertObjectToArray = (obj) => {
  let arr = [];

  for (let x in obj) {
    if (Array.isArray(obj[x])) {
      arr.push(x.concat(...obj[x]));
    } else if (typeof obj[x] == "object") {
      for (let y in obj[x]) {
        arr.push(x.concat(y.concat(obj[x][y])));
      }
    } else arr.push(x.concat(obj[x]));
  }

  return arr;
};

let getObjectsByKey = (arrObj) => {
  let arr = [];

  for (let obj of arrObj) {
    arr.push({ a: obj["a"] });
  }

  return arr;
};

let findOldestPerson = (arrObj) => {
  let person = arrObj.reduce((x, y) => (x.age > y.age ? x : y));

  return person.name;
};

let findYoungestPerson = (arrObj) => {
  let person = arrObj.reduce((x, y) => (x.age < y.age ? x : y));

  return person.name;
};

let filterPersons = (arrObj) => {
  let person = arrObj.filter((x) => x.age >= 15 && x.age <= 17);

  return person;
};

module.exports = {
  convertObjectToArray,
  getObjectsByKey,
  findOldestPerson,
  findYoungestPerson,
  filterPersons,
};
