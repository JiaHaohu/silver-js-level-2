export default function union (...arrays) {
  // TODO:
  // Create a function `union` which creates an array of unique values,
  // in order, from all given arrays.
  //
  // Please read the test to get a basic idea.
  // <-start-
  const set = new Set();
  for (const array of arrays) {
    addElement(set, array);
  };
  return Array.from(set);
  // --end-->
}

// TODO
// You can add additional method if you want
// <-start-
function addElement (set, array) {
  for (const element of array) {
    set.add(element);
  }
}
// --end-->
