// https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference/

function sym() {
  let args = Array.from(arguments)

  var symDiff = function(arrayOne, arrayTwo) {
    let diff1 = arrayOne.filter((val) => !arrayTwo.includes(val))

    let diff2 = arrayTwo.filter((val) => !arrayOne.includes(val))

    return diff1.concat(diff2);
  }

  let diff = args.reduce(symDiff);

  return diff.filter((val, idx, arr) => idx === arr.indexOf(val)).sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);
