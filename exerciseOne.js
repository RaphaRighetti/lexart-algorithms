// Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]

const arr = [ 'a', 10, 'b', 'hola', 122, 15];

const getLetters = (arr) => {
  const regex = /^([^0-9]*)$/;
  const newArr= arr.filter((e) => typeof e === 'string' && regex.test(e));
  return newArr;
};

const getNums = (arr) => {
  const newArr = arr.filter((e) => typeof e === 'number' || !isNaN(Number(e)));
  return newArr;
};

const getHighestNum = (arr) => {
  const newArr = getNums(arr);
  const highestNum = Math.max(...newArr);
  return highestNum;
};

console.log(getLetters(arr));
console.log(getNums(arr));
console.log(getHighestNum(arr));