export default function before (n, func) {
  // TODO:
  //   Creates a function that invokes func while it's called less than `n` times.
  //   Please read the test to get how it works.
  // <-start-
  while (n-1 > 0) {
    func();
    n--;
  }

  // --end-->
}
