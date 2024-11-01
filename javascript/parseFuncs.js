/*
write two functions:
1. a parse functions
2. a common collections function

P1
the parse function receives an array of strings,
your goal is to break out the data in the strings into a data structure
and return that data
you will use this data in the second function
example:
let input = [
  'tom,1,cat,2,dog,1,house',
  'jean,1,dog,2,house,1,car',
  'john,1,cat,1,house,2,car'
];

P2
the common collections function should find common collections in the data and names arguments that are passed in
and return those common similaries otherwise return an empty object
example:
-> P2(input, [tom, jean]) -> 1 dog, 1 house
*/

const parse = (arrayData) => {
    let personMap = new Map();
  
    for (let item of arrayData) {
      let elements = item.split(',');
      let person = elements[0];
      personMap.set(person, new Map());
      for (let i = 1; i < elements.length; i+=2) {
        let collections = personMap.get(person);
        collections.set(elements[i+1], Number(elements[i]));
      }
    }
  
    return personMap;
  };
  
  const findCommonCollections = (data, names) => {
    let commonCollections = new Map();
  
    let firstPerson = names[0];
    if (data.has(firstPerson)) {
      const firstPersonCollections = data.get(firstPerson);
      for (let [collection, value] of firstPersonCollections.entries()) {
        commonCollections.set(collection, value);
      }
    }
  
    for (let i = 1; i < names.length; i++) {
      if (data.has(names[i])) {
        const personCollections = data.get(names[i]);
        for (let [collection, value] of commonCollections.entries()) {
          if (!personCollections.has(collection)) {
            commonCollections.delete(collection);
          } else {
            let count = Math.min(value, personCollections.get(collection))
            commonCollections.set(collection, count);
          }
        }
      }
    }
  
    return commonCollections;
  };
  
  let input1 = [
    'tom,1,cat,2,dog,1,house',
    'jean,1,dog,2,house,1,car',
    'john,1,cat,1,house,2,car'
  ];
  let parseData = parse(input1);
  let names1 = ['tom', 'jean'];
  let names2 = ['tom', 'jean', 'john'];
  console.log(findCommonCollections(parseData, names1)); // -> Map(2) { 'dog' => 1, 'house' => 1 }
  console.log(findCommonCollections(parseData, names2)); // -> Map(1) { 'house' => 1 }