export default function maxMap (array, mappingFunc) {
  // TODO:
  //   This function will find the maximum mapped value of `array`. The mapped value
  //   for each item should be calculated using `mappingFunc`.
  //
  //   Please read the test to get a basic idea.
  // <-start-
  return array.map(mappingFunc).reduce((x, y) => { return Math.max(x, y); });
  // --end-->
}

// TODO
// You can add additional method if you want
// <-start-

// --end-->
