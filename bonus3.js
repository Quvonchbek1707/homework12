 const jsonData1 = {
    user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
};

const jsonData2 = {
  user: {
  name: "Ali",
  age: 30,
      address: {
        city: "Tashkent",
        zip: "200000"
      }
    },
  active: true
};

function findCommonPairs(obj1, obj2) {
    const common = {};
    for (const key in obj1) {
        if(typeof obj1[key] === 'object' && obj1[key] !== null && obj2[key] !== null) {
            const nestedCommon = findCommonPairs(obj1[key], obj2[key]);
            if(Object.keys(nestedCommon).length > 0) {
                common[key] = nestedCommon;
            }
        }
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            common[key] = obj1[key];
        }
    }
    return common;
}

console.log(findCommonPairs(jsonData1, jsonData2));