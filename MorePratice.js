let count = 0;

function sorted(array, count) {
  for (let prevEle = 0; prevEle < array.length - 1 ; prevEle++) {
    for (let nextEle = 0; nextEle < array.length - prevEle - 1; nextEle++) {
      if (array[nextEle] > array[nextEle + 1]) {
        [array[nextEle],array[nextEle + 1]] = [array[nextEle + 1], array[nextEle]];
        count++;
      }
    }
  }
  console.log(array, count);
}

let array = [2, 8, 5, 4];
n = array.length;

sorted(array, count);


// const obj = {
//   a: 1,
//   b: 2,
//   sum() {
//     return this.a + this.b;
//   }
// };
// const ans = obj.sum;
// console.log(ans());

// console.log(obj.sum());