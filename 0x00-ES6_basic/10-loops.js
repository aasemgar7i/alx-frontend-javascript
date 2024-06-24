export default function appendToEachArrayValue(array, appendString) {
  let n = [];
  for (let value of array) {
    n.push(appendString + value);
  }

  return n;
}
