export default function appendToEachArrayValue(array, appendString) {
  let n = [];
  for (let value of array) {
    let i = value;
    n.push(appendString + i);
  }

  return n;
}
