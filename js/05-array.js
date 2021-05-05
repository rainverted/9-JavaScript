/*
Array

array metodai:
-.push()
*/

const marks = [10, 2, 8, 4]
const size = marks.length;

const firstMark = marks[0];
const second = marks[1];
const last = marks[size - 1]



console.log(marks);
console.log('pirmas:', firstMark);
console.log('antras:', second);
console.log('paskutinis:', last);



const abc = ['b', 'c']
console.log(abc);

abc.push('d');
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

abc.unshift('a');
console.log(abc);

