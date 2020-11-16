//!  Ways to reverse an array:

//*Method number 1:
const array1 = [1,2,3,4,5,6,7];
const array2 = [];
function reverseArray (oldArray, newArray) {
    oldArray.forEach(function(item, index) {
newArray.push(oldArray[oldArray.length-1-index]);
    });
console.log(oldArray);
console.log(newArray,);
}


reverseArray(array1,array2);

//?----------------------------------------------------


//*Method number 2:
let b = ['V','l','a','d']

function reverseArray(a) {
    res = [];
    a.forEach( element =>{
        res.unshift(element);
    });
    return res;
}

console.log(reverseArray(b));


//?----------------------------------------------------

//*Method number 3:
let b = [1,2,3,4,5,6,7];

function reverseArray(a) {
    res = [];
    for (let i = a.length - 1; i >= 0; i--) {
        res.push(a[i]);
 }   
return res;
}

console.log(reverseArray(b));


//?--------------------------------------------------------




//!Ways to clone an array:


//*Method number 1:
let a = [1, 2, 3, 'a', 'b', 'c']        //! это медленая операция 
let b = JSON.parse(JSON.stringify(a));  //!'этот способ иногда ломает обьекты
console.log(b); //* Этот способ работает правильно и с обычными массисами и с вложенными масивами 

//?----------------------------------------------------


//*Method number 2:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = [...a]  //спред оператор //!есть проблема с вложенными массивами (через вложеные массивы делается ссылание и это меняет старый массив )

console.log(b)

//?---------------------------------------------------

//*Method number 3:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.slice();
console.log(b)
//!тоже есть проблема если будете клонировать вложеными массивы 

//?---------------------------------------------------

//*Method number 4:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = [];            

for (let i = 0; i < a.length; i++) {
    b[i] = a[i]
}
console.log(b)
//!тоже есть проблема если будете клонировать вложеными массивы 

//?---------------------------------------------------

//*Method number 5:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.map(x => x);   
console.log(b)
//!тоже есть проблема вложеными 


//?----------------------------------------------------

//*Method number 6:
let a = [1, 2, 3, 'a', 'b', 'c'] 
let b = a.filter(() => true);
console.log(b)
//!тоже есть проблема  вложеными 

//?----------------------------------------------------


//!Ways to copy or clone an object.

//*Method number 2:



//?----------------------------------------------------

//*Method number 2:
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

let objCopy = {};
for (let key in person) {
    objCopy[key] = person[key];    //!есть проблема с вложенными обьектами
    console.log(key + ": " + objCopy[key]);
}
//! работает только с преметивными обьектами

//?----------------------------------------------------



