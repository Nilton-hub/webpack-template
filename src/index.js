const name = 'Nilton',
  obj = { name };

function functionName(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const newObj = functionName({ a: 1}, obj);
console.log(newObj);
