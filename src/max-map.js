export default function maxMap (array, mappingFunc) {
  // TODO:
  //   This function will find the maximum mapped value of `array`. The mapped value
  //   for each item should be calculated using `mappingFunc`.
  //
  //   Please read the test to get a basic idea.
  // <-start-

  if (isEmpty(array)) {
    return undefined;
  }

  if (array == null || array === undefined) {
    return undefined;
  }

  array = array.map(mappingFunc);

  if (checkMapReult(array)) {
    return undefined;
  }

  return array.reduce((x, y) => { const max = x > y ? x : y; return max; });
  // --end-->
}

// TODO
// You can add additional method if you want
// <-start-
function isEmpty (val) {
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
}

function checkMapReult (array) {
  return array.every(x => x === null || x === undefined || (typeof x !== 'string' && isNaN(x)));
}

// --end-->
