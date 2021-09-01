console.log('lesson 2');
// just a plug
export default () => {};

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(n1: number) {
    return function (n2: number) {
        return n1 + n2
    }
}
console.log('task 1')
console.log(sum(1)(2))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
function makeCounter() {
    let res = 0
    return () => ++res
}
console.log('task 2')
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function makeCounter2(start: number) {
    let res = start
    return {
        increase: () => ++res,
        decrease: () => --res,
        reset: () => res = 0,
        set: (set: number) => res = set,
        res: () => res
    }
}
console.log('task 3')
const counter3 = makeCounter2(0);
console.log(counter3.increase()); // 1
console.log(counter3.decrease()); // 0
const counter4 = makeCounter2(1);
console.log(counter4.reset()); // 0
console.log(counter4.set(3)); // 3
console.log(counter4.increase()); // 4

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (n: number) => n
    let argsArr: number[] = []
    if (num > 1) return function helper(...argsNew: Array<number>) {
        argsArr = [...argsArr, ...argsNew]
        if (argsArr.length < num) return helper
        argsArr.length = num
        return argsArr.reduce( (acc, i) => acc + i )
    }
}
console.log('task 4')
console.log(superSum(0)) //0
// @ts-ignore
console.log(superSum(3)(2)(5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2)(5,3)) //10
// @ts-ignore
console.log(superSum(3)(2,5,3)) //10
// @ts-ignore
console.log(superSum(3)(2,5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2,5)(3,9))//10

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
console.log('task 6')
let array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

function flat(arr: any) {
    let res: any[] = []
    arr.forEach((el: any) => {
        if (Array.isArray(el)) {
            res = [...res, ...flat(el)]
        } else {
            res.push(el)
        }
    })
    return res
}
console.log(flat(array))

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

console.log('learnJS - РЕКУРСИЯ')
console.log('-1-')
function sumTo1(n: number): number {
    return n == 1 ? n : n + sumTo1(n - 1)
}
function sumTo2(n: number): number {
    let res = 0
    for(let i = 1; i <= n; i++) {
        res += i
    }
    return res
}
function sumTo3(n: number): number {
    return ((n + 1) / 2) * (n - 1 + 1)
}
console.log( sumTo1(100) ); // 5050
console.log( sumTo2(100) ); // 5050
console.log( sumTo3(100) ); // 5050

console.log('-2-')
function factorial(n: number): number {
    return n === 1 ? 1 : n * factorial(n - 1)
}
console.log(factorial(5))

console.log('-3-')
function fib(n: number): number {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}
console.log(fib(3)) //2
console.log(fib(7)) //13
console.log(fib(77))

console.log('-4-')
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList1(list: any): any {
    console.log(list.value)
    if (list.next) {
        printList1(list.next)
    }
}
function printList2(list: any): any {
    let nextObj = list
    while (nextObj) {
        console.log(nextObj.value)
        nextObj = nextObj.next
    }
}
console.log(printList1(list))
console.log(printList2(list))

console.log('-5-')
function printList3(list: any): any {
    if (list.next) {
        printList3(list.next)
    }
    console.log(list.value)
}
function printList4(list: any): any {
    let nextObj = list
    let arr = []
    while (nextObj) {
        arr.push(nextObj.value)
        nextObj = nextObj.next
    }
    arr.reverse().forEach(i => console.log(i))
}
console.log(printList3(list))
console.log(printList4(list))


console.log('learnJS - ЗАМЫКАНИЕ')
console.log('-1-')
function inBetween(a: number, b: number) {
    return (i: number) => i >= a && i <= b
}
function inArray(arr: number[]) {
    return (i: number) => arr.includes(i)
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

console.log('-2-')
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(filter: string) {
    return (a: any, b: any) => a[filter] > b[filter] ? 1 : -1
}

// @ts-ignore
users.sort(byField('name'))
users.forEach(user => console.log(user.name)); // Ann, John, Pete
// @ts-ignore
users.sort(byField('age'))
users.forEach(user => console.log(user.name)); // Pete, Ann, John

console.log('-3-')
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let res = i
        let shooter = function() { // функция shooter
            console.log( res ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
console.log(army[0]())
console.log(army[5]())